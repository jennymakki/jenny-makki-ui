"use client";

import { useState } from "react";
import { Button, Modal, Card, Input } from "@/src/components/ui";

export default function UISystemPage() {
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);
  const [variant, setVariant] = useState<"default" | "large">("default");

  return (
    <main className="p-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
      <aside className="md:col-span-1 space-y-2 sticky top-10 h-fit">
        <h2 className="font-bold text-lg">UI System</h2>

        <a
          href="#buttons"
          className="block text-sm text-gray-600 hover:text-black"
        >
          Buttons
        </a>

        <a
          href="#inputs"
          className="block text-sm text-gray-600 hover:text-black"
        >
          Inputs
        </a>

        <a
          href="#card"
          className="block text-sm text-gray-600 hover:text-black"
        >
          Card
        </a>

        <a
          href="#modal"
          className="block text-sm text-gray-600 hover:text-black"
        >
          Modal
        </a>
      </aside>
      <section className="md:col-span-3 space-y-12">
        <h1 className="text-3xl font-bold text-[#2090C8]">Simple UI System</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="border border-gray-200 rounded-xl p-4">
            <h3 className="font-semibold">Design System</h3>
            <p className="text-sm text-gray-600">
              A collection of reusable UI components built with React +
              TypeScript.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-4">
            <h3 className="font-semibold">Tech Stack</h3>
            <p className="text-sm text-gray-600">
              Next.js, React, TypeScript, Tailwind CSS
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-4">
            <h3 className="font-semibold">Principles</h3>
            <p className="text-sm text-gray-600">
              Reusability, consistency, component-driven UI
            </p>
          </div>
        </div>
        <section id="buttons" className="space-y-4">
          <h2 className="text-xl font-semibold">Buttons</h2>

          <p className="text-gray-600">
            Buttons are reusable UI components that handle user interactions.
            They are built using props like <code>variant</code>,{" "}
            <code>size</code> and <code>loading</code>
            to ensure consistency across the application.
          </p>

          <div className="flex gap-3 flex-wrap">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="form" loading>
              Loading
            </Button>
          </div>

          <p className="text-sm text-gray-500">
            Tech: React components, TypeScript props, Tailwind CSS for styling,
            conditional rendering for states.
          </p>
        </section>

        <section id="inputs" className="space-y-4">
          <h2 className="text-xl font-semibold">Inputs</h2>

          <p className="text-gray-600">
            Input components manage user data entry using controlled state. They
            are connected to React state via <code>value</code> and{" "}
            <code>onChange</code>.
          </p>

          <Input
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter text..."
          />

          <p className="text-sm text-gray-500">
            Tech: Controlled components, React useState, TypeScript interfaces,
            form handling patterns.
          </p>
        </section>

        <section id="card" className="space-y-4">
          <h2 className="text-xl font-semibold">Card</h2>

          <p className="text-gray-600">
            Cards are layout components used to group related content in a
            structured and reusable way. They help maintain visual hierarchy in
            UI systems.
          </p>

          <Card title="Example Card">
            <p>This is a reusable card component.</p>
          </Card>

          <p className="text-sm text-gray-500">
            Tech: Composition pattern (children props), reusable layout
            components, Tailwind styling system.
          </p>
        </section>

        <section id="modal" className="space-y-4">
          <h2 className="text-xl font-semibold">Modal</h2>

          <p className="text-gray-600">
            Modals are overlay components used to focus user attention on a
            specific task. They are controlled via state (open/close).
          </p>

          <Button onClick={() => setOpen(true)}>Open Modal</Button>

          <Modal open={open} onClose={() => setOpen(false)}>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Hello, World!</h3>
              <p>This is a modal inside the UI System.</p>

              <Button onClick={() => setOpen(false)}>Close</Button>
            </div>
          </Modal>

          <p className="text-sm text-gray-500">
            Tech: React state management, conditional rendering, overlay
            patterns, event handling.
          </p>
        </section>
      </section>
    </main>
  );
}
