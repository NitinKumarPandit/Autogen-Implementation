
from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.responses import HTMLResponse
from typing import Dict, List, Any

from autogen_agentchat.messages import HandoffMessage, TextMessage, ToolCallResultMessage, ToolCallMessage
from autogen_agentchat.teams import Swarm
from agents.company_profile_agent import company_profile_agent
import json

app = FastAPI()


@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    
    # Create a new team instance for this connection
    local_team = company_profile_agent
    
    # Track the last agent that made a handoff to user
    last_handoff_source = None
    
    try:
        while True:
            # Receive message from WebSocket
            data = await websocket.receive_text()
            print("Received data: ", data)
            message_data = json.loads(data)
            
            if last_handoff_source:
                # If we're waiting for a user response, create a handoff message
                task = HandoffMessage(
                    source="user",
                    target=last_handoff_source,
                    content=message_data.get("content")
                )
                last_handoff_source = None  # Reset the handoff source
            else:
                # Otherwise, treat it as a new task
                task = message_data.get("content")
                    

            async for message in local_team.run_stream(task=task):
                print(f"Message: {message}\n\n")
                if isinstance(message, HandoffMessage) and message.target == "user":
                    last_handoff_source = message.source  # Store the source of handoff
                    
                    # await websocket.send_json({
                    #     "type": "agent_message",
                    #     "source": message.source,
                    #     "content": message.content,
                    #     "waiting_for_input": True
                    # })
                elif isinstance(message, TextMessage) and not isinstance(message,ToolCallResultMessage) and message.source=="planner":
                     await websocket.send_json({
                        "type": "stream",
                        "source": message.source,
                        "content": message.content,
                    })
                     
                elif isinstance(message, ToolCallMessage):
                    tool_calls = {}

                    if isinstance(message.content, list):
                        for result in message.content:
                            call_id = getattr(result, "id", "unknown")
                            function_name = (
                                result.to_dict() if hasattr(result, "to_dict") else result.name
                            )
                            tool_calls[call_id] = function_name

                    for call_id, function_name in tool_calls.items():
                        if isinstance(function_name, dict) and "name" in function_name:
                            cleaned_content = function_name["name"]
                        else:
                            cleaned_content = str(function_name)
                    if not cleaned_content.startswith("transfer"):
                        await websocket.send_json({
                                "type": "tool_call",
                                "source": message.source,
                                "call_id": call_id,
                                "name": cleaned_content,
                            })

                elif isinstance(message, ToolCallResultMessage):
                    tool_results = {}

                    if isinstance(message.content, list):
                        for result in message.content:
                            call_id = getattr(result, "call_id", "unknown")
                            result_content = (
                                result.to_dict() if hasattr(result, "to_dict") else result.content
                            )
                            tool_results[call_id] = result_content

                    for call_id, result_content in tool_results.items():
                        if isinstance(result_content, dict) and "content" in result_content:
                            cleaned_content = result_content["content"]
                        else:
                            cleaned_content = str(result_content)

                        if not cleaned_content.startswith("Transferred to"):
                            await websocket.send_json({
                                "type": "tool_result",
                                "source": message.source,
                                "call_id": call_id,
                                "content": cleaned_content,
                            })

                

    except WebSocketDisconnect:
        print("WebSocket connection closed.")


