import { IMessageContent } from "../../../types";

interface MessageContentProps {
  content: IMessageContent;
}

export function MessageContent({ content }: MessageContentProps) {
  if (content.type === "text") {
    return <p>{content.data as string}</p>;
  }

  if (content.type === "agent-response") {
    if (typeof content.data === "string") {
      return <p>{content.data}</p>;
    } else {
      return <p>{content.data.reasoning}</p>;
    }
  }

  return null;
}
