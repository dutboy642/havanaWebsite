import React, { useState } from "react";
import { Link } from "react-router-dom";

interface ProductCardProps {
    title: string;
    image: string;
    image2: string; // Dấu ? nghĩa là không bắt buộc
    price: number;
    originalPrice?: number;
    discount?: number;
    variants: string[];
    productCode: string;
    describe: string;
}


function createProductLink({
    title,
    image,
    image2,
    price,
    originalPrice,
    discount,
    variants,
    productCode,
    describe,
}: ProductCardProps): string {
    const params = new URLSearchParams({
        title,
        image,
        price: price.toString(),
        productCode,
        describe,
    });

    // Kiểm tra và thêm các giá trị không bắt buộc vào params
    if (image2) params.append("image2", image2);
    if (originalPrice) params.append("originalPrice", originalPrice.toString());
    if (discount) params.append("discount", discount.toString());

    // Thêm các giá trị của mảng `variants`
    variants.forEach((variant) => params.append("variants", variant));

    return `/ProductDetail?${params.toString()}`;
}




const ProductCard: React.FC<ProductCardProps> = ({
    title,
    image,
    image2,
    price,
    originalPrice,
    discount,
    variants,
    productCode,
    describe
}) => {
    const link = createProductLink({
        title,
        image,
        image2,
        price,
        originalPrice,
        discount,
        variants,
        productCode,
        describe
    })
    const [currentImage, setCurrentImage] = useState(image);

    return (
        <Link to={link} className="w-full p-4">
            <div
                className="relative overflow-hidden "
                onMouseEnter={() => setCurrentImage(image2)}
                onMouseLeave={() => setCurrentImage(image)}
            >
                {/* Hình ảnh sản phẩm */}
                <div>
                    <img
                        src={currentImage}
                        alt={title}
                        className="mx-auto hover:cursor-pointer w-full object-contain rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-90 hover:scale-90 delay-150 rounded"
                    />
                </div>
                {/* Nhãn giảm giá */}
                {discount && (
                    <span className=" absolute w-12 top-2 right-1 bg-red-500 text-white text-xs px-2 py-1 rounded">
                        <div className="mx-auto text-center">-{discount}%</div>
                    </span>
                )}
            </div>

            {/* Thông tin sản phẩm */}
            <div className="mt-2">
                <h3 className="two-line-ellipsis font-semibold text-sm hover:text-cyan-500 hover:cursor-pointer">{title}</h3>

                <div className="flex items-center mt-1">
                    {/* Giá hiện tại */}
                    <span className="text-red-600 font-bold text-3xl">{price.toLocaleString()}₫</span>

                    {/* Giá gốc (nếu có) */}
                    {originalPrice && (
                        <span className="text-gray-400 text-xl line-through ml-2">
                            {originalPrice.toLocaleString()}₫
                        </span>
                    )}
                </div>

                {/* Các biến thể (màu sắc/kích cỡ) */}
                <div className="flex items-center mt-2 space-x-2">
                    {variants.map((variant, index) => (
                        <span
                            key={index}
                            className={variant != "Freesize" ? "w-6 h-6 bg-gray-200 rounded-full border border-gray-300 flex items-center justify-center text-xs" : "w-12 h-6 bg-gray-200 rounded-full border border-gray-300 flex items-center justify-center text-xs"}
                        >
                            {variant}
                        </span>
                    ))}
                    {variants.length > 4 && <span className="text-sm">+{variants.length - 4}</span>}
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
