import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import ToastShelf from "../ToastShelf/ToastShelf";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [message, setMessage] = React.useState("");
  const [toasts, setToasts] = React.useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    const id = crypto.randomUUID();
    setToasts((prevToasts) => {
      return [
        ...prevToasts,
        {
          message,
          variant,
          id,
        },
      ];
    });
  }

  function handleDismiss(id) {
    setToasts((prevToasts) => {
      return prevToasts.filter((toast) => toast.id !== id);
    });
  }
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <form className={styles.controlsWrapper} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((option, idx) => {
              var htmlId = `variant-${idx}`;
              return (
                <label htmlFor={htmlId} key={htmlId}>
                  <input
                    id={htmlId}
                    type="radio"
                    name={option}
                    value={option}
                    checked={variant === option}
                    onChange={(e) => setVariant(e.target.value)}
                  />
                  {option}
                </label>
              );
            })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button type="submit">Pop Toast!</Button>
          </div>
        </div>
      </form>
      <ToastShelf toasts={toasts} handleDismiss={handleDismiss} />
    </div>
  );
}

export default ToastPlayground;
