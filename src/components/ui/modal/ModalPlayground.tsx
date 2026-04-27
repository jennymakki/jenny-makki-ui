"use client";

import { useState } from "react";
import { Modal, Button, Card } from "@/src/components/ui";

export default function ModalPlayground() {
  const [open, setOpen] = useState(false);

  return (
    <Card>
      <Card.Header>Modal Playground</Card.Header>

      <Card.Body>
        <div className="space-y-6">
          <Button variant="primary" onClick={() => setOpen(true)}>
            Open modal
          </Button>

          <div className="border rounded-xl p-4 bg-gray-50 text-sm text-gray-500">
            Click button to preview modal behavior (overlay, animation, layout)
          </div>

          <Modal open={open} onClose={() => setOpen(false)}>
            <Modal.Header onClose={() => setOpen(false)}>
              Delete account
            </Modal.Header>

            <Modal.Body>Are you sure?</Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button variant="danger" onClick={() => setOpen(false)}>
                Delete
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </Card.Body>
    </Card>
  );
}
