import React from 'react';
import { useLocation } from 'react-router-dom';
const OrderComplete: React.FC = () => {
    const location = useLocation();

    // Trích xuất param từ URL
    const searchParams = new URLSearchParams(location.search);
    const total = searchParams.get('total');
    return (
        <div className="flex justify-center items-center min-h-screen bg-yellow-50">
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-center">
                <h2 className="text-lg font-bold mb-4 text-gray-800">HOÀN THÀNH ĐƠN HÀNG</h2>
                <p className="text-gray-600 mb-4">
                    Cảm ơn bạn. Đơn hàng của bạn đã được nhận.
                </p>
                <ul className="text-left text-gray-700 space-y-2">
                    <li>
                        <span className="font-semibold">Mã đơn hàng:</span> 1566
                    </li>
                    <li>
                        <span className="font-semibold">Ngày:</span> Tháng mười một 28, 2024
                    </li>
                    <li>
                        <span className="font-semibold">Tổng cộng:</span>{' '}
                        <span className="font-bold text-lg text-black">{total?.toLocaleString()}₫</span>
                    </li>
                    <li>
                        <span className="font-semibold">Phương thức thanh toán:</span> Chuyển khoản ngân hàng
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default OrderComplete;
