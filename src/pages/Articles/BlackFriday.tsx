import React from 'react';
import blackFriday from '../../assets/blackFriday.jpg'
import FloatingButtons from '../../components/FloatingButtons';

const BlackFriday: React.FC = () => {
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
                            <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Black Friday 2024: Mua Sắm Thời Trang Đẹp Giá Sập Sàn Cùng Havana</span>
                        </div>
                    </li>
                </ol>
            </nav>

            <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4 pb-10">

                <div className="bg-white shadow-md rounded-lg overflow-hidden w-full pb-10">
                    {/* Banner Section */}

                    <div className="relative">
                        <img
                            src={blackFriday} // Thay link ảnh của bạn ở đây
                            alt="Black Friday Banner"
                            className="w-full h-auto"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="p-6">
                        {/* Title */}
                        <h1 className="text-2xl font-bold mb-4 text-gray-800">
                            Black Friday 2024: Mua Sắm Thời Trang Đẹp Giá Sập Sàn Cùng Havana
                        </h1>
                        <p className="text-gray-700 mb-4">
                            Ngày Black Friday đã trở thành dịp mua sắm được mong chờ nhất trong năm tại Việt Nam. Đây là cơ hội để bạn săn những món đồ thời trang từ trung, hiện đại với giá "hời" nhất tại Havana thời trang Đà Nẵng. Nếu bạn chưa từng trải qua dịp giảm giá lớn như thế này, hãy đừng bỏ lỡ dịp này, khi chuỗi Havana khám phá tất cả lợi ích thú vị trong bài viết này nhé!
                        </p>

                        {/* Section 1 */}
                        <h2 className="text-xl font-semibold mb-2 text-gray-800">1. Black Friday là ngày gì?</h2>
                        <p className="text-gray-700 mb-4">
                            Black Friday, hay còn gọi là Ngày Thứ Sáu Đen Tối, là ngày hội giảm giá lớn nhất trong năm, được tổ chức vào thứ 6 tuần thứ 4 của tháng 11. Đây là dịp các cửa hàng trên toàn thế giới đồng loạt giảm giá mạnh, giúp người tiêu dùng săn được những món đồ yêu thích với mức giá tốt nhất!
                        </p>

                        {/* Section 2 */}
                        <h2 className="text-xl font-semibold mb-2 text-gray-800">2. Black Friday 2024 diễn ra khi nào?</h2>
                        <p className="text-gray-700 mb-4">
                            Năm nay, Black Friday 2024 sẽ diễn ra vào ngày 22/11/2024 đến 25/11/2024. Đây là thời điểm mà các thương hiệu cả trực tuyến và trực tiếp đồng loạt giảm giá, mang đến cơ hội săn những món đồ yêu thích với mức giá hấp dẫn.
                        </p>

                        {/* Section 3 */}
                        <h2 className="text-xl font-semibold mb-2 text-gray-800">3. Black Friday tại Havana có gì đặc biệt?</h2>
                        <p className="text-gray-700 mb-4">
                            Havana là lựa chọn lý tưởng cho những ai yêu thích thời trang sinh viên giá tốt hoặc muốn sở hữu các mẫu thiết kế hiện đại đáp ứng được phong cách thời trang trung cấp lẫn trẻ trung. Dưới đây là các sản phẩm nổi bật:
                        </p>

                        {/* Benefits List */}
                        <ul className="list-disc pl-6 text-gray-700 mb-4">
                            <li>Giảm giá đến 20 - 50% cho toàn bộ các sản phẩm áo, váy, và quần.</li>
                            <li>Flash Sale mỗi giờ: Giá giảm sâu chỉ từ 99.000 VNĐ.</li>
                            <li>
                                Mã giảm giá độc quyền: Giảm thêm 10% cho khách hàng mới đặt hàng trên website{' '}
                                <a href="/" className="text-blue-500 underline">
                                    Havana Đà Nẵng
                                </a>.
                            </li>
                            <li>Miễn phí vận chuyển toàn quốc cho đơn hàng từ 500.000 VNĐ.</li>
                        </ul>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Sản phẩm nổi bật:</h2>
                        <ul className="space-y-4 text-gray-700">
                            <li>
                                Áo len và áo khoác mùa đông: Áo len trơn và họa tiết nhẹ nhàng, dễ phối đồ, giá chỉ từ
                                249.000 VNĐ. Áo khoác dạ thanh lịch và áo phao giữ ấm, giá từ 399.000 VNĐ.
                            </li>
                            <li>
                                Váy dài mùa đông: Váy len ôm sát tôn dáng hoặc váy dài thanh lịch, giá chỉ từ{' '}
                                299.000 VNĐ.
                            </li>
                            <li>
                                Quần culottes thời trang: Chất liệu mềm mại, thoải mái, phù hợp với mọi hoàn cảnh, giá ưu đãi
                                từ 249.000 VNĐ.
                            </li>
                            <li>
                                Áo sơ mi trẻ trung: Thiết kế hiện đại, dễ phối đồ, phù hợp cả đi học lẫn đi làm. Giá chỉ còn từ{' '}
                                199.000 VNĐ.
                            </li>
                            <li>
                                Váy mùa hè trẻ trung: Váy thiết kế thanh lịch, phù hợp với phong cách học đường hoặc dạo phố.
                                Giảm đến 50%, giá chỉ từ 299.000 VNĐ.
                            </li>
                            <li>
                                Set đồ phối sẵn: Set đồ năng động hoặc thanh lịch, giúp bạn tiết kiệm thời gian phối đồ. Giá chỉ
                                từ 399.000 VNĐ, giảm mạnh từ 799.000 VNĐ.
                            </li>
                        </ul>

                        {/* Section 2: Nên mua gì */}
                        <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-4">4. Nên mua gì vào dịp Black Friday tại Havana?</h2>
                        <ul className="list-disc pl-6 text-gray-700 space-y-4">
                            <li>
                                Thời trang trẻ trung giá rẻ: Havana cung cấp các thiết kế hiện đại, phù hợp với cả học sinh,
                                sinh viên và dân công sở.
                            </li>
                            <li>
                                Đa dạng sản phẩm: Từ áo len, váy dài đến áo khoác, bạn đều có thể dễ dàng chọn mua tại{' '}
                                Havana Danang.
                            </li>
                            <li>
                                Ưu đãi lớn nhất năm: Giảm giá sâu tới 50% kèm Flash Sale mỗi giờ.
                            </li>
                            <li>
                                Dịch vụ tận tâm: Chính sách giao hàng miễn phí, đổi trả dễ dàng, hỗ trợ khách hàng tận tình.
                            </li>
                        </ul>

                        {/* Section 3: Mẹo săn sale */}
                        <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-4">5. Mẹo săn sale Black Friday tại Havana</h2>
                        <ul className="list-disc pl-6 text-gray-700 space-y-4">
                            <li>
                                Theo dõi Flash Sale: Các chương trình giảm giá theo giờ với số lượng có hạn. Hãy nhanh tay để
                                không bỏ lỡ!
                            </li>
                            <li>
                                Lập danh sách sản phẩm cần mua: Xác định trước món đồ yêu thích để săn sale hiệu quả.
                            </li>
                            <li>
                                Ưu tiên mua online: Truy cập Havana Danang để dễ dàng mua sắm mọi lúc, mọi nơi.
                            </li>
                            <li>
                                Sử dụng mã giảm giá: Đừng quên nhập mã giảm HAVANA10 để nhận ưu đãi thêm 10%.
                            </li>
                        </ul>

                        {/* Section 4: Lý do chọn Havana */}
                        <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-4">6. Tại sao nên chọn Havana trong mùa Black Friday?</h2>
                        <ul className="list-disc pl-6 text-gray-700 space-y-4">
                            <li>
                                Sản phẩm thiết kế độc quyền: Thời trang tại Havana được sáng tạo dành riêng cho phong cách trẻ
                                trung, hiện đại.
                            </li>
                            <li>
                                Chất lượng đảm bảo: Chất liệu cao cấp, bền đẹp, phù hợp với nhiều hoàn cảnh.
                            </li>
                            <li>
                                Giá cả hợp lý: Các sản phẩm được giảm giá sâu, mang lại giá trị tốt nhất cho người mua.
                            </li>
                        </ul>

                        {/* Section 5: Lời kêu gọi */}
                        <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-4">
                            7. Truy cập ngay Havana để săn deal Black Friday
                        </h2>
                        <p className="text-gray-700 mb-4">
                            Black Friday tại Havana thời trang Đà Nẵng là cơ hội không thể bỏ lỡ để bạn làm mới tủ đồ mùa đông với mức giá
                            ưu đãi nhất. Ghé ngay Havana Danang hoặc cửa hàng Havana gần nhất để tham gia ngày hội mua sắm lớn
                            nhất năm!
                        </p>
                        <p className="text-gray-800 font-bold">Havana – Thời trang trẻ trung, phong cách dành riêng cho bạn!</p>
                        <p className="text-gray-800 font-semibold mt-2">Hẹn gặp bạn tại Black Friday 2024!</p>
                    </div>
                </div>
            </div >

            <FloatingButtons></FloatingButtons>
            </div>
    );
};

export default BlackFriday;