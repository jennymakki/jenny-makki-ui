import Modal from "./Modal";
import { ModalHeader } from "./Modal.Header";
import { ModalBody } from "./Modal.Body";
import { ModalFooter } from "./Modal.Footer";

export default Object.assign(Modal, {
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
});

export type { ModalProps } from "./Modal.types";