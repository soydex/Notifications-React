import React, { useState } from "react";
import {
  CheckCircle,
  XCircle,
  Bell,
  AlertCircle,
  Home,
  Settings,
} from "lucide-react";
type NotificationType = "success" | "error";

interface AnimatedNotification {
  message: string;
  type: NotificationType;
  show: boolean;
}

interface SimpleNotification {
  message: string;
  type: NotificationType;
}

interface NotificationProps {
  notification: AnimatedNotification | null;
  onClose: () => void;
}

interface SimpleNotificationProps {
  notification: SimpleNotification | null;
}

// Hook pour les notifications animées (style Home.tsx)
const useNotification = () => {
  const [notification, setNotification] = useState<AnimatedNotification | null>(
    null
  );

  const showNotification = (
    message: string,
    type: NotificationType = "success"
  ) => {
    setNotification({ message, type, show: true });
  };

  const hideNotification = () => {
    setNotification((prev) => (prev ? { ...prev, show: false } : null));
    setTimeout(() => setNotification(null), 300);
  };

  return { notification, showNotification, hideNotification };
};

// Hook pour les notifications simples (style Admin.tsx)
const useSimpleNotification = () => {
  const [notification, setNotification] = useState<SimpleNotification | null>(
    null
  );

  const showNotification = (
    message: string,
    type: NotificationType = "success"
  ) => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 5000);
  };

  const hideNotification = () => {
    setNotification(null);
  };

  return { notification, showNotification, hideNotification };
};

// Composant Notification animée (style Home.tsx)
const Notification: React.FC<NotificationProps> = ({
  notification,
  onClose,
}) => {
  React.useEffect(() => {
    if (notification && notification.show) {
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
            ? "bg-green-500 text-white"
            : "bg-red-500 text-white"
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

// Composant SimpleNotification (style Admin.tsx)
const SimpleNotification: React.FC<SimpleNotificationProps> = ({
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

const TestNotifications = () => {
  // Test des notifications animées (Home.tsx style)
  const {
    notification: animatedNotif,
    showNotification: showAnimated,
    hideNotification: hideAnimated,
  } = useNotification();

  // Test des notifications simples (Admin.tsx style)
  const { notification: simpleNotif, showNotification: showSimple } =
    useSimpleNotification();

  // État pour suivre quel type de test est actif
  const [activeTest, setActiveTest] = useState("animated");

  const testMessages: Record<NotificationType, string[]> = {
    success: [
      "Opération réussie !",
      "Données sauvegardées avec succès",
      "Utilisateur créé",
      "Email envoyé",
      "Configuration mise à jour",
    ],
    error: [
      "Erreur lors de la connexion",
      "Données invalides",
      "Accès refusé",
      "Timeout de la requête",
      "Erreur serveur 500",
    ],
  };

  const getRandomMessage = (type: NotificationType): string => {
    const messages = testMessages[type];
    return messages[Math.floor(Math.random() * messages.length)];
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 dark:bg-zinc-800 text-gray-800 dark:text-gray-200">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6 dark:bg-zinc-700">
          <h1 className="text-3xl font-bold text-gray-800 mb-2 dark:text-gray-100">
            <Bell className="inline w-8 h-8 mr-2 text-blue-500" />
            Test du Système de Notifications
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Testez les deux types de notifications : animées (Home.tsx) et
            simples (Admin.tsx)
          </p>
        </div>

        {/* Sélecteur de type */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6 dark:bg-zinc-700">
          <h2 className="text-xl font-semibold mb-4">
            Type de notification à tester
          </h2>
          <div className="flex gap-4">
            <button
              onClick={() => setActiveTest("animated")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                activeTest === "animated"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <Home className="w-4 h-4" />
              Notifications Animées (Home.tsx)
            </button>
            <button
              onClick={() => setActiveTest("simple")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                activeTest === "simple"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <Settings className="w-4 h-4" />
              Notifications Simples (Admin.tsx)
            </button>
          </div>
        </div>

        {/* Zone de test pour notifications simples */}
        {activeTest === "simple" && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-6 dark:bg-zinc-700">
            <SimpleNotification notification={simpleNotif} />
          </div>
        )}

        {/* Boutons de test */}
        <div className="bg-white rounded-lg shadow-md p-6 dark:bg-zinc-700">
          <h2 className="text-xl font-semibold mb-4">
            {activeTest === "animated"
              ? "Test Notifications Animées"
              : "Test Notifications Simples"}
          </h2>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <button
              onClick={() => {
                if (activeTest === "animated") {
                  showAnimated(getRandomMessage("success"), "success");
                } else {
                  showSimple(getRandomMessage("success"), "success");
                }
              }}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
            >
              <CheckCircle className="w-5 h-5" />
              Test Succès
            </button>

            <button
              onClick={() => {
                if (activeTest === "animated") {
                  showAnimated(getRandomMessage("error"), "error");
                } else {
                  showSimple(getRandomMessage("error"), "error");
                }
              }}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
            >
              <XCircle className="w-5 h-5" />
              Test Erreur
            </button>
          </div>

          {/* Tests rapides */}
          <div className="border-t pt-4">
            <h3 className="text-lg font-medium mb-3">
              Tests rapides multiples
            </h3>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => {
                  for (let i = 0; i < 3; i++) {
                    setTimeout(() => {
                      if (activeTest === "animated") {
                        showAnimated(
                          `Test ${i + 1}: ${getRandomMessage("success")}`,
                          "success"
                        );
                      } else {
                        showSimple(
                          `Test ${i + 1}: ${getRandomMessage("success")}`,
                          "success"
                        );
                      }
                    }, i * 500);
                  }
                }}
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors text-sm"
              >
                3 Succès en série
              </button>

              <button
                onClick={() => {
                  if (activeTest === "animated") {
                    showAnimated(
                      "Notification très très longue pour tester le comportement avec beaucoup de texte et voir comment elle s'affiche",
                      "success"
                    );
                  } else {
                    showSimple(
                      "Notification très très longue pour tester le comportement avec beaucoup de texte et voir comment elle s'affiche",
                      "success"
                    );
                  }
                }}
                className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-md transition-colors text-sm"
              >
                Message long
              </button>

              <button
                onClick={() => {
                  if (activeTest === "animated") {
                    showAnimated("Court", "error");
                  } else {
                    showSimple("Court", "error");
                  }
                }}
                className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md transition-colors text-sm"
              >
                Message court
              </button>
            </div>
          </div>
        </div>

        {/* Documentation live */}
        <div className="bg-gray-800 text-gray-100 rounded-lg p-6 mt-6">
          <h3 className="text-lg font-semibold mb-3">
            Code d'exemple en cours :
          </h3>
          <pre className="text-sm overflow-x-auto">
            <code>
              {activeTest === "animated"
                ? `// Style Home.tsx - Notification animée
const { notification, showNotification, hideNotification } = useNotification();

showNotification("Message de succès", "success");
showNotification("Message d'erreur", "error");

<Notification 
  notification={notification} 
  onClose={hideNotification} 
/>`
                : `// Style Admin.tsx - Notification simple
const { notification, showNotification } = useSimpleNotification();

showNotification("Message de succès", "success");
showNotification("Message d'erreur", "error");

<SimpleNotification notification={notification} />`}
            </code>
          </pre>
        </div>
      </div>

      {/* Notifications animées */}
      {activeTest === "animated" && (
        <Notification notification={animatedNotif} onClose={hideAnimated} />
      )}
    </div>
  );
};

export default TestNotifications;
