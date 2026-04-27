"use client";

import Link from "next/link";

import ButtonPlayground from "@/src/components/ui/button/ButtonPlayground";
import CardPlayground from "@/src/components/ui/card/CardPlayground";
import InputPlayground from "@/src/components/ui/input/InputPlayground";
import ModalPlayground from "@/src/components/ui/modal/ModalPlayground";

export default function PlaygroundPage() {
  return (
    <main className="max-w-6xl mx-auto p-10 space-y-12">
      {/* HEADER */}
      <div className="space-y-3">
        <Link
          href="/"
          className="text-sm text-gray-500 hover:text-black transition"
        >
          ← Back to UI System
        </Link>

        <h1 className="text-4xl font-bold text-[#2090C8]">Playground</h1>

        <p className="text-gray-600 max-w-2xl">
          Interact with components in real-time. Test props, states and UI behavior.
        </p>
      </div>

      {/* GRID LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* BUTTON */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Button</h2>
          <div className="border rounded-2xl p-6 bg-white">
            <ButtonPlayground />
          </div>
        </section>

        {/* CARD */}
        <section className="space-y-3">
          <div className="flex items-end justify-between">
            <h2 className="text-lg font-semibold">Card</h2>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <CardPlayground />
          </div>
        </section>

        {/* INPUT */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Input</h2>
          <div className="border rounded-2xl p-6 bg-white">
            <InputPlayground />
          </div>
        </section>

        {/* MODAL */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Modal</h2>
          <div className="border rounded-2xl p-6 bg-white">
            <ModalPlayground />
          </div>
        </section>
      </div>
    </main>
  );
}
