import React, { useState } from "react";

interface ProductCardProps {
    title: string;
    image: string;
    image2: string;
    price: number;
    originalPrice?: number;
    discount?: number;
    variants: string[];
}

const ProductCard: React.FC<ProductCardProps> = ({
    title,
    image,
    image2,
    price,
    originalPrice,
    discount,
    variants,
}) => {
    const [currentImage, setCurrentImage] = useState(image);

    return (
        <div className="w-60 p-4">
            <div
                className="relative overflow-hidden"
                onMouseEnter={() => setCurrentImage(image2)}
                onMouseLeave={() => setCurrentImage(image)}
            >
                {/* Hình ảnh sản phẩm */}
                <img
                    src={currentImage}
                    alt={title}
                    className="hover:cursor-pointer w-48 h-48 object-contain rounded-lg transition-transform duration-300 ease-in-out transform scale-110 hover:scale-90 delay-150"
                />
                {/* Nhãn giảm giá */}
                {discount && (
                    <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                        -{discount}%
                    </span>
                )}
            </div>

            {/* Thông tin sản phẩm */}
            <div className="mt-2">
                <h3 className="font-semibold text-sm hover:text-cyan-500 hover:cursor-pointer">{title}</h3>

                <div className="flex items-center mt-1">
                    {/* Giá hiện tại */}
                    <span className="text-red-600 font-bold text-lg">{price.toLocaleString()}₫</span>

                    {/* Giá gốc (nếu có) */}
                    {originalPrice && (
                        <span className="text-gray-400 text-sm line-through ml-2">
                            {originalPrice.toLocaleString()}₫
                        </span>
                    )}
                </div>

                {/* Các biến thể (màu sắc/kích cỡ) */}
                <div className="flex items-center mt-2 space-x-2">
                    {variants.map((variant, index) => (
                        <span
                            key={index}
                            className="w-6 h-6 bg-gray-200 rounded-full border border-gray-300 flex items-center justify-center text-xs"
                        >
                            {variant}
                        </span>
                    ))}
                    {variants.length > 3 && <span className="text-sm">+{variants.length - 3}</span>}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
