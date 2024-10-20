import React from 'react';

interface ProductDetailProps {

    title: string,
    productCode: string,
}

const ProductDetails: React.FC<ProductDetailProps> = ({
    title,
    productCode,
}) => {
    return (
        <div className="space-y-4">
            <h1 className="text-2xl font-bold text-gray-900">
                {title}
            </h1>
            <p className="text-sm text-gray-600">
                Thương hiệu: <span className="text-blue-500">Havana</span> | Mã sản phẩm: <span>{productCode}</span>
            </p>
            <div className="mt-4 space-y-2">
                <h2 className="flex gap-2 text-xl font-semibold text-gray-700">
                    <img className='size-6' src="//bizweb.dktcdn.net/100/516/928/themes/951952/assets/icon-product-promotion.png?1726634821799" alt="" />
                    Khuyến Mãi - Ưu Đãi</h2>
                <div className='border-[3px] border-[#6782A6] border-dashed p-2 rounded'>
                    <ul className=" list-disc ml-5 text-gray-600 space-y-1">
                        <li>Nhập HVN24 - Giảm ngay 20K cho đơn từ 200K</li>
                        <li>Nhập NEW50 - Giảm ngay 50K cho đơn từ 300K</li>
                        <li>Miễn phí Ship cho đơn hàng từ 200.000đ</li>
                        <li>Đổi trả trong 7 ngày nếu sản phẩm lỗi bất kì</li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default ProductDetails;
