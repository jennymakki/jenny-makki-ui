"use client";

import { useState } from "react";
import { Card, Button } from "@/src/components/ui";

export default function CardPlayground() {
  const [variant, setVariant] = useState("default");

  return (
    <Card>
      <Card.Header>Card Playground</Card.Header>

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
                <option value="default">default</option>
                <option value="outlined">outlined</option>
                <option value="elevated">elevated</option>
              </select>
            </div>
          </div>

          {/* Preview */}
          <div className="border rounded-xl p-6">
            <Card variant={variant as any}>
              <Card.Header>Preview Card</Card.Header>
              <Card.Body>
                This is a live preview of the card component.
              </Card.Body>
            </Card>
          </div>

        </div>
      </Card.Body>
    </Card>
  );
}