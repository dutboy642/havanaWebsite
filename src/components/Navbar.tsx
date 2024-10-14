import React from "react";

const Navbar: React.FC = () => {
    const navItems = [
        "Tất cả",
        "New",
        "Quần",
        "Áo",
        "Sweater & Hoodie",
        "Phụ kiện",
        "Sale",
        "Về chúng tôi",
        "Kiểm tra đơn hàng",
    ];

    return (
        <nav className="flex justify-center space-x-8 py-4">
            {navItems.map((item, index) => (
                <a
                    key={index}
                    href="#"
                    className="text-gray-700 hover:text-blue-600 text-sm font-medium"
                >
                    {item}
                </a>
            ))}
        </nav>
    );
};

export default Navbar;
