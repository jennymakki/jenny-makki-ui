"use client";

import { Input, Button, Card } from "@/src/components/ui";
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
    <main className="p-10 space-y-6 max-w-md">
      <Card title="User Form">
        <div className="space-y-4">
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
        </div>
      </Card>
    </main>
  );
}
