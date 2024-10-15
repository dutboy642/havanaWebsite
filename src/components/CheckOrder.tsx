import { useState } from "react";

const CheckOrder = () => {
    const [method, setMethod] = useState<string>("phone");
    const [inputValue, setInputValue] = useState<string>("");

    const handleMethodChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMethod(e.target.value);
        setInputValue(""); // Reset input khi đổi phương thức
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Checking order with ${method}: ${inputValue}`);
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 border-2 rounded-md shadow-md bg-white">
            <h2 className="text-xl font-semibold text-center mb-4">
                🔍 Kiểm tra đơn hàng của bạn
            </h2>

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <span className="font-medium">Kiểm tra bằng</span>
                    <div className="flex items-center space-x-4 mt-2">
                        <label className="flex items-center space-x-1">
                            <input
                                type="radio"
                                name="method"
                                value="phone"
                                checked={method === "phone"}
                                onChange={handleMethodChange}
                            />
                            <span>Số điện thoại</span>
                        </label>

                        <label className="flex items-center space-x-1">
                            <input
                                type="radio"
                                name="method"
                                value="email"
                                checked={method === "email"}
                                onChange={handleMethodChange}
                            />
                            <span>Email</span>
                        </label>

                        <label className="flex items-center space-x-1">
                            <input
                                type="radio"
                                name="method"
                                value="both"
                                checked={method === "both"}
                                onChange={handleMethodChange}
                            />
                            <span>Số điện thoại và Email</span>
                        </label>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block font-medium mb-2">
                        {method === "email" ? "Email" : "Số điện thoại"}
                    </label>
                    <input
                        type={method === "email" ? "email" : "text"}
                        placeholder={method === "email" ? "Nhập email" : "0909 xxx xxx"}
                        value={inputValue}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
                >
                    Kiểm tra
                </button>
            </form>
        </div>
    );
};

export default CheckOrder;
