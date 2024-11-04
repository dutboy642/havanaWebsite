import { useEffect, useState } from "react";
// import Filter from "../components/Filter";
import FloatingButtons from "../components/FloatingButtons";
import ProductCard from "../components/ProductCard";
import ScrollToTop from "../components/ScrollToTop";
import PriceFilter from "../components/PriceFilter";
import SortFilter from "../components/SortFilter";
const Set: React.FC = () => {
    const products = [
        {
            title: "Set áo sơ mi tay cánh dơi phối nhíu eo cách điệu kèm chân váy dáng bí cạp chun trendy",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lx9mm9nlnw0pa1.webp",
            image2: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lx9mm9nlnvtn67.webp",
            productCode: "SAT224",
            brand: "HAVANA",
            price: 145000,
            originalPrice: 179000,
            discount: 45,
            describe: `<div style="font-family: Arial, sans-serif; line-height: 1.6; width: 100%; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
    <h2 style="color: #2c3e50;">Set áo sơ mi tay cánh dơi phối nhíu eo cách điệu dây rút kèm chân váy dáng bí cạp chun trendy HAVANA SAT224</h2>
    <p style="font-size: 16px; color: #34495e;">Freesize dưới 54kg mang vừa thoải mái</p>

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
            title: "Set áo sơ mi đũi phối dây buộc hai bên eo tôn dáng kèm quần short cạp chun phong cách ulzzang",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lyq9msd8d7dtd0.webp",
            image2: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lyq9qqow1xsd18.webp",
            productCode: "SAT 237",
            brand: "HAVANA",
            price: 149000,
            originalPrice: 199000,
            discount: 32,
            describe: `<div style="font-family: Arial, sans-serif; line-height: 1.6; width: 100%; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
    <h2 style="color: #2c3e50;">Set áo sơ mi đũi phối dây buộc hai bên eo tôn dáng kèm quần short cạp chun phong cách ulzzang HAVANA SAT237</h2>
    <p style="font-size: 16px; color: #34495e;">Freesize dưới 54kg mang vừa thoải mái</p>

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
            title: "Set áo sơ mi thêu nơ nhỏ kèm chân váy hai tầng hot trend",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lxt3zdcf39i33e.webp",
            image2: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lxt3zdc53obdaf.webp",
            productCode: "SAT228",
            brand: "HAVANA",
            price: 154800,
            originalPrice: 189000,
            discount: 18,
            describe: `<div style="font-family: Arial, sans-serif; line-height: 1.6; width: 100%; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
    <h2 style="color: #2c3e50;">Set áo sơ mi thêu nơ nhỏ kèm chân váy hai tầng hot trend HAVANA SAT228</h2>
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
            title: "Set áo sơ mi tay bồng đính nơ nhỏ kèm chân váy xếp ly dáng bí cạp chun phong cách dễ thương",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lxxvyhoyrnq1e3.webp",
            image2: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lxxvznevmz89c5.webp",
            productCode: "SAT 243",
            brand: "HAVANA",
            price: 169000,
            originalPrice: 199000,
            discount: 15,
            describe: `<div style="font-family: Arial, sans-serif; line-height: 1.6; width: 100%; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
    <h2 style="color: #2c3e50;">Set áo sơ mi tay bồng đính nơ nhỏ kèm chân váy xếp ly dáng bí cạp chun phong cách dễ thương HAVANA SAT243</h2>
    <p style="font-size: 16px; color: #34495e;">Freesize dưới 54kg mang vừa thoải mái</p>

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
            title: "Set áo sơ mi cổ nhọn đính nơ phối dây buộc eo kèm quốc short",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lzk91g5gbxal39.webp",
            image2: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lzk952sr57pp68.webp",
            productCode: "SAT 246",
            brand: "HAVANA",
            price: 149000,
            originalPrice: 189000,
            discount: 23,
            describe: `<div style="font-family: Arial, sans-serif; line-height: 1.6; width: 100%; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
    <h2 style="color: #2c3e50;">Set áo sơ mi cổ nhọn đính nơ phối dây buộc eo kèm quần short HAVANA SAT246</h2>
    <p style="font-size: 16px; color: #34495e;">Freesize dưới 54kg mang vừa thoải mái</p>

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
            title: "Set áo sơ mi form babydoll có dây buộc eo phối cà vạt kèm chân váy 2 tầng dáng xòe",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lyem3dcz3uzl89.webp",
            image2: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lyem3dcz59al78.webp",
            productCode: "SAT249",
            brand: "HAVANA",
            price: 155800,
            originalPrice: 189000,
            discount: 18,
            describe: `<div style="font-family: Arial, sans-serif; line-height: 1.6; width: 100%; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
    <h2 style="color: #2c3e50;">Set áo sơ mi form babydoll có dây buộc eo phối cà vạt kèm chân váy 2 tầng dáng xòe HAVANA SAT249</h2>
    <p style="font-size: 16px; color: #34495e;">Freesize dưới 54kg mang vừa thoải mái</p>

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
            title: "Set áo sơ mi sọc gân cổ sen phối cúc tàu có dây buộc tôn eo kèm chân váy 3 tầng trendy",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m0fcz7m4h5sf57.webp",
            image2: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m0fcz7kqj6jxac.webp",
            productCode: "SAT265",
            brand: "HAVANA",
            price: 145000,
            originalPrice: 189000,
            discount: 23,
            describe: ` <div style="font-family: Arial, sans-serif; line-height: 1.6; width: 100%; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
    <h2 style="color: #2c3e50;">Set áo sơ mi sọc gân cổ sen phối cúc tàu có dây buộc tôn eo kèm chân váy 3 tầng trendy HAVANA SAT265</h2>
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
            title: "Set áo sơ mi tay hến phối nơ nhỏ cách điệu nhíu sườn kèm quần short cạp chun phong cách thanh lịch",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lyma270ua4dd97.webp",
            image2: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lyma270ua43x87.webp",
            productCode: "SAT 259",
            brand: "HAVANA",
            price: 149000,
            originalPrice: 189000,
            discount: 23,
            describe: ` <div style="font-family: Arial, sans-serif; line-height: 1.6; width: 100%; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
    <h2 style="color: #2c3e50;">Set áo sơ mi tay hến phối nơ nhỏ cách điệu nhíu sườn kèm quần short cạp chun phong cách thanh lịch HAVANA SAT259</h2>
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
            title: "Set áo sơ mi phối hai túi vuông kèm chân váy ngắn xếp ly belt",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-luizgdo3te6q53.webp",
            image2: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-luizgdo47fv6fb.webp",
            productCode: "SAT 112",
            brand: "HAVANA",
            price: 179000,
            originalPrice: 219000,
            discount: 18,
            describe: `<div style="font-family: Arial, sans-serif; line-height: 1.6; width: 100%; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
    <h2 style="color: #2c3e50;">Set áo sơ mi phối hai túi vuông kèm chân váy ngắn xếp ly belt HAVANA SAT112</h2>
    <p style="font-size: 16px; color: #34495e;">Freesize < 53kg</p>

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
            title: "Set 3 món áo croptop caro đính nơ kèm chân váy ngắn xòe",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lx2a8ciawxcpdd.webp",
            image2: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lx2a8ci0xbyxd3.webp",
            productCode: "SAT213",
            brand: "HAVANA",
            price: 119000,
            originalPrice: 199000,
            discount: 40,
            describe: `<div style="font-family: Arial, sans-serif; line-height: 1.6; width: 100%; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
    <h2 style="color: #2c3e50;">[Tặng khăn turban] Set 3 món áo croptop caro đính nơ kèm chân váy ngắn xòe HAVANA SAT213</h2>
    <p style="font-size: 16px; color: #34495e;">Freesize dưới 55kg mang vừa thoải mái</p>

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
    ]
        ;

    // State để lưu bộ lọc giá và thứ tự sắp xếp
    const [priceFilter, setPriceFilter] = useState<string[]>([]);
    const [sortOrder, setSortOrder] = useState<string>("");

    // State để lưu danh sách sản phẩm đã lọc
    const [filteredProducts, setFilteredProducts] = useState(products);

    // Hàm xử lý thay đổi bộ lọc giá
    const handlePriceFilterChange = (selectedPrices: string[]) => {
        setPriceFilter(selectedPrices);
    };

    // Hàm xử lý thay đổi thứ tự sắp xếp
    const handleSortOrderChange = (order: string) => {
        setSortOrder(order);
    };

    // Cập nhật danh sách sản phẩm dựa trên bộ lọc
    useEffect(() => {
        let updatedProducts = [...products];

        // Lọc sản phẩm dựa trên giá
        if (priceFilter.length > 0) {
            updatedProducts = updatedProducts.filter((product) => {
                return priceFilter.some((priceRange) => {
                    switch (priceRange) {
                        case "Giá dưới 200.000đ":
                            return product.price < 200000;
                        case "200.000đ - 300.000đ":
                            return product.price >= 200000 && product.price <= 300000;
                        case "300.000đ - 500.000đ":
                            return product.price >= 300000 && product.price <= 500000;
                        case "500.000đ - 700.000đ":
                            return product.price >= 500000 && product.price <= 700000;
                        case "700.000đ - 1.000.000đ":
                            return product.price >= 700000 && product.price <= 1000000;
                        case "Giá trên 1.000.000đ":
                            return product.price > 1000000;
                        default:
                            return true;
                    }
                });
            });
        }

        // Sắp xếp sản phẩm dựa trên thứ tự sắp xếp
        if (sortOrder === "az") {
            updatedProducts.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sortOrder === "za") {
            updatedProducts.sort((a, b) => b.title.localeCompare(a.title));
        } else if (sortOrder === "priceAsc") {
            updatedProducts.sort((a, b) => a.price - b.price);
        } else if (sortOrder === "priceDesc") {
            updatedProducts.sort((a, b) => b.price - a.price);
        }

        setFilteredProducts(updatedProducts);
    }, [priceFilter, sortOrder]);

    return (
        <div className="w-[90%] mx-auto">
            <ScrollToTop />
            <nav className="flex mt-8 mb-4" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                    <li className="inline-flex items-center">
                        <a href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                            <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                            </svg>
                            Trang chủ
                        </a>
                    </li>
                    <li aria-current="page">
                        <div className="flex items-center">
                            <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Set đồ</span>
                        </div>
                    </li>
                </ol>
            </nav>

            <div className="grid grid-cols-4 pb-10">
                <div className="col-span-1">
                    <div className="p-4 w-full bg-white rounded-lg shadow">
                        <h2 className="text-lg font-bold mb-4">Set đồ</h2>
                        {/* <PriceFilter onFilterChange={handleFilterChange} /> */}
                        <PriceFilter onFilterChange={handlePriceFilterChange} />
                        {/* <TypeFilter /> */}
                        {/* <button className="text-blue-500 mt-2">Xem thêm</button> */}
                    </div>
                </div>
                <div className="col-span-3">
                    <div className="flex flex-row-reverse mb-4">
                        <SortFilter onSortChange={handleSortOrderChange} />
                    </div>
                    <div className="grid grid-cols-3 gap-6">
                        {filteredProducts.map((product) => (
                            <ProductCard
                                key={product.title}
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
            </div>
            <FloatingButtons></FloatingButtons>

        </div>
    )
}

export default Set;
