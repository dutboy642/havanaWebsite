import React, { useState } from 'react';
import CategoryButton from './CategoryButton';

const categories = ['Ứng Dụng', 'Thanh Toán', 'Đơn Hàng', 'Nhân Viên', 'Sản Phẩm', 'Khác'];

const ComplaintForm = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [formData, setFormData] = useState<{
        name: string;
        phone: string;
        details: string;
        attachment: File | null;
    }>({
        name: '',
        phone: '',
        details: '',
        attachment: null,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, attachment: e.target.files ? e.target.files[0] : null });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        console.log('Selected Category:', selectedCategory);
        alert('Phản ánh của bạn đã được gửi!');
    };

    return (
        // <form onSubmit={handleSubmit} className="bg-white p-6 rounded-md shadow-md mt-6">
        //     <h2 className="text-lg font-semibold mb-4">Phản Ánh - Khiếu Nại</h2>

        //     {/* Thông tin khách hàng */}
        //     <div className="mb-4">
        //         <label className="block mb-2 font-medium">Họ và tên *</label>
        //         <input
        //             type="text"
        //             name="name"
        //             placeholder="Nhập họ và tên..."
        //             className="w-full p-2 border rounded-md"
        //             value={formData.name}
        //             onChange={handleInputChange}
        //             required
        //         />
        //     </div>

        //     <div className="mb-4">
        //         <label className="block mb-2 font-medium">Số điện thoại *</label>
        //         <input
        //             type="tel"
        //             name="phone"
        //             placeholder="Nhập số điện thoại..."
        //             className="w-full p-2 border rounded-md"
        //             value={formData.phone}
        //             onChange={handleInputChange}
        //             required
        //         />
        //     </div>

        //     {/* Thông tin phản ánh */}
        //     <div className="mb-4">
        //         <label className="block mb-2 font-medium">Thông Tin Phản Ánh</label>
        //         <div className="flex gap-2 mb-4">
        //             {categories.map((category) => (
        //                 <CategoryButton
        //                     key={category}
        //                     label={category}
        //                     isSelected={selectedCategory === category}
        //                     onClick={() => setSelectedCategory(category)}
        //                 />
        //             ))}
        //         </div>
        //     </div>

        //     <div className="mb-4">
        //         <label className="block mb-2 font-medium">Chi tiết phản ánh</label>
        //         <textarea
        //             name="details"
        //             rows={4}
        //             placeholder="Vui lòng nhập nội dung..."
        //             className="w-full p-2 border rounded-md"
        //             value={formData.details}
        //             onChange={handleInputChange}
        //             required
        //         />
        //     </div>

        //     <div className="mb-4">
        //         <label className="block mb-2 font-medium">Đính kèm hình ảnh/video</label>
        //         <input type="file" onChange={handleFileChange} />
        //     </div>

        //     <button
        //         type="submit"
        //         className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600"
        //     >
        //         Gửi phản ánh
        //     </button>
        // </form>
        <form onSubmit={handleSubmit} className="w-full bg-white p-6 rounded-md shadow-md mt-6 max-w-4xl mx-auto">
            <h2 className="text-lg font-semibold mb-4 text-center sm:text-left">Phản Ánh - Khiếu Nại</h2>

            {/* Thông tin khách hàng */}
            <div className="mb-4">
                <label className="block mb-2 font-medium">Họ và tên *</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Nhập họ và tên..."
                    className="w-full p-2 border rounded-md"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block mb-2 font-medium">Số điện thoại *</label>
                <input
                    type="tel"
                    name="phone"
                    placeholder="Nhập số điện thoại..."
                    className="w-full p-2 border rounded-md"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                />
            </div>

            {/* Thông tin phản ánh */}
            <div className="mb-4">
                <label className="block mb-2 font-medium">Thông Tin Phản Ánh</label>
                <div className="flex gap-2 mb-4 flex-wrap justify-center sm:justify-start">
                    {categories.map((category) => (
                        <CategoryButton
                            key={category}
                            label={category}
                            isSelected={selectedCategory === category}
                            onClick={() => setSelectedCategory(category)}
                        />
                    ))}
                </div>
            </div>

            <div className="mb-4">
                <label className="block mb-2 font-medium">Chi tiết phản ánh</label>
                <textarea
                    name="details"
                    rows={4}
                    placeholder="Vui lòng nhập nội dung..."
                    className="w-full p-2 border rounded-md"
                    value={formData.details}
                    onChange={handleInputChange}
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block mb-2 font-medium">Đính kèm hình ảnh/video</label>
                <input type="file" onChange={handleFileChange} className="w-full p-2 border rounded-md" />
            </div>

            <button
                type="submit"
                className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 w-full sm:w-auto"
            >
                Gửi phản ánh
            </button>
        </form>

    );
};

export default ComplaintForm;
