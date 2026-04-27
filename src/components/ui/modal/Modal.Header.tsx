"use client";

import React from "react";

export type ModalHeaderProps = {
  children: React.ReactNode;
  className?: string;
  onClose?: () => void;
};

export function ModalHeader({
  children,
  className = "",
  onClose,
}: ModalHeaderProps) {
  return (
    <div
      className={`px-6 py-4 border-b font-semibold flex items-center justify-between ${className}`}
    >
      <div>{children}</div>

      {onClose && (
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-black transition text-lg leading-none"
          aria-label="Close modal"
        >
          ✕
        </button>
      )}
    </div>
  );
}