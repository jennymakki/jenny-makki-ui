"use client";

import { Card } from "@/src/components/ui";

type ChatMessageProps = {
  role: "user" | "ai";
  text: string;
};

export default function ChatMessage({ role, text }: ChatMessageProps) {
  const isUser = role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <Card
        className={`max-w-md ${
          isUser ? "" : ""
        }`}
      >
        <Card.Body>{text}</Card.Body>
      </Card>
    </div>
  );
}