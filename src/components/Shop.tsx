import React from 'react';
import facebook from '../assets/Facebook.jpg';
import ig from '../assets/Instagram_logo_2022.svg';
import email from '../assets/images.png';
const Shop: React.FC = () => {
    return (
        // <div>
        //     <h3 className="mb-2 text-xl font-bold">LIÊN HỆ</h3>
        //     <div className='h-[4px] w-8 bg-white mb-1'></div>
        //     <div className='w-48 flex gap-2'>
        //         <img className='mb-1 size-8 hover:opacity-70 rounded hover:cursor-pointer hover:text-cyan-500' src={facebook} />
        //         <img className='mb-1 size-8 hover:opacity-70 rounded hover:cursor-pointer hover:text-cyan-500' src={ig} />
        //         <img className='mb-1 size-8 hover:opacity-70 rounded hover:cursor-pointer hover:text-cyan-500' src={email} />

        //     </div>
        // </div>
        <div className="p-4 sm:p-6 md:p-8 lg:p-10">
            <h3 className="mb-2 text-lg sm:text-xl md:text-2xl font-bold">LIÊN HỆ</h3>
            <div className='h-[4px] w-8 bg-white mb-1'></div>
            <div className='flex flex-wrap gap-4 justify-start'>
                <img className='w-12 h-12 sm:w-16 sm:h-16 md:w-10 md:h-10 mb-1 rounded hover:opacity-70 hover:cursor-pointer hover:text-cyan-500' src={facebook} />
                <img className='w-12 h-12 sm:w-16 sm:h-16 md:w-10 md:h-10 mb-1 rounded hover:opacity-70 hover:cursor-pointer hover:text-cyan-500' src={ig} />
                <img className='w-12 h-12 sm:w-16 sm:h-16 md:w-10 md:h-10 mb-1 rounded hover:opacity-70 hover:cursor-pointer hover:text-cyan-500' src={email} />
            </div>
        </div>

    );
};

export default Shop;
