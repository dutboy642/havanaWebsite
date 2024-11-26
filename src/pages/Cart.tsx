import React from 'react';
import ScrollToTop from '../components/ScrollToTop';
import { useProducts } from '../components/ProductContext';
import { Link } from 'react-router-dom';
import FloatingButtons from '../components/FloatingButtons';


const Cart: React.FC = () => {
    // const [cartItems, setCartItems] = useState<CartItem[]>([
    //     {
    //         id: 1,
    //         name: 'Hoodles Ribbon Bear - Áo hoodies nỉ unisex',
    //         color: 'Rêu',
    //         size: 'M',
    //         price: 390000,
    //         quantity: 1,
    //         image: 'https://via.placeholder.com/150', // Thay bằng ảnh thực tế
    //     },
    //     {
    //         id: 2,
    //         name: 'Animal Cream - Áo Sweater nỉ unisex',
    //         color: 'Kem',
    //         size: 'M',
    //         price: 2100000,
    //         quantity: 6,
    //         image: 'https://via.placeholder.com/150', // Thay bằng ảnh thực tế
    //     },
    // ]);

    const { products, addProduct, total_money, decreaseProduct, amount } = useProducts();

    // const handleQuantityChange = (id: number, delta: number) => {
    //     setCartItems((prev) =>
    //         prev.map((item) =>
    //             item.id === id
    //                 ? { ...item, quantity: Math.max(1, item.quantity + delta) }
    //                 : item
    //         )
    //     );
    // };

    // const totalAmount = cartItems.reduce(
    //     (total, item) => total + item.price * item.quantity,
    //     0
    // );
    if (amount == 0) {
        return (
            <div className="flex flex-col items-center justify-center h-screen text-center">
                <div className="relative w-32 h-32 mb-6">
                    {/* Icon của giỏ hàng */}
                    {/* <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center">
                        <div className="w-20 h-20 bg-gray-600 rounded-lg flex items-center justify-center">
                            <div className="text-4xl font-bold text-white">X</div>
                        </div>
                    </div> */}
                    <img src="//bizweb.dktcdn.net/100/516/928/themes/951952/assets/cart_empty_background.png?1729842489046" alt="" />
                </div>
                <h2 className="text-lg font-semibold mb-2">“Hổng” có gì trong giỏ hết</h2>
                <p className="text-gray-500 mb-4">Về trang cửa hàng để chọn mua sản phẩm bạn nhé!!</p>
                <Link to='/All' className="px-6 py-2 border border-gray-400 rounded-full text-gray-700 hover:bg-gray-100">
                    Mua sắm ngay
                </Link>
            </div>
        );
    }
    else {
        return (
            // <div className="flex flex-col lg:flex-row gap-8 p-8">
            //     <ScrollToTop />
            //     {/* Danh sách sản phẩm */}
            //     <div className="flex-1">
            //         <h2 className="text-2xl font-bold mb-6">Giỏ hàng</h2>
            //         {products.map((item) => (
            //             <div key={item.name} className="flex items-center border-b py-4">
            //                 <img src={item.image} alt={item.name} className="w-20 h-20 mr-4" />
            //                 <div className="flex-1">
            //                     <h3 className="font-semibold">{item.name}</h3>
            //                     <p className="text-sm text-gray-500">
            //                         {/* {item.color} / {item.size} */}
            //                         {item.size}
            //                     </p>
            //                 </div>
            //                 <div className="flex items-center gap-2">
            //                     <button
            //                         onClick={() => decreaseProduct(item.name, item.price, 1)}
            //                         className="px-2 py-1 border rounded"
            //                     >
            //                         -
            //                     </button>
            //                     <span>{item.quantity}</span>
            //                     <button
            //                         onClick={() => addProduct(item.name, item.price, item.image, 1, item.size)}
            //                         className="px-2 py-1 border rounded"
            //                     >
            //                         +
            //                     </button>
            //                 </div>
            //                 <p className="w-24 text-right">{item.price.toLocaleString()}₫</p>
            //             </div>
            //         ))}
            //         <p className='mt-5'>Ghi chú đơn hàng</p>
            //         <textarea className="resize-none w-full rounded-md border-gray-300 mt-2" ></textarea>
            //     </div>

            //     {/* Phần thanh toán */}
            //     <div className="w-full lg:w-1/3">
            //         <div className="border p-6 rounded-lg shadow-lg">
            //             <h3 className="text-lg font-bold mb-4">Hẹn giờ nhận hàng</h3>
            //             <div className="mb-4">
            //                 <label className="block text-sm font-medium mb-1">Ngày nhận hàng</label>
            //                 <input
            //                     type="date"
            //                     className="w-full border rounded px-3 py-2"
            //                     defaultValue="2024-10-28"
            //                 />
            //             </div>
            //             <div className="mb-4">
            //                 <label className="block text-sm font-medium mb-1">Thời gian nhận hàng</label>
            //                 <select className="w-full border rounded px-3 py-2">
            //                     <option>Chọn thời gian</option>
            //                     <option>8:00 - 12:00</option>
            //                     <option>12:00 - 18:00</option>
            //                 </select>
            //             </div>
            //             <div className="flex items-center mb-4">
            //                 <input type="checkbox" id="invoice" className="mr-2" />
            //                 <label htmlFor="invoice" className="text-sm">
            //                     Xuất hóa đơn công ty
            //                 </label>
            //             </div>
            //             <div className="flex justify-between font-semibold text-lg mb-4">
            //                 <span>Tổng cộng</span>
            //                 <span>{total_money.toLocaleString()}₫</span>
            //             </div>
            //             <Link to='/checkout'><button className="w-full bg-black text-white py-2 rounded mb-4">
            //                 Thanh Toán
            //             </button></Link>
            //             <div className="flex gap-4">
            //                 {/* <img src="/visa.png" alt="Visa" className="w-10" />
            //             <img src="/momo.png" alt="Momo" className="w-10" />
            //             <img src="/zalopay.png" alt="ZaloPay" className="w-10" /> */}
            //                 <img src="//bizweb.dktcdn.net/100/516/928/themes/951952/assets/footer_trustbadge.png?1729842489046" alt="" />
            //             </div>
            //         </div>
            //     </div>
            // </div>
            <div className="flex flex-col lg:flex-row gap-8 p-4 sm:p-6 md:p-8">
                <ScrollToTop />

                {/* Danh sách sản phẩm */}
                <div className="flex-1">
                    <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Giỏ hàng</h2>
                    {products.map((item) => (
                        <div key={item.name} className="flex items-center border-b py-3 sm:py-4">
                            <img src={item.image} alt={item.name} className="w-16 h-16 sm:w-20 sm:h-20 mr-2 sm:mr-4" />
                            <div className="flex-1">
                                <h3 className="font-semibold text-sm sm:text-base">{item.name}</h3>
                                <p className="text-xs sm:text-sm text-gray-500">{item.size}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => decreaseProduct(item.name, item.price, 1)}
                                    className="px-1 sm:px-2 py-1 border rounded"
                                >
                                    -
                                </button>
                                <span className="text-sm">{item.quantity}</span>
                                <button
                                    onClick={() => addProduct(item.name, item.price, item.image, 1, item.size)}
                                    className="px-1 sm:px-2 py-1 border rounded"
                                >
                                    +
                                </button>
                            </div>
                            <p className="w-20 sm:w-24 text-right">{item.price.toLocaleString()}₫</p>
                        </div>
                    ))}
                    <p className="mt-4 sm:mt-5">Ghi chú đơn hàng</p>
                    <textarea className="resize-none w-full rounded-md border-gray-300 mt-2 p-2" rows={3}></textarea>
                </div>

                {/* Phần thanh toán */}
                <div className="w-full lg:w-1/3">
                    <div className="border p-4 sm:p-6 rounded-lg shadow-lg">
                        <h3 className="text-lg font-bold mb-3 sm:mb-4">Hẹn giờ nhận hàng</h3>
                        <div className="mb-3 sm:mb-4">
                            <label className="block text-sm font-medium mb-1">Ngày nhận hàng</label>
                            <input
                                type="date"
                                className="w-full border rounded px-3 py-2"
                                defaultValue="2024-10-28"
                            />
                        </div>
                        <div className="mb-3 sm:mb-4">
                            <label className="block text-sm font-medium mb-1">Thời gian nhận hàng</label>
                            <select className="w-full border rounded px-3 py-2">
                                <option>Chọn thời gian</option>
                                <option>8:00 - 12:00</option>
                                <option>12:00 - 18:00</option>
                            </select>
                        </div>
                        <div className="flex items-center mb-3 sm:mb-4">
                            <input type="checkbox" id="invoice" className="mr-2" />
                            <label htmlFor="invoice" className="text-sm">
                                Xuất hóa đơn công ty
                            </label>
                        </div>
                        <div className="flex justify-between font-semibold text-base sm:text-lg mb-3 sm:mb-4">
                            <span>Tổng cộng</span>
                            <span>{total_money.toLocaleString()}₫</span>
                        </div>
                        <Link to='/checkout'>
                            <button className="w-full bg-black text-white py-2 rounded mb-3 sm:mb-4">
                                Thanh Toán
                            </button>
                        </Link>
                        <div className="flex gap-4">
                            {/* <img src="//bizweb.dktcdn.net/100/516/928/themes/951952/assets/footer_trustbadge.png?1729842489046" alt="" className="md:w-10 lg:w-10 xl:w-10 sm:w-full " /> */}
                            <img src="//bizweb.dktcdn.net/100/516/928/themes/951952/assets/footer_trustbadge.png?1729842489046" alt="" className="sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2" />

                        </div>
                    </div>
                </div>
                <FloatingButtons></FloatingButtons>
            </div>

        );
    }

};

export default Cart;
