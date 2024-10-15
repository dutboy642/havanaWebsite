import React from "react";

const Navbar: React.FC = () => {
    const navItems = [
        { name: "Tất cả", dropdownList: [] },
        { name: "New", dropdownList: [] },
        { name: "Quần", dropdownList: ["Quần dài", "Quần short"] },
        { name: "Áo", dropdownList: ["Áo thun", "Áo sơ mi"] },
        { name: "Sweater & Hoodie", dropdownList: ["Sweater", "Hoodie"] },
        { name: "Phụ kiện", dropdownList: [] },
        { name: "Sale", dropdownList: [] },
        { name: "Về chúng tôi", dropdownList: [] },
        { name: "Kiểm tra đơn hàng", dropdownList: [] },
    ];

    return (
        <nav className="flex justify-center space-x-8 py-4">
            {navItems.map((item, index) => (
                < div
                    key={index}
                >
                    <a id={"dropdownHoverButton" + index} data-dropdown-toggle={"dropdownHover" + index} data-dropdown-trigger="hover"
                        href="#"
                        className="text-gray-700 text-sm font-medium hover:cursor-pointer"
                    >

                        <div className="relative group inline-block">
                            <span className="cursor-pointer">{item.name}</span>
                            <span
                                className="absolute left-0 bottom-0 h-[1px] w-0 bg-black 
                   group-hover:w-full transition-all duration-300 ease-in-out"
                            ></span>
                        </div>
                    </a>
                    {
                        item.dropdownList.length > 0 && (
                            <div id={"dropdownHover" + index} className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700" data-dropdown-placement="bottom-start">
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                                    {item.dropdownList.map((dropdownItem, index) => (
                                        <div
                                            key={index}
                                        >
                                            <li>
                                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{dropdownItem}</a>
                                            </li>


                                        </div>
                                    ))}


                                </ul>
                            </div>
                        )
                    }
                </div>
            ))}
        </nav>
    );
};

export default Navbar;
