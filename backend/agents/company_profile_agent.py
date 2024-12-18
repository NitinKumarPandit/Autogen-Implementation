from autogen_agentchat.agents import AssistantAgent, UserProxyAgent
from autogen_agentchat.teams import Swarm
from autogen_ext.models.openai import OpenAIChatCompletionClient
from autogen_agentchat.conditions import HandoffTermination, TextMentionTermination
from tools.search_web_tool import search_web_tool
from tools.structure_summarized_company_website import structure_summarized_company_website
from tools.structure_personas import structure_personas
model_client = OpenAIChatCompletionClient(
    model="gpt-4o-mini",
    api_key="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"
)
website_summarizer_agent=AssistantAgent(
            "WebsiteSummarizerAgent",
            description="A web scrapper and summarizer agent.",
            tools=[search_web_tool, structure_summarized_company_website],
            model_client=model_client,
            handoffs=["planner"],
            system_message="""
            You are an expert web scraper and content summarizer. Extract key information from company websites and provide detailed summary. 
            Always handoff back to planner when analysis is complete or if you require any information.
            """,
        )
planner = AssistantAgent(
    "planner",
    model_client=model_client,
    handoffs=["personaGenerator","WebsiteSummarizerAgent", "user"],
    system_message = """
You are a highly organized planning agent specializing in creating company profiles that include the company overview/description and the target personas/audiences. 
- Develop a clear, step-by-step plan** for generating the company profile based on the provided information and the capabilities of the available agents.
- Coordinate the company profile generation by delegating tasks to specialized agents:
    - WebsiteSummarizerAgent**: Use this agent for scraping and summarizing company website data using the provided website URL.
    - PersonaGenerator**: Use this agent to generate target personas/audiences based on the summarized website data.
    - User: Request any additional information required directly from the user.
- Communicate this plan explicitly to ensure transparency and alignment.
- Always provide the plan overview to the userfirst. Share the plan explicitly before initiating any handoffs.
- Handoff tasks to only one agent at a time.
- Clearly state the next action and specify which agent is being assigned the task.
- When all steps are complete, the company profile is ready and the user confirms the data, use the command `TERMINATE`.

Your primary focus is to ensure that the process is systematic, efficient, and fully documented at every step.
"""

)


personaGenerator = AssistantAgent(
     "personaGenerator", model_client=model_client, handoffs=["planner"],
     system_message="""
            You are an expert at identifying target customers/audiences for companies using their website data. Perform the following tasks:
            1. Identify target personas or audiences for the company using the company website data.
            2. Generate the following for each target persona/audience you have identified:
                a. jobTitle: The identified target persona or audeince.
                a. problem : What problem does the company solve for this persona.
                b. solution : How does the company solve the personas problem?
            Always handoff back to planner when task is complete or if you require any information.
            """,
      tools=[structure_personas]
)

user_proxy=UserProxyAgent("user", description="This agent acts as a proxy for the user. The user will respond to any information requested by agents. ")

termination = HandoffTermination(target="user") | TextMentionTermination("TERMINATE")

company_profile_agent= Swarm([planner, user_proxy, website_summarizer_agent, personaGenerator], termination_condition=termination)