"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Button,
  Card,
  InputField,
  Input,
  SearchInput,
  Modal,
  PasswordInput,
} from "@/src/components/ui";
import { ChatMessage } from "@/src/components/chat";

type Message = {
  role: "user" | "ai";
  text: string;
};

export default function ChatDemoPage() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [search, setSearch] = useState("");
  const [username, setUsername] = useState("");
  const [apiKey, setApiKey] = useState("");

  const [messages, setMessages] = useState<Message[]>([
    { role: "ai", text: "Hi! How can I help you today?" },
  ]);

  function sendMessage() {
    if (!message.trim()) return;

    setMessages((prev) => [
      ...prev,
      { role: "user", text: message },
      { role: "ai", text: "This is a demo AI response." },
    ]);

    setMessage("");
  }

  return (
    <div className="h-screen flex bg-gray-50">

      {/* SIDEBAR */}
      <aside className="w-80 border-r bg-white p-4 space-y-4">
        <h2 className="font-semibold text-lg">Chats</h2>

        <SearchInput
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search chats..."
          onClear={() => setSearch("")}
        />

        <Button className="w-full">+ New chat</Button>

        <div className="space-y-2">
          <Card>
            <Card.Body>General chat</Card.Body>
          </Card>

          <Card variant="outlined">
            <Card.Body>UI ideas</Card.Body>
          </Card>
        </div>

        <Button
          variant="secondary"
          className="w-full"
          onClick={() => setOpen(true)}
        >
          Settings
        </Button>

        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-black transition"
        >
          ← Back to UI System
        </Link>
      </aside>

      {/* MAIN CHAT */}
      <main className="flex-1 flex flex-col">

        {/* MESSAGES */}
        <div className="flex-1 p-6 space-y-4 overflow-auto">
          {messages.map((m, i) => (
            <ChatMessage key={i} role={m.role} text={m.text} />
          ))}
        </div>

        {/* INPUT */}
        <div className="border-t p-4 flex gap-3">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
          />

          <Button onClick={sendMessage}>Send</Button>
        </div>
      </main>

      {/* SETTINGS MODAL */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <Modal.Header onClose={() => setOpen(false)}>
          Settings
        </Modal.Header>

        <Modal.Body className="space-y-4">
          <InputField
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Jenny"
          />

          <PasswordInput
            label="API Key"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
          />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setOpen(false)}>
            Close
          </Button>
          <Button>Save</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}