import React from 'react';
import ContactInfo from '../ContactSupport/ContactInfo';
import ComplaintForm from '../ContactSupport/ComplaintForm';
import Instructions from '../GuideSupport/Instructions';
import SizeGuide from '../SizeSupport/SizeGuide';
import PolicyPage from '../Policy';
import FAQPage from '../QA';

interface ContentProps {
    contentKey: string;
}

const Content: React.FC<ContentProps> = ({ contentKey }) => {
    const renderContent = () => {
        switch (contentKey) {
            case 'contact':
                return <div className="w-full mx-auto p-6">
                    <ContactInfo />
                    <ComplaintForm />
                </div>;
            case 'guide':
                return (
                    // <div>
                    //     <h1 className="text-2xl font-bold mb-4">Hướng Dẫn Mua Hàng</h1>
                    //     <p className="mb-4">Chỉ cần ngồi ở nhà bạn cũng có thể dễ dàng mua hàng chỉ với vài thao tác đơn giản sau:</p>
                    //     <ul className="list-disc pl-5 mb-4">
                    //         <li><strong>Cách 1:</strong> Gọi điện thoại đến tổng đài của FMstyle: 090 1800 888 (Phím 7)...</li>
                    //         <li><strong>Cách 2:</strong> Đặt mua online trên Website: <a href="https://fm.com.vn" className="text-red-500 underline">fm.com.vn</a></li>
                    //     </ul>
                    //     <h2 className="text-xl font-semibold mb-2">Bước 1: Đăng ký tài khoản:</h2>
                    //     <p className="mb-4">Bấm chọn “Đăng ký” để đăng ký tài khoản FM</p>
                    // </div>
                    <div className="w-full bg-gray-100 min-h-screen flex items-center justify-center">
                        <Instructions />
                    </div>
                );
            case 'size':
                return <div className="w-full min-h-screen bg-gray-100 flex justify-center">
                    <SizeGuide />
                </div>;
            case 'terms':
                return <div>
                    <PolicyPage></PolicyPage></div>;
            case 'faq':
                return <div><FAQPage /></div>;
            default:
                return <div><h1 className="text-2xl font-bold mb-4">Chọn mục từ thanh bên để xem nội dung</h1></div>;
        }
    };

    return (
        <div className="md:w-full sm:w-full lg:w-3/4 xl:w-3/4 p-8">
            {renderContent()}
        </div>
    );
};

export default Content;
