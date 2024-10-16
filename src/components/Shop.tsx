import React from 'react';
import facebook from '../assets/Facebook.jpg';
import ig from '../assets/Instagram_logo_2022.svg';
import email from '../assets/images.png';
const Shop: React.FC = () => {
    return (
        <div>
            <h3 className="mb-2 text-xl font-bold">LIÊN HỆ</h3>
            <div className='h-[4px] w-8 bg-white mb-1'></div>
            <div className='w-48 flex gap-2'>
                <img className='mb-1 size-8 hover:opacity-70 rounded hover:cursor-pointer hover:text-cyan-500' src={facebook} />
                <img className='mb-1 size-8 hover:opacity-70 rounded hover:cursor-pointer hover:text-cyan-500' src={ig} />
                <img className='mb-1 size-8 hover:opacity-70 rounded hover:cursor-pointer hover:text-cyan-500' src={email} />

            </div>
        </div>
    );
};

export default Shop;
