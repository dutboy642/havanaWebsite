import React from "react";
import PriceFilter from "./PriceFilter";
import TypeFilter from "./TypeFilter";


interface FilterProps {
    title: string;
}


const Filter: React.FC<FilterProps> = ({
    title }) => {
    return (
        <div className="p-4 w-full bg-white rounded-lg shadow">
            <h2 className="text-lg font-bold mb-4">{title}</h2>
            <PriceFilter />
            <TypeFilter />
            <button className="text-blue-500 mt-2">Xem thêm</button>
        </div>
    );
};

export default Filter;
