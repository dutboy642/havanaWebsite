// components/HeaderSearch.tsx
import { FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";

const HeaderSearch: React.FC = () => {
    return (
        <header className="flex items-center justify-between px-8 py-4 border-b">
            {/* Logo */}
            <div className="text-blue-700 text-2xl font-bold">HAVANA</div>

            {/* Search Bar */}
            <div className="relative flex items-center w-1/2">
                <input
                    type="text"
                    placeholder="Tìm theo tên sản phẩm..."
                    className="w-full py-2 px-4 rounded-full border focus:outline-none focus:ring-2 focus:ring-black"
                />
                <button className="absolute right-2 bg-black p-2 rounded-full">
                    <FiSearch className="text-white" size={18} />
                </button>
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-6">
                <FiSearch size={24} />
                <FiUser size={24} />
                <div className="relative">
                    <FiShoppingCart size={24} />
                    <span className="absolute -top-1 -right-2 bg-blue-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                        0
                    </span>
                </div>
            </div>
        </header>
    );
};

export default HeaderSearch;
