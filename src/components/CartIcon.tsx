import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useProducts } from '../components/ProductContext';
import { Link } from "react-router-dom";

const CartIcon: React.FC = () => {
    // const cartItemCount = 3; // Có thể lấy từ state hoặc context
    const { amount } = useProducts();
    return (
        <Link to='/Cart' className="relative cursor-pointer">
            <FiShoppingCart strokeWidth={3} className="text-[#79D1C3]" size={24} />
            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {amount}
            </span>

        </Link>
    );
};

export default CartIcon;
