import React from "react";
import CouponCard from "../components/CouponCard";
import ProductCard from "../components/ProductCard";
import mainImage from "../assets/SALE.png"
import { Link } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import grassBg from "../assets/bg.png"
const Homepage: React.FC = () => {
    const products = [
        {
            title: "Áo kiểu linen nhún thân dáng babydoll trễ vai tay bồng tiểu thư 2 dây buộc nơ",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lzlc5uzgwv2l73.webp",
            image2: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lzlc5v0ktu1975.webp",
            productCode: "AO362",
            brand: "HAVANA",
            price: 95000,
            originalPrice: 139000,
            discount: 32,
            describe: `<div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
    <h2 style="color: #2c3e50;">Áo kiểu linen nhún thân dáng babydoll trễ vai tay bồng tiểu thư 2 dây buộc nơ HAVANA AO362</h2>
    <p style="font-size: 16px; color: #34495e;">Freesize dưới 53kg mang vừa thoải mái</p>

    <h3 style="color: #2980b9;">Hướng dẫn bảo quản:</h3>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Không dùng nước nóng hoặc xà phòng có tính kiềm quá cao để giặt áo loại này.</li>
        <li>Đối với việc ủi vải lụa, khi ủi nên có một lớp khăn hoặc vải mỏng phía dưới.</li>
    </ul>

    <h3 style="color: #2980b9;">Hướng dẫn sử dụng:</h3>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Các nàng tham khảo bảng thông số chi tiết để chọn size kĩ hơn ạ.</li>
        <li>Màu của sản phẩm sai lệch 1 - 5% do ánh sáng của mỗi điện thoại là khác nhau và chênh lệch ánh sáng bên ngoài.</li>
        <li>Sai lệch số đo + -1cm.</li>
        <li>Mẫu cao 1m6, nặng 44kg mang fit dáng rộng như hình (số đo mang tính chất tham khảo do mỗi dáng người là khác nhau).</li>
    </ul>

    <h3 style="color: #2980b9;">Chính sách bán hàng:</h3>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Tất cả vấn đề về sản phẩm (lỗi sản phẩm, sai màu/size/mẫu, thiếu sản phẩm) nàng cứ nhắn tin cho Havana để được hỗ trợ giải quyết nhiệt tình.</li>
        <li>Thân thiện ngay sau khi nhận được hàng ạ (kèm hình ảnh và video khui hàng để được hỗ trợ nhanh nhất có thể ạ).</li>
        <li>Chúng mình hỗ trợ đổi hàng trong vòng 7 ngày kể từ ngày nhận hàng đối với sản phẩm chưa qua sử dụng - còn nguyên tem mác.</li>
        <li>Havana chỉ gửi hàng đúng theo sản phẩm trong đơn hàng đã được đặt nên bạn yêu đừng ghi chú phân loại riêng nhé.</li>
        <li>Sản phẩm của Havana đã được chọn lọc và kiểm tra sản phẩm vô cùng tỉ mỉ, nói không với hàng kém chất lượng và không giống hình nên bạn yêu yên tâm mua hàng nhé.</li>
    </ul>
</div>
`,
            variants: ["Freesize"],
        },
        {
            title: "Áo sơ mi ngắn tay vạt bầu thêu trái tim đôi",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lt4r40vxvg78e2.webp",
            image2: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ltbvo438xfh529.webp",
            productCode: "AO283",
            brand: "HAVANA",
            price: 105000,
            originalPrice: 149000,
            discount: 30,
            describe: `<div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
    <h2 style="color: #2c3e50;">Áo sơ mi ngắn tay vạt bầu thêu trái tim đôi HAVANA AO283</h2>
    <p style="font-size: 16px; color: #34495e;">Freesize < 54kg</p>
    <p style="font-size: 16px; color: #34495e;">Dài áo: 63cm, Dài tay: 15cm, V1 < 92cm, V2 < 77cm</p>

    <h3 style="color: #2980b9;">Hướng dẫn bảo quản:</h3>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Không dùng nước nóng hoặc xà phòng có tính kiềm quá cao để giặt áo loại này.</li>
        <li>Đối với việc ủi vải lụa, khi ủi nên có một lớp khăn hoặc vải mỏng phía dưới.</li>
    </ul>

    <h3 style="color: #2980b9;">Hướng dẫn sử dụng:</h3>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Các nàng tham khảo bảng thông số chi tiết để chọn size kĩ hơn ạ.</li>
        <li>Màu của sản phẩm sai lệch 1 - 5% do ánh sáng của mỗi điện thoại là khác nhau và chênh lệch ánh sáng bên ngoài.</li>
        <li>Sai lệch số đo + -1cm.</li>
    </ul>

    <h3 style="color: #2980b9;">Chính sách bán hàng:</h3>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Tất cả vấn đề về sản phẩm (lỗi sản phẩm, sai màu/size/mẫu, thiếu sản phẩm) nàng cứ nhắn tin cho Havana để được hỗ trợ giải quyết nhiệt tình.</li>
        <li>Thân thiện ngay sau khi nhận được hàng ạ (kèm hình ảnh và video khui hàng để được hỗ trợ nhanh nhất có thể ạ).</li>
        <li>Chúng mình hỗ trợ đổi hàng trong vòng 7 ngày kể từ ngày nhận hàng đối với sản phẩm chưa qua sử dụng - còn nguyên tem mác.</li>
        <li>Havana chỉ gửi hàng đúng theo sản phẩm trong đơn hàng đã được đặt nên bạn yêu đừng ghi chú phân loại riêng nhé.</li>
        <li>Sản phẩm của Havana đã được chọn lọc và kiểm tra sản phẩm vô cùng tỉ mỉ, nói không với hàng kém chất lượng và không giống hình nên bạn yêu yên tâm mua hàng nhé.</li>
    </ul>
</div>
`,
            variants: ["Freesize"],
        },
        {
            title: "Áo sơ mi kiểu hở vai vai tay bồng phối nơ, áo sơ mi kẻ sọc",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lra19mm99axlf8.webp",
            image2: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lra19mm8tupwd9.webp",
            productCode: "AO141",
            brand: "HAVANA",
            price: 139000,
            originalPrice: 199000,
            discount: 30,
            describe: `<div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
    <h2 style="color: #2c3e50;">Áo sơ mi kiểu hở vai tay bồng phối nơ, áo sơ mi kẻ sọc HAVANA AO141</h2>
    <p style="font-size: 16px; color: #34495e;">Freesize < 56kg mang vừa tùy chiều cao</p>

    <h3 style="color: #2980b9;">Hướng dẫn bảo quản:</h3>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Không dùng nước nóng hoặc xà phòng có tính kiềm quá cao để giặt áo loại này.</li>
        <li>Đối với việc ủi vải lụa, khi ủi nên có một lớp khăn hoặc vải mỏng phía dưới.</li>
    </ul>

    <h3 style="color: #2980b9;">Hướng dẫn sử dụng:</h3>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Các nàng tham khảo bảng thông số chi tiết để chọn size kĩ hơn ạ.</li>
        <li>Màu của sản phẩm sai lệch 1 - 5% do ánh sáng của mỗi điện thoại là khác nhau và chênh lệch ánh sáng bên ngoài.</li>
        <li>Sai lệch số đo + -1cm.</li>
        <li>Mẫu cao 1m6, nặng 44kg mang fit dáng rộng như hình (số đo mang tính chất tham khảo do mỗi dáng người là khác nhau).</li>
    </ul>

    <h3 style="color: #2980b9;">Chính sách bán hàng:</h3>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Tất cả vấn đề về sản phẩm (lỗi sản phẩm, sai màu/size/mẫu, thiếu sản phẩm) nàng cứ nhắn tin cho Havana để được hỗ trợ giải quyết nhiệt tình.</li>
        <li>Thân thiện ngay sau khi nhận được hàng ạ (kèm hình ảnh và video khui hàng để được hỗ trợ nhanh nhất có thể ạ).</li>
        <li>Chúng mình hỗ trợ đổi hàng trong vòng 7 ngày kể từ ngày nhận hàng đối với sản phẩm chưa qua sử dụng - còn nguyên tem mác.</li>
        <li>Havana chỉ gửi hàng đúng theo sản phẩm trong đơn hàng đã được đặt nên bạn yêu đừng ghi chú phân loại riêng nhé.</li>
        <li>Sản phẩm của Havana đã được chọn lọc và kiểm tra sản phẩm vô cùng tỉ mỉ, nói không với hàng kém chất lượng và không giống hình nên bạn yêu yên tâm mua hàng nhé.</li>
    </ul>
</div>
`,
            variants: ["Freesize"],
        }]
        ;
    const AoDai = [
        {
            title: "Áo dài khảm vân BÁCH ĐIỀN voan tơ phối đính nơ cúc ngọc kèm quần dài satin",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m1fbb5o7jwpk17.webp",
            image2: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m1fbb5m9pjq4d5.webp",
            productCode: "AD110",
            brand: "HAVANA",
            price: 299000,
            originalPrice: 379000,
            discount: 21,
            describe: `<div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
    <h2 style="color: #2c3e50;">MÔ TẢ SẢN PHẨM</h2>
    <h3 style="color: #2980b9;">Áo dài khảm vân BÁCH ĐIỀN voan tơ phối đính nơ cúc ngọc kèm quần dài satin HAVANA AD110</h3>
    <p><strong>Freesize:</strong> dưới 51kg mang vừa thoải mái</p>

    <h4 style="color: #2980b9;">Hướng dẫn bảo quản:</h4>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Không dùng nước nóng hoặc xà phòng có tính kiềm quá cao để giặt áo loại này.</li>
        <li>Đối với việc ủi vải lụa, khi ủi nên có một lớp khăn hoặc vải mỏng phía dưới.</li>
    </ul>

    <h4 style="color: #2980b9;">Hướng dẫn sử dụng:</h4>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Các nàng tham khảo bảng thông số chi tiết để chọn size kĩ hơn ạ.</li>
        <li>Màu của sản phẩm sai lệch 1 - 5 % do ánh sáng của mỗi điện thoại là khác nhau và chênh lệch ánh sáng bên ngoài.</li>
        <li>Sai lệch số đo + -1cm.</li>
        <li>Mẫu cao 1m6, nặng 44kg mang fit dáng rộng như hình (số đo mang tính chất tham khảo do mỗi dáng người là khác nhau).</li>
    </ul>

    <h4 style="color: #2980b9;">Chính sách bán hàng:</h4>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Tất cả vấn đề về sản phẩm (lỗi sản phẩm, sai màu / size / mẫu, thiếu sản phẩm) nàng cứ nhắn tin cho Havana để được hỗ trợ giải quyết nhiệt tình.</li>
        <li>Thân thiện ngay sau khi nhận được hàng (kèm hình ảnh và video khui hàng để được hỗ trợ nhanh nhất có thể ạ).</li>
        <li>Chúng mình hỗ trợ đổi hàng trong vòng 7 ngày kể từ ngày nhận hàng đối với sản phẩm chưa qua sử dụng - còn nguyên tem mác.</li>
        <li>Havana chỉ gửi hàng đúng theo sản phẩm trong đơn hàng đã được đặt nên bạn yêu đừng ghi chú phân loại riêng nhé.</li>
        <li>Sản phẩm của Havana đã được chọn lọc và kiểm tra sản phẩm vô cùng tỉ mỉ, nói không với hàng kém chất lượng và không giống hình nên bạn yên tâm mua hàng nhé.</li>
        <li>Có may, đo theo thông số.</li>
    </ul>
</div>
`,
            variants: ["Freesize"],
        },
        {
            title: "Áo dài cách tân XUÂN THÌ voan tơ 4 tà thêu tay nơ nhỏ kèm quần dài satin",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m1dil8oxfn143a.webp",
            image2: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m1dil8p7ceu42c.webp",
            productCode: "AD103",
            brand: "HAVANA",
            price: 259000,
            originalPrice: 329000,
            discount: 21,
            describe: ` <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
    <h2 style="color: #2c3e50;">MÔ TẢ SẢN PHẨM</h2>
    <h3 style="color: #2980b9;">Áo dài cách tân XUÂN THÌ voan tơ 4 tà thêu tay nơ nhỏ kèm quần dài satin HAVANA AD103</h3>
    <p><strong>Size:</strong> S, M</p>
    <p><strong>Màu:</strong> Kem - quần kem, Trắng - quần hồng, Đỏ - quần kem, Hồng - quần kem, Xanh lá - quần kem</p>

    <h4 style="color: #2980b9;">Hướng dẫn bảo quản:</h4>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Không dùng nước nóng hoặc xà phòng có tính kiềm quá cao để giặt áo loại này.</li>
        <li>Đối với việc ủi vải lụa, khi ủi nên có một lớp khăn hoặc vải mỏng phía dưới.</li>
    </ul>

    <h4 style="color: #2980b9;">Hướng dẫn sử dụng:</h4>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Các nàng tham khảo bảng thông số chi tiết để chọn size kĩ hơn ạ.</li>
        <li>Màu của sản phẩm sai lệch 1 - 5 % do ánh sáng của mỗi điện thoại là khác nhau và chênh lệch ánh sáng bên ngoài.</li>
        <li>Sai lệch số đo + -1cm.</li>
        <li>Mẫu cao 1m6, nặng 44kg mang fit dáng rộng như hình (số đo mang tính chất tham khảo do mỗi dáng người là khác nhau).</li>
    </ul>

    <h4 style="color: #2980b9;">Chính sách bán hàng:</h4>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Tất cả vấn đề về sản phẩm (lỗi sản phẩm, sai màu / size / mẫu, thiếu sản phẩm) nàng cứ nhắn tin cho Havana để được hỗ trợ giải quyết nhiệt tình.</li>
        <li>Thân thiện ngay sau khi nhận được hàng (kèm hình ảnh và video khui hàng để được hỗ trợ nhanh nhất có thể ạ).</li>
        <li>Chúng mình hỗ trợ đổi hàng trong vòng 7 ngày kể từ ngày nhận hàng đối với sản phẩm chưa qua sử dụng - còn nguyên tem mác.</li>
        <li>Havana chỉ gửi hàng đúng theo sản phẩm trong đơn hàng đã được đặt nên bạn yêu đừng ghi chú phân loại riêng nhé.</li>
        <li>Sản phẩm của Havana đã được chọn lọc và kiểm tra sản phẩm vô cùng tỉ mỉ, nói không với hàng kém chất lượng và không giống hình nên bạn yên tâm mua hàng nhé.</li>
    </ul>
</div>
`,
            variants: ["Freesize"],
        },
        {
            title: "Áo dài LẠC HÀ cổ sen thêu hoa phối dây buộc nơ tôn eo duyên dáng",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m1c5g6kka6hk93.webp",
            image2: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m1c5g62j1z6gb0.webp",
            productCode: "AD106",
            brand: "HAVANA",
            price: 289000,
            originalPrice: 319000,
            discount: 9,
            describe: `<div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
    <h2 style="color: #2c3e50;">MÔ TẢ SẢN PHẨM</h2>
    <h3 style="color: #2980b9;">Áo dài LẠC HÀ cổ sen thêu hoa phối dây buộc nơ tôn eo duyên dáng HAVANA AD106</h3>
    <p><strong>Freesize:</strong> Dưới 55kg mang vừa thoải mái</p>

    <h4 style="color: #2980b9;">Hướng dẫn bảo quản:</h4>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Không dùng nước nóng hoặc xà phòng có tính kiềm quá cao để giặt áo loại này.</li>
        <li>Đối với việc ủi vải lụa, khi ủi nên có một lớp khăn hoặc vải mỏng phía dưới.</li>
    </ul>

    <h4 style="color: #2980b9;">Hướng dẫn sử dụng:</h4>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Các nàng tham khảo bảng thông số chi tiết để chọn size kĩ hơn ạ.</li>
        <li>Màu của sản phẩm sai lệch 1 - 5 % do ánh sáng của mỗi điện thoại là khác nhau và chênh lệch ánh sáng bên ngoài.</li>
        <li>Sai lệch số đo + -1cm.</li>
        <li>Mẫu cao 1m6, nặng 44kg mang fit dáng rộng như hình (số đo mang tính chất tham khảo do mỗi dáng người là khác nhau).</li>
    </ul>

    <h4 style="color: #2980b9;">Chính sách bán hàng:</h4>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Tất cả vấn đề về sản phẩm (lỗi sản phẩm, sai màu / size / mẫu, thiếu sản phẩm) nàng cứ nhắn tin cho Havana để được hỗ trợ giải quyết nhiệt tình.</li>
        <li>Thân thiện ngay sau khi nhận được hàng (kèm hình ảnh và video khui hàng để được hỗ trợ nhanh nhất có thể ạ).</li>
        <li>Chúng mình hỗ trợ đổi hàng trong vòng 7 ngày kể từ ngày nhận hàng đối với sản phẩm chưa qua sử dụng - còn nguyên tem mác.</li>
        <li>Havana chỉ gửi hàng đúng theo sản phẩm trong đơn hàng đã được đặt nên bạn yêu đừng ghi chú phân loại riêng nhé.</li>
        <li>Sản phẩm của Havana đã được chọn lọc và kiểm tra sản phẩm vô cùng tỉ mỉ, nói không với hàng kém chất lượng và không giống hình nên bạn yên tâm mua hàng nhé.</li>
    </ul>
</div>
`,
            variants: ["Freesize"],
        },
        {
            title: "Áo dài cách tân TỬ KỲ nhung chéo thêu hoa quả đính cúc bọc phối dây buộc nơ cách điệu kèm quần dài satin",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m1cekrfq64pk3f.webp",
            image2: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m1cekrfq8xek96.webp",
            productCode: "AD104",
            brand: "HAVANA",
            price: 259000,
            originalPrice: 329000,
            discount: 21,
            describe: ` Áo dài cách tân TỬ KỲ nhung chéo thêu hoa quả đính cúc bọc phối dây buộc nơ cách điệu kèm quần dài satin HAVANA AD104
Freesize dưới 59kg mang vừa thoải mái

Hướng dẫn bảo quản:
    + Không dùng nước nóng hoăc xà phòng có tính kiềm quá cao để giặt áo loại này.
+ Đối với việc ủi vải lụa, khi ủi nên có một lớp khăn hoặc vải mỏng phía dưới
        - Hướng dẫn sử dụng:
    + Các nàng tham khảo bảng thông số chi tiết để chọn size kĩ hơn ạ
        + Màu của sản phẩm sai lệch 1 - 5 % do ánh sáng của mỗi điện thoại là khác nhau và chênh lệch ánh sáng bên ngoài
            + Sai lệch số đo + -1cm
                + Mẫu cao 1m6, nặng 44kg mang fit dáng rộng như hình(số đo mang tính chất tham khảo do mỗi dáng người là khác nhau)
    - Chính sách bán hàng:
    + Tất cả vấn đề về sản phẩm(lỗi sản phẩm, sai màu / size / mẫu, thiếu sản phẩm) nàng cứ nhắn tin cho Havana để được hỗ trợ giải quyết nhiệt tình
        - thân thiện ngay sau khi nhận được hàng ạ(kèm hình ảnh và video khưi hàng để được hỗ trợ nhanh nhất có thể ạ)
            + Chúng mình hỗ trợ đổi hàng trong vòng 7 ngày kể từ ngày nhận hàng đối với sản phẩm chưa qua sử dụng - còn nguyên tem mác
                + Havana chỉ gửi hàng đúng theo sản phẩm trong đơn hàng đã được đặt nên bạn iu đừng ghi chú phân loại riêng nhe
                    + Sản phẩm của Havana đã được chọn lọc và kiểm tra sản phẩm vô cùng tỉ mỉ, nói không với hàng kém chất lượng và không giống hình nên bạn iu yên tâm mua hàng nhen
    `,
            variants: ["Freesize"],
        },
        {
            title: "Áo dài voan tơ MẪU ĐƠN 4 tà thêu hoa đính cúc bọc phối nơ buộc dễ thương",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m1aq5x54e0bgcf.webp",
            image2: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m1aq5x40fmsc36.webp",
            productCode: "AD99",
            brand: "HAVANA",
            price: 259000,
            originalPrice: 319000,
            discount: 19,
            describe: ` Áo dài voan tơ MẪU ĐƠN 4 tà thêu hoa đính cúc bọc phối nơ buộc dễ thương HAVANA AD99
Freesize dưới 54kg mang vừa thoải mái

Hướng dẫn bảo quản:
    + Không dùng nước nóng hoăc xà phòng có tính kiềm quá cao để giặt áo loại này.
+ Đối với việc ủi vải lụa, khi ủi nên có một lớp khăn hoặc vải mỏng phía dưới
        - Hướng dẫn sử dụng:
    + Các nàng tham khảo bảng thông số chi tiết để chọn size kĩ hơn ạ
        + Màu của sản phẩm sai lệch 1 - 5 % do ánh sáng của mỗi điện thoại là khác nhau và chênh lệch ánh sáng bên ngoài
            + Sai lệch số đo + -1cm
                + Mẫu cao 1m6, nặng 44kg mang fit dáng rộng như hình(số đo mang tính chất tham khảo do mỗi dáng người là khác nhau)
    - Chính sách bán hàng:
    + Tất cả vấn đề về sản phẩm(lỗi sản phẩm, sai màu / size / mẫu, thiếu sản phẩm) nàng cứ nhắn tin cho Havana để được hỗ trợ giải quyết nhiệt tình
        - thân thiện ngay sau khi nhận được hàng ạ(kèm hình ảnh và video khưi hàng để được hỗ trợ nhanh nhất có thể ạ)
            + Chúng mình hỗ trợ đổi hàng trong vòng 7 ngày kể từ ngày nhận hàng đối với sản phẩm chưa qua sử dụng - còn nguyên tem mác
                + Havana chỉ gửi hàng đúng theo sản phẩm trong đơn hàng đã được đặt nên bạn iu đừng ghi chú phân loại riêng nhe
                    + Sản phẩm của Havana đã được chọn lọc và kiểm tra sản phẩm vô cùng tỉ mỉ, nói không với hàng kém chất lượng và không giống hình nên bạn iu yên tâm mua hàng nhen
    `,
            variants: ["Freesize"],
        },
        {
            title: "Áo dài lông vũ YẾN PHƯỢNG phối buộc nơ cách điệu kèm quần",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m0v56q2ahalp7e.webp",
            image2: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m0v56q2ahaxbaa.webp",
            productCode: "AD89",
            brand: "HAVANA",
            price: 246000,
            originalPrice: 309000,
            discount: 42,
            describe: ` Áo dài lông vũ YẾN PHƯỢNG phối buộc nơ cách điệu kèm quần HAVANA AD89

Hướng dẫn bảo quản:
    + Không dùng nước nóng hoăc xà phòng có tính kiềm quá cao để giặt áo loại này.
+ Đối với việc ủi vải lụa, khi ủi nên có một lớp khăn hoặc vải mỏng phía dưới
        - Hướng dẫn sử dụng:
    + Các nàng tham khảo bảng thông số chi tiết để chọn size kĩ hơn ạ
        + Màu của sản phẩm sai lệch 1 - 5 % do ánh sáng của mỗi điện thoại là khác nhau và chênh lệch ánh sáng bên ngoài
            + Sai lệch số đo + -1cm
                + Mẫu cao 1m6, nặng 44kg mang fit dáng rộng như hình(số đo mang tính chất tham khảo do mỗi dáng người là khác nhau)
    - Chính sách bán hàng:
    + Tất cả vấn đề về sản phẩm(lỗi sản phẩm, sai màu / size / mẫu, thiếu sản phẩm) nàng cứ nhắn tin cho Havana để được hỗ trợ giải quyết nhiệt tình
        - thân thiện ngay sau khi nhận được hàng ạ(kèm hình ảnh và video khưi hàng để được hỗ trợ nhanh nhất có thể ạ)
            + Chúng mình hỗ trợ đổi hàng trong vòng 7 ngày kể từ ngày nhận hàng đối với sản phẩm chưa qua sử dụng - còn nguyên tem mác
                + Havana chỉ gửi hàng đúng theo sản phẩm trong đơn hàng đã được đặt nên bạn iu đừng ghi chú phân loại riêng nhe
                    + Sản phẩm của Havana đã được chọn lọc và kiểm tra sản phẩm vô cùng tỉ mỉ, nói không với hàng kém chất lượng và không giống hình nên bạn iu yên tâm mua hàng nhen
    `,
            variants: ["Freesize"],
        },
        {
            title: "Áo dài tứ thân Ý HUYÊN phối cúc gỗ cách điệu dây buộc nơ tôn eo duyên dáng",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m19rylc8rcpoa0.webp",
            image2: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m19rylciqyjc57.webp",
            productCode: "AD102",
            brand: "HAVANA",
            price: 219000,
            originalPrice: 319000,
            discount: 31,
            describe: ` Áo dài tứ thân Ý HUYÊN phối cúc gỗ cách điệu dây buộc nơ tôn eo duyên dáng HAVANA AD102
Freesize dưới 57kg mang vừa thoải mái

Hướng dẫn bảo quản:
    + Không dùng nước nóng hoăc xà phòng có tính kiềm quá cao để giặt áo loại này.
+ Đối với việc ủi vải lụa, khi ủi nên có một lớp khăn hoặc vải mỏng phía dưới
        - Hướng dẫn sử dụng:
    + Các nàng tham khảo bảng thông số chi tiết để chọn size kĩ hơn ạ
        + Màu của sản phẩm sai lệch 1 - 5 % do ánh sáng của mỗi điện thoại là khác nhau và chênh lệch ánh sáng bên ngoài
            + Sai lệch số đo + -1cm
                + Mẫu cao 1m6, nặng 44kg mang fit dáng rộng như hình(số đo mang tính chất tham khảo do mỗi dáng người là khác nhau)
    - Chính sách bán hàng:
    + Tất cả vấn đề về sản phẩm(lỗi sản phẩm, sai màu / size / mẫu, thiếu sản phẩm) nàng cứ nhắn tin cho Havana để được hỗ trợ giải quyết nhiệt tình
        - thân thiện ngay sau khi nhận được hàng ạ(kèm hình ảnh và video khưi hàng để được hỗ trợ nhanh nhất có thể ạ)
            + Chúng mình hỗ trợ đổi hàng trong vòng 7 ngày kể từ ngày nhận hàng đối với sản phẩm chưa qua sử dụng - còn nguyên tem mác
                + Havana chỉ gửi hàng đúng theo sản phẩm trong đơn hàng đã được đặt nên bạn iu đừng ghi chú phân loại riêng nhe
                    + Sản phẩm của Havana đã được chọn lọc và kiểm tra sản phẩm vô cùng tỉ mỉ, nói không với hàng kém chất lượng và không giống hình nên bạn iu yên tâm mua hàng nhen
    `,
            variants: ["Freesize"],
        },
        {
            title: "Áo dài đũi THUỲ MIÊN thêu hoa đính cúc ngọc kèm chân váy dáng dài cạp chun có lót lụa trong",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m0pm8orcc63x3e.webp",
            image2: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m0pm8orcarjhaa.webp",
            productCode: "AD90",
            brand: "HAVANA",
            price: 249000,
            originalPrice: 319000,
            discount: 22,
            describe: ` Áo dài đũi THUỲ MIÊN thêu hoa đính cúc ngọc kèm chân váy dáng dài cạp chun có lót lụa trong HAVANA AD90
Freesize dưới 53kg mang vừa thoải mái
Hướng dẫn bảo quản:
    + Không dùng nước nóng hoăc xà phòng có tính kiềm quá cao để giặt áo loại này.
+ Đối với việc ủi vải lụa, khi ủi nên có một lớp khăn hoặc vải mỏng phía dưới
        - Hướng dẫn sử dụng:
    + Các nàng tham khảo bảng thông số chi tiết để chọn size kĩ hơn ạ
        + Màu của sản phẩm sai lệch 1 - 5 % do ánh sáng của mỗi điện thoại là khác nhau và chênh lệch ánh sáng bên ngoài
            + Sai lệch số đo + -1cm
                + Mẫu cao 1m6, nặng 44kg mang fit dáng rộng như hình(số đo mang tính chất tham khảo do mỗi dáng người là khác nhau)
    - Chính sách bán hàng:
    + Tất cả vấn đề về sản phẩm(lỗi sản phẩm, sai màu / size / mẫu, thiếu sản phẩm) nàng cứ nhắn tin cho Havana để được hỗ trợ giải quyết nhiệt tình
        - thân thiện ngay sau khi nhận được hàng ạ(kèm hình ảnh và video khưi hàng để được hỗ trợ nhanh nhất có thể ạ)
            + Chúng mình hỗ trợ đổi hàng trong vòng 7 ngày kể từ ngày nhận hàng đối với sản phẩm chưa qua sử dụng - còn nguyên tem mác
                + Havana chỉ gửi hàng đúng theo sản phẩm trong đơn hàng đã được đặt nên bạn iu đừng ghi chú phân loại riêng nhe
                    + Sản phẩm của Havana đã được chọn lọc và kiểm tra sản phẩm vô cùng tỉ mỉ, nói không với hàng kém chất lượng và không giống hình nên bạn iu yên tâm mua hàng nhen
    `,
            variants: ["Freesize"],
        },
        {
            title: "Áo dài voan tơ 4 tà UYỂN DƯ cutout vai phối nơ đính ngọc kèm quần",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m0uys5hddj7z8c.webp",
            image2: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m0uys676brtbd3.webp",
            productCode: "AD92",
            brand: "HAVANA",
            price: 259000,
            originalPrice: 299000,
            discount: 13,
            describe: ` Áo dài voan tơ 4 tà UYỂN DƯ cutout vai phối nơ đính ngọc kèm quần HAVANA AD92
    Màu: Đỏ - quần kem, Đỏ - quần đỏ, Hồng - quần hồng, Kem - quần kem
    Size: S, M

Hướng dẫn bảo quản:
    + Không dùng nước nóng hoăc xà phòng có tính kiềm quá cao để giặt áo loại này.
+ Đối với việc ủi vải lụa, khi ủi nên có một lớp khăn hoặc vải mỏng phía dưới
        - Hướng dẫn sử dụng:
    + Các nàng tham khảo bảng thông số chi tiết để chọn size kĩ hơn ạ
        + Màu của sản phẩm sai lệch 1 - 5 % do ánh sáng của mỗi điện thoại là khác nhau và chênh lệch ánh sáng bên ngoài
            + Sai lệch số đo + -1cm
                + Mẫu cao 1m6, nặng 44kg mang fit dáng rộng như hình(số đo mang tính chất tham khảo do mỗi dáng người là khác nhau)
    - Chính sách bán hàng:
    + Tất cả vấn đề về sản phẩm(lỗi sản phẩm, sai màu / size / mẫu, thiếu sản phẩm) nàng cứ nhắn tin cho Havana để được hỗ trợ giải quyết nhiệt tình
        - thân thiện ngay sau khi nhận được hàng ạ(kèm hình ảnh và video khưi hàng để được hỗ trợ nhanh nhất có thể ạ)
            + Chúng mình hỗ trợ đổi hàng trong vòng 7 ngày kể từ ngày nhận hàng đối với sản phẩm chưa qua sử dụng - còn nguyên tem mác
                + Havana chỉ gửi hàng đúng theo sản phẩm trong đơn hàng đã được đặt nên bạn iu đừng ghi chú phân loại riêng nhe
                    + Sản phẩm của Havana đã được chọn lọc và kiểm tra sản phẩm vô cùng tỉ mỉ, nói không với hàng kém chất lượng và không giống hình nên bạn iu yên tâm mua hàng nhen
    `,
            variants: ["Freesize"],
        },
        {
            title: "Áo dài VÂN DU lụa trơn phối nơ cách điệu đính cúc bọc kèm quần",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m0ufkx04vij314.webp",
            image2: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m0ufkx0ewi5paf.webp",
            productCode: "AD94",
            brand: "HAVANA",
            price: 210000,
            originalPrice: 249000,
            discount: 16,
            describe: `Áo dài VÂN DU lụa trơn phối nơ cách điệu đính cúc bọc kèm quần HAVANA AD94
    Size: S, M

Hướng dẫn bảo quản:
    + Không dùng nước nóng hoăc xà phòng có tính kiềm quá cao để giặt áo loại này.
+ Đối với việc ủi vải lụa, khi ủi nên có một lớp khăn hoặc vải mỏng phía dưới
        - Hướng dẫn sử dụng:
    + Các nàng tham khảo bảng thông số chi tiết để chọn size kĩ hơn ạ
        + Màu của sản phẩm sai lệch 1 - 5 % do ánh sáng của mỗi điện thoại là khác nhau và chênh lệch ánh sáng bên ngoài
            + Sai lệch số đo + -1cm
                + Mẫu cao 1m6, nặng 44kg mang fit dáng rộng như hình(số đo mang tính chất tham khảo do mỗi dáng người là khác nhau)
    - Chính sách bán hàng:
    + Tất cả vấn đề về sản phẩm(lỗi sản phẩm, sai màu / size / mẫu, thiếu sản phẩm) nàng cứ nhắn tin cho Havana để được hỗ trợ giải quyết nhiệt tình
        - thân thiện ngay sau khi nhận được hàng ạ(kèm hình ảnh và video khưi hàng để được hỗ trợ nhanh nhất có thể ạ)
            + Chúng mình hỗ trợ đổi hàng trong vòng 7 ngày kể từ ngày nhận hàng đối với sản phẩm chưa qua sử dụng - còn nguyên tem mác
                + Havana chỉ gửi hàng đúng theo sản phẩm trong đơn hàng đã được đặt nên bạn iu đừng ghi chú phân loại riêng nhe
                    + Sản phẩm của Havana đã được chọn lọc và kiểm tra sản phẩm vô cùng tỉ mỉ, nói không với hàng kém chất lượng và không giống hình nên bạn iu yên tâm mua hàng nhen
    `,
            variants: ["Freesize"]
        }


    ]
    // const feedback_images = [
    //     { image: "//bizweb.dktcdn.net/100/516/928/themes/951952/assets/insta_1_img.jpg?1726634821799" },
    //     { image: "//bizweb.dktcdn.net/100/516/928/themes/951952/assets/insta_2_img.jpg?1726634821799" },
    //     { image: "//bizweb.dktcdn.net/100/516/928/themes/951952/assets/insta_3_img.jpg?1726634821799" },
    //     { image: "//bizweb.dktcdn.net/100/516/928/themes/951952/assets/insta_4_img.jpg?1726634821799" }
    // ]
    const coupons = [
        {
            title: "MIỄN PHÍ VẬN CHUYỂN",
            description: "Freeship cho đơn hàng từ 200k",
            expiry: "30/12/2024",
        },
        {
            title: "GIẢM 50K",
            description: "Nhập NEW50 - Áp dụng cho đơn hàng từ 300k",
            expiry: "12/12/2024",
        },
        {
            title: "GIẢM 20K",
            description: "Nhập MN20 - Áp dụng cho đơn hàng từ 200k",
            expiry: "30/12/2024",
        },
    ];
    return (
        <div style={{
            background: `url(${grassBg}) no-repeat fixed center`,
            backgroundSize: '100vw 100vh'
        }}>

            <ScrollToTop />
            <div className="hover:cursor-pointer">
                <img className=" py-4" src={mainImage} alt="" />
            </div>
            {/* discount */}
            <div className="flex justify-center items-center">
                <div className="flex space-x-4">
                    {coupons.map((coupon, index) => (
                        <CouponCard
                            key={index}
                            title={coupon.title}
                            description={coupon.description}
                            expiry={coupon.expiry}
                        />
                    ))}
                </div>
            </div>
            {/* new arrival */}
            <div className="p-8 ">
                <div className="flex justify-between items-center mb-4">
                    <h1></h1>
                    <h2 className="text-5xl font-bold">NEW ARRIVAL</h2>
                    <Link to="/All" className="text-blue-500 text-sm hover:underline ">
                        Xem tất cả
                    </Link>
                </div>

                <div className="grid grid-cols-3 gap-6">
                    {AoDai.slice(0, 3).map((product, index) => (
                        <ProductCard
                            key={index}
                            title={product.title}
                            image={product.image}
                            image2={product.image2}
                            price={product.price}
                            originalPrice={product.originalPrice}
                            discount={product.discount}
                            variants={product.variants}
                            productCode={product.productCode}
                            describe={product.describe}
                        />
                    ))}
                </div>
            </div>
            {/* Ảnh */}
            <div className="hover:cursor-pointer p-8 ">
                <img className="mx-auto rounded" src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lra19mm93ont15.webp" alt="" />
            </div>
            {/* best seller */}
            <div className="p-8  pb-10">
                <div className="flex justify-between items-center mb-4">
                    <h1></h1>
                    <h2 className="text-5xl font-bold">BEST SELLER</h2>
                    <a href="#" className="text-blue-500 text-sm hover:underline">
                        Xem tất cả
                    </a>
                </div>

                <div className="grid grid-cols-3 gap-6">
                    {products.slice(0, 3).map((product, index) => (
                        <ProductCard
                            key={index}
                            title={product.title}
                            image={product.image}
                            image2={product.image2}
                            price={product.price}
                            originalPrice={product.originalPrice}
                            discount={product.discount}
                            variants={product.variants}
                            productCode={product.productCode}
                            describe={product.describe}
                        />
                    ))}
                </div>
            </div>
            {/* t shirt */}
            {/* <div className="p-8 ">
                <div className="grid grid-cols-3">
                    <div className="">
                        <img src="https://bizweb.dktcdn.net/100/516/928/themes/951952/assets/section_product_image_1_banner.jpg?1726634821799" alt="" />
                    </div>
                    <div className="col-span-2">
                        <div className="grid grid-cols-3 gap-6">
                            {products.map((product, index) => (
                                <ProductCard
                                    key={index}
                                    title={product.title}
                                    image={product.image}
                                    image2={product.image2}
                                    price={product.price}
                                    originalPrice={product.originalPrice}
                                    discount={product.discount}
                                    variants={product.variants}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div> */}
            {/*  Quần */}
            {/* <div className="p-8 ">
                <div className="grid grid-cols-3">

                    <div className="col-span-2">
                        <div className="grid grid-cols-3 gap-4">
                            {products.map((product, index) => (
                                <ProductCard
                                    key={index}
                                    title={product.title}
                                    image={product.image}
                                    image2={product.image2}
                                    price={product.price}
                                    originalPrice={product.originalPrice}
                                    discount={product.discount}
                                    variants={product.variants}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="">
                        <img src="https://bizweb.dktcdn.net/100/516/928/themes/951952/assets/section_product_image_2_banner.jpg?1726634821799" alt="" />
                    </div>
                </div>
            </div> */}
            {/* Áo sọc */}
            {/* <div className="p-8 ">
                <div className="grid grid-cols-3">
                    <div className="">
                        <img src="https://bizweb.dktcdn.net/100/516/928/themes/951952/assets/section_product_image_3_banner.jpg?1726634821799" alt="" />
                    </div>
                    <div className="col-span-2">
                        <div className="grid grid-cols-3 gap-6">
                            {products.map((product, index) => (
                                <ProductCard
                                    key={index}
                                    title={product.title}
                                    image={product.image}
                                    image2={product.image2}
                                    price={product.price}
                                    originalPrice={product.originalPrice}
                                    discount={product.discount}
                                    variants={product.variants}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div> */}

            {/* <div className="p-8 ">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">FEEDBACK</h2>
                </div>
                <div className="grid grid-cols-4 gap-3">
                    {feedback_images.map((item) => (
                        <img key={item.image} src={item.image} alt="" />
                    ))}
                </div>
            </div> */}

        </div>
    );
};

export default Homepage;
