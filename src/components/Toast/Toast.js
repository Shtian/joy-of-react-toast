import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";
import { toastContext } from "../Context";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ variant = notice, id, children }) {
  const { removeToast } = React.useContext(toastContext);
  const IconTag = ICONS_BY_VARIANT[variant];
  const toastClassName = `${styles.toast} ${styles[variant]}`;
  return (
    <div className={toastClassName}>
      <div className={styles.iconContainer}>
        <IconTag size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>{variant} -</VisuallyHidden>
        {children}
      </p>
      <button
        className={styles.closeButton}
        onClick={() => {
          removeToast(id);
        }}
        aria-label="Dismiss message"
        aria-live="off"
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
