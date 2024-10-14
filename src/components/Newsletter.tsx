import React from 'react';

const Newsletter: React.FC = () => {
    return (
        <div>
            <h3 className="text-xl font-bold">ĐĂNG KÝ NHẬN TIN</h3>
            <p>Bạn muốn nhận khuyến mãi đặc biệt? Đăng ký ngay.</p>
            <div className="flex mt-2">
                <input
                    type="email"
                    placeholder="Nhập địa chỉ email"
                    className="px-4 py-2 w-full rounded-l-md text-black"
                />
                <button className="px-4 py-2 bg-blue-600 rounded-r-md">Đăng ký</button>
            </div>
            <div className="flex space-x-2 mt-4">
                {/* Icons for social media */}
                <i className="fab fa-facebook"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-youtube"></i>
                <i className="fab fa-tiktok"></i>
            </div>
        </div>
    );
};

export default Newsletter;
