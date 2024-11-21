import React, { useState } from 'react';

interface SectionProps {
    title: string;
    content: JSX.Element;
}

const Section: React.FC<SectionProps> = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-300">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex justify-between items-center w-full py-4 px-6 text-left focus:outline-none hover:bg-gray-100 transition duration-300"
            >
                <h2 className="font-semibold text-lg">{title}</h2>
                <svg
                    className={`w-5 h-5 transform ${isOpen ? 'rotate-180' : 'rotate-0'} transition-transform duration-300`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M6 9l6 6 6-6" />
                </svg>
            </button>
            {isOpen && (
                <div className="px-6 py-4 text-gray-700">
                    {content}
                </div>
            )}
        </div>
    );
};

const PolicyPage: React.FC = () => {
    const sections = [
        {
            title: 'Chính sách bán hàng',
            content: (
                <ul className="list-disc ml-6 space-y-2">
                    <li>
                        <strong>Đảm bảo chất lượng sản phẩm:</strong> Tất cả sản phẩm của Havana đều được kiểm tra tỉ mỉ trước khi giao đến tay khách hàng. Chúng tôi cam kết sản phẩm giống hoàn toàn với hình ảnh trên website.
                    </li>
                    <li>
                        <strong>Đổi trả hàng hóa:</strong> Hỗ trợ đổi sản phẩm trong vòng 7 ngày với điều kiện sản phẩm chưa qua sử dụng, còn tem mác và đầy đủ phụ kiện kèm theo.
                    </li>
                    <li>
                        <strong>Sai sót trong đơn hàng:</strong> Havana sẽ xử lý ngay khi nhận phản hồi nếu có lỗi, sai màu/size/mẫu, hoặc thiếu hàng.
                    </li>
                    <li>
                        <strong>Chính sách gửi hàng:</strong> Chỉ gửi đúng sản phẩm đã đặt, không hỗ trợ thay đổi phân loại sau khi đặt hàng.
                    </li>
                </ul>
            ),
        },
        {
            title: 'Chính sách giao nhận',
            content: (
                <ul className="list-disc ml-6 space-y-2">
                    <li>
                        <strong>Cam kết giao đúng hàng:</strong> Đảm bảo sản phẩm đúng như khách hàng đặt và trong tình trạng tốt nhất.
                    </li>
                    <li>
                        <strong>Thời gian giao hàng:</strong> Phụ thuộc vào địa chỉ giao nhận, khách hàng sẽ được thông báo cụ thể.
                    </li>
                    <li>
                        <strong>Trách nhiệm vận chuyển:</strong> Nếu xảy ra hư hỏng hoặc mất mát, Havana sẽ phối hợp xử lý kịp thời.
                    </li>
                </ul>
            ),
        },
        {
            title: 'Chính sách bảo mật thông tin',
            content: (
                <ul className="list-disc ml-6 space-y-2">
                    <li>
                        <strong>Thu thập thông tin:</strong> Chỉ thu thập thông tin cần thiết như họ tên, số điện thoại, địa chỉ giao hàng và email.
                    </li>
                    <li>
                        <strong>Cam kết bảo mật:</strong> Không chia sẻ thông tin cá nhân với bên thứ ba khi chưa có sự đồng ý của khách hàng.
                    </li>
                    <li>
                        <strong>Xử lý tranh chấp:</strong> Khách hàng có thể liên hệ trực tiếp với Havana để giải quyết nhanh chóng.
                    </li>
                </ul>
            ),
        },
        {
            title: 'Điều khoản thanh toán',
            content: (
                <ul className="list-disc ml-6 space-y-2">
                    <li>
                        <strong>Hình thức thanh toán:</strong> Chấp nhận COD, chuyển khoản, hoặc thanh toán qua các ví điện tử như Momo, ZaloPay.
                    </li>
                    <li>
                        <strong>Xác nhận thanh toán:</strong> Email xác nhận đơn hàng sẽ được gửi trong vòng 24 giờ sau khi thanh toán thành công.
                    </li>
                </ul>
            ),
        },
        {
            title: 'Quy định sử dụng website',
            content: (
                <ul className="list-disc ml-6 space-y-2">
                    <li>
                        <strong>Quyền sở hữu trí tuệ:</strong> Nội dung trên website Havana Danang thuộc quyền sở hữu của công ty.
                    </li>
                    <li>
                        <strong>Hành vi bị cấm:</strong> Nghiêm cấm sử dụng website vào mục đích gian lận hoặc gây tổn hại đến Havana Danang.
                    </li>
                    <li>
                        <strong>Thay đổi điều khoản:</strong> Havana có quyền thay đổi các điều khoản và chính sách mà không cần báo trước.
                    </li>
                </ul>
            ),
        },
    ];

    return (
        <div className="max-w-4xl mx-auto mt-8">
            <h1 className="text-3xl font-bold text-center mb-6">Điều khoản và Chính sách</h1>
            <div className="bg-white shadow-lg rounded-lg">
                {sections.map((section, index) => (
                    <Section key={index} title={section.title} content={section.content} />
                ))}
            </div>
        </div>
    );
};

export default PolicyPage;
