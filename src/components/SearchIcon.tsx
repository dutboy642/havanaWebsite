import React from "react";
import { FiSearch } from "react-icons/fi";

const UserIcon: React.FC = () => {
    return (
        <div className="cursor-pointer">
            <FiSearch size={24} />
        </div>
    );
};

export default UserIcon;
