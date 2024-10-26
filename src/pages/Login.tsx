import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Đảm bảo bạn đã cài đặt react-router-dom
import { useToast } from "../components/CustomToast";
import { useAuth } from "../components/AuthContext";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [errorT, setErrorT] = useState("");
    const navigate = useNavigate(); // Dùng để chuyển hướng sau khi đăng nhập thành công
    const { success, error } = useToast();
    const { login } = useAuth(); // Lấy trạng thái và hàm logout từ context

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Lấy danh sách người dùng từ localStorage
        const users = JSON.parse(localStorage.getItem("users") || "[]");

        // Tìm người dùng có email và mật khẩu khớp
        const user = users.find(
            (u: { email: string; password: string }) =>
                u.email === email && u.password === password
        );

        if (user) {
            success("Đăng nhập thành công!");
            localStorage.setItem("isLogin", '1');
            localStorage.setItem('user', JSON.stringify(user))
            setTimeout(() => navigate("/"), 2000);
            login();
        } else {
            error("Email hoặc mật khẩu không đúng.");
        }

    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
            <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
                <h2 className="text-2xl font-semibold text-center mb-2">
                    ĐĂNG NHẬP TÀI KHOẢN
                </h2>
                <p className="text-center text-sm text-gray-600 mb-6">
                    Bạn chưa có tài khoản?{" "}
                    <a href="/RegistForm" className="text-blue-500 hover:underline">
                        Đăng ký tại đây
                    </a>
                </p>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">
                            Mật khẩu <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Mật khẩu"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* {errorT && (
                        <div className="mb-4 text-red-500 text-sm text-center">
                            {errorT}
                        </div>
                    )} */}

                    <div className="mb-4 text-right">
                        <a href="#" className="text-sm text-blue-500 hover:underline">
                            Quên mật khẩu? Nhấn vào đây
                        </a>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
                    >
                        Đăng nhập
                    </button>
                </form>

                <div className="my-6 text-center text-sm text-gray-500">Hoặc đăng nhập bằng</div>

                <div className="flex justify-around">
                    <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                        <i className="fa fa-facebook"></i>
                        <span>Facebook</span>
                    </button>
                    <button className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition">
                        <i className="fa fa-google"></i>
                        <span>Google</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
