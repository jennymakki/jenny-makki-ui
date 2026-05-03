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
  const [mobileMenu, setMobileMenu] = useState(false);

  const [message, setMessage] = useState("");
  const [search, setSearch] = useState("");

  const [username, setUsername] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [messages, setMessages] = useState<Message[]>([
    { role: "ai", text: "Hi! What's up?" },
  ]);

  function sendMessage() {
    if (!message.trim()) return;

    setMessages((prev) => [
      ...prev,
      { role: "user", text: message },
      { role: "ai", text: "That is awesome!" },
    ]);

    setMessage("");
  }

  return (
    <div className="h-screen flex flex-col md:flex-row bg-gray-50">

      {/* MOBILE TOP BAR */}
      <div className="md:hidden flex items-center justify-between p-4 border-b bg-white">
        <Button size="small" onClick={() => setMobileMenu(true)}>
          Menu
        </Button>

        <h1 className="font-semibold">Chat</h1>

        <Button size="small" onClick={() => setOpen(true)}>
          Settings
        </Button>
      </div>

      {/* SIDEBAR */}
      <aside
        className={`
          fixed md:static z-50 top-0 left-0 h-full w-80 bg-white border-r p-4 space-y-4
          transform transition-transform duration-200
          ${mobileMenu ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        <div className="md:hidden flex justify-between items-center">
          <h2 className="font-semibold text-lg">Chats</h2>
          <Button size="small" onClick={() => setMobileMenu(false)}>
            Close
          </Button>
        </div>

        <h2 className="hidden md:block font-semibold text-lg">Chats</h2>

        <SearchInput
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search chats..."
          onClear={() => setSearch("")}
        />

        <Button className="w-full">+ New chat</Button>

        <div className="space-y-2">
          <Card>
            <Card.Body>John Doe</Card.Body>
          </Card>

          <Card variant="outlined">
            <Card.Body>Jane Doe</Card.Body>
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

      {/* OVERLAY */}
      {mobileMenu && (
        <div
          className="fixed inset-0 bg-black/30 md:hidden"
          onClick={() => setMobileMenu(false)}
        />
      )}

      {/* MAIN CHAT */}
      <main className="flex-1 flex flex-col">

        {/* MESSAGES */}
        <div className="flex-1 p-4 md:p-6 space-y-4 overflow-auto">
          {messages.map((m, i) => (
            <ChatMessage key={i} role={m.role} text={m.text} />
          ))}
        </div>

        {/* INPUT */}
        <div className="border-t p-3 md:p-4 flex gap-2 md:gap-3 bg-white">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1"
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
            label="Old password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />

          <PasswordInput
            label="New password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
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