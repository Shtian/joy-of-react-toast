import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { toastContext } from "../Context";

function ToastShelf() {
  const { toasts, clearToasts } = React.useContext(toastContext);
  useEscapeKey(clearToasts);
  return (
    <ol className={styles.wrapper}>
      {toasts.length
        ? toasts.map((toast) => {
            return (
              <li className={styles.toastWrapper} key={toast.id}>
                <Toast variant={toast.variant} id={toast.id}>
                  {toast.message}
                </Toast>
              </li>
            );
          })
        : null}
    </ol>
  );
}

const useEscapeKey = (callback) => {
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        callback();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  });
};

export default ToastShelf;
