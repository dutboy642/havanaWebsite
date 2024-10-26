import React from "react";

const ContactUs: React.FC = () => {
    return (
        <div className="max-w-6xl mx-auto px-6 py-12 mb-20">
            <h1 className="text-4xl font-bold text-center mb-8">
                Liên Hệ Với Chúng Tôi</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Số Điện Thoại */}
                <div className="bg-gray-100 p-6 rounded-lg text-center hover:cursor-pointer bg-gray-100 shadow-lg rounded-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow">
                    <h2 className="text-2xl font-semibold mb-4 text-cyan-500">Số Điện Thoại</h2>

                    <p className="text-lg text-gray-600">
                        <i className="fa me-2 fa-phone" aria-hidden="true"></i>
                        0383 502 273</p>
                </div>

                {/* Email */}
                <div className="bg-gray-100 p-6 rounded-lg text-center hover:cursor-pointer bg-gray-100 shadow-lg rounded-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow">
                    <h2 className="text-2xl font-semibold mb-4 text-cyan-500">Email</h2>
                    <p className="text-lg text-gray-600">
                        <i className="fa me-2 fa-envelope" aria-hidden="true"></i>
                        contact@havana.com</p>
                </div>

                {/* Địa Chỉ */}
                <div className="bg-gray-100 p-6 rounded-lg text-center hover:cursor-pointer bg-gray-100 shadow-lg rounded-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow">
                    <h2 className="text-2xl font-semibold mb-4 text-cyan-500">Địa Chỉ</h2>
                    <p className="text-lg text-gray-600">
                        <i className="fa me-2 fa-address-card" aria-hidden="true"></i>
                        Đà Nẵng: 261-263 Phan Châu Trinh</p>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
