"use client";

import { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Card,
} from "@/src/components/ui";

export default function ModalPlayground() {
  const [open, setOpen] = useState(false);

  return (
    <Card>
      <Card.Header>Modal Playground</Card.Header>

      <Card.Body>
        <Button onClick={() => setOpen(true)}>Open modal</Button>

        <Modal open={open} onClose={() => setOpen(false)}>
          <ModalHeader>Example</ModalHeader>
          <ModalBody>This is a modal</ModalBody>
          <ModalFooter>
            <Button onClick={() => setOpen(false)}>Close</Button>
          </ModalFooter>
        </Modal>
      </Card.Body>
    </Card>
  );
}