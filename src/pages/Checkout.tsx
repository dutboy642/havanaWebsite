import React from 'react';
import ScrollToTop from '../components/ScrollToTop';

import CheckoutInformation from '../components/CheckoutInformation';
import { useProducts } from '../components/ProductContext';
import { Link } from 'react-router-dom';
const Checkout: React.FC = () => {
    const { products, total_money, amount } = useProducts();

    return (
        <div className="w-full">
            <ScrollToTop />
            <div className="w-full flex justify-center">
                {/* Thông tin mua hàng */}
                <div className="w-full grid grid-cols-3">
                    <div className='col-span-2'>
                        <CheckoutInformation></CheckoutInformation>
                    </div>
                    <div className="p-6 w-full  mx-auto bg-[#fbfbfb] shadow-md rounded-md">
                        <h2 className="text-xl font-bold mb-8 mt-4">Đơn hàng ({amount} sản phẩm)</h2>
                        <div className="border-t border-gray-300 my-3 my-5"></div>

                        {products.map(product => {
                            return (
                                <div className="flex items-center mb-4 mt-4">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-12 h-12 rounded-md mr-3"
                                    />
                                    <div className="flex-grow">
                                        <p className="text-gray-800 font-semibold two-line-ellipsis">{product.name}</p>
                                        <p className="text-sm text-gray-600">{product.size}</p>
                                    </div>
                                    <p className="font-semibold">{product.price.toLocaleString()}₫</p>
                                </div>
                            )
                        })}

                        <div className="border-t border-gray-300 my-3 my-5"></div>


                        <div className="grid grid-cols-7 mb-4">
                            <input
                                type="text"
                                placeholder="Nhập mã giảm giá"
                                className=" col-span-5 w-full p-2 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button className="col-span-2 ml-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                                Áp dụng
                            </button>
                        </div>

                        <div className="border-t border-gray-300 my-3 my-5"></div>

                        <div className="flex justify-between items-center mb-2">
                            <p className="text-gray-600">Tạm tính</p>
                            <p className="font-semibold">{total_money.toLocaleString()}₫</p>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                            <p className="text-gray-600">Phí vận chuyển</p>
                            <p className="font-semibold">-</p>
                        </div>
                        <div className="border-t border-gray-300 my-3 my-5"></div>

                        <div className="flex justify-between items-center mb-4">
                            <p className="text-lg font-semibold">Tổng cộng</p>
                            <p className="text-2xl font-semibold text-blue-500">{total_money.toLocaleString()}₫</p>
                        </div>

                        <div className="flex justify-between items-center">
                            <Link to="/cart" className="text-blue-500 hover:underline">
                                &lt; Quay về giỏ hàng
                            </Link>
                            <Link to={`/OrderComplete?total=${total_money}`}>
                                <button className="px-6 py-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">
                                    ĐẶT HÀNG
                                </button></Link>
                        </div>
                    </div>

                </div>

                {/* Đơn hàng */}
            </div>
        </div>
    );
};

export default Checkout;
