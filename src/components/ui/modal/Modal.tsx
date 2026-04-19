import { ModalProps } from "./Modal.types";

export function Modal({ open, onClose, children }: ModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      <div className="relative bg-white rounded-2xl p-6 shadow-xl min-w-[300px]">
        {children}
      </div>

    </div>
  );
}