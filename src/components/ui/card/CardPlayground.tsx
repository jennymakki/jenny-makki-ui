"use client";

import { useState } from "react";
import { Card, Button, SearchInput } from "@/src/components/ui";

export default function CardPlayground() {
  const [variant, setVariant] = useState<
    "default" | "outlined" | "elevated"
  >("default");

  return (
    <div className="space-y-8">
      <div className="space-y-1">
        <h2 className="text-lg font-semibold">Card Playground</h2>
        <p className="text-sm text-gray-600">
          Change variant and explore composition patterns live
        </p>
      </div>

      {/* SWITCHER */}
      <div className="flex gap-2 flex-wrap">
        <Button variant="secondary" size="medium" onClick={() => setVariant("default")}>
          Default
        </Button>

        <Button variant="secondary" size="medium" onClick={() => setVariant("outlined")}>
          Outlined
        </Button>

        <Button variant="secondary" size="medium" onClick={() => setVariant("elevated")}>
          Elevated
        </Button>
      </div>

      {/* MAIN PLAYGROUND CARD */}
      <Card variant={variant}>
        <Card.Header>Product Card</Card.Header>

        <Card.Body>
          <p className="text-gray-600">
            This is a composable card with live variant switching.
          </p>

          <div className="mt-4">
            <SearchInput
              value=""
              onChange={() => {}}
              placeholder="Search inside card..."
            />
          </div>
        </Card.Body>

        <Card.Footer>
          <Button variant="secondary" size="medium">
            Cancel
          </Button>
          <Button variant="primary" size="medium">
            Save
          </Button>
        </Card.Footer>
      </Card>

      {/* STATIC EXAMPLES */}
      <div className="grid md:grid-cols-2 gap-4">

        <Card variant="outlined">
          <Card.Header>User Profile</Card.Header>

          <Card.Body>
            <p className="font-medium">Jenny Makki</p>
            <p className="text-sm text-gray-500">Frontend Developer</p>
          </Card.Body>
        </Card>

        <Card variant="elevated">
          <Card.Header>Action Required</Card.Header>

          <Card.Body>
            <p>Are you sure you want to continue?</p>
          </Card.Body>

          <Card.Footer>
            <Button variant="secondary" size="medium">
              Cancel
            </Button>
            <Button variant="danger" size="medium">
              Delete
            </Button>
          </Card.Footer>
        </Card>

      </div>
    </div>
  );
}