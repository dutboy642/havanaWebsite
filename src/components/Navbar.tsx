import React from "react";

const Navbar: React.FC = () => {
    // const navItems = [
    //     { name: "Tất cả", dropdownList: [], link: "/All" },
    //     { name: "New", dropdownList: [], link: "/NewProduct" },
    //     { name: "Quần", dropdownList: [{ name: "Quần dài", link: "/LongTrousers" }, { name: "Quần short", link: "/ShortTrousers" }], link: "/Trousers" },
    //     { name: "Áo", dropdownList: [{ name: "Áo thun", link: "/TShirt" }, { name: "Áo sơ mi", link: "/GeneralShirt" }], link: "/shirt" },
    //     { name: "Sweater & Hoodie", dropdownList: [{ name: "Sweater", link: "/Sweater" }, { name: "Hoodie", link: "/Hoodie" }], link: "/SweaterAndHoodie" },
    //     { name: "Phụ kiện", dropdownList: [], link: "/Stuff" },
    //     { name: "Sale", dropdownList: [], link: "/Sale" },
    //     { name: "Về chúng tôi", dropdownList: [], link: "#" },
    //     { name: "Kiểm tra đơn hàng", dropdownList: [], link: "/CheckOrderPage" },
    // ];
    const navItems = [
        { name: "VỀ CHÚNG TÔI", dropdownList: [{ name: "Về chúng tôi", link: "/AboutUs#aboutUs" }, { name: "Tầm nhìn", link: "/AboutUs#vision" }, { name: "Sứ mệnh", link: "/AboutUs#suMenh" }], link: "/AboutUs" },
        { name: "SẢN PHẨM", dropdownList: [{ name: "Tất cả", link: "/All" }, { name: "Set đồ", link: "/Set" }, { name: "Quần", link: "/Trousers" }, { name: "Áo", link: "/Shirt" }, { name: "Váy", link: "/Skirt" }], link: "/All" },
        { name: "SALE", dropdownList: [], link: "/Sale" },
        { name: "HỖ TRỢ KHÁCH HÀNG", dropdownList: [{ name: "Chính sách bảo hành", link: "/Policy" }, { name: "Đổi, trả hàng", link: "/Exchange" }, { name: "Vận chuyển", link: "/Delivery" }], link: "/Support" },
        { name: "LIÊN HỆ", dropdownList: [{ name: "Địa chỉ", link: "/ContactUs#Address" }, { name: "Số điện thoại", link: "/ContactUs#Phone" }, { name: "Email", link: "/ContactUs#Email" }], link: "/ContactUs" },
    ]

    return (
        <nav className="bg-[#79D1C3] flex justify-center space-x-8 py-4">
            {navItems.map((item, index) => (
                < div
                    key={index}
                >
                    <a id={"dropdownHoverButton" + index} data-dropdown-toggle={"dropdownHover" + index} data-dropdown-trigger="hover"
                        href={item.link}
                        className="text-white text-gray-700 text-sm font-medium hover:cursor-pointer"
                    >

                        <div className="relative group inline-block">
                            <span className="cursor-pointer">{item.name}</span>
                            <span
                                className="absolute left-0 bottom-0 h-[1px] w-0 bg-white 
                   group-hover:w-full transition-all duration-300 ease-in-out"
                            ></span>
                        </div>
                    </a>
                    {
                        item.dropdownList.length > 0 && (
                            <div id={"dropdownHover" + index} className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-48 dark:bg-gray-700" data-dropdown-placement="bottom-start">
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                                    {item.dropdownList.map((dropdownItem, index) => (
                                        <div
                                            key={index}
                                        >
                                            <li>
                                                <a href={dropdownItem.link} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{dropdownItem.name}</a>
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
