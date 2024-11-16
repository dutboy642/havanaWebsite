import React, { useEffect, useState } from 'react';

interface SidebarProps {
    onSelect: (contentKey: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onSelect }) => {
    const [selected, setSelected] = useState<string | null>(null);

    const handleSelect = (contentKey: string) => {
        setSelected(contentKey);
        onSelect(contentKey);
    };
    useEffect(() => {
        handleSelect('contact')
    }, [])

    return (
        <div className="w-1/4 bg-gray-100 p-4 space-y-4">
            {[
                { key: 'contact', label: 'Liên hệ' },
                { key: 'guide', label: 'Hướng dẫn mua hàng' },
                { key: 'size', label: 'Hướng dẫn chọn size' },
                { key: 'terms', label: 'Điều khoản và chính sách' },
                { key: 'faq', label: 'Câu hỏi thường gặp' },
            ].map((item) => (
                <button
                    key={item.key}
                    onClick={() => handleSelect(item.key)}
                    className={`w-full text-left py-2 px-4 bg-white border-l-4 ${selected === item.key ? 'border-red-500' : 'border-gray-300 hover:border-red-500'
                        } focus:outline-none`}
                >
                    {item.label}
                </button>
            ))}
        </div>
    );
};

export default Sidebar;
