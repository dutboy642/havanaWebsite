import React from 'react';

const CustomerSupport: React.FC = () => {
    return (
        <div>
            <h3 className="text-xl font-bold mb-2">HỖ TRỢ KHÁCH HÀNG</h3>
            <div className='h-[4px] w-8 bg-white mb-1'></div>

            <ul>
                <li className='mb-1 hover:cursor-pointer hover:text-cyan-500'>Chính sách mua hàng và thanh toán</li>
                <li className='mb-1 hover:cursor-pointer hover:text-cyan-500'>Chính sách giao hàng</li>
                <li className='mb-1 hover:cursor-pointer hover:text-cyan-500'>Bảo mật thông tin</li>
                <li className='mb-1 hover:cursor-pointer hover:text-cyan-500'>Bảo mật thanh toán</li>
                <li className='mb-1 hover:cursor-pointer hover:text-cyan-500'>Hướng dẫn đặt hàng</li>
                <li className='mb-1 hover:cursor-pointer hover:text-cyan-500'>Chính sách đổi trả</li>
            </ul>
        </div>
    );
};

export default CustomerSupport;
