import { modalStyles } from "./Modal.styles";

export default function ModalHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={modalStyles.header}>{children}</div>;
}