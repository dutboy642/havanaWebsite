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

const FAQPage: React.FC = () => {
    const questions = [
        {
            title: 'Tôi có thể đặt hàng như thế nào?',
            content: (
                <p>
                    Bạn có thể đặt hàng trực tiếp trên website Havana Danang bằng cách chọn sản phẩm, thêm vào giỏ hàng và điền thông tin giao hàng trong bước thanh toán. Nếu cần hỗ trợ, hãy liên hệ hotline hoặc chat trực tuyến.
                </p>
            ),
        },
        {
            title: 'Làm thế nào để tôi kiểm tra trạng thái đơn hàng?',
            content: (
                <p>
                    Bạn có thể kiểm tra trạng thái đơn hàng bằng cách truy cập mục <strong>"Tra cứu đơn hàng"</strong> trên website và nhập mã đơn hàng hoặc thông tin liên lạc. Hệ thống sẽ hiển thị chi tiết về tiến độ giao hàng.
                </p>
            ),
        },
        {
            title: 'Tôi có thể thay đổi địa chỉ giao hàng sau khi đã đặt hàng không?',
            content: (
                <p>
                    Có. Vui lòng liên hệ bộ phận chăm sóc khách hàng qua hotline trong vòng <strong>24 giờ</strong> sau khi đặt hàng để thay đổi địa chỉ giao hàng.
                </p>
            ),
        },
        {
            title: 'Tôi có thể đổi trả sản phẩm hoặc khi sản phẩm bị lỗi thì làm sao?',
            content: (
                <p>
                    Havana hỗ trợ đổi trả trong vòng <strong>7 ngày</strong> với điều kiện sản phẩm chưa qua sử dụng, còn nguyên tem mác. Nếu sản phẩm bị lỗi, vui lòng liên hệ đội ngũ chăm sóc khách hàng qua email hoặc hotline, cung cấp hình ảnh/video sản phẩm lỗi và hóa đơn mua hàng để được hỗ trợ.
                </p>
            ),
        },
        {
            title: 'Tôi có thể thanh toán bằng hình thức nào?',
            content: (
                <p>
                    Havana Danang hỗ trợ thanh toán qua <strong>tiền mặt khi nhận hàng (COD)</strong>, chuyển khoản ngân hàng, và các ví điện tử như Momo, ZaloPay.
                </p>
            ),
        },
        {
            title: 'Tôi có cần đăng ký tài khoản để mua hàng không?',
            content: (
                <p>
                    Không bắt buộc. Bạn có thể mua hàng mà không cần đăng ký tài khoản. Tuy nhiên, việc đăng ký tài khoản sẽ giúp bạn dễ dàng theo dõi lịch sử mua hàng và nhận các ưu đãi đặc biệt từ Havana.
                </p>
            ),
        },
        {
            title: 'Tôi có thể hủy đơn hàng không?',
            content: (
                <p>
                    Bạn có thể hủy đơn hàng trước khi đơn hàng được giao. Vui lòng liên hệ hotline để được hỗ trợ hủy đơn hàng.
                </p>
            ),
        },
        {
            title: 'Havana Danang có nhận giao hàng quốc tế không?',
            content: (
                <p>
                    Hiện tại, Havana Danang chỉ hỗ trợ giao hàng trong nước. Các đơn hàng quốc tế sẽ được cân nhắc triển khai trong tương lai.
                </p>
            ),
        },
        {
            title: 'Havana đảm bảo chất lượng sản phẩm như thế nào?',
            content: (
                <p>
                    Havana kiểm tra kỹ từng sản phẩm trước khi giao đến tay khách hàng. Mọi sản phẩm đều được cam kết giống hình ảnh và mô tả trên website.
                </p>
            ),
        },
        {
            title: 'Làm thế nào để khiếu nại về sản phẩm?',
            content: (
                <p>
                    Nếu gặp vấn đề về sản phẩm, vui lòng liên hệ đội ngũ hỗ trợ của Havana qua tin nhắn trên website, email hoặc hotline. Hãy cung cấp hình ảnh và video quá trình khui hàng để Havana xử lý nhanh chóng và hiệu quả.
                </p>
            ),
        },
    ];

    return (
        <div className="max-w-4xl mx-auto mt-8">
            <h1 className="text-3xl font-bold text-center mb-6">Các câu hỏi thường gặp</h1>
            <div className="bg-white shadow-lg rounded-lg">
                {questions.map((question, index) => (
                    <Section key={index} title={question.title} content={question.content} />
                ))}
            </div>
        </div>
    );
};

export default FAQPage;
