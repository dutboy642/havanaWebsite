import React from "react";

const AboutUs: React.FC = () => {
    return (
        <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
            {/* Ảnh Header */}
            <div className="w-full">
                <img
                    src="https://via.placeholder.com/1200x600" // Thay bằng link ảnh của bạn
                    alt="Monat Blue"
                    className="w-full h-auto"
                />
            </div>

            {/* Phần giới thiệu chính */}
            <section className="text-center">
                <h1 className="text-3xl font-semibold mb-4">VỀ CHÚNG TÔI...</h1>
                <p className="text-lg text-gray-600">
                    HAVANA - cửa hàng cung cấp các sản phẩm thời trang nữ trendy tại Đà Nẵng
                </p>
            </section>

            {/* Phần giới thiệu các khối */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Khối 1 */}
                <div className="bg-gray-100 p-6 rounded-lg">
                    <img
                        src="https://via.placeholder.com/600x400" // Thay bằng link ảnh thực tế
                        alt="Giới thiệu 1"
                        className="w-full h-auto rounded-lg mb-4"
                    />
                    <h2 className="text-2xl font-semibold mb-2">TẦM NHÌN...</h2>
                    <p className="text-gray-600">

                        Tạo dựng cộng đồng thời trang bền vững.
                        Tạo ra điểm đến lý tưởng để khách hàng có thể thoải mái chọn lựa, khám phá xu hướng thời trang mới và tìm kiếm phong cách riêng cho mình.
                        Tạo ra những sản phẩm thời trang chất lượng với giá cả phải chăng.
                        Mang lại cho khách hàng những trải nghiệm mua sắm tuyệt vời nhất.
                    </p>
                </div>

                {/* Khối 2 */}
                <div className="bg-gray-100 p-6 rounded-lg">
                    <img
                        src="https://via.placeholder.com/600x400" // Thay bằng link ảnh thực tế
                        alt="Giới thiệu 2"
                        className="w-full h-auto rounded-lg mb-4"
                    />
                    <h2 className="text-2xl font-semibold mb-2">SỨ MỆNH...</h2>
                    <p className="text-gray-600">
                        Từ thời trang đến lối sống, chúng tôi luôn hướng tới phong cách hòa nhập và tinh thần sáng tạo,
                        để khẳng định bản sắc của từng cá nhân.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
