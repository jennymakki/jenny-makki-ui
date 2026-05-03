"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Button,
  Modal,
  Card,
  Input,
  InputField,
  Loader,
  PasswordInput,
  SearchInput,
} from "@/src/components/ui";

export default function UISystemPage() {
  const [primitiveName, setPrimitiveName] = useState("");
  const [fieldName, setFieldName] = useState("");
  const [open, setOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [search, setSearch] = useState("");

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-5 pb-12 flex justify-center">
        <Card className="max-w-3xl w-full">
          <Card.Body className="flex flex-col items-center text-center space-y-6 py-12">
            <h1 className="text-xl md:text-4xl font-bold tracking-tight text-[#F97316]">
              Jenny's UI System
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              I built this project to deepen my understanding of
              component-driven UI in React. It focuses on reusable primitives
              like buttons, cards, inputs, loaders and modals, built with
              TypeScript for strong typing and Tailwind for consistent styling.
              The goal is to combine{" "}
              <span className="font-medium text-gray-800">composition</span>,
              <span className="font-medium text-gray-800">consistency</span> and
              <span className="font-medium text-gray-800">
                {" "}
                developer experience
              </span>
              . The demo shows how good component design translates into real
              product UX, and the playground lets you explore every component in
              isolation.
            </p>

            <div className="flex gap-4 items-center flex-wrap justify-center">
              <Link href="/playground">
                <Button size="large">View Playground</Button>
              </Link>

              <Link href="/demo">
                <Button variant="secondary" size="large">
                  View Demo App
                </Button>
              </Link>
            </div>
          </Card.Body>
        </Card>
      </section>

      {/* FEATURE CARDS */}
      <section className="max-w-3xl mx-auto px-6 mb-20">
        <div className="grid md:grid-cols-2 gap-6">
          <Card variant="orange" className="hover:shadow-md transition">
            <Card.Body className="space-y-2">
              <h3 className="font-semibold text-lg">Built for reuse</h3>
              <p className="text-base leading-relaxed">
                Every component is designed as a primitive that can be composed
                into real UI patterns without duplication.
              </p>
            </Card.Body>
          </Card>

          <Card variant="orange" className="hover:shadow-md transition">
            {" "}
            <Card.Body className="space-y-2">
              <h3 className="font-semibold text-lg">Composable architecture</h3>
              <p className="text-base">
                Components are built to work together — not as isolated
                elements, but as a system.
              </p>
            </Card.Body>
          </Card>
        </div>
      </section>

      {/* COMPONENTS */}
      <section
        id="components"
        className="max-w-6xl mx-auto px-6 space-y-20 pb-20 flex flex-col items-center text-center"
      >
        <h2 className ="text-3xl font-semibold">View Component Library</h2>
        {/* BUTTONS */}
        <div className="space-y-6 pb-10 border-b border-gray-400">
          <h2 className="text-2xl font-semibold">Buttons</h2>

          <p className="text-gray-600 max-w-xl">
            Buttons trigger user actions and communicate hierarchy through
            variants.
          </p>

          <div className="flex gap-3 flex-wrap">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="success">Success</Button>
            <Button variant="danger">Danger</Button>
          </div>
        </div>

        {/* INPUTS */}
        <div className="space-y-8 pb-10 border-b border-gray-400">
          <h2 className="text-2xl font-semibold">Inputs</h2>

          <div className="space-y-2 max-w-md">
            <p className="text-sm text-gray-500">Primitive input</p>
            <Input
              value={primitiveName}
              onChange={(e) => setPrimitiveName(e.target.value)}
              placeholder="Type something..."
            />
          </div>

          <div className="space-y-2 max-w-md">
            <p className="text-sm text-gray-500">InputField</p>
            <InputField
              label="Name"
              value={fieldName}
              onChange={(e) => setFieldName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>

          <div className="space-y-2 max-w-md">
            <p className="text-sm text-gray-500"></p>
            <PasswordInput
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="space-y-2 max-w-md">
            <p className="text-sm text-gray-500">Search</p>
            <SearchInput
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              onClear={() => setSearch("")}
            />
          </div>
        </div>

        {/* CARDS */}
        <div className="space-y-6 pb-10 border-b border-gray-400">
          <h2 className="text-2xl font-semibold">Cards</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <Card.Body>Default</Card.Body>
            </Card>
            <Card variant="orange">
              <Card.Body>Orange</Card.Body>
            </Card>
            <Card variant="outlined">
              <Card.Body>Outlined</Card.Body>
            </Card>
            <Card variant="elevated">
              <Card.Body>Elevated</Card.Body>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <Card.Header>User</Card.Header>
              <Card.Body>Jenny Makki</Card.Body>
            </Card>

            <Card>
              <Card.Header>Actions</Card.Header>
              <Card.Footer>
                <Button variant="secondary">Cancel</Button>
                <Button>Confirm</Button>
              </Card.Footer>
            </Card>
          </div>
        </div>

        {/* MODAL */}
        <div className="space-y-6 pb-10 border-b border-gray-400">
          <h2 className="text-2xl font-semibold">Modal</h2>

          <Button onClick={() => setOpen(true)}>Open modal</Button>

          <Modal open={open} onClose={() => setOpen(false)}>
            <Modal.Header onClose={() => setOpen(false)}>
              Delete account
            </Modal.Header>

            <Modal.Body>This action cannot be undone.</Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={() => setOpen(false)}>
                Cancel
              </Button>

              <Button variant="danger">Delete</Button>
            </Modal.Footer>
          </Modal>
        </div>

        {/* LOADER */}
        <div className="space-y-6 pb-10 border-b border-gray-400">
          <h2 className="text-2xl font-semibold">Loader</h2>

          <div className="flex gap-6">
            <Loader size="sm" />
            <Loader size="md" />
            <Loader size="lg" />
          </div>
        </div>
      </section>
    </main>
  );
}
