import React from 'react';

type TabProps = {
    tabs: string[];
    activeTab: number;
    onTabClick: (index: number) => void;
};

const Tab: React.FC<TabProps> = ({ tabs, activeTab, onTabClick }) => {
    return (
        <div className="flex border-b mb-4">
            {tabs.map((tab, index) => (
                <button
                    key={index}
                    className={`px-4 py-2 ${activeTab === index ? 'border-b-2 border-red-500 text-red-500' : 'text-gray-600'
                        }`}
                    onClick={() => onTabClick(index)}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
};

export default Tab;
