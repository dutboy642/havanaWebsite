import React, { useState, useEffect } from 'react';
import { FaArrowUp, FaPhoneAlt } from 'react-icons/fa';

const FloatingButtons: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Hàm cuộn lên đầu trang
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Theo dõi vị trí cuộn để hiển thị nút cuộn lên
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div className="fixed bottom-16 right-10 flex flex-col items-center space-y-2 z-50">
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="flex items-center justify-center size-16 bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-700 focus:outline-none"
                >
                    <FaArrowUp className='size-8' />
                </button>
            )}
            <button
                onClick={() => alert('Calling...')}
                className="flex items-center justify-center size-16 bg-red-500 text-white p-3 rounded-full shadow-lg hover:bg-red-600 focus:outline-none"
            >
                <FaPhoneAlt className='size-8' />
            </button>
        </div>
    );
};

export default FloatingButtons;
