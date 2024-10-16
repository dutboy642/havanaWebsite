import React from "react";
import { FiUser } from "react-icons/fi";

const UserIcon: React.FC = () => {
    return (
        <div className="cursor-pointer">
            <div data-popover-target="popover-bottom" data-popover-placement="bottom" >
                <FiUser className="text-[#79D1C3]" size={24} />
            </div>
            <div data-popover id="popover-bottom" role="tooltip" className="absolute z-10 invisible inline-block w-32 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                    <li>
                        <a href="/LoginForm" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Đăng nhập</a>
                    </li>
                    <li>
                        <a href="/RegistForm" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Đăng kí</a>
                    </li>
                </ul>
                <div data-popper-arrow></div>
            </div>
        </div>
    );
};

export default UserIcon;
