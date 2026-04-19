'use client'

import { Input, Button } from "@/src/components/ui";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  function handleClick() {
    setLoading(true);

    setTimeout(() => {
      console.log(name);
      setLoading(false);
    }, 2000);
  }

  return (
    <main className="p-10 space-y-4">
      <Input
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />

<Button
  variant="form"
  size="large"
  onClick={handleClick}
  loading={loading}
>
  Save
</Button>
    </main>
  );
}