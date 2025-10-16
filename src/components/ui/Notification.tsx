// src/components/ui/Notification.tsx
import React from 'react';

interface NotificationProps {
  message: string;
}

const Notification = ({ message }: NotificationProps) => {
  return (
    <div className="fixed bottom-24 left-1/2 -translate-x-1/2 bg-black bg-opacity-75 text-white px-4 py-2 rounded-lg">
      {message}
    </div>
  );
};

export default Notification;
