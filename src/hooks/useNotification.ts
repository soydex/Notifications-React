import { useState } from "react";

type NotificationType = "success" | "error" | "info";

interface Notification {
  show: boolean;
  message: string;
  type: NotificationType;
  fadeOut: boolean;
}

const useNotification = () => {
  const [notification, setNotification] = useState<Notification>({
    show: false,
    message: "",
    type: "success",
    fadeOut: false,
  });

  const showNotification = (message: string, type: NotificationType = "success") => {
    setNotification({ show: false, message: "", type: "success", fadeOut: false });

    setTimeout(() => {
      setNotification({ show: true, message, type, fadeOut: false });
    }, 10);
  };

  const hideNotification = () => {
    setNotification({
      show: false,
      message: "",
      type: "success",
      fadeOut: false,
    });
  };

  return {
    notification,
    showNotification,
    hideNotification,
  };
};

export default useNotification;
