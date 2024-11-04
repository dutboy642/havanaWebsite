import React, { useState } from "react";

type PriceFilterProps = {
    onFilterChange: (selectedPrices: string[]) => void;
};

const PriceFilter: React.FC<PriceFilterProps> = ({ onFilterChange }) => {
    const priceOptions = [
        "Giá dưới 200.000đ",
        "200.000đ - 300.000đ",
        "300.000đ - 500.000đ",
        "500.000đ - 700.000đ",
        "700.000đ - 1.000.000đ",
        "Giá trên 1.000.000đ",
    ];

    const [selectedPrices, setSelectedPrices] = useState<string[]>([]);

    const handlePriceChange = (price: string) => {
        const updatedPrices = selectedPrices.includes(price)
            ? selectedPrices.filter((p) => p !== price)
            : [...selectedPrices, price];
        setSelectedPrices(updatedPrices);
        onFilterChange(updatedPrices); // Gọi hàm khi thay đổi bộ lọc
    };

    return (
        <div className="mb-6">
            <h3 className="font-medium mb-2">Mức Giá</h3>
            <ul>
                {priceOptions.map((price, index) => (
                    <li key={index} className="mb-1">
                        <label className="inline-flex items-center">
                            <input
                                type="checkbox"
                                className="form-checkbox h-4 w-4 text-blue-600 focus:outline-none focus:ring-0" // Thêm focus:ring-0
                                checked={selectedPrices.includes(price)}
                                onChange={() => handlePriceChange(price)}
                            />
                            <span className="ml-2 text-gray-700">{price}</span>
                        </label>
                    </li>
                ))}
            </ul>
        </div>

    );
};

export default PriceFilter;
