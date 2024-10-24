import React from 'react';
import ProductDetails from '../components/ProductDetails';
import PriceSection from '../components/PriceSection';
import ProductImages from '../components/ProductImages';
import { useLocation } from 'react-router-dom';
import TabComponent from '../components/TabComponent';
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const ProductPage: React.FC = () => {
  const query = useQuery();

  // Lấy các tham số từ URL
  const title = query.get('title') || 'No Title';
  const image = query.get('image');
  const image2 = query.get('image2');
  const price = query.get('price');
  const productCode = query.get('productCode');
  const originalPrice = query.get('originalPrice');
  const discount = query.get('discount');
  const describe = query.get('describe');
  const variants = query.getAll('variants'); // nếu variants là mảng

  // const [selectedSize, setSelectedSize] = useState<string | null>(null);
  // const [quantity, setQuantity] = useState(1);

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Hình ảnh sản phẩm */}
          <ProductImages images={[image || '', image2 || '']} />

          {/* Chi tiết sản phẩm */}
          <div className="flex-1">
            <ProductDetails productCode={productCode || ""} title={title} />
            <PriceSection discount={discount || ''} price={price || ''} originalPrice={originalPrice || ''} variants={variants || []} />
          </div>
        </div>
        <TabComponent description={describe || ''} />
      </div>

    </div>
  );
};

export default ProductPage;
