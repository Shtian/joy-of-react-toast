import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts, handleDismiss }) {
  return (
    <ol className={styles.wrapper}>
      {toasts.length
        ? toasts.map((toast) => {
            return (
              <li className={styles.toastWrapper} key={toast.id}>
                <Toast
                  variant={toast.variant}
                  handleDismiss={() => {
                    handleDismiss(toast.id);
                  }}
                >
                  {toast.message}
                </Toast>
              </li>
            );
          })
        : null}
    </ol>
  );
}

export default ToastShelf;
