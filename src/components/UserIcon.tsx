import React, { useEffect, useState } from "react";
import { FiUser } from "react-icons/fi";
import { useAuth } from "./AuthContext";

interface UserIconProps {
    name: string;
}

const UserIcon: React.FC<UserIconProps> = ({ name }) => {
    const { isLoggedIn, logout } = useAuth(); // Lấy trạng thái và hàm logout từ context
    const [userName, setUserName] = useState('');
    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            try {
                const userData = JSON.parse(user);
                // Kiểm tra xem các thuộc tính first_name và last_name có tồn tại không
                const firstName = userData.firstName || '';
                const lastName = userData.lastName || '';

                // Cập nhật tên người dùng
                setUserName(`${firstName} ${lastName}`);
            } catch (error) {
                console.error("Lỗi phân tích cú pháp JSON:", error);
                // Nếu có lỗi, bạn có thể set tên mặc định hoặc xử lý lỗi theo cách khác
                setUserName(''); // Hoặc thông báo lỗi cho người dùng
            }
        } else {
            // Nếu không có user, set tên mặc định
            setUserName('');
        }
    }, [])
    return (
        <div className="cursor-pointer">
            <div data-popover-target={"popover-bottom" + name} data-popover-placement="bottom">
                <FiUser className="text-[#79D1C3]" strokeWidth={3} size={24} />
            </div>

            <div
                data-popover
                id={"popover-bottom" + name}
                role="tooltip"
                className="absolute z-10 invisible inline-block w-32 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
            >
                {isLoggedIn ? (
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                        <li>
                            <span className="block px-4 py-2">Xin chào, <span className="font-semibold text-cyan-500">{userName}</span>!</span>
                        </li>
                        <li>
                            <button
                                onClick={logout}
                                className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Đăng xuất
                            </button>
                        </li>
                    </ul>
                ) : (
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                        <li>
                            <a
                                href="/LoginForm"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Đăng nhập
                            </a>
                        </li>
                        <li>
                            <a
                                href="/RegistForm"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Đăng kí
                            </a>
                        </li>
                    </ul>
                )}
                <div data-popper-arrow></div>
            </div>
        </div>
    );
};

export default UserIcon;
