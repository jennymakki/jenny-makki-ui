import type { ReactNode } from "react";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export type ModalCompound = React.FC<ModalProps> & {
  Header: React.FC<{ children: ReactNode }>;
  Body: React.FC<{ children: ReactNode }>;
  Footer: React.FC<{ children: ReactNode }>;
};