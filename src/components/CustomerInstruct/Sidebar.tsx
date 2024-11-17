import React, { useEffect, useState } from 'react';

interface SidebarProps {
    onSelect: (contentKey: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onSelect }) => {
    const [selected, setSelected] = useState<string | null>(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleSelect = (contentKey: string) => {
        setSelected(contentKey);
        onSelect(contentKey);
        setIsSidebarOpen(false); // Đóng sidebar khi chọn mục

    };
    useEffect(() => {
        handleSelect('contact')
    }, [])

    // const handleSelect = (key) => {
    //     console.log(`Selected: ${key}`);
    // };

    return (
        // <div className="w-1/4 bg-gray-100 p-4 space-y-4">
        //     {[
        //         { key: 'contact', label: 'Liên hệ' },
        //         { key: 'guide', label: 'Hướng dẫn mua hàng' },
        //         { key: 'size', label: 'Hướng dẫn chọn size' },
        //         { key: 'terms', label: 'Điều khoản và chính sách' },
        //         { key: 'faq', label: 'Câu hỏi thường gặp' },
        //     ].map((item) => (
        //         <button
        //             key={item.key}
        //             onClick={() => handleSelect(item.key)}
        //             className={`w-full text-left py-2 px-4 bg-white border-l-4 ${selected === item.key ? 'border-red-500' : 'border-gray-300 hover:border-red-500'
        //                 } focus:outline-none`}
        //         >
        //             {item.label}
        //         </button>
        //     ))}
        // </div>
        // <div className="relative">
        //     {/* Nút menu chỉ hiển thị trên màn hình nhỏ */}
        //     <button
        //         className="sm:hidden bg-gray-700 text-white p-2 rounded-full shadow-lg focus:outline-none"
        //         onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        //     >
        //         {isSidebarOpen ? '✖' : '☰'}
        //     </button>

        //     {/* Sidebar */}
        //     <div
        //         className={`fixed top-0 left-0 h-full bg-gray-100 p-4 space-y-4 transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        //             } sm:translate-x-0 sm:relative sm:w-1/4 sm:block`}
        //     >
        //         {[
        //             { key: 'contact', label: 'Liên hệ' },
        //             { key: 'guide', label: 'Hướng dẫn mua hàng' },
        //             { key: 'size', label: 'Hướng dẫn chọn size' },
        //             { key: 'terms', label: 'Điều khoản và chính sách' },
        //             { key: 'faq', label: 'Câu hỏi thường gặp' },
        //         ].map((item) => (
        //             <button
        //                 key={item.key}
        //                 onClick={() => handleSelect(item.key)}
        //                 className={`w-full text-left py-2 px-4 bg-white border-l-4 ${item.key === 'contact'
        //                     ? 'border-red-500'
        //                     : 'border-gray-300 hover:border-red-500'
        //                     } focus:outline-none`}
        //             >
        //                 {item.label}
        //             </button>
        //         ))}
        //     </div>
        // </div>
        <div className="relative w-1/4">
            {/* Nút menu chỉ hiển thị trên màn hình nhỏ */}
            <button
                className="sm:hidden bg-gray-700 text-white p-2 rounded-full shadow-lg focus:outline-none"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
                {isSidebarOpen ? '✖' : '☰'}
            </button>

            {/* Sidebar */}
            <div
                className={`absolute top-0 left-0 h-full bg-gray-100 p-4 space-y-4 transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    } sm:translate-x-0 sm:relative sm:w-full sm:block`}
                style={{ maxHeight: '100%' }} // Giới hạn chiều cao trong container
            >
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
        </div>



        // <div className="lg:w-1/4 md:w-1/2 sm:w-1/2 bg-gray-100 p-4 space-y-4">
        //     {/* Button to toggle sidebar on small screens */}
        //     <button
        //         onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        //         className="lg:hidden p-4 bg-blue-500 text-white"
        //     >
        //         {isSidebarOpen ? 'Đóng Sidebar' : 'Mở Sidebar'}
        //     </button>

        //     {/* Sidebar */}
        //     <div className={`w-full bg-gray-100 p-4 space-y-4 ${isSidebarOpen ? 'block' : 'hidden'} lg:block`}>
        //         {[
        //             { key: 'contact', label: 'Liên hệ' },
        //             { key: 'guide', label: 'Hướng dẫn mua hàng' },
        //             { key: 'size', label: 'Hướng dẫn chọn size' },
        //             { key: 'terms', label: 'Điều khoản và chính sách' },
        //             { key: 'faq', label: 'Câu hỏi thường gặp' },
        //         ].map((item) => (
        //             <button
        //                 key={item.key}
        //                 onClick={() => handleSelect(item.key)}
        //                 className={`w-full text-left py-2 px-4 bg-white border-l-4 ${selected === item.key ? 'border-red-500' : 'border-gray-300 hover:border-red-500'
        //                     } focus:outline-none`}
        //             >
        //                 {item.label}
        //             </button>
        //         ))}
        //     </div>
        // </div>
        // <div className="relative">
        //     {/* Button to toggle sidebar on small screens */}
        //     <button
        //         onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        //         className="lg:hidden p-4 bg-blue-500 text-white"
        //     >
        //         {isSidebarOpen ? 'Đóng Sidebar' : 'Mở Sidebar'}
        //     </button>

        //     {/* Sidebar */}
        //     <div
        //         className={`lg:w-1/4 w-full bg-gray-100 p-4 space-y-4 ${isSidebarOpen ? 'block' : 'hidden'} lg:block absolute lg:static`}
        //     >
        //         {[
        //             { key: 'contact', label: 'Liên hệ' },
        //             { key: 'guide', label: 'Hướng dẫn mua hàng' },
        //             { key: 'size', label: 'Hướng dẫn chọn size' },
        //             { key: 'terms', label: 'Điều khoản và chính sách' },
        //             { key: 'faq', label: 'Câu hỏi thường gặp' },
        //         ].map((item) => (
        //             <button
        //                 key={item.key}
        //                 onClick={() => handleSelect(item.key)}
        //                 className={`w-full text-left py-2 px-4 bg-white border-l-4 ${selected === item.key ? 'border-red-500' : 'border-gray-300 hover:border-red-500'
        //                     } focus:outline-none`}
        //             >
        //                 {item.label}
        //             </button>
        //         ))}
        //     </div>
        // </div>

    );
};

export default Sidebar;
