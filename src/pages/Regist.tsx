import React, { useState } from "react";
import { useToast } from "../components/CustomToast";

const RegisterForm: React.FC = () => {
    const [formData, setFormData] = useState({
        lastName: "",
        firstName: "",
        phoneNumber: "",
        birthDate: "",
        email: "",
        password: "",
    });

    const { success, error } = useToast(); // Lấy hàm toast từ context

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            // Lưu dữ liệu vào localStorage
            const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
            existingUsers.push(formData);
            localStorage.setItem("users", JSON.stringify(existingUsers));

            // Hiển thị toast thông báo thành công và reset form
            success("Đăng ký thành công!");
            
            setFormData({
                lastName: "",
                firstName: "",
                phoneNumber: "",
                birthDate: "",
                email: "",
                password: "",
            });
        } catch (err) {
            console.error("Lỗi đăng ký:", err);
            error("Có lỗi xảy ra, vui lòng thử lại.");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md my-10">
                <h2 className="text-center text-2xl font-semibold mb-6">ĐĂNG KÝ TÀI KHOẢN</h2>
                <p className="text-center text-gray-600 mb-4">
                    Bạn đã có tài khoản? <a href="/LoginForm" className="text-cyan-500">Đăng nhập tại đây</a>
                </p>

                <form onSubmit={handleSubmit}>
                    <h3 className="text-lg font-semibold mb-4 text-center">THÔNG TIN CÁ NHÂN</h3>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">
                            Họ <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Họ"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">
                            Tên <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Tên"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">
                            Số điện thoại <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Số điện thoại"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Ngày sinh</label>
                        <input
                            type="text"
                            name="birthDate"
                            value={formData.birthDate}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Ngày/Tháng/Năm"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Email"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">
                            Mật khẩu <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Mật khẩu"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors duration-300"
                    >
                        Đăng ký
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

export default RegisterForm;
