import React from "react";
import PriceFilter from "./PriceFilter";
import TypeFilter from "./TypeFilter";

const Filter: React.FC = () => {
    return (
        <div className="p-4 w-full bg-white rounded-lg shadow">
            <h2 className="text-lg font-bold mb-4">New</h2>
            <PriceFilter />
            <TypeFilter />
            <button className="text-blue-500 mt-2">Xem thêm</button>
        </div>
    );
};

export default Filter;
