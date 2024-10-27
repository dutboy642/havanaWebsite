import React, { createContext, useContext, useEffect, useState } from "react";

// Định nghĩa kiểu dữ liệu cho sản phẩm
interface Product {
    name: string;
    image: string;
    price: number;
    quantity: number;
    size: string;
}

// Kiểu dữ liệu cho context
interface ProductContextType {
    products: Product[];
    amount: number;
    total_money: number;
    addProduct: (name: string, price: number, image: string, quantity: number, size: string) => void;
    decreaseProduct: (name: string, price: number, quantity: number) => void;
}

// Tạo Context với giá trị mặc định
const ProductContext = createContext<ProductContextType | undefined>(undefined);

// Custom hook để sử dụng ProductContext
export const useProducts = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error("useProducts phải được sử dụng bên trong ProductProvider");
    }
    return context;
};

// Provider để quản lý state và cập nhật localStorage
export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const savedProducts = localStorage.getItem('products');


    const [products, setProducts] = useState<Product[]>(() => {
        // const  = localStorage.getItem("products");
        return savedProducts ? JSON.parse(savedProducts) : [];
    });
    const [amount, setAmount] = useState(() => {
        // Lấy giá trị từ localStorage nếu có
        let count = 0;
        for (let i = 0; i < products.length; i++) {
            count = count + products[i].quantity
        }
        return count;
    });
    const [total_money, setTotal_money] = useState(() => {
        // Lấy giá trị từ localStorage nếu có
        let count = 0;
        for (let i = 0; i < products.length; i++) {
            count = count + products[i].price * products[i].quantity
        }
        return count;
    });

    // Cập nhật localStorage mỗi khi danh sách sản phẩm thay đổi
    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(products));
    }, [products]);

    const addProduct = (name: string, price: number, image: string, quantity: number, size: string) => {
        setProducts((prev) => {
            const existingProduct = prev.find((p) => p.name === name);
            setAmount(amount + quantity)
            setTotal_money(total_money + price * quantity)
            if (existingProduct) {
                // Nếu sản phẩm đã tồn tại, tăng quantity
                return prev.map((product) =>
                    product.name === name
                        ? { ...product, quantity: product.quantity + quantity }
                        : product
                );
            } else {
                // Nếu sản phẩm chưa tồn tại, thêm mới
                const newProduct: Product = { name, image, price, quantity, size };
                return [...prev, newProduct];
            }
        });
    };
    const decreaseProduct = (name: string, price: number, quantity: number) => {
        setAmount(amount - quantity)
        setTotal_money(total_money - price * quantity)
        setProducts((prev) => {
            return prev
                .map((product) =>
                    product.name === name
                        ? { ...product, quantity: product.quantity - quantity }
                        : product
                )
                .filter((product) => product.quantity > 0); // Xóa sản phẩm nếu quantity <= 0
        });
    };
    return (
        <ProductContext.Provider value={{ products, amount, total_money, addProduct, decreaseProduct }}>
            {children}
        </ProductContext.Provider>
    );
};
