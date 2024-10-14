import React from 'react';

const PaymentIcons: React.FC = () => {
    return (
        <div className="flex justify-center space-x-4">
            <img src="/path-to-icons/visa.png" alt="Visa" className="h-6" />
            <img src="/path-to-icons/momo.png" alt="MoMo" className="h-6" />
            <img src="/path-to-icons/zalopay.png" alt="ZaloPay" className="h-6" />
            <img src="/path-to-icons/cod.png" alt="COD" className="h-6" />
            {/* Add more payment icons as needed */}
        </div>
    );
};

export default PaymentIcons;
