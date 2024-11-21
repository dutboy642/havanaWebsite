import React from 'react';
import ContactInfo from './ContactInfo';
import CustomerSupport from './CustomerSupport';
import AboutUs from './AboutUs';
import Shop from './Shop';
// import Newsletter from './Newsletter';
import PaymentIcons from './PaymentIcon';

const Footer: React.FC = () => {
    return (
        // <footer className="bg-black text-white py-10 text-xs">
        //     <div className="container mx-auto w-[80%] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
        //         <ContactInfo />
        //         <CustomerSupport />
        //         <AboutUs />
        //         <Shop />
        //         {/* <Newsletter /> */}
        //     </div>
        //     <div className="mt-10 border-t border-gray-700 pt-4 text-center">
        //         <PaymentIcons />
        //         <p className="text-sm mt-2">&copy; Bản quyền thuộc về HAVANA | Cung cấp bởi Sapo</p>
        //     </div>
        // </footer>
        <footer className="bg-black text-white py-10 text-xs">
            <div className="container mx-auto w-[90%] md:w-[95%] lg:w-[90%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-2">
                <ContactInfo />
                <CustomerSupport />
                <AboutUs />
                <Shop />
                {/* <Newsletter /> */}
            </div>
            <div className="mt-10 border-t border-gray-700 pt-4 text-center">
                <PaymentIcons />
                <p className="text-sm mt-2">&copy; Bản quyền thuộc về HAVANA | Cung cấp bởi Sapo</p>
            </div>
        </footer>

    );
};

export default Footer;
