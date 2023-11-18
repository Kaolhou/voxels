// import { useEffect } from "react";
import Modal from "react-modal";

export interface ImageModalProps {
  url: string;
  alt: string;
  isOpen: boolean;
}
export default function ImageModal({
  url,
  alt,
  isOpen,
  closeModal,
}: ImageModalProps & { closeModal: () => void }) {
  Modal.setAppElement("#modal");

  return (
    <Modal
      isOpen={isOpen}
      style={{
        overlay: {
          zIndex: 999,
        },
      }}
      className="teste"
      onRequestClose={closeModal}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick
      preventScroll={true}
      shouldReturnFocusAfterClose
    >
      <button
        onClick={closeModal}
        style={{ position: "absolute", top: "10px", left: "10px" }}
      >
        close
      </button>
      <img
        src={url}
        alt={alt}
        style={{ maxWidth: "100vw", maxHeight: "100vh" }}
      />
    </Modal>
  );
}
