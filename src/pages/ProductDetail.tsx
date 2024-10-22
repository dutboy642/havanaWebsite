import { useEffect, useState } from "react";
import { FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";
import { useLocation } from 'react-router-dom';
import notfound from '../assets/Not found.png'
import ScrollToTop from "../components/ScrollToTop";
import { initFlowbite } from "flowbite";
function useQuery() {
    return new URLSearchParams(useLocation().search);
}
// interface Product {
//     id: string;
//     name: string;
//     price: number;
//     oldPrice?: number;
//     discount: number;
//     colors: string[];
//     sizes: string[];
//     image: string;
// }

// const product: Product = {
//     name: "Pants 233 - Quần kaki ống suông",
//     price: 250000,
//     oldPrice: 350000,
//     discount: 20,
//     colors: ["#000000", "#D3D3D3", "#F5F5DC", "#FAEBD7"],
//     sizes: ["M", "L", "XL", "2XL", "3XL"],
//     image: "/path/to/image.jpg", // Thay bằng URL ảnh thực tế
// };

const ProductDetail: React.FC = () => {
    useEffect(() => {
        initFlowbite()
    }, [])
    const query = useQuery();

    // Lấy các tham số từ URL
    const title = query.get('title') || 'No Title';
    const image = query.get('image');
    const image2 = query.get('image2');
    const price = query.get('price');
    const productCode = query.get('productCode');
    const originalPrice = query.get('originalPrice');
    const discount = query.get('discount');
    // const describe = query.get('describe');
    const variants = query.getAll('variants'); // nếu variants là mảng

    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="max-w-6xl mx-auto p-6">
            <ScrollToTop />
            <div className="grid grid-cols-12 gap-6">
                {/* Hình ảnh sản phẩm */}
                <div className="col-span-3 space-y-4">
                    <img src={image || notfound} alt="product" className="w-full h-auto" />
                    <div className="flex flex-col gap-4">
                        {/* Thêm nhiều ảnh nhỏ */}
                        <img src={image2 || notfound} alt="small" className="w-full" />
                        {/* <img src={product.image} alt="small" className="w-full" /> */}
                    </div>
                </div>

                {/* Thông tin sản phẩm */}
                <div className="col-span-9">
                    <h1 className="text-2xl font-bold mb-2">{title}</h1>
                    <p className="text-sm text-gray-600 mb-2">Mã sản phẩm: {productCode}</p>

                    <div className="flex items-center mb-4">
                        <span className="text-2xl font-semibold text-red-600">
                            {price?.toLocaleString() || 0}đ
                        </span>
                        {originalPrice && (
                            <span className="text-gray-400 line-through ml-2">
                                {originalPrice.toLocaleString()}đ
                            </span>
                        )}
                        <span className="ml-2 text-red-500">-{discount}%</span>
                    </div>

                    {/* Khuyến mãi */}
                    <div className="bg-blue-50 p-4 mb-4 border">
                        <p className="text-blue-600 font-semibold">KHUYẾN MÃI - ƯU ĐÃI:</p>
                        <ul className="list-disc ml-5 mt-2 space-y-1">
                            <li>Nhập mã <b>MN20</b> - Giảm ngay 20K cho đơn từ 200K</li>
                            <li>Nhập mã <b>NEW50</b> - Giảm 50K cho đơn từ 300K</li>
                            <li>Miễn phí ship cho đơn trên 500K</li>
                        </ul>
                    </div>

                    {/* Chọn màu */}
                    {/* <div className="mb-4">
                        <p className="font-semibold">Màu:</p>
                        <div className="flex items-center gap-3 mt-2">
                            {product.colors.map((color) => (
                                <div
                                    key={color}
                                    className="w-8 h-8 rounded-full"
                                    style={{ backgroundColor: color }}
                                ></div>
                            ))}
                        </div>
                    </div> */}

                    {/* Chọn size */}
                    <div className="mb-4">
                        <p className="font-semibold">Size:</p>
                        <div className="flex gap-2 mt-2">
                            {variants.map((size) => (
                                <button
                                    key={size}
                                    className={`px-4 py-2 border ${selectedSize === size ? "border-black" : "border-gray-300"
                                        }`}
                                    onClick={() => setSelectedSize(size)}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Chọn số lượng */}
                    <div className="flex items-center gap-4 mb-6">
                        <button
                            className="px-4 py-2 border"
                            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                        >
                            -
                        </button>
                        <span>{quantity}</span>
                        <button
                            className="px-4 py-2 border"
                            onClick={() => setQuantity((q) => q + 1)}
                        >
                            +
                        </button>
                    </div>

                    {/* Nút thêm vào giỏ và mua ngay */}
                    <div className="flex gap-4">
                        <button className="bg-black text-white px-6 py-3">THÊM VÀO GIỎ</button>
                        <button className="bg-red-600 text-white px-6 py-3">MUA NGAY</button>
                    </div>

                    {/* Chia sẻ */}
                    <div className="mt-6 flex items-center gap-4">
                        <p>Chia sẻ:</p>
                        <FaFacebookF className="text-blue-600 cursor-pointer" />
                        <FaTwitter className="text-blue-400 cursor-pointer" />
                        <FaPinterestP className="text-red-600 cursor-pointer" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
