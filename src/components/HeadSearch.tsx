// components/HeaderSearch.tsx
import logo from "../assets/shop_logo2.png"
import UserIcon from "./UserIcon";
import SearchIcon from "./SearchIcon";
import CartIcon from "./CartIcon";
import { FiSearch } from "react-icons/fi";
// import { useNavigate } from "react-router-dom";
import { useState } from "react";
const HeaderSearch: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    // const navigate = useNavigate();

    const handleSearch = () => {
        if (inputValue.trim()) {
            // Chuyển hướng đến trang searchresults với query parameter
            window.location.href = `/searchresults?search=${encodeURIComponent(inputValue)}`;
        }
    };
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };
    return (
        // <header className="flex items-center justify-between px-8 py-4 border-b">
        //     {/* Logo */}
        //     {/* <div className="text-blue-700 text-2xl font-bold">HAVANA</div> */}
        //     <img src={logo} className="w-24 py-2 rounded" alt="" />

        //     {/* Search Bar */}
        //     <div className="relative flex items-center w-1/2">
        //         <input
        //             type="text"
        //             placeholder="Tìm theo tên sản phẩm..."
        //             className="w-full py-2 px-4 rounded-full border focus:outline-none focus:ring-2 focus:ring-black"
        //             onChange={(e) => setInputValue(e.target.value)}
        //             value={inputValue}
        //             onKeyDown={handleKeyDown}
        //         />
        //         <button onClick={handleSearch} className="absolute right-2 bg-black p-2 rounded-full">
        //             <FiSearch className="text-white" size={18} />
        //         </button>
        //     </div>

        //     {/* Icons */}
        //     <div className="flex items-center space-x-6">
        //         {/* <FiSearch size={24} /> */}
        //         <SearchIcon />
        //         <UserIcon name="headsearch" />
        //         <div className="relative">
        //             {/* <FiShoppingCart size={24} /> */}
        //             <CartIcon />
        //             <span className="absolute -top-1 -right-2 bg-blue-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
        //                 0
        //             </span>
        //         </div>
        //     </div>
        // </header>
        <header className="flex flex-wrap items-center justify-between px-4 md:px-8 py-4 border-b">
            {/* Logo */}
            <img src={logo} className="w-20 md:w-24 py-2 rounded" alt="Shop Logo" />

            {/* Search Bar */}
            <div className="relative flex items-center w-full md:w-1/2 mt-4 md:mt-0 order-3 md:order-2">
                <input
                    type="text"
                    placeholder="Tìm theo tên sản phẩm..."
                    className="w-full py-2 px-4 rounded-full border focus:outline-none focus:ring-2 focus:ring-black"
                    onChange={(e) => setInputValue(e.target.value)}
                    value={inputValue}
                    onKeyDown={handleKeyDown}
                />
                <button onClick={handleSearch} className="absolute right-2 bg-black p-2 rounded-full">
                    <FiSearch className="text-white" size={18} />
                </button>
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-4 md:space-x-6 mt-4 md:mt-0 order-2 md:order-3">
                <SearchIcon />
                <UserIcon name="headsearch" />
                <div className="relative">
                    <CartIcon />
                    <span className="absolute -top-1 -right-2 bg-blue-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                        0
                    </span>
                </div>
            </div>
        </header>
    );
};

export default HeaderSearch;
