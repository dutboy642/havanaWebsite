import React, { useState } from 'react';

interface ProductImagesProps {
  images: string[];
}

const ProductImages: React.FC<ProductImagesProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Hàm chuyển sang ảnh tiếp theo
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Hàm quay lại ảnh trước đó
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Hàm cập nhật khi click vào ảnh bên cạnh
  const setImageByIndex = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="grid grid-cols-4 lg:w-1/2 gap-4">
      {/* Các ảnh nhỏ làm indicator */}
      <div className="col-span-1 flex flex-col space-y-2">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Product Image ${index + 1}`}
            className={`w-[80%] mx-auto mb-2 rounded cursor-pointer h-24 object-cover border ${currentImageIndex === index ? 'border-4 border-blue-500' : 'border-gray-300'
              }`}
            onClick={() => setImageByIndex(index)}
          />
        ))}
      </div>

      {/* Carousel hiển thị ảnh lớn */}
      <div className="col-span-3 relative">
        <div className="relative w-full h-96 overflow-hidden rounded-lg">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Product Image ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity ease-in-out duration-700 ${currentImageIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
            />
          ))}
        </div>

        {/* Nút previous */}
        <button
          onClick={prevImage}
          className="absolute top-[204px] left-4 transform -translate-y-1/2 bg-gray-300/30 p-2 rounded-full hover:bg-gray-500 focus:outline-none"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Nút next */}
        <button
          onClick={nextImage}
          className="absolute top-[204px] right-4 transform -translate-y-1/2 bg-gray-300/30 p-2 rounded-full hover:bg-gray-500 focus:outline-none"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductImages;
