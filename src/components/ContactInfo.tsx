import React from 'react';

const ContactInfo: React.FC = () => {
    return (
        // <div>
        //     <h3 className="mb-2 text-xl font-bold">HAVANA SHOP</h3>
        //     <div className='h-[4px] w-8 bg-white mb-1'></div>
        //     <p className='mb-1 cursor-pointer hover:text-cyan-500'>
        //         <i className="fa fa-map-marker me-2" aria-hidden="true"></i>
        //         Đà Nẵng: 261-263 Phan Châu Trinh</p>
        //     <p className='mb-1 cursor-pointer hover:text-cyan-500'>
        //         <i className="me-2 fa fa-phone" aria-hidden="true"></i>
        //         Số điện thoại: 0383502273</p>
        //     <p className='mb-1 cursor-pointer hover:text-cyan-500'>
        //         <i className="me-2 fa fa-envelope-o" aria-hidden="true"></i>
        //         Email: contact@havana.com</p>
        // </div>
        <div className="p-4 sm:p-6 md:p-8 lg:p-10">
            <h3 className="mb-2 text-lg sm:text-xl md:text-lg font-bold">HAVANA SHOP</h3>
            <div className="h-[4px] w-8 bg-white mb-1"></div>
            <p className="mb-1 cursor-pointer hover:text-cyan-500 text-sm sm:text-base md:text-sm">
                <i className="fa fa-map-marker me-2" aria-hidden="true"></i>
                Đà Nẵng: 261-263 Phan Châu Trinh
            </p>
            <p className="mb-1 cursor-pointer hover:text-cyan-500 text-sm sm:text-base md:text-sm">
                <i className="me-2 fa fa-phone" aria-hidden="true"></i>
                Số điện thoại: 0383502273
            </p>
            <p className="mb-1 cursor-pointer hover:text-cyan-500 text-sm sm:text-base md:text-sm">
                <i className="me-2 fa fa-envelope-o" aria-hidden="true"></i>
                Email: contact@havana.com
            </p>
        </div>

    );
};

export default ContactInfo;
