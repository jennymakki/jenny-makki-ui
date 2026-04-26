import { modalStyles } from "./Modal.styles";

export default function ModalFooter({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={modalStyles.footer}>{children}</div>;
}