"use client";

import React from "react";

export type ModalFooterProps = {
  children: React.ReactNode;
  className?: string;
};

export function ModalFooter({ children, className = "" }: ModalFooterProps) {
  return (
    <div className={`px-6 py-4 border-t flex justify-end gap-2 ${className}`}>
      {children}
    </div>
  );
}