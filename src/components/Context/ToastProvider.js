import React from "react";

export const toastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  useEscapeKey(clearToasts);

  function addToast(toast) {
    setToasts((prevToasts) => {
      return [...prevToasts, { id: crypto.randomUUID(), ...toast }];
    });
  }
  function removeToast(id) {
    setToasts((prevToasts) => {
      return prevToasts.filter((toast) => toast.id !== id);
    });
  }
  function clearToasts() {
    setToasts([]);
  }
  const value = {
    toasts,
    addToast,
    removeToast,
  };
  return (
    <toastContext.Provider value={value}>{children}</toastContext.Provider>
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
export default ToastProvider;
