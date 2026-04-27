"use client";

import { useState } from "react";
import { Input, InputField, Card } from "@/src/components/ui";

export default function InputPlayground() {
  const [value, setValue] = useState("");

  return (
    <Card>
      <Card.Header>Input Playground</Card.Header>

      <Card.Body>
        <div className="grid md:grid-cols-2 gap-8">

          {/* Controls */}
          <div className="space-y-4">

            <Input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Bare input..."
            />

            <InputField
              label="Email"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="name@email.com"
              hint="We will never share your email"
            />

            <InputField
              label="Error state"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              error="Invalid email format"
            />

            <InputField
              label="Disabled"
              value="Can't edit this"
              onChange={() => {}}
              disabled
            />
          </div>

          {/* Preview */}
          <div className="border rounded-2xl p-6 bg-gray-50">
            <p className="text-xs text-gray-500 mb-2">Live value</p>
            <p className="text-lg font-medium">{value || "..."}</p>
          </div>

        </div>
      </Card.Body>
    </Card>
  );
}