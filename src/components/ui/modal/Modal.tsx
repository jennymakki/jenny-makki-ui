"use client";

import { createContext, useContext, useEffect } from "react";
import { ModalProps } from "./Modal.types";
import { modalStyles } from "./Modal.styles";

type ModalContextType = {
  onClose: () => void;
};

const ModalContext = createContext<ModalContextType | null>(null);

function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("Modal compound components must be used inside Modal");
  return ctx;
}

export default function Modal({ open, onClose, children }: ModalProps) {
  if (!open) return null;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <ModalContext.Provider value={{ onClose }}>
      <div className={modalStyles.wrapper}>
        <div className={modalStyles.overlay} onClick={onClose} />

        <div className={modalStyles.content}>{children}</div>
      </div>
    </ModalContext.Provider>
  );
}

function Header({ children }: { children: React.ReactNode }) {
  return <div className={modalStyles.header}>{children}</div>;
}

function Body({ children }: { children: React.ReactNode }) {
  return <div className={modalStyles.body}>{children}</div>;
}

function Footer({ children }: { children: React.ReactNode }) {
  return <div className={modalStyles.footer}>{children}</div>;
}

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;