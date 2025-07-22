export type NotificationType = "success" | "error" | "info";

export interface AnimatedNotification {
  message: string;
  type: NotificationType;
  show: boolean;
}

export interface SimpleNotification {
  message: string;
  type: NotificationType;
}

export interface NotificationProps {
  notification: AnimatedNotification | null;
  onClose: () => void;
}

export interface SimpleNotificationProps {
  notification: SimpleNotification | null;
}
