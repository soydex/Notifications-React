import React, { useEffect } from "react";
import { CheckCircle, XCircle } from "lucide-react";
import type { NotificationProps } from "../types";

export const Notification: React.FC<NotificationProps> = ({
  notification,
  onClose,
}) => {
  useEffect(() => {
    if (notification?.show) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [notification, onClose]);

  if (!notification) return null;

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 transform transition-all duration-300 ${
        notification.show
          ? "translate-y-0 opacity-100"
          : "translate-y-full opacity-0"
      }`}
    >
      <div
        className={`flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg min-w-[300px] ${
          notification.type === "success"
            ? "bg-green-500/80 text-white"
            : "bg-red-500/50 text-white"
        }`}
      >
        {notification.type === "success" ? (
          <CheckCircle className="w-5 h-5" />
        ) : (
          <XCircle className="w-5 h-5" />
        )}
        <span className="flex-1">{notification.message}</span>
        <button
          onClick={onClose}
          className="text-white hover:text-gray-200 transition-colors"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default Notification;
