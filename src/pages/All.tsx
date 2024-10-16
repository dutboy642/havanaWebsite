import Filter from "../components/Filter";
import ProductCard from "../components/ProductCard";
const All: React.FC = () => {
    const products = [
        {
            title: "Pants 233 - Quần kaki ống suông",
            image: "//bizweb.dktcdn.net/thumb/grande/100/516/928/products/1-52548f02-4733-4b3f-bafb-fd1c0215883e.jpg?v=1726472261863",
            image2: "//bizweb.dktcdn.net/thumb/grande/100/516/928/products/z5425105961600-b336ef83e831a51fe77f53291021eab2.jpg?v=1726472271627",
            price: 250000,
            originalPrice: 350000,
            discount: 29,
            variants: ["S", "M", "L", "+5"],
        },
        {
            title: "Pants 305 - Quần kaki ống suông form rộng",
            image: "//bizweb.dktcdn.net/thumb/grande/100/516/928/products/1-1a4ed57c-635a-442d-b390-f671f4d1e61e.jpg?v=1726471214163",
            image2: "//bizweb.dktcdn.net/thumb/grande/100/516/928/products/2-3fd7ced4-1911-4103-a65c-be6a85a04ccf.jpg?v=1726471214163",
            price: 500000,
            originalPrice: 650000,
            discount: 24,
            variants: ["M", "L"],
        },
        {
            title: "Widen kaki pants - Quần kaki ống rộng xếp ly",
            image: "https://bizweb.dktcdn.net/thumb/grande/100/516/928/products/1-3e35b7bf-de57-4d2a-9450-1bab20e58c48.jpg?v=1726563568653",
            image2: "//bizweb.dktcdn.net/thumb/grande/100/516/928/products/3-28585380-7c40-4c4e-83ea-cc97b3cbf615.jpg?v=1726563570853",
            price: 490000,
            variants: ["S", "M", "L", "+1"],
        },
        {
            title: "Pants 207 - Quần kaki xếp ly ống rộng",
            image: "//bizweb.dktcdn.net/thumb/grande/100/516/928/products/1-5ef011b0-168b-4a96-9fcf-720359fd04f3.jpg?v=1726469647303",
            image2: "//bizweb.dktcdn.net/thumb/grande/100/516/928/products/55b0394b-4875-4dac-8a0d-c2ed1f2ca9b0.jpg?v=1726469647303",
            price: 360000,
            originalPrice: 450000,
            discount: 20,
            variants: ["S", "M"],
        },
        {
            title: "Pants 233 - Quần kaki ống suông",
            image: "//bizweb.dktcdn.net/thumb/grande/100/516/928/products/1-52548f02-4733-4b3f-bafb-fd1c0215883e.jpg?v=1726472261863",
            image2: "//bizweb.dktcdn.net/thumb/grande/100/516/928/products/z5425105961600-b336ef83e831a51fe77f53291021eab2.jpg?v=1726472271627",
            price: 250000,
            originalPrice: 350000,
            discount: 29,
            variants: ["S", "M", "L", "+5"],
        },
        {
            title: "Pants 305 - Quần kaki ống suông form rộng",
            image: "//bizweb.dktcdn.net/thumb/grande/100/516/928/products/1-1a4ed57c-635a-442d-b390-f671f4d1e61e.jpg?v=1726471214163",
            image2: "//bizweb.dktcdn.net/thumb/grande/100/516/928/products/2-3fd7ced4-1911-4103-a65c-be6a85a04ccf.jpg?v=1726471214163",
            price: 500000,
            originalPrice: 650000,
            discount: 24,
            variants: ["M", "L"],
        },
        {
            title: "Widen kaki pants - Quần kaki ống rộng xếp ly",
            image: "https://bizweb.dktcdn.net/thumb/grande/100/516/928/products/1-3e35b7bf-de57-4d2a-9450-1bab20e58c48.jpg?v=1726563568653",
            image2: "//bizweb.dktcdn.net/thumb/grande/100/516/928/products/3-28585380-7c40-4c4e-83ea-cc97b3cbf615.jpg?v=1726563570853",
            price: 490000,
            variants: ["S", "M", "L", "+1"],
        },
        {
            title: "Pants 207 - Quần kaki xếp ly ống rộng",
            image: "//bizweb.dktcdn.net/thumb/grande/100/516/928/products/1-5ef011b0-168b-4a96-9fcf-720359fd04f3.jpg?v=1726469647303",
            image2: "//bizweb.dktcdn.net/thumb/grande/100/516/928/products/55b0394b-4875-4dac-8a0d-c2ed1f2ca9b0.jpg?v=1726469647303",
            price: 360000,
            originalPrice: 450000,
            discount: 20,
            variants: ["S", "M"],
        },
        {
            title: "Pants 233 - Quần kaki ống suông",
            image: "//bizweb.dktcdn.net/thumb/grande/100/516/928/products/1-52548f02-4733-4b3f-bafb-fd1c0215883e.jpg?v=1726472261863",
            image2: "//bizweb.dktcdn.net/thumb/grande/100/516/928/products/z5425105961600-b336ef83e831a51fe77f53291021eab2.jpg?v=1726472271627",
            price: 250000,
            originalPrice: 350000,
            discount: 29,
            variants: ["S", "M", "L", "+5"],
        },
        {
            title: "Pants 305 - Quần kaki ống suông form rộng",
            image: "//bizweb.dktcdn.net/thumb/grande/100/516/928/products/1-1a4ed57c-635a-442d-b390-f671f4d1e61e.jpg?v=1726471214163",
            image2: "//bizweb.dktcdn.net/thumb/grande/100/516/928/products/2-3fd7ced4-1911-4103-a65c-be6a85a04ccf.jpg?v=1726471214163",
            price: 500000,
            originalPrice: 650000,
            discount: 24,
            variants: ["M", "L"],
        },
        {
            title: "Widen kaki pants - Quần kaki ống rộng xếp ly",
            image: "https://bizweb.dktcdn.net/thumb/grande/100/516/928/products/1-3e35b7bf-de57-4d2a-9450-1bab20e58c48.jpg?v=1726563568653",
            image2: "//bizweb.dktcdn.net/thumb/grande/100/516/928/products/3-28585380-7c40-4c4e-83ea-cc97b3cbf615.jpg?v=1726563570853",
            price: 490000,
            variants: ["S", "M", "L", "+1"],
        },
        {
            title: "Pants 207 - Quần kaki xếp ly ống rộng",
            image: "//bizweb.dktcdn.net/thumb/grande/100/516/928/products/1-5ef011b0-168b-4a96-9fcf-720359fd04f3.jpg?v=1726469647303",
            image2: "//bizweb.dktcdn.net/thumb/grande/100/516/928/products/55b0394b-4875-4dac-8a0d-c2ed1f2ca9b0.jpg?v=1726469647303",
            price: 360000,
            originalPrice: 450000,
            discount: 20,
            variants: ["S", "M"],
        },
        {
            title: "Pants 233 - Quần kaki ống suông",
            image: "//bizweb.dktcdn.net/thumb/grande/100/516/928/products/1-52548f02-4733-4b3f-bafb-fd1c0215883e.jpg?v=1726472261863",
            image2: "//bizweb.dktcdn.net/thumb/grande/100/516/928/products/z5425105961600-b336ef83e831a51fe77f53291021eab2.jpg?v=1726472271627",
            price: 250000,
            originalPrice: 350000,
            discount: 29,
            variants: ["S", "M", "L", "+5"],
        },
        {
            title: "Pants 305 - Quần kaki ống suông form rộng",
            image: "//bizweb.dktcdn.net/thumb/grande/100/516/928/products/1-1a4ed57c-635a-442d-b390-f671f4d1e61e.jpg?v=1726471214163",
            image2: "//bizweb.dktcdn.net/thumb/grande/100/516/928/products/2-3fd7ced4-1911-4103-a65c-be6a85a04ccf.jpg?v=1726471214163",
            price: 500000,
            originalPrice: 650000,
            discount: 24,
            variants: ["M", "L"],
        },
        {
            title: "Widen kaki pants - Quần kaki ống rộng xếp ly",
            image: "https://bizweb.dktcdn.net/thumb/grande/100/516/928/products/1-3e35b7bf-de57-4d2a-9450-1bab20e58c48.jpg?v=1726563568653",
            image2: "//bizweb.dktcdn.net/thumb/grande/100/516/928/products/3-28585380-7c40-4c4e-83ea-cc97b3cbf615.jpg?v=1726563570853",
            price: 490000,
            variants: ["S", "M", "L", "+1"],
        },
        {
            title: "Pants 207 - Quần kaki xếp ly ống rộng",
            image: "//bizweb.dktcdn.net/thumb/grande/100/516/928/products/1-5ef011b0-168b-4a96-9fcf-720359fd04f3.jpg?v=1726469647303",
            image2: "//bizweb.dktcdn.net/thumb/grande/100/516/928/products/55b0394b-4875-4dac-8a0d-c2ed1f2ca9b0.jpg?v=1726469647303",
            price: 360000,
            originalPrice: 450000,
            discount: 20,
            variants: ["S", "M"],
        },
    ];
    return (
        <div className="max-w-[1055px] mx-auto">
            <nav className="flex mt-8 mb-4" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                    <li className="inline-flex items-center">
                        <a href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                            <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                            </svg>
                            Trang chủ
                        </a>
                    </li>
                    <li aria-current="page">
                        <div className="flex items-center">
                            <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Tất cả sản phẩm</span>
                        </div>
                    </li>
                </ol>
            </nav>

            <div className="grid grid-cols-4 pb-10">
                <div className="col-span-1">
                    <Filter title="Tất cả sản phẩm" />
                </div>
                <div className="col-span-3">
                    <div className="flex flex-row-reverse mb-4">
                        <div>
                            <span>Sắp xếp</span>
                            <select className="px-2 py-1 rounded ms-2">
                                <option value="">Tên A → Z</option>
                                <option value="">Tên Z → A</option>
                                <option value="">Giá tăng dần</option>
                                <option value="">Giá giảm dần</option>
                            </select>
                        </div>
                    </div>
                    <div className=" grid grid-cols-4 gap-6">
                        {products.map((product, index) => (
                            <ProductCard
                                key={index}
                                title={product.title}
                                image={product.image}
                                image2={product.image2}
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
    )
}

export default All;
