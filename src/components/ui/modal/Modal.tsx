"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import { ModalProps, ModalCompound } from "./Modal.types";
import { modalStyles } from "./Modal.styles";

import { ModalHeader } from "./Modal.Header";
import { ModalBody } from "./Modal.Body";
import { ModalFooter } from "./Modal.Footer";

const Modal: ModalCompound = ({ open, onClose, children }) => {
  return (
    <AnimatePresence>
      {open && (
        <div className={modalStyles.wrapper}>
          {/* overlay */}
          <motion.div
            className={modalStyles.overlay}
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* content */}
          <motion.div
            className={modalStyles.content}
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// compound components
Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;