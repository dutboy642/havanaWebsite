import React from 'react';

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
                    <strong>thời trang nữ</strong> của mình. Đặc biệt, với những cô nàng yêu thích phong cách{' '}
                    <strong>trẻ trung</strong>, <strong>cá tính</strong>, cùng Havana khám phá các cách phối{' '}
                    <strong>đồ xinh</strong> để trở nên nổi bật hơn trong mùa lễ hội này nhé!
                </p>

                <section className="mb-8">
                    <h4 className="text-xl font-bold text-gray-800 mb-2">
                        1. Phối Đồ Giáng Sinh Với Áo Len Và Áo Phao Ấm Áp
                    </h4>
                    <p className="text-base text-gray-700 mb-4">
                        <strong>Áo len</strong> và <strong>áo phao</strong> là lựa chọn không thể thiếu khi phối đồ Giáng Sinh trong thời tiết se lạnh. Dưới đây là một số gợi ý phối đồ với các item này:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>
                            <strong>Áo len đỏ</strong> kết hợp với <strong>quần jean xanh</strong> mang lại vẻ ngoài năng động và cực kỳ phù hợp với tinh thần Giáng Sinh.
                        </li>
                        <li>
                            <strong>Áo len cổ lọ</strong> phối cùng <strong>chân váy chữ A</strong> và <strong>áo phao dáng ngắn</strong> tạo nên sự trẻ trung, ấm áp mà vẫn nổi bật.
                        </li>
                        <li>
                            Nếu yêu thích phong cách cá tính, bạn có thể chọn <strong>áo phao dáng dài</strong> kết hợp với <strong>quần jean rách</strong> và một đôi <strong>bốt đen</strong> để hoàn thiện outfit đậm chất{' '}
                            <strong>Street Style</strong>.
                        </li>
                    </ul>

                    <div className="flex justify-center mt-6">
                        <img
                            src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXeqTsG4EdfwFe6rVExmGRNRgeWdyaHe4s3nv26uhiYtS7GvWXbyAVcFeTXMZfXx5r7N-VbQU17rHnLD7WHzBJDuGUbP0JZ7aNJf6Y3suwr5zKJRZ1dAqI2yqTHYbrbm-6wd-vQRoQ?key=FqaoPGG2PiPHE6rQdl4lKsuM"
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
                            <strong>Áo len cổ lọ</strong> phối cùng <strong>váy</strong> và thêm một chiếc <strong>áo khoác dạ</strong> bên ngoài là sự lựa chọn hoàn hảo cho phong cách thanh lịch, duyên dáng.
                        </li>
                        <li>
                            <strong>Áo len dáng rộng</strong> phối cùng <strong>quần jean skinny</strong> và <strong>quần tất</strong> tạo cảm giác ấm áp và cực kỳ thoải mái. Set đồ này rất thích hợp để dạo phố trong dịp Giáng Sinh.
                        </li>
                    </ul>

                    <div className="flex justify-center mt-6">
                        <img
                            src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXcG9OwSVEVNcKfGcsyaGEqeJ9cbi1Eh5QgEoYHFTtu28cCoFrV2BI2iJHjxNAq3ikndp2ticby2sSB62ffuP-4qs2xjKNjqL6SSAw3Y9jd_x2i5WbwmIga0dIpj9fyeW72a1pGF?key=FqaoPGG2PiPHE6rQdl4lKsuM"
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
                        Nếu bạn là tín đồ của <strong>Street Style</strong>, mùa lễ hội là dịp tuyệt vời để diện những bộ đồ cực "chất":
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>
                            <strong>Áo hoodie</strong> phối với <strong>quần jean rách</strong> và <strong>giày thể thao</strong> tạo vẻ năng động, trẻ trung. Bạn có thể thêm <strong>áo phao dáng dài</strong> để vừa giữ ấm, vừa làm nổi bật phong cách cá tính.
                        </li>
                        <li>
                            <strong>Quần jogger</strong> phối cùng <strong>áo khoác bomber</strong> và <strong>nón</strong> là lựa chọn tuyệt vời cho những cô nàng yêu thích phong cách đường phố, giúp bạn trở nên nổi bật khi xuống phố vào dịp Noel.
                        </li>
                    </ul>

                    <div className="flex justify-center mt-6">
                        <img
                            src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXeNCA766YVrJpm5SwPhWXIuSNQ8a5J0uUDK1D6e_10EHFnIhyxTXSM_piZoASxKM0djNXb6LSixnKTZ-WqKt2bQvsRhUBRvOG2C122DFCHES139OVWO-9M__VUGgmkgVIYsoccjcA?key=FqaoPGG2PiPHE6rQdl4lKsuM"
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
                            <strong>Website:</strong>{' '}
                            <a href="https://havanadanang.netlify.app/" className="text-blue-600 hover:text-blue-800">
                                https://havanadanang.netlify.app/
                            </a>
                        </li>
                        <li>
                            <strong>Hotline:</strong> 0383502273
                        </li>
                        <li>
                            <strong>Email:</strong>{' '}
                            <a href="mailto:contact@havana.com" className="text-blue-600 hover:text-blue-800">
                                contact@havana.com
                            </a>
                        </li>
                        <li>
                            <strong>Địa chỉ:</strong> Đà Nẵng: 261-263 Phan Châu Trinh
                        </li>
                        <li>
                            <strong>Fanpage:</strong>{' '}
                            <a href="https://www.facebook.com/havanadangnang" className="text-blue-600 hover:text-blue-800">
                                https://www.facebook.com/havanadangnang
                            </a>
                        </li>
                        <li>
                            <strong>Shopee:</strong>{' '}
                            <a href="https://shopee.vn/havana.danang" className="text-blue-600 hover:text-blue-800 underline">
                                https://shopee.vn/havana.danang
                            </a>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default FashionGuide;
