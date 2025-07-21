# Système de Notifications - Guide d'utilisation

## Composants créés

### 1. `Notification` - Notification avec animation (style Home.tsx)
Notification toast avec animation de disparition automatique, positionnée en bas à droite.

### 2. `SimpleNotification` - Notification simple (style Admin.tsx)
Notification inline simple avec disparition automatique après 5 secondes.

### 3. `useNotification` - Hook pour les notifications animées
Hook personnalisé pour gérer les notifications avec animation.

### 4. `useSimpleNotification` - Hook pour les notifications simples
Hook personnalisé pour gérer les notifications simples.

## Utilisation

### Pour remplacer le système dans Home.tsx :

```javascript
import React from "react";
import useNotification from "../hooks/useNotification";
import Notification from "../components/Notification";

function Home() {
  const { notification, showNotification, hideNotification } = useNotification();

  // Utilisation
  const handleSomeAction = () => {
    // Pour une notification de succès
    showNotification("Action réussie !", "success");
    
    // Pour une notification d'erreur
    showNotification("Erreur lors de l'action", "error");
  };

  return (
    <div>
      {/* Votre contenu */}
      
      {/* Notification Toast */}
      <Notification 
        notification={notification} 
        onClose={hideNotification} 
      />
    </div>
  );
}
```

### Pour remplacer le système dans Admin.tsx :

```javascript
import React from "react";
import useSimpleNotification from "../hooks/useSimpleNotification";
import SimpleNotification from "../components/SimpleNotification";

function Admin() {
  const { notification, showNotification, hideNotification } = useSimpleNotification();

  // Utilisation
  const handleSomeAction = () => {
    // Pour une notification de succès
    showNotification("Action réussie !", "success");
    
    // Pour une notification d'erreur
    showNotification("Erreur lors de l'action", "error");
  };

  return (
    <div>
      {/* Notifications */}
      <SimpleNotification notification={notification} />
      
      {/* Votre contenu */}
    </div>
  );
}
```

## Avantages du nouveau système

1. **Réutilisabilité** : Les composants peuvent être utilisés dans n'importe quelle page
2. **Consistance** : Même comportement dans toute l'application
3. **Maintenabilité** : Code centralisé, plus facile à modifier
4. **Personnalisation** : Facilement extensible pour ajouter de nouveaux types
5. **Clean Code** : Sépare la logique de notification du reste du composant

## Types de notifications supportés

- `"success"` : Notification verte (par défaut)
- `"error"` : Notification rouge

## Personnalisation

Pour ajouter de nouveaux types de notifications, modifiez les composants et ajoutez les styles CSS correspondants.
