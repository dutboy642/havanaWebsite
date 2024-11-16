import React, { useState } from 'react';
import Sidebar from '../components/CustomerInstruct/Sidebar';
import Content from '../components/CustomerInstruct/Content';


const CustomerInstruct: React.FC = () => {
    const [selectedContent, setSelectedContent] = useState<string>('guide'); // Mặc định hiển thị "Hướng dẫn mua hàng"

    const handleSelectContent = (contentKey: string) => {
        console.log(contentKey)
        setSelectedContent(contentKey);
    };

    return (
        <div className="flex min-h-screen">
            <Sidebar onSelect={handleSelectContent} />
            <Content contentKey={selectedContent} />
        </div>
    );
};

export default CustomerInstruct;
