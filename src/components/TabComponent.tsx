import React, { useState } from "react";
interface TabProps {
    description: string
}

const TabComponent: React.FC<TabProps> = ({
    description
}) => {
    const [activeTab, setActiveTab] = useState<string>("description");

    const renderContent = () => {
        switch (activeTab) {
            case "description":
                return (
                    <div className="p-4">
                        <h2 className="font-bold text-lg">Mô tả sản phẩm</h2>
                        <p dangerouslySetInnerHTML={{ __html: description }}></p>
                    </div>
                );
            case "shipping":
                return (
                    <div className="p-4">
                        <h2 className="font-bold text-lg">Chính sách giao hàng</h2>
                        <p>Giao hàng toàn quốc trong vòng 3-5 ngày làm việc.</p>
                    </div>
                );
            case "return":
                return (
                    <div className="p-4">
                        <h2 className="font-bold text-lg">Chính sách đổi trả</h2>
                        <p>Đổi trả trong vòng 7 ngày với điều kiện sản phẩm chưa qua sử dụng.</p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="w-full mx-auto mt-10">
            <div className="flex justify-center border-b border-gray-300">
                {["description", "shipping", "return"].map((tab) => (
                    <button
                        key={tab}
                        className={`relative p-3 w-64 text-center 
              ${activeTab === tab ? "text-black font-semibold" : "text-gray-500"}
            `}
                        onClick={() => setActiveTab(tab)}
                    >
                        <span className="font-bold text-lg">{tab === "description" ? "Mô tả sản phẩm" : tab === "shipping" ? "Chính sách giao hàng" : "Chính sách đổi trả"}</span>
                        {/* Underline animation */}
                        <span
                            className={`absolute bottom-0 left-0 h-[2px] bg-black transition-all duration-300 ease-in-out
                ${activeTab === tab ? "w-full" : "w-0"}
              `}
                        ></span>
                    </button>
                ))}
            </div>
            <div className="mt-4">{renderContent()}</div>
        </div>
    );
};

export default TabComponent;
