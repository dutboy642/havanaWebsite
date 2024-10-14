import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import UserIcon from "./components/UserIcon";
import CartIcon from "./components/CartIcon";
import CouponCard from "./components/CouponCard";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
const App: React.FC = () => {
  const products = [
    {
      title: "Pants 233 - Quần kaki ống suông",
      image: "//bizweb.dktcdn.net/thumb/grande/100/516/928/products/1-52548f02-4733-4b3f-bafb-fd1c0215883e.jpg?v=1726472261863",
      price: 250000,
      originalPrice: 350000,
      discount: 29,
      variants: ["S", "M", "L", "+5"],
    },
    {
      title: "Pants 305 - Quần kaki ống suông form rộng",
      image: "https://bizweb.dktcdn.net/thumb/grande/100/516/928/products/2-3fd7ced4-1911-4103-a65c-be6a85a04ccf.jpg?v=1726471214163",
      price: 500000,
      originalPrice: 650000,
      discount: 24,
      variants: ["M", "L"],
    },
    {
      title: "Widen kaki pants - Quần kaki ống rộng xếp ly",
      image: "https://bizweb.dktcdn.net/thumb/grande/100/516/928/products/1-3e35b7bf-de57-4d2a-9450-1bab20e58c48.jpg?v=1726563568653",
      price: 490000,
      variants: ["S", "M", "L", "+1"],
    },
    {
      title: "Pants 207 - Quần kaki xếp ly ống rộng",
      image: "//bizweb.dktcdn.net/thumb/grande/100/516/928/products/1-5ef011b0-168b-4a96-9fcf-720359fd04f3.jpg?v=1726469647303",
      price: 360000,
      originalPrice: 450000,
      discount: 20,
      variants: ["S", "M"],
    },
  ];
  const feedback_images = [
    { image: "//bizweb.dktcdn.net/100/516/928/themes/951952/assets/insta_1_img.jpg?1726634821799" },
    { image: "//bizweb.dktcdn.net/100/516/928/themes/951952/assets/insta_2_img.jpg?1726634821799" },
    { image: "//bizweb.dktcdn.net/100/516/928/themes/951952/assets/insta_3_img.jpg?1726634821799" },
    { image: "//bizweb.dktcdn.net/100/516/928/themes/951952/assets/insta_4_img.jpg?1726634821799" }
  ]
  const coupons = [
    {
      title: "MIỄN PHÍ VẬN CHUYỂN",
      description: "Freeship cho đơn hàng từ 200k",
      expiry: "30/12/2024",
    },
    {
      title: "GIẢM 50K",
      description: "Nhập NEW50 - Áp dụng cho đơn hàng từ 300k",
      expiry: "12/12/2024",
    },
    {
      title: "GIẢM 20K",
      description: "Nhập MN20 - Áp dụng cho đơn hàng từ 200k",
      expiry: "30/12/2024",
    },
  ];
  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex items-center justify-between px-8 py-4">
        <div className="text-2xl font-bold text-blue-600">MONAT BLUE</div>
        <div className="flex items-center space-x-6">
          <UserIcon />
          <CartIcon />
        </div>
      </div>
      <Navbar />
      <div>
        <img src="https://bizweb.dktcdn.net/100/516/928/themes/951952/assets/slider_1.jpg?1726634821799" alt="" />
      </div>
      <div className="flex justify-center items-center bg-gray-50">
        <div className="flex space-x-4">
          {coupons.map((coupon, index) => (
            <CouponCard
              key={index}
              title={coupon.title}
              description={coupon.description}
              expiry={coupon.expiry}
            />
          ))}
        </div>
      </div>
      <div className="p-8 w-[80%] mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">NEW ARRIVAL</h2>
          <a href="#" className="text-blue-500 text-sm">
            Xem tất cả
          </a>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              image={product.image}
              price={product.price}
              originalPrice={product.originalPrice}
              discount={product.discount}
              variants={product.variants}
            />
          ))}
        </div>
      </div>

      <div className="p-8 w-[80%] mx-auto">
        <img src="https://bizweb.dktcdn.net/100/516/928/themes/951952/assets/slide_product_1_img_1_img.jpg?1726634821799" alt="" />
      </div>
      <div className="p-8 w-[80%] mx-auto">
        <div className="grid grid-cols-3">
          <div className="">
            <img src="https://bizweb.dktcdn.net/100/516/928/themes/951952/assets/section_product_image_1_banner.jpg?1726634821799" alt="" />
          </div>
          <div className="col-span-2">
            <div className="grid grid-cols-3 gap-6">
              {products.map((product, index) => (
                <ProductCard
                  key={index}
                  title={product.title}
                  image={product.image}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  discount={product.discount}
                  variants={product.variants}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/*  Quần */}
      <div className="p-8 w-[80%] mx-auto">
        <div className="grid grid-cols-3">

          <div className="col-span-2">
            <div className="grid grid-cols-3 gap-4">
              {products.map((product, index) => (
                <ProductCard
                  key={index}
                  title={product.title}
                  image={product.image}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  discount={product.discount}
                  variants={product.variants}
                />
              ))}
            </div>
          </div>
          <div className="">
            <img src="https://bizweb.dktcdn.net/100/516/928/themes/951952/assets/section_product_image_2_banner.jpg?1726634821799" alt="" />
          </div>
        </div>
      </div>
      {/* Áo sọc */}
      <div className="p-8 w-[80%] mx-auto">
        <div className="grid grid-cols-3">
          <div className="">
            <img src="https://bizweb.dktcdn.net/100/516/928/themes/951952/assets/section_product_image_3_banner.jpg?1726634821799" alt="" />
          </div>
          <div className="col-span-2">
            <div className="grid grid-cols-3 gap-6">
              {products.map((product, index) => (
                <ProductCard
                  key={index}
                  title={product.title}
                  image={product.image}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  discount={product.discount}
                  variants={product.variants}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 w-[80%] mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">FEEDBACK</h2>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {feedback_images.map((item) => (
            <img key={item.image} src={item.image} alt="" />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
