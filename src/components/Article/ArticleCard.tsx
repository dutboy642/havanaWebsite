// src/components/ArticleCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface ArticleCardProps {
    title: string;
    date: string;
    image: string;
    link: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ title, date, image, link }) => {
    return (
        <Link
            to={link}
            className=" flex flex-col items-center text-center bg-white shadow-lg rounded-lg overflow-hidden group"
        >
            <img
                src={image}
                alt={title}
                className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-90"
            />
            <div className="p-4">
                <h2 className="two-line-ellipsis text-lg font-semibold text-gray-800  hover:text-cyan-500">
                    {title}
                </h2>
                <p className="text-sm text-gray-500 mt-2">{date}</p>
            </div>
        </Link>

    );
};

export default ArticleCard;
