import React, { createContext, useState, useContext } from "react";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState(null);
  const [showNotification, setShowNotification] = useState(false);

  const show = ({ type, title, description }) => {
    setNotification({ type, title, description });
    setShowNotification(true);

    // Auto-hide the notification after 5 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 5000);
  };

  const close = () => {
    setShowNotification(false);
  };

  return (
    <NotificationContext.Provider value={{ show }}>
      {children}

      {/* Notification Component */}
      {notification && (
        <div
          className={`fixed left-1/2 transform -translate-x-1/2 ${
            showNotification ? "bottom-8 opacity-100" : "-bottom-20 opacity-0"
          } transition-all duration-500 ease-in-out z-50 max-w-[340px] md:max-w-[400px] w-full`}
        >
          <div
            className={`flex items-center justify-between gap-3 p-4 rounded-lg shadow-lg ${
              notification.type === "success"
                ? "bg-gradient-to-r from-green-400 to-green-600"
                : "bg-gradient-to-r from-red-400 to-red-600"
            } text-white`}
          >
            {/* Icon */}
            <div className="text-2xl">
              {notification.type === "success" ? (
                <FaCheckCircle />
              ) : (
                <FaExclamationCircle />
              )}
            </div>

            {/* Notification Content */}
            <div className="flex flex-col">
              <span className="font-bold text-lg">{notification.title}</span>
              <span className="text-sm">{notification.description}</span>
            </div>

            {/* Close button */}
            <button onClick={close} className="text-xl font-bold">
              ×
            </button>
          </div>
        </div>
      )}
    </NotificationContext.Provider>
  );
};

// Custom Hook
export const useNotification = () => {
  return useContext(NotificationContext);
};
