import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { toastContext } from "../Context";

function ToastShelf() {
  const { toasts } = React.useContext(toastContext);
  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="notifications"
    >
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

export default ToastShelf;
