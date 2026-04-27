"use client";

import { useState } from "react";
import { Input, Card } from "@/src/components/ui";

export default function InputPlayground() {
  const [value, setValue] = useState("");

  return (
    <Card>
      <Card.Header>Input Playground</Card.Header>

      <Card.Body>
        <div className="space-y-4">
          <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Type something..."
          />

          <p className="text-sm text-gray-500">
            Value: {value}
          </p>
        </div>
      </Card.Body>
    </Card>
  );
}