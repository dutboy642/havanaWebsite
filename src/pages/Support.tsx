import React from "react";

const CustomerSupport: React.FC = () => {
    return (
        <div className="bg-gray-50 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 text-center mb-12">
                    Hỗ Trợ Khách Hàng
                </h2>

                <div className="space-y-10 py-16">
                    {/* Chính sách bảo hành */}
                    <div className="hover:cursor-pointer bg-white shadow-lg rounded-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow">
                        <img
                            src="https://img.icons8.com/ios-filled/50/000000/warranty.png"
                            alt="Chính Sách Bảo Hành"
                            className="h-16 w-16 mb-4"
                        />
                        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                            Chính Sách Bảo Hành
                        </h3>
                        <p className="text-gray-600">
                            Tất cả sản phẩm của chúng tôi đều có chính sách bảo hành trong vòng 12 tháng. Nếu sản phẩm gặp phải lỗi do nhà sản xuất, vui lòng liên hệ với chúng tôi để được hỗ trợ.
                        </p>
                    </div>

                    {/* Chính sách đổi trả hàng */}
                    <div className="hover:cursor-pointer bg-white shadow-lg rounded-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow">
                        <img
                            src="https://img.icons8.com/ios-filled/50/000000/exchange.png"
                            alt="Chính Sách Đổi Trả"
                            className="h-16 w-16 mb-4"
                        />
                        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                            Chính Sách Đổi Trả Hàng
                        </h3>
                        <p className="text-gray-600">
                            Bạn có thể đổi hoặc trả hàng trong vòng 7 ngày kể từ ngày nhận hàng. Sản phẩm phải còn nguyên tem mác và chưa qua sử dụng. Vui lòng liên hệ với chúng tôi để biết thêm chi tiết.
                        </p>
                    </div>

                    {/* Chính sách vận chuyển */}
                    <div className="hover:cursor-pointer bg-white shadow-lg rounded-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow">
                        <img
                            src="https://img.icons8.com/ios-filled/50/000000/delivery.png"
                            alt="Chính Sách Vận Chuyển"
                            className="h-16 w-16 mb-4"
                        />
                        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                            Chính Sách Vận Chuyển
                        </h3>
                        <p className="text-gray-600">
                            Chúng tôi hỗ trợ vận chuyển miễn phí cho đơn hàng từ 500.000đ trong nội thành. Đơn hàng sẽ được giao trong vòng 3-5 ngày làm việc. Vui lòng kiểm tra trạng thái đơn hàng qua tài khoản của bạn.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        // <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        //     {/* Ảnh Header */}
        //     <div className="w-full">
        //         <img
        //             src="https://kientrucdanang.info/images/filedulieu/images/tin-tuc/z5265616029877_63ed87328726f49bf169a22bce253b96-min.jpg?fbclid=IwY2xjawF802RleHRuA2FlbQIxMAABHZO2vlImLBu2LaRkRSejLUTD8jNNxPd8_O7kQVl9TB8whpD4uue6BO1egw_aem_wwMXqcJrds47J-xBRyiSbQ" // Thay bằng link ảnh của bạn
        //             alt="Monat Blue"
        //             className="w-full h-auto"
        //         />
        //     </div>

        //     {/* Phần giới thiệu chính */}
        //     <section className="text-center">
        //         <h1 id="aboutUs" className="text-3xl font-semibold mb-4">VỀ CHÚNG TÔI...</h1>
        //         <p className="text-lg text-gray-600">
        //             HAVANA - cửa hàng cung cấp các sản phẩm thời trang nữ trendy tại Đà Nẵng
        //         </p>
        //     </section>

        //     {/* Phần giới thiệu các khối */}
        //     <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
        //         {/* Khối 1 */}
        //         <div className="bg-gray-100 p-6 rounded-lg">
        //             <img
        //                 src="https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m19rylc8rcpoa0.webp?fbclid=IwY2xjawF82NhleHRuA2FlbQIxMAABHZu0dnUg_R8G-viyZ7LA8_SNMGx8yzgNDEx8hA9jMHgwtyLIcO01vNDjbQ_aem_lBVxDgozZ673_FDbWhDhZA" // Thay bằng link ảnh thực tế
        //                 alt="Giới thiệu 1"
        //                 className="w-full h-auto rounded-lg mb-4"
        //             />
        //             <h2 id="vision" className="text-2xl font-semibold mb-2 text-center">TẦM NHÌN...</h2>
        //             <p className="text-gray-600">

        //                 Tạo dựng cộng đồng thời trang bền vững.
        //                 Tạo ra điểm đến lý tưởng để khách hàng có thể thoải mái chọn lựa, khám phá xu hướng thời trang mới và tìm kiếm phong cách riêng cho mình.
        //                 Tạo ra những sản phẩm thời trang chất lượng với giá cả phải chăng.
        //                 Mang lại cho khách hàng những trải nghiệm mua sắm tuyệt vời nhất.
        //             </p>
        //         </div>

        //         {/* Khối 2 */}
        //         <div className="bg-gray-100 p-6 rounded-lg">
        //             <img
        //                 src="https://down-vn.img.susercontent.com/file/sg-11134201-22110-a4xok27m9gkvdc.webp?fbclid=IwY2xjawF82FZleHRuA2FlbQIxMAABHZu0dnUg_R8G-viyZ7LA8_SNMGx8yzgNDEx8hA9jMHgwtyLIcO01vNDjbQ_aem_lBVxDgozZ673_FDbWhDhZA" // Thay bằng link ảnh thực tế
        //                 alt="Giới thiệu 2"
        //                 className="w-full h-auto rounded-lg mb-4"
        //             />
        //             <h2 id="suMenh" className="text-2xl font-semibold mb-2 text-center">SỨ MỆNH...</h2>
        //             <p className="text-gray-600">
        //                 Từ thời trang đến lối sống, chúng tôi luôn hướng tới phong cách hòa nhập và tinh thần sáng tạo,
        //                 để khẳng định bản sắc của từng cá nhân.
        //             </p>
        //         </div>
        //     </div>
        // </div>
    );
};

export default CustomerSupport;
