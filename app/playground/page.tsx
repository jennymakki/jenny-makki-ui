"use client";

import { Button, Card } from "@/src/components/ui";
import ButtonPlayground from "@/src/components/ui/button/ButtonPlayground";
import CardPlayground from "@/src/components/ui/card/CardPlayground";
import InputPlayground from "@/src/components/ui/input/InputPlayground";
import ModalPlayground from "@/src/components/ui/modal/ModalPlayground";

export default function PlaygroundPage() {
  return (
    <main className="p-10 space-y-10">
      <h1 className="text-3xl font-bold">Playground</h1>

      <ButtonPlayground />
      <CardPlayground />
      <InputPlayground />
      <ModalPlayground />
    </main>
  );
}