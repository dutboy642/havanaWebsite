import React from "react";
import { FiUser } from "react-icons/fi";

const UserIcon: React.FC = () => {
    return (
        <div className="cursor-pointer">
            <FiUser size={24} />
        </div>
    );
};

export default UserIcon;
