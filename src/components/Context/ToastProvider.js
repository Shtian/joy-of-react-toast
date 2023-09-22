import React from "react";

export const toastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);
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
  const value = {
    toasts,
    addToast,
    removeToast,
  };
  return (
    <toastContext.Provider value={value}>{children}</toastContext.Provider>
  );
}

export default ToastProvider;
