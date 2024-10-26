import React, { createContext, useContext } from "react";
import { ToastContainer, toast, ToastOptions } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// Context chứa các hàm tiện ích cho Toast
const ToastContext = createContext<{
    success: (message: string, options?: ToastOptions) => void;
    error: (message: string, options?: ToastOptions) => void;
}>({
    success: () => { }, // Hàm no-op
    error: () => { },   // Hàm no-op
});

// Component Provider để bọc ứng dụng và cung cấp các hàm toast
export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const success = (message: string, options?: ToastOptions) => {
        toast.success(message, options);
    };

    const error = (message: string, options?: ToastOptions) => {
        toast.error(message, options);
    };

    return (
        <ToastContext.Provider value={{ success, error }}>
            {children}
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
        </ToastContext.Provider>
    );
};

// Hook tiện ích để gọi toast từ bất kỳ component nào
export const useToast = () => useContext(ToastContext);
