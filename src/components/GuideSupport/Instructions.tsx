import React from 'react';
import pic1 from '../../assets/pic1.png'
import pic2_1 from '../../assets/pic2.1.png'
import pic2_2 from '../../assets/pic2.png'
import pic3 from '../../assets/pic3.png'
import pic4 from '../../assets/pic4.png'
import pic5 from '../../assets/pic5.png'
import pic6 from '../../assets/pic6.png'
import pic7 from '../../assets/pic7.png'
import pic8 from '../../assets/pic8.png'
const Instructions: React.FC = () => {

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full">
                {/* Tiêu đề chính */}
                <h1 className="text-3xl font-bold mb-6">Hướng Dẫn Mua Hàng</h1>

                {/* Mô tả */}
                <p className="mb-6">
                    Chỉ cần ngồi ở nhà bạn cũng có thể dễ dàng mua hàng chỉ với vài thao tác đơn giản sau:
                </p>

                {/* Các cách mua hàng */}
                <div className="mb-4">
                    <h2 className="text-xl font-semibold">Cách 1:</h2>
                    <p>
                        Gọi điện thoại đến tổng đài của HAVANA: <b>0383 502 273</b> (Phím 7)
                        sẽ luôn có nhân viên tư vấn của HAVANA hỗ trợ quý khách mua được những sản phẩm vừa ý.
                    </p>
                </div>

                <div className="mb-6">
                    <h2 className="text-xl font-semibold">Cách 2:</h2>
                    <p>
                        Đặt mua online trên Website:{' '}
                        <a
                            href="https://havanadanang.netlify.app"
                            className="text-blue-500 underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            havanadanang.netlify.app
                        </a>
                    </p>
                </div>

                {/* Bước 1: Đăng ký tài khoản */}
                <div className="mb-8">
                    <h3 className="text-2xl font-semibold mb-4 text-[#6dc6b7]">Bước 1: Đăng ký tài khoản</h3>
                    <p className="mb-4">
                        Bấm chọn “Đăng ký” để đăng ký tài khoản HAVANA.
                    </p>
                    <img
                        src={pic1}
                        alt="Hướng dẫn đăng ký tài khoản"
                        className="w-full mb-4 rounded-md shadow-md"
                    />
                    <p className="mb-4">
                        Sau khi bấm vào, bạn nhập đủ thông tin ở các mục bên dưới là bạn đã đăng ký thành công. Bạn nhớ lưu lại mật khẩu để đăng nhập cho lần sau.
                    </p>
                    <img
                        src={pic2_1}
                        alt="Hướng dẫn đăng ký tài khoản"
                        className="w-full mb-4 rounded-md shadow-md"
                    />
                </div>

                {/* Bước 2: Đặt mua sản phẩm */}
                <div className="mb-8">
                    <h3 className="text-2xl font-semibold mb-4 text-[#6dc6b7]">Bước 2: Tìm sản phẩm muốn mua bằng nhiều cách như:</h3>
                    <p className="mb-4">
                        Bấm chọn “Đăng ký” để đăng ký tài khoản HAVANA.
                    </p>
                    <p >
                        <span className='mb-2 font-bold'>Cách 1:</span> Bấm vào danh mục sản phẩm: Set đồ/ Quần/ Áo/ Váy để chọn sản phẩm cần mua.
                    </p>
                    <p className='mb-5'>
                        <span className='mb-2 font-bold'>Cách 2:</span> Sử dụng ô "Tìm kiếm", gõ tên sản phẩm muốn mua. Ví dụ: “Set đồ nữ”. Website sẽ cho bạn những sản phẩm chính xác nhất với thông tin bạn tìm kiếm.
                    </p>
                    <img
                        src={pic2_2}
                        alt="Hướng dẫn đăng ký tài khoản"
                        className="w-full mb-4 rounded-md shadow-md"
                    />
                    <p className='mb-4'><span className='mb-2 font-bold'>Cách 3:</span> Tìm sản phẩm cần mua tại mục “Tất cả”. Tại đây sẽ hiển thị tất cả sản phẩm thuộc thể loại bạn muốn mua để có thêm nhiều sự lựa chọn.</p>
                    <img
                        src={pic3}
                        alt="Hướng dẫn đăng ký tài khoản"
                        className="w-full mb-4 rounded-md shadow-md"
                    />
                    <p className="mb-4">
                        Khi đã chọn được sản phẩm muốn mua, bạn bấm vào sản phẩm để xem thông tin chi tiết.
                    </p>
                </div>
                {/* Bước 3 */}
                <div className="mb-8">
                    <h3 className="text-2xl font-semibold mb-4 text-[#6dc6b7]">Bước 3: Chọn thông tin sản phẩm:</h3>
                    <p className="mb-4">
                        Để mua sản phẩm, bạn chọn các thông tin sau: mã giảm giá + size + số lượng sản phẩm cần đặt
                    </p>
                    <img
                        src={pic4}
                        alt="Hướng dẫn đăng ký tài khoản"
                        className="w-full mb-4 rounded-md shadow-md"
                    />
                    <img
                        src={pic5}
                        alt="Hướng dẫn đăng ký tài khoản"
                        className="w-full mb-4 rounded-md shadow-md"
                    />
                    <p className='mb-4'>Sau đó chọn "Thêm vào giỏ hàng" hoặc "Mua ngay"</p>
                    <img
                        src={pic6}
                        alt="Hướng dẫn đăng ký tài khoản"
                        className="w-full mb-4 rounded-md shadow-md"
                    />
                    <p className='mb-4'>Bạn cũng có thể lướt xuống để tham khảo mô tả về sản phẩm trước khi mua</p>
                </div>
                {/* Bước 4 */}
                <div className="mb-8">
                    <h3 className="text-2xl font-semibold mb-4 text-[#6dc6b7]">Bước 4: Đặt hàng:</h3>
                    <p className="mb-4">
                        Nhập địa chỉ và thông tin nhận hàng.
                    </p>
                    <img
                        src={pic7}
                        alt="Hướng dẫn đăng ký tài khoản"
                        className="w-full mb-4 rounded-md shadow-md"
                    />
                    <p className="mb-4">
                        Chọn hình thức thanh toán chuyển khoản hoặc thu hộ, chọn dùng nhập mã giảm giá nếu có.
                    </p>
                    <p className="mb-4">
                        Sau đó bấm “Đặt hàng” và website sẽ thông báo bạn “Đã đặt hàng thành công”
                    </p>
                </div>
                {/* Bước 5 */}
                <div className="mb-8">
                    <h3 className="text-2xl font-semibold mb-4 text-[#6dc6b7]">Bước 5: Theo dõi đơn hàng</h3>
                    <p className="mb-4">
                        Bạn vào “Giỏ hàng” để xác nhận đặt hàng và theo dõi hành trình đơn hàng đã đặt. Bạn có để chủ động hẹn thời gian nhận hàng hoặc bạn sẽ nhận được hàng trong vòng 2 - 4 ngày kể từ ngày đặt hàng. Trường hợp phát sinh những vấn đề khách quan, đơn hàng có thể sẽ đến trễ hơn so với dự kiến.
                    </p>
                    <img
                        src={pic8}
                        alt="Hướng dẫn đăng ký tài khoản"
                        className="w-full mb-4 rounded-md shadow-md"
                    />
                </div>
                {/* Kết thúc */}
                <p className="text-center font-medium text-gray-600">
                    Chúc bạn có trải nghiệm mua sắm tuyệt vời cùng HAVANA!
                </p>
            </div>
        </div>
    );
};

export default Instructions;
