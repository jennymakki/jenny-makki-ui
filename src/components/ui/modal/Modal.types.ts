import type { ReactNode } from "react";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export interface ModalSectionProps {
  children: ReactNode;
}

export type ModalCompound = React.FC<ModalProps> & {
  Header: React.FC<ModalSectionProps>;
  Body: React.FC<ModalSectionProps>;
  Footer: React.FC<ModalSectionProps>;
};