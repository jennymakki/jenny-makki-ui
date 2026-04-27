"use client";

import { useState } from "react";
import { Button, Card } from "@/src/components/ui";

export default function ButtonPlayground() {
  const [variant, setVariant] = useState("primary");
  const [loading, setLoading] = useState(false);
  const [label, setLabel] = useState("Click me");

  return (
    <Card>
      <Card.Header>Button Playground</Card.Header>

      <Card.Body>
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Controls */}
          <div className="space-y-4">
            <div>
              <p className="text-sm">Variant</p>
              <select
                value={variant}
                onChange={(e) => setVariant(e.target.value)}
                className="border p-2 rounded w-full"
              >
                <option value="primary">primary</option>
                <option value="secondary">secondary</option>
                <option value="ghost">ghost</option>
                <option value="danger">danger</option>
              </select>
            </div>

            <div>
              <p className="text-sm">Label</p>
              <input
                value={label}
                onChange={(e) => setLabel(e.target.value)}
                className="border p-2 rounded w-full"
              />
            </div>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={loading}
                onChange={() => setLoading(!loading)}
              />
              Loading
            </label>
          </div>

          {/* Preview */}
          <div className="flex items-center justify-center border rounded-xl p-6">
            <Button variant={variant as any} loading={loading}>
              {label}
            </Button>
          </div>

        </div>
      </Card.Body>
    </Card>
  );
}