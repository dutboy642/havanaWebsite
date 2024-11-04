import React from "react";

type SortFilterProps = {
    onSortChange: (sortOrder: string) => void;
};

const SortFilter: React.FC<SortFilterProps> = ({ onSortChange }) => {
    return (
        <div className="mb-6">
            <h3 className="font-medium mb-2">Sắp xếp</h3>
            <select
                className="form-select text-gray-700  focus:outline-none focus:ring-0"
                onChange={(e) => onSortChange(e.target.value)}
            >
                <option value="az">Tên A-Z</option>
                <option value="za">Tên Z-A</option>
                <option value="priceAsc">Giá tăng dần</option>
                <option value="priceDesc">Giá giảm dần</option>
            </select>
        </div>
    );
};

export default SortFilter;
