import React from 'react';
import pic1 from '../../assets/bai3pic1.jpg';
import pic2 from '../../assets/bai3pic2.jpg';
import pic3 from '../../assets/bai3pic3.jpg';
import FloatingButtons from '../../components/FloatingButtons';

const FashionGuide: React.FC = () => {
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
                            <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Cách Phối Đồ Xinh Cho Nàng Thêm Lung Linh Trong Dịp Noel</span>
                        </div>
                    </li>
                </ol>
            </nav>
            <div className="container mx-auto p-6">
                <h3 className="text-4xl font-bold mb-4 text-gray-900">
                    Cách Phối Đồ Xinh Cho Nàng Thêm Lung Linh Trong Dịp Noel
                </h3>
                <p className="text-base text-gray-700 mb-6">
                    Giáng Sinh đang đến gần, và đây là dịp để các nàng thỏa sức thể hiện gu{' '}
                    thời trang nữ của mình. Đặc biệt, với những cô nàng yêu thích phong cách{' '}
                    trẻ trung, cá tính, cùng Havana khám phá các cách phối{' '}
                    đồ xinh để trở nên nổi bật hơn trong mùa lễ hội này nhé!
                </p>

                <section className="mb-8">
                    <h4 className="text-xl font-bold text-gray-800 mb-2">
                        1. Phối Đồ Giáng Sinh Với Áo Len Và Áo Phao Ấm Áp
                    </h4>
                    <p className="text-base text-gray-700 mb-4">
                        Áo len và áo phao là lựa chọn không thể thiếu khi phối đồ Giáng Sinh trong thời tiết se lạnh. Dưới đây là một số gợi ý phối đồ với các item này:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>
                            Áo len đỏ kết hợp với quần jean xanh mang lại vẻ ngoài năng động và cực kỳ phù hợp với tinh thần Giáng Sinh.
                        </li>
                        <li>
                            Áo len cổ lọ phối cùng chân váy chữ A và áo phao dáng ngắn tạo nên sự trẻ trung, ấm áp mà vẫn nổi bật.
                        </li>
                        <li>
                            Nếu yêu thích phong cách cá tính, bạn có thể chọn áo phao dáng dài kết hợp với quần jean rách và một đôi bốt đen để hoàn thiện outfit đậm chất{' '}
                            Street Style.
                        </li>
                    </ul>

                    <div className="flex justify-center mt-6">
                        <img
                            src={pic1}
                            alt="Fashion 1"
                            className="w-full max-w-md h-auto object-cover"
                        />
                    </div>
                </section>

                <section className="mb-8">
                    <h4 className="text-xl font-bold text-gray-800 mb-2">
                        2. Layer Áo Len Với Váy Và Áo Khoác Dạ Cho Phong Cách Thanh Lịch
                    </h4>
                    <p className="text-base text-gray-700 mb-4">
                        Phong cách layer không chỉ giữ ấm tốt mà còn mang lại vẻ đẹp đa chiều cho trang phục của bạn. Một vài cách phối đồ layer cực "chất":
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>
                            Áo len cổ lọ phối cùng váy và thêm một chiếc áo khoác dạ bên ngoài là sự lựa chọn hoàn hảo cho phong cách thanh lịch, duyên dáng.
                        </li>
                        <li>
                            Áo len dáng rộng phối cùng quần jean skinny và quần tất tạo cảm giác ấm áp và cực kỳ thoải mái. Set đồ này rất thích hợp để dạo phố trong dịp Giáng Sinh.
                        </li>
                    </ul>

                    <div className="flex justify-center mt-6">
                        <img
                            src={pic2}
                            alt="Fashion 3"
                            className="w-full max-w-md h-auto object-cover"
                        />
                    </div>
                </section>

                <section className="mb-8">
                    <h4 className="text-xl font-bold text-gray-800 mb-2">
                        3. Phong Cách Street Style Cho Giáng Sinh
                    </h4>
                    <p className="text-base text-gray-700 mb-4">
                        Nếu bạn là tín đồ của Street Style, mùa lễ hội là dịp tuyệt vời để diện những bộ đồ cực "chất":
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>
                            Áo hoodie phối với quần jean rách và giày thể thao tạo vẻ năng động, trẻ trung. Bạn có thể thêm áo phao dáng dài để vừa giữ ấm, vừa làm nổi bật phong cách cá tính.
                        </li>
                        <li>
                            Quần jogger phối cùng áo khoác bomber và nón là lựa chọn tuyệt vời cho những cô nàng yêu thích phong cách đường phố, giúp bạn trở nên nổi bật khi xuống phố vào dịp Noel.
                        </li>
                    </ul>

                    <div className="flex justify-center mt-6">
                        <img
                            src={pic3}
                            alt="Fashion 5"
                            className="w-full max-w-md h-auto object-cover"
                        />
                    </div>
                </section>

                <section className="mb-8">
                    <h4 className="text-lg font-bold text-gray-800 mb-2">
                        Thông Tin Liên Hệ
                    </h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>
                            Website:{' '}
                            <a href="https://havanadanang.netlify.app/" className="text-blue-600 hover:text-blue-800">
                                https://havanadanang.netlify.app/
                            </a>
                        </li>
                        <li>
                            Hotline: 0383502273
                        </li>
                        <li>
                            Email:{' '}
                            <a href="mailto:contact@havana.com" className="text-blue-600 hover:text-blue-800">
                                contact@havana.com
                            </a>
                        </li>
                        <li>
                            Địa chỉ: Đà Nẵng: 261-263 Phan Châu Trinh
                        </li>
                        <li>
                            Fanpage:{' '}
                            <a href="https://www.facebook.com/havanadangnang" className="text-blue-600 hover:text-blue-800">
                                https://www.facebook.com/havanadangnang
                            </a>
                        </li>
                        <li>
                            Shopee:{' '}
                            <a href="https://shopee.vn/havana.danang" className="text-blue-600 hover:text-blue-800 underline">
                                https://shopee.vn/havana.danang
                            </a>
                        </li>
                    </ul>
                </section>
            </div>
            <FloatingButtons></FloatingButtons>

        </div>
    );
};

export default FashionGuide;
