"use client";

import Link from "next/link";

import ButtonPlayground from "@/src/components/ui/button/ButtonPlayground";
import CardPlayground from "@/src/components/ui/card/CardPlayground";
import InputPlayground from "@/src/components/ui/input/InputPlayground";
import ModalPlayground from "@/src/components/ui/modal/ModalPlayground";

export default function PlaygroundPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      
      {/* HEADER */}
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-10 space-y-4">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-black transition"
        >
          ← Back to UI System
        </Link>

        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight text-[#F97316]">
            Playground
          </h1>

          <p className="text-gray-600 max-w-2xl">
            Experiment with components in real-time. Adjust props, explore states
            and see how everything behaves.
          </p>
        </div>
      </div>

      {/* GRID */}
      <div className="max-w-3xl mx-auto px-6 pb-20 space-y-10">
        
        {/* BUTTON */}
        <section className="space-y-3 group">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Button</h2>
            <span className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition">
              Interactive
            </span>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white/80 backdrop-blur p-6 shadow-sm hover:shadow-md transition">
            <ButtonPlayground />
          </div>
        </section>

        {/* CARD */}
        <section className="space-y-3 group">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Card</h2>
            <span className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition">
              Layout
            </span>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white/80 backdrop-blur p-6 shadow-sm hover:shadow-md transition">
            <CardPlayground />
          </div>
        </section>

        {/* INPUT */}
        <section className="space-y-3 group">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Input</h2>
            <span className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition">
              Forms
            </span>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white/80 backdrop-blur p-6 shadow-sm hover:shadow-md transition">
            <InputPlayground />
          </div>
        </section>

        {/* MODAL */}
        <section className="space-y-3 group">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Modal</h2>
            <span className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition">
              Overlay
            </span>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white/80 backdrop-blur p-6 shadow-sm hover:shadow-md transition">
            <ModalPlayground />
          </div>
        </section>

      </div>
    </main>
  );
}