import { useState } from "react";

type NotificationType = "success" | "error" | "info";

interface SimpleNotification {
  message: string;
  type: NotificationType;
}

const useSimpleNotification = () => {
  const [notification, setNotification] = useState<SimpleNotification | null>(null);

  const showNotification = (message: string, type: NotificationType = "success") => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 5000);
  };

  const hideNotification = () => {
    setNotification(null);
  };

  return {
    notification,
    showNotification,
    hideNotification,
  };
};

export default useSimpleNotification;
