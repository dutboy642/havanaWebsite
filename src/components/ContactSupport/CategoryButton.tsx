import React from 'react';

interface CategoryButtonProps {
    label: string;
    isSelected: boolean;
    onClick: () => void;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ label, isSelected, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`flex-1 p-4 text-center rounded-md font-semibold 
        ${isSelected ? 'bg-yellow-400 text-white' : 'bg-yellow-100 text-gray-800'}
        hover:bg-yellow-300`}
        >
            {label}
        </button>
    );
};

export default CategoryButton;
