import React from "react";

interface CouponCardProps {
    title: string;
    description: string;
    expiry: string;
}

const CouponCard: React.FC<CouponCardProps> = ({ title, description, expiry }) => {
    return (
        <div className="flex border rounded-lg shadow-md p-4 w-80 mx-2 bg-white">
            {/* Phần bên trái */}
            <div className="flex-1">
                <h3 className="text-blue-600 font-bold text-lg">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
                <p className="text-gray-400 text-xs mt-2">HSD: {expiry}</p>
            </div>

            {/* Phân cách */}
            <div className="w-px bg-dotted border-r border-gray-300 mx-4"></div>

            {/* Phần nút Lưu */}
            <div className="flex items-center">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700">
                    Lưu
                </button>
            </div>
        </div>
    );
};

export default CouponCard;
