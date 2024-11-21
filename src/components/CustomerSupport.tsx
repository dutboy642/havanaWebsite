import React from 'react';
import { Link } from 'react-router-dom';

const CustomerSupport: React.FC = () => {
    return (
        // <div>
        //     <h3 className="text-xl font-bold mb-2">HỖ TRỢ KHÁCH HÀNG</h3>
        //     <div className='h-[4px] w-8 bg-white mb-1'></div>

        //     <ul>
        //         <li className='mb-1 hover:cursor-pointer hover:text-cyan-500'>Chính sách mua hàng và thanh toán</li>
        //         <li className='mb-1 hover:cursor-pointer hover:text-cyan-500'>Chính sách giao hàng</li>
        //         <li className='mb-1 hover:cursor-pointer hover:text-cyan-500'>Bảo mật thông tin</li>
        //         <li className='mb-1 hover:cursor-pointer hover:text-cyan-500'>Bảo mật thanh toán</li>
        //         <li className='mb-1 hover:cursor-pointer hover:text-cyan-500'>Hướng dẫn đặt hàng</li>
        //         <li className='mb-1 hover:cursor-pointer hover:text-cyan-500'>Chính sách đổi trả</li>
        //     </ul>
        // </div>
        <div className="p-4 sm:p-6 md:p-8 lg:p-10">
            <h3 className="text-lg sm:text-xl md:text-lg font-bold mb-2">HỖ TRỢ KHÁCH HÀNG</h3>
            <div className='h-[4px] w-8 bg-white mb-1'></div>

            <ul>
                <li className='mb-2 text-sm sm:text-base md:text-sm hover:cursor-pointer hover:text-cyan-500'>
                    <Link to="/support">Hướng dẫn mua hàng</Link>
                </li>
                <li className='mb-2 text-sm sm:text-base md:text-sm hover:cursor-pointer hover:text-cyan-500'>
                    <Link to="/support">Hướng dẫn chọn size</Link>
                </li>
                <li className='mb-2 text-sm sm:text-base md:text-sm hover:cursor-pointer hover:text-cyan-500'>
                    <Link to="/support">Điều khoản và chính sách</Link>
                </li>
                <li className='mb-2 text-sm sm:text-base md:text-sm hover:cursor-pointer hover:text-cyan-500'>
                    <Link to="/support">Câu hỏi thường gặp</Link>
                </li>
            </ul>
        </div>

    );
};

export default CustomerSupport;
