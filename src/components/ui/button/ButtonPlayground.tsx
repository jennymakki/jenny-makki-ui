"use client";

import { useState } from "react";
import { Button, Card } from "@/src/components/ui";

type Variant = "primary" | "secondary" | "ghost" | "danger" | "success";
type Size = "small" | "medium" | "large";

export default function ButtonPlayground() {
  const [variant, setVariant] = useState<Variant>("primary");
  const [size, setSize] = useState<Size>("medium");
  const [loading, setLoading] = useState(false);
  const [label, setLabel] = useState("Click me");

  return (
    <Card>
      <Card.Header>Button Playground</Card.Header>

      <Card.Body>
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Controls */}
          <div className="space-y-5">

            {/* Variant */}
            <div>
              <p className="text-xs text-gray-500 mb-1">Variant</p>
              <select
                value={variant}
                onChange={(e) => setVariant(e.target.value as Variant)}
                className="w-full border rounded-lg p-2"
              >
                <option value="primary">Primary</option>
                <option value="secondary">Secondary</option>
                <option value="ghost">Ghost</option>
                <option value="success">Success</option>
                <option value="danger">Danger</option>
              </select>
            </div>

            {/* Size */}
            <div>
              <p className="text-xs text-gray-500 mb-1">Size</p>
              <select
                value={size}
                onChange={(e) => setSize(e.target.value as Size)}
                className="w-full border rounded-lg p-2"
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </div>

            {/* Label */}
            <div>
              <p className="text-xs text-gray-500 mb-1">Label</p>
              <input
                value={label}
                onChange={(e) => setLabel(e.target.value)}
                className="w-full border rounded-lg p-2"
              />
            </div>

            {/* Loading */}
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={loading}
                onChange={() => setLoading(!loading)}
              />
              Loading state
            </label>
          </div>

          {/* Preview */}
          <div className="flex flex-col items-center justify-center gap-4 border rounded-2xl p-10 bg-gradient-to-b from-white to-gray-50">
            
            <Button
              variant={variant}
              size={size}
              loading={loading}
            >
              {label}
            </Button>

            <p className="text-xs text-gray-400">
              {variant} / {size}
            </p>

          </div>
        </div>
      </Card.Body>
    </Card>
  );
}