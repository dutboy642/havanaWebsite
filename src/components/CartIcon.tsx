import React from "react";
import { FiShoppingCart } from "react-icons/fi";

const CartIcon: React.FC = () => {
    const cartItemCount = 0; // Có thể lấy từ state hoặc context

    return (
        <div className="relative cursor-pointer">
            <FiShoppingCart size={24} />
            {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {cartItemCount}
                </span>
            )}
        </div>
    );
};

export default CartIcon;
