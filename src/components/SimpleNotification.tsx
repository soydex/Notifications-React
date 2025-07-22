import React from "react";
import { CheckCircle, AlertCircle } from "lucide-react";
import type { SimpleNotificationProps } from "../types";

export const SimpleNotification: React.FC<SimpleNotificationProps> = ({
  notification,
}) => {
  if (!notification) return null;

  return (
    <div
      className={`mb-4 flex items-center gap-3 px-4 py-3 rounded-md ${
        notification.type === "success"
          ? "bg-green-100 text-green-800 border border-green-200"
          : "bg-red-100 text-red-800 border border-red-200"
      }`}
    >
      {notification.type === "success" ? (
        <CheckCircle className="w-5 h-5" />
      ) : (
        <AlertCircle className="w-5 h-5" />
      )}
      <span>{notification.message}</span>
    </div>
  );
};

export default SimpleNotification;
