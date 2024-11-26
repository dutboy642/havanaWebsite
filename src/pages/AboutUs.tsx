import React from "react";
import FloatingButtons from "../components/FloatingButtons";

const AboutUs: React.FC = () => {
    return (
        <div className="w-full mx-auto px-6 py-12 space-y-12">
            {/* Ảnh Header */}
            <div className="w-full">
                <img
                    src="https://kientrucdanang.info/images/filedulieu/images/tin-tuc/z5265616029877_63ed87328726f49bf169a22bce253b96-min.jpg?fbclid=IwY2xjawF802RleHRuA2FlbQIxMAABHZO2vlImLBu2LaRkRSejLUTD8jNNxPd8_O7kQVl9TB8whpD4uue6BO1egw_aem_wwMXqcJrds47J-xBRyiSbQ" // Thay bằng link ảnh của bạn
                    alt="Monat Blue"
                    className="w-full h-auto"
                />
            </div>

            {/* Phần giới thiệu chính */}
            <section className="text-center">
                <h1 id="aboutUs" className="text-3xl font-semibold mb-4">VỀ CHÚNG TÔI...</h1>
                <p className="text-xl text-lg text-gray-600">
                    HAVANA - cửa hàng cung cấp các sản phẩm thời trang nữ trendy tại Đà Nẵng
                </p>
            </section>

            {/* Phần giới thiệu các khối */}
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 text-center">
                {/* Khối 1 */}
                <div className="bg-gray-100 p-6 rounded-lg">
                    <img
                        src="https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m19rylc8rcpoa0.webp?fbclid=IwY2xjawF82NhleHRuA2FlbQIxMAABHZu0dnUg_R8G-viyZ7LA8_SNMGx8yzgNDEx8hA9jMHgwtyLIcO01vNDjbQ_aem_lBVxDgozZ673_FDbWhDhZA" // Thay bằng link ảnh thực tế
                        alt="Giới thiệu 1"
                        className="w-full h-auto rounded-lg mb-4"
                    />
                    <h2 id="vision" className="text-2xl font-semibold mb-2 text-center">TẦM NHÌN...</h2>
                    <p className="text-gray-600 text-xl ">

                        Tạo dựng cộng đồng thời trang bền vững.
                        Tạo ra điểm đến lý tưởng để khách hàng có thể thoải mái chọn lựa, khám phá xu hướng thời trang mới và tìm kiếm phong cách riêng cho mình.
                        Tạo ra những sản phẩm thời trang chất lượng với giá cả phải chăng.
                        Mang lại cho khách hàng những trải nghiệm mua sắm tuyệt vời nhất.
                    </p>
                </div>

                {/* Khối 2 */}
                <div className="bg-gray-100 p-6 rounded-lg">
                    <img
                        src="https://down-vn.img.susercontent.com/file/sg-11134201-22110-a4xok27m9gkvdc.webp?fbclid=IwY2xjawF82FZleHRuA2FlbQIxMAABHZu0dnUg_R8G-viyZ7LA8_SNMGx8yzgNDEx8hA9jMHgwtyLIcO01vNDjbQ_aem_lBVxDgozZ673_FDbWhDhZA" // Thay bằng link ảnh thực tế
                        alt="Giới thiệu 2"
                        className="w-full h-auto rounded-lg mb-4"
                    />
                    <h2 id="suMenh" className="text-2xl font-semibold mb-2 text-center">SỨ MỆNH...</h2>
                    <p className="text-gray-600 text-xl ">
                        Từ thời trang đến lối sống, chúng tôi luôn hướng tới phong cách hòa nhập và tinh thần sáng tạo,
                        để khẳng định bản sắc của từng cá nhân.
                    </p>
                </div>
            </div>
            <FloatingButtons></FloatingButtons>
        </div>
    );
};

export default AboutUs;
