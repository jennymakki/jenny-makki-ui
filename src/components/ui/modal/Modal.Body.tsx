import { modalStyles } from "./Modal.styles";

export default function ModalBody({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={modalStyles.body}>{children}</div>;
}