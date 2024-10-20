import React, { useState } from 'react';

interface PriceSectionProps {
    price: string,
    originalPrice: string,
    discount: string,
    // describe: string,
    variants: string[], // n
}

const PriceSection: React.FC<PriceSectionProps> = ({
    price,
    originalPrice,
    discount,
    // describe,
    variants
}) => {
    const [size, setSize] = useState<string>('S');
    const [quantity, setQuantity] = useState<number>(1);

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
                <button className="flex-1 bg-gray-200 text-gray-700 py-3 px-4 rounded">
                    Thêm vào giỏ
                </button>
                <button className="flex-1 bg-black text-white py-3 px-4 rounded">
                    Mua ngay
                </button>
            </div>
        </div>
    );
};

export default PriceSection;
