import React from 'react';

const AboutUs: React.FC = () => {
    return (
        // <div>
        //     <h3 className="mb-2 text-xl font-bold">VỀ CHÚNG TÔI</h3>
        //     <div className='h-[4px] w-8 bg-white mb-1'></div>
        //     <ul>
        //         <li className='mb-1 hover:cursor-pointer hover:text-cyan-500'>
        //             <a href="/AboutUs#aboutUs">Giới thiệu</a>
        //         </li>
        //         <li className='mb-1 hover:cursor-pointer hover:text-cyan-500'>
        //             <a href="/AboutUs#vision">Tầm nhìn</a>
        //         </li>
        //         <li className='mb-1 hover:cursor-pointer hover:text-cyan-500'>
        //             <a href="/AboutUs#suMenh">Sứ mệnh</a>
        //         </li>
        //     </ul>
        // </div>
        <div className="p-4 sm:p-6 md:p-8 lg:p-10">
            <h3 className="mb-2 text-lg sm:text-xl md:text-lg font-bold">VỀ CHÚNG TÔI</h3>
            <div className='h-[4px] w-8 bg-white mb-1'></div>
            <ul>
                <li className='mb-2 text-sm sm:text-base md:text-sm hover:cursor-pointer hover:text-cyan-500'>
                    <a href="/AboutUs#aboutUs">Giới thiệu</a>
                </li>
                <li className='mb-2 text-sm sm:text-base md:text-sm hover:cursor-pointer hover:text-cyan-500'>
                    <a href="/AboutUs#vision">Tầm nhìn</a>
                </li>
                <li className='mb-2 text-sm sm:text-base md:text-sm hover:cursor-pointer hover:text-cyan-500'>
                    <a href="/AboutUs#suMenh">Sứ mệnh</a>
                </li>
            </ul>
        </div>

    );
};

export default AboutUs;
