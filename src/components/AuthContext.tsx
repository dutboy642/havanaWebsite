import { createContext, useState, useContext, ReactNode } from "react";

// Tạo interface cho context
interface AuthContextType {
    isLoggedIn: boolean;
    login: () => void;
    logout: () => void;
}

// Khởi tạo AuthContext
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Custom hook để sử dụng AuthContext
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

// Tạo Provider để bao quanh các thành phần cần sử dụng auth
export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(
        localStorage.getItem("isLogin") === "1"
    );

    // Hàm đăng nhập
    const login = () => {
        localStorage.setItem("isLogin", "1");
        // localStorage.setItem("user",
        setIsLoggedIn(true);
    };

    // Hàm đăng xuất
    const logout = () => {
        localStorage.removeItem("isLogin");
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
