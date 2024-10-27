import React, { useState } from 'react';
// import { useAuth } from "./AuthContext";
import { useProducts } from '../components/ProductContext';
import { Link } from 'react-router-dom';

interface PriceSectionProps {
    price: string,
    originalPrice: string,
    discount: string,
    title: string,
    image: string,
    // describe: string,
    variants: string[], // n
}

const PriceSection: React.FC<PriceSectionProps> = ({
    price,
    originalPrice,
    discount,
    title,
    image,
    // describe,
    variants
}) => {
    const [size, setSize] = useState<string>(variants[0]);
    const [quantity, setQuantity] = useState<number>(1);
    const [isSave, setIsSave] = useState<boolean>(false);
    // const { isLoggedIn } = useAuth(); // Lấy trạng thái và hàm logout từ context
    const { amount, addProduct, total_money } = useProducts();

    return (
        <div className="mt-8">
            {/* Giá sản phẩm */}
            <div className="flex items-center space-x-4">
                <p className="text-3xl font-semibold text-red-500">{parseInt(price).toLocaleString()}đ</p>
                <p className="text-lg text-gray-500 line-through">{parseInt(originalPrice).toLocaleString()}đ</p>
                <p className="text-lg text-green-600">-{discount}%</p>
            </div>

            {/* Mã giảm giá */}
            <div className="mt-4">
                <p className="text-sm font-semibold text-gray-700">Mã giảm giá</p>
                <div className="flex space-x-2 mt-2">
                    <span className="bg-gray-200 px-3 py-1 rounded text-gray-700">FREESHIP</span>
                    <span className="bg-gray-200 px-3 py-1 rounded text-gray-700">NEW50</span>
                    <span className="bg-gray-200 px-3 py-1 rounded text-gray-700">HVN24</span>
                </div>
            </div>

            {/* Chọn kích thước */}
            <div className="mt-6">
                <p className="text-sm font-semibold text-gray-700">Kích thước</p>
                <div className="flex space-x-3 mt-2">
                    {variants.map((s) => (
                        <button
                            key={s}
                            onClick={() => setSize(s)}
                            className={`px-4 py-2 border ${size === s ? 'bg-black text-white' : 'bg-white text-black'} rounded`}
                        >
                            {s}
                        </button>
                    ))}
                </div>
            </div>

            {/* Chọn số lượng */}
            <div className="mt-6 flex items-center space-x-3">
                <button
                    onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                    className="px-4 py-2 border bg-gray-100 rounded"
                >
                    -
                </button>
                <p className="text-lg">{quantity}</p>
                <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 border bg-gray-100 rounded"
                >
                    +
                </button>
            </div>

            {/* Nút hành động */}
            <div className="mt-6 flex space-x-4">
                <button onClick={() => {
                    addProduct(title, parseInt(price), image, quantity, size);
                }} data-modal-target="popup-modal" data-modal-toggle="popup-modal" className="flex-1 bg-gray-200 text-gray-700 py-3 px-4 rounded">
                    Thêm vào giỏ
                </button>
                {/* 
                <button  className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                    Toggle modal
                </button> */}

                <div id="popup-modal" tabIndex={-1} className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div className="relative p-4 w-full max-w-md max-h-full">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <button type="button" className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                            <div className="p-4 md:p-5 text-center">
                                {/* <svg className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg> */}
                                <div className="flex justify-start gap-3 items-center">
                                    <img src="https://static-00.iconduck.com/assets.00/success-icon-512x512-qdg1isa0.png" className='size-6' alt="" />
                                    <p className="text-green-600 font-semibold">Thêm vào giỏ hàng thành công</p>
                                    {/* <button className="text-gray-500 hover:text-gray-700">&times;</button> */}
                                    {/* <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3> */}

                                </div>

                                <div className="bg-white rounded-lg w-96 p-6">

                                    <div className="mt-4 flex space-x-4">
                                        <img
                                            src={image} // Thay bằng URL hình ảnh thực tế
                                            alt="Sweater"
                                            className="w-24 h-24 rounded-md object-cover"
                                        />
                                        <div>
                                            <p className="text-lg font-semibold text-left two-line-ellipsis">{title}</p>
                                            <p className="text-gray-500 text-left">{size}</p>
                                        </div>
                                    </div>
                                    {/* ,
                                    originalPrice,
                                    discount,
                                    // describe,
                                    variants
}) => {
    const [size, setSize] = useState<string>(variants[0]);
                                        const [quantity, setQuantity] = useState<number>(1);
                                            const [isSave, setIsSave] = useState<boolean>(false); */}

                                    <div className="mt-4 border-t pt-4 flex justify-between">
                                        <p className="text-cyan-600 hover:cursor-pointer">
                                            Giỏ hàng hiện có
                                        </p>
                                        <div>
                                            <p className="font-bold text-black">{total_money.toLocaleString()}₫</p>
                                            <p className="text-gray-500">({amount}) sản phẩm</p>
                                        </div>
                                    </div>


                                </div>
                                <div className="mt-6 flex justify-center gap-6">
                                    <Link data-modal-hide="popup-modal" to='/Cart' className="bg-gray-300 hover:bg-gray-400 text-black font-semibold py-2 px-4 rounded-md">
                                        Xem giỏ hàng
                                    </Link>
                                    <button data-modal-hide="popup-modal" type="button" className="bg-black hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md">
                                        Thanh toán
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <button className="flex-1 bg-black text-white py-3 px-4 rounded">
                    Mua ngay
                </button>
            </div>
            <div className='text-center pt-6'>
                <span>Gọi đặt mua <span className='font-bold'>0383.502.273</span> (9:30 - 22:00)</span>
            </div>
            <div className='grid grid-cols-2 gap-6 mt-4' >
                <span className='flex items-center'>
                    <img className='size-6 me-2' src="//bizweb.dktcdn.net/100/516/928/themes/951952/assets/policy_product_image_1.png?1726634821799" alt="" />
                    Giao hàng toàn quốc
                </span>
                <span className='flex items-center'>
                    <img className='size-6 me-2' src="//bizweb.dktcdn.net/100/516/928/themes/951952/assets/policy_product_image_4.png?1726634821799" alt="" />
                    Cam kết chính hãng</span>
            </div>
            <span onClick={() => { setIsSave(!isSave) }} className='flex items-center h-12  mt-8 hover:cursor-pointer'>
                {/* <img className='h-full size-12 border-[1px] border-gray-200' src="https://wishlists.sapoapps.vn/content/images/iwish_add.png" alt="" /> */}
                <i className={!isSave ? "flex content-center h-full size-12 text-4xl text-center border-[1px] border-gray-200 text-gray-200 fa fa-heart" : "flex content-center h-full size-12 text-4xl text-center border-[1px] border-gray-200 text-red-400 fa fa-heart"} aria-hidden="true"></i>
                <span className='h-full flex items-center text-cyan-500 px-2 border-[1px] border-gray-200'>Thêm vào yêu thích</span>
            </span>
        </div>
    );
};

export default PriceSection;
