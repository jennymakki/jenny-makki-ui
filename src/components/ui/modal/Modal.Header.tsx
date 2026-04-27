"use client";

import { useModal } from "./Modal";
import { modalStyles } from "./Modal.styles";
import Button from "../button";

export default function ModalHeader({
  children,
  showClose = true,
}: {
  children: React.ReactNode;
  showClose?: boolean;
}) {
  const { onClose } = useModal();

  return (
    <div className={`${modalStyles.header} flex justify-between items-center`}>
      <div>{children}</div>

      {showClose && (
        <Button variant="ghost" size="small" onClick={onClose}>
          ✕
        </Button>
      )}
    </div>
  );
}