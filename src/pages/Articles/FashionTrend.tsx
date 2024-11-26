import React from 'react';
import pic1 from '../../assets/bai2pic1.jpg'
import pic2 from '../../assets/bai2pic2.jpg'
import pic3 from '../../assets/bai2pic3.jpg'
import pic4 from '../../assets/bai2pic4.jpeg'
import pic5 from '../../assets/bai2pic5.jpg'
import FloatingButtons from '../../components/FloatingButtons';
const FashionTrends: React.FC = () => {
    return (
        <div>
            <nav className="flex mt-8 mb-4 ms-5" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                    <li className="inline-flex items-center">
                        <a href="/Articles" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                            <i className="me-2 fa fa-newspaper-o" aria-hidden="true"></i>
                            Blogs
                        </a>
                    </li>
                    <li aria-current="page">
                        <div className="flex items-center">
                            <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Xu Hướng Thời Trang Hiện Nay: Sự Hòa Quyện Giữa Tính Bền Vững và Cá Nhân Hóa</span>
                        </div>
                    </li>
                </ol>
            </nav>
            <div className="p-6 w-full mx-auto">
                <h3 className="text-3xl font-bold text-black leading-10 mt-4 mb-2">
                    Xu Hướng Thời Trang Hiện Nay: Sự Hòa Quyện Giữa Tính Bền Vững và Cá Nhân Hóa
                </h3>
                <p className="text-base text-gray-800 leading-6 my-3 text-justify">
                    Trong thời đại mà thời trang không chỉ dừng lại ở việc thể hiện gu thẩm mỹ mà còn phản ánh lối sống và giá trị cá nhân, các xu hướng thời trang hiện nay đang chuyển mình mạnh mẽ để đáp ứng nhu cầu thay đổi của người tiêu dùng. Hãy cùng điểm qua những xu hướng nổi bật nhất năm 2024!
                </p>

                {/* Section 1 */}
                <section className="my-6">
                    <h4 className="text-lg font-bold text-black leading-6 mt-4 mb-2">
                        1. Thời Trang Bền Vững - Sự Lên Ngôi Của Ý Thức Xanh
                    </h4>
                    <p className="text-base text-gray-800 leading-6 my-3 text-justify">
                        Bền vững không còn là lựa chọn, mà đã trở thành xu thế chủ đạo trong ngành thời trang. Người tiêu dùng ngày càng ưu tiên các thương hiệu sử dụng chất liệu tái chế, quy trình sản xuất thân thiện với môi trường và cam kết giảm thiểu tác động đến hành tinh.
                    </p>
                    <div className="flex justify-center my-4">
                        <img
                            src={pic1}
                            alt="Đầm từ denim dệt bằng sợi lá gai"
                            className="w-full max-w-xs md:max-w-sm rounded-lg shadow-lg object-cover"
                        />
                    </div>
                    <p className="italic text-sm text-gray-600 text-center my-3">
                        Chiếc đầm làm từ denim dệt bằng sợi lá gai (ramie) của Vũ Việt Hà.
                    </p>
                    <ul className="list-disc list-inside text-gray-800 space-y-2">
                        <li>
                            <span className="">Chất liệu nổi bật:</span> Sợi tre, cotton hữu cơ, polyester tái chế.
                        </li>
                        <li>
                            <span className="">Thương hiệu tiên phong:</span> Patagonia, Stella McCartney, và các thương hiệu địa phương.
                        </li>
                    </ul>
                </section>

                {/* Section 2 */}
                <section className="my-6">
                    <h4 className="text-lg font-bold text-black leading-6 mt-4 mb-2">
                        2. Cá Nhân Hóa Thời Trang - Sự Độc Đáo Là Mới Mẻ
                    </h4>
                    <p className="text-base text-gray-800 leading-6 my-3 text-justify">
                        Thay vì chạy theo những xu hướng đại chúng, người tiêu dùng hiện nay ưa chuộng những thiết kế phản ánh phong cách cá nhân và câu chuyện riêng.
                    </p>
                    {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                        <img
                            src={pic2}
                            alt="Shop Havana"
                            className="w-full max-w-xs md:max-w-sm rounded-lg shadow-lg object-cover mx-auto"
                        />
                        <ul className="list-disc list-inside text-gray-800 space-y-2">
                            <li>
                                <span className="">Cách thể hiện:</span> In ấn thiết kế theo yêu cầu, phụ kiện khắc tên, phối đồ phá cách.
                            </li>
                            <li>
                                <span className="">Điểm nhấn:</span> Các nền tảng thời trang kỹ thuật số cung cấp dịch vụ thiết kế riêng đang phát triển mạnh.
                            </li>
                        </ul>
                    </div> */}
                    <div className="flex justify-center my-4">
                        <img
                            src={pic2}
                            alt="Shop Havana"
                            className="w-full max-w-3xl rounded-lg shadow-lg object-cover"
                        />
                    </div>
                    <ul className="list-disc list-inside text-gray-800 space-y-2">
                        <li>
                            <span className="">Cách thể hiện:</span> In ấn thiết kế theo yêu cầu, phụ kiện khắc tên, phối đồ phá cách.
                        </li>
                        <li>
                            <span className="">Điểm nhấn:</span> Các nền tảng thời trang kỹ thuật số cung cấp dịch vụ thiết kế riêng đang phát triển mạnh.
                        </li>
                    </ul>

                </section>
                <section className="my-6">
                    <h3 className="text-lg font-bold text-black leading-6 mt-4 mb-2">
                        3. Thời Trang Công Nghệ - Xu Hướng Của Tương Lai
                    </h3>
                    <p className="text-base text-gray-800 leading-6 my-3 text-justify">
                        Với sự phát triển của công nghệ, thời trang đang được tích hợp nhiều tiện ích thông minh.
                    </p>
                    <div className="flex justify-center my-4">
                        <img
                            src={pic3}
                            alt="Fashion Tech"
                            className="w-full max-w-3xl rounded-lg shadow-lg object-cover"
                        />
                    </div>
                    <ul className="list-disc list-inside text-gray-800 space-y-2">
                        <li>
                            <span className="">Xu hướng:</span> Quần áo đổi màu theo nhiệt độ, chất liệu chống nước nhưng vẫn thoáng khí.
                        </li>
                        <li>
                            <span className="">Ứng dụng:</span> Bộ sưu tập thời trang ảo metaverse máy chủ.
                        </li>
                    </ul>
                </section>

                {/* Section 4 */}
                <section className="my-6">
                    <h4 className="text-lg font-bold text-black leading-6 mt-4 mb-2">
                        4. Sự Hồi Sinh Của Y2K
                    </h4>
                    <p className="text-base text-gray-800 leading-6 my-3 text-justify">
                        Phong cách thời trang đầu những năm 2000 đang quay trở lại với các yếu tố như quần cưỡi ngựa, áo crop top và phụ kiện kim loại. Đây là sự hòa hợp giữa hoài niệm và hiện đại, mang lại sự trẻ trung và sáng tạo.
                    </p>
                    <div className="flex justify-center my-4">
                        <img
                            src={pic4}
                            alt="Y2K Revival"
                            className="w-full max-w-4xl rounded-lg shadow-lg object-cover"
                        />
                    </div>
                    <ul className="list-disc list-inside text-gray-800 space-y-2">
                        <li>
                            <span className="">Màu sắc:</span> Neon, pastel.
                        </li>
                        <li>
                            <span className="">Phụ kiện:</span> Kính mát to bản, túi baguette.
                        </li>
                    </ul>
                </section>

                {/* Section 5 */}
                <section className="my-6">
                    <h4 className="text-lg font-bold text-black leading-6 mt-4 mb-2">
                        5. Chủ Nghĩa Tối Giản - Quang Của Sự Tối Giản
                    </h4>
                    <p className="text-base text-gray-800 leading-6 my-3 text-justify">
                        Phong cách tối giản vẫn giữ vững sức hút nhờ vào sự tinh tế và dễ phối đồ. Các thiết kế tập trung vào chất liệu cao cấp và đường cắt hoàn hảo.
                    </p>
                    <div className="flex justify-center my-4">
                        <img
                            src={pic5}
                            alt="Minimalist Fashion"
                            className="w-full max-w-3xl rounded-lg shadow-lg object-cover"
                        />
                    </div>
                    <ul className="list-disc list-inside text-gray-800 space-y-2">
                        <li>
                            <span className="">Tông màu:</span> trắng, đen, be, xám.
                        </li>
                        <li>
                            <span className="">Điểm nhấn:</span> Thời trang ứng dụng hàng ngày, phù hợp cho cả công sở và dạo phố.
                        </li>
                    </ul>
                </section>

                {/* Conclusion */}
                <section className="my-6 pb-10">
                    <h4 className="text-lg font-bold text-black leading-6 mt-4 mb-2">
                        Lời kết
                    </h4>
                    <p className="text-base text-gray-800 leading-6 my-3 text-justify">
                        Trong nhịp sống hiện đại, thời trang không chỉ là tấm gương phản chiếu cá tính mà còn có thể hiện cách hòa nhập với môi trường. Thời trang tối giản trở thành một loại tiêu biểu khi xu hướng hòa hợp cùng lối sống bền vững.
                    </p>
                    <p className="text-base text-gray-800 leading-6 my-3 text-justify">
                        Havana – thương hiệu luôn bắt kịp xu hướng chuyển động – đã khéo léo đưa thời trang tối giản vào các thiết kế của mình. Mỗi sản phẩm không chỉ tôn lên sự tinh tế trong từng đường nét mà còn mang đến thông điệp: "Đơn giản là bền vững."
                    </p>
                </section>
            </div>
            <FloatingButtons></FloatingButtons>

        </div>
    );
};

export default FashionTrends;