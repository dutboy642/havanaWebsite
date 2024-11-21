import React, { useState } from 'react';
import Tab from './Tab';
import Table from './Table';

const SizeGuide: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);
    const tabs = ['Thời trang Nam', 'Thời trang Nữ'];

    // Dữ liệu mẫu cho bảng
    const sizeData = [
        {
            headers: ['Size', 'M', 'L', 'XL', '2XL', '3XL'],
            rows: [
                ['Chiều cao (cm)', '<165', '165 - 170', '168 - 173', '170 - 176', '170 - 176'],
                ['Cân nặng (kg)', '60', '60 - 64', '64 - 69', '68 - 72', '70 - 74'],
                ['Vòng ngực', '86 - 90', '90 - 94', '94 - 98', '98 - 102', '102 - 104'],
                ['Vòng eo', '68 - 72', '72 - 76', '76 - 80', '80 - 84', '84 - 86'],
                ['Vòng mông', '88 - 92', '92 - 96', '96 - 100', '100 - 104', '104 - 108'],
            ],
        },
        {
            headers: ['Size', 'S', 'M', 'L', 'XL'],
            rows: [
                ['Chiều cao (cm)', '<160', '160 - 167', '167 - 175', '175 - 178'],
                ['Cân nặng (kg)', '<60', '60 - 65', '65 - 70', '70 - 72'],
            ],
        },
        {
            headers: ['Size', '29', '30', '31', '32', '34'],
            rows: [
                ['Rộng cạp (cm)', '37', '39', '41', '43', '45'],
                ['Dài quần (cm)', '94', '98', '100', '102', '104'],
                ['Rộng ống (cm)', '44', '48', '27', '30', '33'],
            ],
        },
    ];

    return (
        <div className="bg-white p-8 rounded-lg shadow-lg w-full mx-auto">
            <h1 className="text-2xl font-bold mb-6">Hướng Dẫn Chọn Size</h1>
            <Tab tabs={tabs} activeTab={activeTab} onTabClick={setActiveTab} />
            <div>
                {sizeData.map((data, index) =>
                    activeTab === index ? (
                        <Table key={index} headers={data.headers} rows={data.rows} />
                    ) : null
                )}
            </div>
        </div>
    );
};

export default SizeGuide;
