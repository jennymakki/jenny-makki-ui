"use client";

import { createContext, useContext, useEffect } from "react";
import { createPortal } from "react-dom";
import type { ModalCompound } from "./Modal.types";
import { modalStyles } from "./Modal.styles";
import Button from "../button";

type ModalContextType = {
  onClose: () => void;
};

const ModalContext = createContext<ModalContextType | null>(null);

function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) {
    throw new Error("Modal compound components must be used inside Modal");
  }
  return ctx;
}

const Modal: ModalCompound = ({ open, onClose, children }) => {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <ModalContext.Provider value={{ onClose }}>
      <div className={modalStyles.wrapper}>
        <div className={modalStyles.overlay} onClick={onClose} />

        <div
          className={modalStyles.content}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </ModalContext.Provider>,
    document.body
  );
};

const Header = ({ children }: { children: React.ReactNode }) => {
  const { onClose } = useModal();

  return (
    <div className={modalStyles.header + " flex justify-between items-center"}>
      {children}
    </div>
  );
};

const Body = ({ children }: { children: React.ReactNode }) => (
  <div className={modalStyles.body}>{children}</div>
);

const Footer = ({ children }: { children: React.ReactNode }) => (
  <div className={modalStyles.footer}>{children}</div>
);

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export default Modal;
export { useModal };