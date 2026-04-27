"use client";

import { useState } from "react";
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
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [search, setSearch] = useState("");

  return (
    <main className="p-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
      {/* SIDEBAR */}
      <aside className="md:col-span-1 md:space-y-2 sticky top-0 bg-white z-10">

        <h2 className="font-bold text-lg hidden md:block">UI System</h2>

        {/* PLAYGROUND FEATURE BLOCK */}
        <div className="mb-6 p-4 rounded-xl bg-[#2090C8] text-white">
          <p className="text-xs uppercase opacity-70">Interactive</p>

          <a
            href="/playground"
            className="text-lg font-semibold block mt-1 hover:opacity-90"
          >
            Playground
          </a>

          <p className="text-xs opacity-80 mt-1">
            Explore components with live controls
          </p>
        </div>

        <div className="flex md:flex-col gap-4 overflow-x-auto text-sm text-gray-600">
          <a href="#buttons">Buttons</a>
          <a href="#loader">Loader</a>
          <a href="#inputs">Inputs</a>
          <a href="#password">Password</a>
          <a href="#search">Search</a>
          <a href="#card">Card</a>
          <a href="#modal">Modal</a>
        </div>
      </aside>

      {/* CONTENT */}
      <section className="md:col-span-3 space-y-16">
        <h1 className="text-3xl font-bold text-[#2090C8]">
          Jenny's UI System
        </h1>

        {/* INTRO CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <Card>
            <Card.Body>
              <h3 className="font-semibold">Design System</h3>
              <p className="text-sm text-gray-600 mt-1">
                Reusable UI components built with React + TypeScript.
              </p>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <h3 className="font-semibold">Tech Stack</h3>
              <p className="text-sm text-gray-600 mt-1">
                Next.js, React, TypeScript, Tailwind CSS
              </p>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <h3 className="font-semibold">Principles</h3>
              <p className="text-sm text-gray-600 mt-1">
                Reusability, consistency, composition
              </p>
            </Card.Body>
          </Card>
        </div>

        {/* BUTTONS */}
        <section id="buttons" className="space-y-6 border-b pb-10">
          <h2 className="text-xl font-semibold">Buttons</h2>

          <p className="text-gray-600">
            Buttons trigger user actions and decisions in the interface.
          </p>

          <div className="text-sm text-gray-500">
            <strong>Use when:</strong> submitting forms, confirming actions, navigation
          </div>

          <div className="flex gap-3 flex-wrap">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="success">Success</Button>
            <Button variant="danger">Danger</Button>
          </div>
        </section>

        {/* LOADER */}
        <section id="loader" className="space-y-6 border-b pb-10">
          <h2 className="text-xl font-semibold">Loader</h2>

          <p className="text-gray-600">
            Loader indicates loading or processing states in the UI.
          </p>

          <div className="flex items-center gap-6">
            <Loader size="sm" />
            <Loader size="md" />
            <Loader size="lg" />
          </div>
        </section>

        {/* INPUTS */}
        <section id="inputs" className="space-y-8 border-b pb-10">
          <h2 className="text-xl font-semibold">Inputs</h2>

          <p className="text-gray-600">
            Inputs handle user data entry using controlled components.
          </p>

          <div className="space-y-2">
            <p className="text-xs text-gray-500">Primitive Input</p>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Type..."
            />
          </div>

          <div className="space-y-2">
            <p className="text-xs text-gray-500">InputField (recommended)</p>
            <InputField
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter text..."
            />
          </div>
        </section>

        {/* PASSWORD */}
        <section id="password" className="space-y-6 border-b pb-10">
          <h2 className="text-xl font-semibold">Password Input</h2>

          <p className="text-gray-600">
            PasswordInput adds visibility toggle behavior.
          </p>

          <PasswordInput
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </section>

        {/* SEARCH */}
        <section id="search" className="space-y-6 border-b pb-10">
          <h2 className="text-xl font-semibold">Search Input</h2>

          <p className="text-gray-600">
            SearchInput combines input, icon and optional actions.
          </p>

          <SearchInput
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            onClear={() => setSearch("")}
          />
        </section>

        {/* CARD */}
        <section id="card" className="space-y-8 border-b pb-10">
          <h2 className="text-xl font-semibold">Card</h2>

          <p className="text-gray-600">
            Cards group related content and support composition patterns.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <Card>
              <Card.Body>Default</Card.Body>
            </Card>

            <Card variant="outlined">
              <Card.Body>Outlined</Card.Body>
            </Card>

            <Card variant="elevated">
              <Card.Body>Elevated</Card.Body>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Card>
              <Card.Header>User</Card.Header>
              <Card.Body>Jenny Makki</Card.Body>
            </Card>

            <Card>
              <Card.Header>Actions</Card.Header>
              <Card.Body className="flex gap-2">
                <Button variant="secondary">Cancel</Button>
                <Button>Confirm</Button>
              </Card.Body>
            </Card>

            <Card>
              <Card.Header>Loading</Card.Header>
              <Card.Body>
                <Loader size="sm" />
              </Card.Body>
            </Card>

            <Card>
              <Card.Header>Search</Card.Header>
              <Card.Body>
                <SearchInput
                  value=""
                  onChange={() => {}}
                  placeholder="Search..."
                />
              </Card.Body>
            </Card>
          </div>
        </section>

        {/* MODAL */}
        <section id="modal" className="space-y-6">
          <h2 className="text-xl font-semibold">Modal</h2>

          <p className="text-gray-600">
            Modal focuses user attention on critical actions.
          </p>

          <Button onClick={() => setOpen(true)}>Open Modal</Button>

<Modal open={open} onClose={() => setOpen(false)}>
  <Modal.Header>Delete account</Modal.Header>

  <Modal.Body>Are you sure?</Modal.Body>

  <Modal.Footer>
    <Button variant="secondary" onClick={() => setOpen(false)}>
      Cancel
    </Button>
    <Button variant="danger">Delete</Button>
  </Modal.Footer>
</Modal>
        </section>
      </section>
    </main>
  );
}