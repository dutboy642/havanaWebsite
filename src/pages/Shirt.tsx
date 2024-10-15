import Filter from "../components/Filter";
import ProductCard from "../components/ProductCard";
const Shirt: React.FC = () => {
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
            <div>Hello</div>
            <div className="grid grid-cols-4 pb-10">
                <div className="col-span-1">
                    <Filter />
                </div>
                <div className="col-span-3">
                    <div className="grid grid-cols-4 gap-6">
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

export default Shirt;
