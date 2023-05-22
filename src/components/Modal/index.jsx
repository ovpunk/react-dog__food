import ReactDOM from "react-dom/client";
import styles from "./modal.module.css";

export const Modal = ({ children, isOpen = false }) => {
  if (!isOpen) return null;

  const handleExit = () => {};
  return ReactDOM.createPortal(
    <div onClick={handleExit} className={styles.modal__wrapper}>
      {children}
    </div>,
    document.getElementById("modal")
  );
};
