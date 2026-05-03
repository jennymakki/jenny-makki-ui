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
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-12 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#F97316]">
          Jenny's UI System
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl">
          A reusable component system built with React, TypeScript and Tailwind.
          Focused on consistency, composition and developer experience.
        </p>

        <div className="flex gap-4 items-center">
          <Link href="/playground">
            <Button size="large">Open Playground</Button>
          </Link>
           <Link href="/demo">
            <Button variant="secondary" size="large">View Demo App</Button>
          </Link>

          <a
            href="#components"
            className="text-gray-600 hover:text-black transition"
          >
            Browse components →
          </a>
        </div>
      </section>

      {/* FEATURE CARDS */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6 mb-16">
        <Card>
          <Card.Body>
            <h3 className="font-semibold">Reusable</h3>
            <p className="text-sm text-gray-600 mt-1">
              Built with composable patterns and flexible APIs.
            </p>
          </Card.Body>
        </Card>

        <Card>
          <Card.Body>
            <h3 className="font-semibold">Type-safe</h3>
            <p className="text-sm text-gray-600 mt-1">
              Fully typed with TypeScript.
            </p>
          </Card.Body>
        </Card>

        <Card>
          <Card.Body>
            <h3 className="font-semibold">Composable</h3>
            <p className="text-sm text-gray-600 mt-1">
              Compound components and reusable primitives.
            </p>
          </Card.Body>
        </Card>
      </section>

      {/* PLAYGROUND CTA */}
      <section className="max-w-6xl mx-auto px-6 mb-20">
        <div className="relative overflow-hidden rounded-3xl p-8 bg-gradient-to-r from-[#ea680c] via-[#F97316] to-[#fb923c] text-white flex flex-col md:flex-row md:items-center md:justify-between gap-6 shadow-[0_20px_60px_rgba(249,115,22,0.25)]">

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.25),transparent_60%)] opacity-20" />

          <div className="relative">
            <p className="text-xs uppercase opacity-70">Interactive</p>

            <h2 className="text-2xl font-semibold mt-1">
              Explore components in real-time
            </h2>

            <p className="text-sm opacity-80 mt-2">
              Test props, states and UI behavior in the playground.
            </p>
          </div>

          <div className="relative flex gap-3">
            <a
              href="/playground"
              className="px-5 py-2 rounded-xl bg-white text-[#F97316] font-medium hover:bg-white/90 transition"
            >
              Open Playground
            </a>
          </div>
        </div>
      </section>

      {/* COMPONENTS */}
      <section
        id="components"
        className="max-w-6xl mx-auto px-6 space-y-20 pb-20"
      >
        {/* BUTTONS */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Buttons</h2>

          <p className="text-gray-600 max-w-xl">
            Buttons trigger user actions and communicate hierarchy through variants.
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
        <div className="space-y-8">
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
            <p className="text-sm text-gray-500">InputField (recommended)</p>
            <InputField
              label="Name"
              value={fieldName}
              onChange={(e) => setFieldName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>

          <div className="space-y-2 max-w-md">
            <p className="text-sm text-gray-500">Password</p>
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
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Cards</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card><Card.Body>Default</Card.Body></Card>
            <Card variant="outlined"><Card.Body>Outlined</Card.Body></Card>
            <Card variant="elevated"><Card.Body>Elevated</Card.Body></Card>
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
        <div className="space-y-6">
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
        <div className="space-y-6">
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