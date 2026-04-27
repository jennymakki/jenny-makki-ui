"use client";

import { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
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
  const [variant, setVariant] = useState<"default" | "large">("default");
  const [password, setPassword] = useState("");
  const [search, setSearch] = useState("");

  return (
    <main className="p-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
      <aside className="md:col-span-1 md:space-y-2 sticky top-0 bg-white z-10">
        <h2 className="font-bold text-lg hidden md:block">UI System</h2>

        <div className="flex md:flex-col gap-4 overflow-x-auto text-sm text-gray-600">
          <a href="#buttons" className="hover:text-black whitespace-nowrap">
            Buttons
          </a>
          <a href="#loader" className="hover:text-black whitespace-nowrap">
            Loader
          </a>
          <a href="#inputs" className="hover:text-black whitespace-nowrap">
            Inputs
          </a>
          <a href="#password" className="hover:text-black whitespace-nowrap">
            Password
          </a>
          <a href="#search" className="hover:text-black whitespace-nowrap">
            Search
          </a>
          <a href="#card" className="hover:text-black whitespace-nowrap">
            Card
          </a>
          <a href="#modal" className="hover:text-black whitespace-nowrap">
            Modal
          </a>
        </div>
      </aside>
      <section className="md:col-span-3 space-y-12">
        <h1 className="text-3xl font-bold text-[#2090C8]">Jenny's UI System</h1>
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
        <section id="buttons" className="space-y-4 mb-10 pb-10 border-b">
          <h2 className="text-xl font-semibold">Buttons</h2>

          <p className="text-gray-600">
            Buttons are reusable UI components that handle user interactions.
            They are built using props like <code>variant</code>,{" "}
            <code>size</code> and <code>loading</code>
            to ensure consistency across the application.
          </p>

          <div className="flex gap-3 flex-wrap">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="success">Success</Button>
            <Button variant="danger">Danger</Button>
          </div>

          <div className="text-xs text-gray-600 space-y-2 mt-3">
            <p>
              <strong>Button system:</strong> reusable variants for different UI
              contexts and importance levels.
            </p>

            <p>
              <strong>Primary:</strong> main call-to-action (submit, save,
              continue).
            </p>

            <p>
              <strong>Secondary:</strong> supporting actions (cancel, back).
            </p>

            <p>
              <strong>Ghost:</strong> low-emphasis actions like icon buttons or
              toggles.
            </p>

            <p>
              <strong>Success:</strong> positive actions or confirmations.
            </p>

            <p>
              <strong>Danger:</strong> destructive actions (delete, remove).
            </p>
          </div>

          <p className="text-sm text-gray-500">
            Tech: React components, TypeScript props, Tailwind CSS for styling,
            conditional rendering for states.
          </p>
        </section>

        <section
          id="loader"
          className="space-y-4 mb-10 pb-10 border-b scroll-mt-20"
        >
          <h2 className="text-xl font-semibold">Loader</h2>

          <p className="text-gray-600">
            Loader is a reusable primitive used to indicate loading states
            across the UI system.
          </p>

          <div className="flex items-center gap-6">
            <Loader size="sm" />
            <Loader size="md" />
            <Loader size="lg" />
          </div>

          <p className="text-sm text-gray-500">
            Tech: border animation, currentColor inheritance, reusable primitive
            component.
          </p>
        </section>

        <section id="inputs" className="space-y-6 mb-10 pb-10 border-b">
          <h2 className="text-xl font-semibold">Inputs</h2>

          <p className="text-gray-600">
            Input components manage user data entry using controlled state. They
            are built as a composition system with a base input and enhanced
            field wrapper.
          </p>

          {/* Primitive Input */}
          <div className="space-y-2">
            <p className="text-xs text-gray-600">Primitive Input</p>

            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Bare input..."
            />
          </div>

          {/* Composed InputField */}
          <div className="space-y-2">
            <p className="text-xs text-gray-600">
              InputField (recommended usage)
            </p>

            <InputField
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter text..."
            />
          </div>

          <p className="text-xs text-gray-600 mt-2">
            Note: Both inputs share state in this demo to illustrate controlled
            components in React. In real applications they would typically have
            independent state.
          </p>

          <p className="text-sm text-gray-500">
            Tech: Controlled components, composition pattern, reusable
            primitives, TypeScript typing for form safety.
          </p>

          <section className="space-y-4">
            <h3 className="text-lg font-semibold">States</h3>
            <p className="text-sm text-gray-600">
              Different input states to demonstrate validation, disabled
              behavior and UI feedback.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <p className="text-xs text-gray-500">Default</p>
                <InputField
                  label="Name"
                  value=""
                  onChange={() => {}}
                  placeholder="Enter your name"
                />
              </div>

              <div className="space-y-2">
                <p className="text-xs text-gray-500">With value</p>
                <InputField label="Name" value="Jenny" onChange={() => {}} />
              </div>

              <div className="space-y-2">
                <p className="text-xs text-gray-500">Disabled</p>
                <InputField
                  label="Name"
                  value="Can't edit"
                  onChange={() => {}}
                  disabled
                />
              </div>

              <div className="space-y-2">
                <p className="text-xs text-gray-500">Error state</p>
                <InputField
                  label="Email"
                  value="wrong@email"
                  onChange={() => {}}
                  error="Invalid email address"
                />
              </div>

              <div className="space-y-2">
                <p className="text-xs text-gray-500">With hint</p>
                <InputField
                  label="Username"
                  value=""
                  onChange={() => {}}
                  hint="This will be your public username"
                />
              </div>

              <div className="space-y-2">
                <p className="text-xs text-gray-500">Password input</p>
                <PasswordInput label="Password" value="" onChange={() => {}} />
              </div>

              <div className="space-y-2 md:col-span-2">
                <p className="text-xs text-gray-500">Search input</p>
                <SearchInput
                  value=""
                  onChange={() => {}}
                  placeholder="Search..."
                />
              </div>
            </div>
          </section>
        </section>

        <section id="password" className="space-y-4 mb-10 pb-10 border-b">
          <h2 className="text-xl font-semibold">Password Input</h2>

          <p className="text-gray-600">
            PasswordInput adds toggle visibility behavior to a normal input.
          </p>

          <PasswordInput
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password..."
          />

          <p className="text-sm text-gray-500">
            Tech: useState toggle, conditional rendering, composition pattern.
          </p>
        </section>

        <section id="search" className="space-y-4 mb-10 pb-10 border-b">
          <h2 className="text-xl font-semibold">Search Input</h2>

          <p className="text-gray-600">
            SearchInput combines input + icon + optional loader and clear
            button.
          </p>

          <SearchInput
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            loading={false}
            onClear={() => setSearch("")}
          />

          <p className="text-sm text-gray-500">
            Tech: composition, icon positioning, conditional UI rendering.
          </p>
        </section>

        <section id="card" className="space-y-6 mb-10 pb-10 border-b">
          <h2 className="text-xl font-semibold">Card</h2>

          <p className="text-gray-600">
            Cards are layout components used to group related content in a
            structured and reusable way. They support multiple composition
            patterns and variants.
          </p>

          {/* VARIANTS */}
          <div className="space-y-4">
            <h3 className="font-medium">Variants</h3>

            <div className="grid md:grid-cols-3 gap-4">
              <Card>
                <Card.Body>Default card</Card.Body>
              </Card>

              <Card variant="outlined">
                <Card.Body>Outlined card</Card.Body>
              </Card>

              <Card variant="elevated">
                <Card.Body>Elevated card</Card.Body>
              </Card>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">Content patterns</h3>

            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <Card.Header>User profile</Card.Header>
                <Card.Body>
                  <p>Jenny Makki</p>
                  <p className="text-sm text-gray-500">Frontend Developer</p>
                </Card.Body>
              </Card>

              <Card>
                <Card.Header>Actions</Card.Header>
                <Card.Body>
                  <p className="mb-3">Do you want to continue?</p>
                  <div className="flex gap-2">
                    <Button variant="secondary">Cancel</Button>
                    <Button variant="primary">Confirm</Button>
                  </div>
                </Card.Body>
              </Card>

              <Card>
                <Card.Header>Loading state</Card.Header>
                <Card.Body>
                  <Loader size="sm" />
                </Card.Body>
              </Card>

              <Card>
                <Card.Header>Search inside card</Card.Header>
                <Card.Body>
                  <SearchInput
                    value=""
                    onChange={() => {}}
                    placeholder="Search users..."
                  />
                </Card.Body>
              </Card>
            </div>
          </div>

          <p className="text-sm text-gray-500">
            Tech: Composition pattern, variant system, reusable UI primitives,
            component-driven design system architecture.
          </p>
        </section>

        <section id="modal" className="space-y-4 mb-10 pb-10 border-b">
          <h2 className="text-xl font-semibold">Modal</h2>

          <p className="text-gray-600">
            Modals are overlay components used to focus user attention on a
            specific task. They are controlled via state (open/close).
          </p>

          <p className="text-xs text-gray-600 mt-2">
            This modal is built using a{" "}
            <strong>compound component pattern</strong>, allowing structured
            composition with <code>Modal.Header</code>, <code>Modal.Body</code>{" "}
            and <code>Modal.Footer</code>.
          </p>

          <Button onClick={() => setOpen(true)}>Open Modal</Button>

          <Modal open={open} onClose={() => setOpen(false)}>
            <ModalHeader>Delete account</ModalHeader>

            <ModalBody>Are you sure you want to delete your account?</ModalBody>

            <ModalFooter>
              <Button variant="secondary" onClick={() => setOpen(false)}>
                Cancel
              </Button>

              <Button variant="danger">Delete</Button>
            </ModalFooter>
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
