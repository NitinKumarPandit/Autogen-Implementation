import { AgentResponse } from "./../../../types";
import { useState, useCallback, useEffect, useRef } from "react";
import { Message, User } from "../../../types";
import { chatService } from "../services/chatService";
import { websocketService } from "../services/websocketService";
import { MessageFactory } from "../utils/messageFactory";
import { useCompany } from "../context/CompanyContext";

interface UseChatProps {
  currentUser: User;
  recipient: User;
  initialPrompt?: string;
}

export function useChat({
  currentUser,
  recipient,
  initialPrompt,
}: UseChatProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [processingMessage, setProcessingMessage] = useState(false);
  const { updateCompanyData } = useCompany();
  const initializationRef = useRef(false);
  const [toolCalls, SetToolCalls] = useState<
    Record<string, { label: string; state: boolean; call_id: string }>
  >({
    search_web_tool: {
      label: "Researching your website",
      state: false,
      call_id: "",
    },
    structure_summarized_company_website: {
      label: "Generating summarized overview/description",
      state: false,
      call_id: "",
    },
    format_personas: {
      label: "Generating personas",
      state: false,
      call_id: "",
    },
  });
  useEffect(() => {
    const removeHandler = websocketService.addMessageHandler((data) => {
      if (data.type === "tool_call") {
        const content: AgentResponse = {
          toolCallIds: [data.call_id],
          reasoning: "",
        };
        const newMessage = MessageFactory.createAgentMessage(
          content,
          recipient
        );
        setMessages((prev) => [...prev, newMessage]);
        SetToolCalls((prev) => {
          return {
            ...prev,
            ...(data.name
              ? {
                  [data.name]: {
                    ...prev[data.name],
                    state: false,
                    call_id: data.call_id,
                  },
                }
              : {}),
          };
        });
        setIsTyping(false);
      }
      if (data.type === "tool_result") {
        console.log("ToolResult: ", data);
        console.log("Current ToolCalls: ", toolCalls);
        const toolCallName = Object.keys(toolCalls)?.find(
          (tc) => toolCalls[tc].call_id === data.call_id
        );
        if (toolCallName) {
          SetToolCalls((prev) => {
            return {
              ...prev,
              [toolCallName]: { ...prev[toolCallName], state: true },
            };
          });
          if (toolCallName === "structure_summarized_company_website") {
            updateCompanyData({ description: data.content });
          } else if (
            toolCallName === "format_personas" ||
            (data.source === "personaGenerator" && data.content)
          ) {
            updateCompanyData({ personas: data.content });
          }
        }
      }

      if (data.type === "stream" || data.type === "error") {
        console.log("Message: ", data);
        const newMessage = MessageFactory.createAgentMessage(
          data.content,
          recipient
        );
        console.log("New Message: ", newMessage);
        setMessages((prev) => [...prev, newMessage]);
        setIsTyping(false);
      }
    });

    return removeHandler;
  }, [recipient, updateCompanyData, toolCalls]);

  const handleSendMessage = useCallback(
    async (content: string) => {
      if (processingMessage) return;

      try {
        setProcessingMessage(true);
        setIsTyping(true);

        const userMessage = MessageFactory.createUserMessage(
          content,
          currentUser
        );
        setMessages((prev) => [...prev, userMessage]);
        setError(null);

        await chatService.sendUserInput(content, currentUser, recipient);
      } catch (error) {
        console.error("Failed to send message:", error);
        setError("Failed to send message. Please try again.");
        setIsTyping(false);
      } finally {
        setProcessingMessage(false);
      }
    },
    [currentUser, recipient, processingMessage]
  );

  const initializeChat = useCallback(
    async (initialPrompt: string) => {
      if (
        !initialPrompt.trim() ||
        processingMessage ||
        initializationRef.current
      )
        return;

      initializationRef.current = true;
      await handleSendMessage(initialPrompt);
    },
    [handleSendMessage, processingMessage]
  );

  return {
    messages,
    isTyping,
    toolCalls,
    error,
    handleSendMessage,
    initializeChat,
  };
}
