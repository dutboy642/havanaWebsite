import React from "react";

const TypeFilter: React.FC = () => {
    const typeOptions = [
        "Hình in DTG",
        "Hình Thêu",
        "Quần dài",
        "Quần Jean",
        "Quần short Kaki",
    ];

    return (
        <div className="mb-6">
            <h3 className="font-medium mb-2">Loại</h3>
            <ul>
                {typeOptions.map((type, index) => (
                    <li key={index} className="mb-1">
                        <label className="inline-flex items-center">
                            <input
                                type="checkbox"
                                className="form-checkbox h-4 w-4 text-blue-600"
                            />
                            <span className="ml-2 text-gray-700">{type}</span>
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TypeFilter;
