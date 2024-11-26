// src/components/ArticlesGrid.tsx
import React, { useState } from 'react';
import ArticleCard from '../components/Article/ArticleCard';
import bai1 from '../assets/blackFriday.png'
import bai2 from '../assets/bai2pic3.png'
import bai3 from '../assets/bai3pic1.png'

const articles = [
    {
        title: 'Black Friday 2024: Mua Sắm Thời Trang Đẹp Giá Sập Sàn Cùng Havana',
        date: '30/08/2024',
        image: bai1, // Thay link này bằng ảnh thật
        link: "/BlackFriday"
    },
    {
        title: 'Xu Hướng Thời Trang Hiện Nay: Sự Hòa Quyện Giữa Tính Bền Vững và Cá Nhân Hóa',
        date: '30/08/2024',
        image: bai2,
        link: "/FashionTrend"

    },
    {
        title: 'Cách Phối Đồ Xinh Cho Nàng Thêm Lung Linh Trong Dịp Noel',
        date: '30/08/2024',
        image: bai3,
        link: "/FashionGuide"

    }
];
const itemsPerPage = 8; // Số bài viết trên mỗi trang

const ArticlesGrid: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(articles.length / itemsPerPage);

    // Lấy danh sách bài viết theo trang hiện tại
    const currentArticles = articles.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // Hàm chuyển trang
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div className="py-8">
            <h1 className="text-2xl font-bold text-center mb-8">Bài viết mới nhất</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-16">
                {currentArticles.map((article, index) => (
                    <ArticleCard
                        key={index}
                        title={article.title}
                        date={article.date}
                        image={article.image}
                        link={article.link}
                    />
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center mt-6 space-x-2">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={`px-4 py-2 rounded-md border ${currentPage === index + 1
                            ? 'bg-blue-500 text-white'
                            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                            }`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ArticlesGrid;