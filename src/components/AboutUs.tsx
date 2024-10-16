import React from 'react';

const AboutUs: React.FC = () => {
    return (
        <div>
            <h3 className="mb-2 text-xl font-bold">VỀ CHÚNG TÔI</h3>
            <div className='h-[4px] w-8 bg-white mb-1'></div>
            <ul>
                <li className='mb-1 hover:cursor-pointer hover:text-cyan-500'>Giới thiệu</li>
                <li className='mb-1 hover:cursor-pointer hover:text-cyan-500'>Tầm nhìn</li>
                <li className='mb-1 hover:cursor-pointer hover:text-cyan-500'>Sứ mệnh</li>
            </ul>
        </div>
    );
};

export default AboutUs;
