import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchIcon: React.FC = () => {
    return (
        <div className="cursor-pointer">
            <FiSearch className="text-[#79D1C3]" size={24} />
        </div>
    );
};

export default SearchIcon;
