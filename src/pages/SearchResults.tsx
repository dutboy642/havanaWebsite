import { useEffect, useState } from "react";
// import Filter from "../components/Filter";
import FloatingButtons from "../components/FloatingButtons";
import ProductCard from "../components/ProductCard";
import ScrollToTop from "../components/ScrollToTop";
import PriceFilter from "../components/PriceFilter";
import SortFilter from "../components/SortFilter";
import { useLocation } from "react-router-dom";
import { Product } from "../declairation";
const ITEMS_PER_PAGE = 12;
const SearchResults: React.FC = () => {
    const products = [
        {
            title: "Quần kaki suông ống rộng 2 túi trước",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lxrognj2mo63aa.webp",
            image2: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lxrognj2qw2h3a.webp",
            productCode: "QJ230",
            brand: "HAVANA",
            price: 120000,
            originalPrice: 160000,
            discount: 25,
            describe: `<div style="font-family: Arial, sans-serif; line-height: 1.6; width: 100%; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
    <h2 style="color: #2c3e50;">Thông số kích thước:</h2>
    <ul style="list-style-type: none; margin-left: 0;">
        <li><strong>S:</strong> dài 99, v3 98, v2 66, rộng ống 28</li>
        <li><strong>M:</strong> dài 100, v3 102, v2 68, rộng ống 32</li>
    </ul>

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
        <li>Tất cả vấn đề về sản phẩm (lỗi sản phẩm, sai màu/size/mẫu, thiếu sản phẩm) nàng cứ nhắn tin cho Havana để được hỗ trợ giải quyết nhiệt tình - thân thiện ngay sau khi nhận được hàng ạ (kèm hình ảnh và video khui hàng để được hỗ trợ nhanh nhất có thể ạ).</li>
        <li>Chúng mình hỗ trợ đổi hàng trong vòng 7 ngày kể từ ngày nhận hàng đối với sản phẩm chưa qua sử dụng - còn nguyên tem mác.</li>
        <li>Havana chỉ gửi hàng đúng theo sản phẩm trong đơn hàng đã được đặt nên bạn yêu đừng ghi chú phân loại riêng nhé.</li>
        <li>Sản phẩm của Havana đã được chọn lọc và kiểm tra sản phẩm vô cùng tỉ mỉ, nói không với hàng kém chất lượng và không giống hình nên bạn yên tâm mua hàng nhen.</li>
    </ul>
</div>
`,
            variants: ["S", "M"],
        },
        {
            title: "Quần Jean Suông Dài Ống Rộng Phong Cách Dáng Thụng",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lw9js58hxjo925.webp",
            image2: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lw9js57zh4uz9d.webp",
            productCode: "QJ228",
            brand: "HAVANA",
            price: 169000,
            originalPrice: 199000,
            discount: 15,
            describe: `<div style="font-family: Arial, sans-serif; line-height: 1.6; width: 100%; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
    <h2 style="color: #2c3e50;">Kích thước:</h2>
    <p>Size: S, M, L<br>Freesize dưới 54kg mang vừa thoải mái</p>

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
        <li>Tất cả vấn đề về sản phẩm (lỗi sản phẩm, sai màu/size/mẫu, thiếu sản phẩm) nàng cứ nhắn tin cho Havana để được hỗ trợ giải quyết nhiệt tình - thân thiện ngay sau khi nhận được hàng ạ (kèm hình ảnh và video khui hàng để được hỗ trợ nhanh nhất có thể ạ).</li>
        <li>Chúng mình hỗ trợ đổi hàng trong vòng 7 ngày kể từ ngày nhận hàng đối với sản phẩm chưa qua sử dụng - còn nguyên tem mác.</li>
        <li>Havana chỉ gửi hàng đúng theo sản phẩm trong đơn hàng đã được đặt nên bạn yêu đừng ghi chú phân loại riêng nhé.</li>
        <li>Sản phẩm của Havana đã được chọn lọc và kiểm tra sản phẩm vô cùng tỉ mỉ, nói không với hàng kém chất lượng và không giống hình nên bạn yên tâm mua hàng nhen.</li>
    </ul>
</div>

`,
            variants: ["S", "M", "L", "XL"],
        },
        {
            title: "Quần đũi cạp chun ống rộng phong cách ulzzang ",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-luvgfxz7d5hucd.webp",
            image2: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-luvgfxz8115e58.webp",
            productCode: "QJ210",
            brand: "HAVANA",
            price: 139000,
            originalPrice: 179000,
            discount: 22,
            describe: `<div style="font-family: Arial, sans-serif; line-height: 1.6; width: 100%; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
    <h2 style="color: #2c3e50;">Quần đũi cạp chun ống rộng phong cách ulzzang HAVANA QJ210</h2>
    <p>Freesize dưới 60kg mang vừa thoải mái</p>

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
        <li>Tất cả vấn đề về sản phẩm (lỗi sản phẩm, sai màu/size/mẫu, thiếu sản phẩm) nàng cứ nhắn tin cho Havana để được hỗ trợ giải quyết nhiệt tình - thân thiện ngay sau khi nhận được hàng ạ (kèm hình ảnh và video khui hàng để được hỗ trợ nhanh nhất có thể ạ).</li>
        <li>Chúng mình hỗ trợ đổi hàng trong vòng 7 ngày kể từ ngày nhận hàng đối với sản phẩm chưa qua sử dụng - còn nguyên tem mác.</li>
        <li>Havana chỉ gửi hàng đúng theo sản phẩm trong đơn hàng đã được đặt nên bạn yêu đừng ghi chú phân loại riêng nhé.</li>
        <li>Sản phẩm của Havana đã được chọn lọc và kiểm tra sản phẩm vô cùng tỉ mỉ, nói không với hàng kém chất lượng và không giống hình nên bạn yên tâm mua hàng nhen.</li>
    </ul>
</div>
`,
            variants: ["Freesize"],
        },
        {
            title: "Quần ống rộng chất voan đũi cạp chun nhiều màu",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ltesi7gnve8496.webp",
            image2: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ltesi7gnsl3826.webp",
            productCode: "HE201",
            brand: "HAVANA",
            price: 119000,
            originalPrice: 169000,
            discount: 30,
            describe: `<div style="font-family: Arial, sans-serif; line-height: 1.6; width: 100%; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
    <h2 style="color: #2c3e50;">Quần ống rộng chất voan đũi cạp chun HE201</h2>
    <p>Freesize dưới 60kg mang vừa thoải mái</p>

    <h3 style="color: #2980b9;">Thông số kích thước:</h3>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Eo &lt; 78cm</li>
        <li>Chiều dài: 92cm</li>
        <li>Ống rộng: 46 cm</li>
    </ul>

    <h3 style="color: #2980b9;">Hướng dẫn bảo quản:</h3>
    <p>Hình thật shop chụp nên các nàng yên tâm mua hàng thôi ạ</p>
    <h4 style="color: #2980b9;">HƯỚNG DẪN BẢO QUẢN VÀ SỬ DỤNG:</h4>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Giặt riêng sản phẩm với lần giặt đầu tiên.</li>
        <li>Không sử dụng bột giặt có chất tẩy nồng độ cao.</li>
        <li>Khi phơi, các bạn nên lộn ngược lại để màu của sản phẩm được bền lâu.</li>
    </ul>

    <h4 style="color: #2980b9;">Hướng dẫn sử dụng:</h4>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Màu của sản phẩm sai lệch 1 - 5 % do ánh sáng của mỗi điện thoại là khác nhau và chênh lệch ánh sáng bên ngoài.</li>
        <li>Sai lệch số đo + -1cm.</li>
        <li>Mẫu cao 1m6, nặng 44kg mang fit dáng rộng như hình (số đo mang tính chất tham khảo do mỗi dáng người là khác nhau).</li>
    </ul>

    <h3 style="color: #2980b9;">Cam kết của shop:</h3>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Hình sản phẩm là ảnh thật 100 % do shop chụp, sản phẩm gửi đi là sản phẩm giống hình.</li>
        <li>Hàng đã được cắt chỉ thừa và kiểm tra trước khi gửi đi; nếu có chỉ thừa sót lại bám vào, mong các nàng thông cảm giúp shop ạ.</li>
    </ul>

    <h3 style="color: #2980b9;">Quy định đổi trả:</h3>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Nếu sản phẩm bị lỗi, sai màu, sai size, shop sẽ hỗ trợ đổi trả và chịu toàn bộ phí ship.</li>
        <li>Nếu shop gửi thiếu sản phẩm, shop sẽ ship thêm sản phẩm và chịu toàn bộ phí ship (kèm video khui hàng để được hỗ trợ nhanh nhất có thể ạ).</li>
    </ul>
</div>
`,
            variants: ["Freesize"],
        },
        {
            title: "Quần short jean co dãn 4 chiều túi vuông 2 viên 2 đai",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lxt8ygpa5wpl22.webp",
            image2: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lv8c9v2z96gpc3.webp",
            productCode: "QJ209",
            brand: "HAVANA",
            price: 145000,
            originalPrice: 199000,
            discount: 27,
            describe: `<div style="font-family: Arial, sans-serif; line-height: 1.6; width: 100%; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
    <h2 style="color: #2c3e50;">Quần short jean co dãn 4 chiều túi vuông 2 viên 2 đai HAVANA QJ209</h2>
    <p>Freesize dưới 51kg mang vừa thoải mái</p>

    <h3 style="color: #2980b9;">Hướng dẫn bảo quản:</h3>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Không dùng nước nóng hoăc xà phòng có tính kiềm quá cao để giặt áo loại này.</li>
        <li>Đối với việc ủi vải lụa, khi ủi nên có một lớp khăn hoặc vải mỏng phía dưới.</li>
    </ul>

    <h3 style="color: #2980b9;">Hướng dẫn sử dụng:</h3>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Các nàng tham khảo bảng thông số chi tiết để chọn size kĩ hơn ạ.</li>
        <li>Màu của sản phẩm sai lệch 1 - 5 % do ánh sáng của mỗi điện thoại là khác nhau và chênh lệch ánh sáng bên ngoài.</li>
        <li>Sai lệch số đo + -1cm.</li>
        <li>Mẫu cao 1m6, nặng 44kg mang fit dáng rộng như hình (số đo mang tính chất tham khảo do mỗi dáng người là khác nhau).</li>
    </ul>

    <h3 style="color: #2980b9;">Chính sách bán hàng:</h3>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Tất cả vấn đề về sản phẩm (lỗi sản phẩm, sai màu / size / mẫu, thiếu sản phẩm), nàng cứ nhắn tin cho Havana để được hỗ trợ giải quyết nhiệt tình.</li>
        <li>Thân thiện ngay sau khi nhận được hàng ạ (kèm hình ảnh và video khui hàng để được hỗ trợ nhanh nhất có thể ạ).</li>
        <li>Chúng mình hỗ trợ đổi hàng trong vòng 7 ngày kể từ ngày nhận hàng đối với sản phẩm chưa qua sử dụng - còn nguyên tem mác.</li>
        <li>Havana chỉ gửi hàng đúng theo sản phẩm trong đơn hàng đã được đặt, nên bạn yêu đừng ghi chú phân loại riêng nhe.</li>
        <li>Sản phẩm của Havana đã được chọn lọc và kiểm tra vô cùng tỉ mỉ, nói không với hàng kém chất lượng và không giống hình, nên bạn yêu yên tâm mua hàng nhen.</li>
    </ul>
</div>
`,
            variants: ["Freesize"],
        },
        {
            title: "Quần short chất kaki xếp li có túi form rộng",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lwdui50tl0ih89.webp",
            image2: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lwdui50tjly1c2.webp",
            productCode: "QJ204",
            brand: "HAVANA",
            price: 128000,
            originalPrice: 199000,
            discount: 36,
            describe: `<div style="font-family: Arial, sans-serif; line-height: 1.6; width: 100%; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
    <h2 style="color: #2c3e50;">Quần short chất kaki xếp li có túi form rộng HAVANA QJ204</h2>

    <h3 style="color: #2980b9;">Thông số kích thước:</h3>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Size M: v2 &lt; 68cm, v3 &lt; 96cm, dài quần 34cm</li>
        <li>Size S: v2 &lt; 64cm, v3 &lt; 92cm, dài quần 33cm</li>
        <li>Size L: v2 &lt; 70cm, v3 &lt; 100cm, dài quần 35cm</li>
    </ul>

    <h3 style="color: #2980b9;">Hướng dẫn bảo quản:</h3>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Không dùng nước nóng hoăc xà phòng có tính kiềm quá cao để giặt áo loại này.</li>
        <li>Đối với việc ủi vải lụa, khi ủi nên có một lớp khăn hoặc vải mỏng phía dưới.</li>
    </ul>

    <h3 style="color: #2980b9;">Hướng dẫn sử dụng:</h3>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Các nàng tham khảo bảng thông số chi tiết để chọn size kĩ hơn ạ.</li>
        <li>Màu của sản phẩm sai lệch 1 - 5 % do ánh sáng của mỗi điện thoại là khác nhau và chênh lệch ánh sáng bên ngoài.</li>
        <li>Sai lệch số đo + -1cm.</li>
        <li>Mẫu cao 1m6, nặng 44kg mang fit dáng rộng như hình (số đo mang tính chất tham khảo do mỗi dáng người là khác nhau).</li>
    </ul>

    <h3 style="color: #2980b9;">Chính sách bán hàng:</h3>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Tất cả vấn đề về sản phẩm (lỗi sản phẩm, sai màu / size / mẫu, thiếu sản phẩm), nàng cứ nhắn tin cho Havana để được hỗ trợ giải quyết nhiệt tình.</li>
        <li>Thân thiện ngay sau khi nhận được hàng ạ (kèm hình ảnh và video khui hàng để được hỗ trợ nhanh nhất có thể ạ).</li>
        <li>Chúng mình hỗ trợ đổi hàng trong vòng 7 ngày kể từ ngày nhận hàng đối với sản phẩm chưa qua sử dụng - còn nguyên tem mác.</li>
        <li>Havana chỉ gửi hàng đúng theo sản phẩm trong đơn hàng đã được đặt, nên bạn yêu đừng ghi chú phân loại riêng nhe.</li>
        <li>Sản phẩm của Havana đã được chọn lọc và kiểm tra vô cùng tỉ mỉ, nói không với hàng kém chất lượng và không giống hình, nên bạn yêu yên tâm mua hàng nhen.</li>
    </ul>
</div>
`,
            variants: ["S", "M", "L"],
        },
        {
            title: "Quần jeans ống rộng form dài tua gấu, quần denim ống suông form rộng",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lkt8rrroxyrfaf.webp",
            image2: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lkt8rrrozdbv6e.webp",
            productCode: "AE705",
            brand: "HAVAN",
            price: 179000,
            originalPrice: 239000,
            discount: 25,
            describe: `<div style="font-family: Arial, sans-serif; line-height: 1.6; width: 100%; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
    <h2 style="color: #2c3e50;">Quần jeans ống rộng form xòe tua gấu HAVANA AE705</h2>
    
    <h3 style="color: #2980b9;">Size:</h3>
    <p>S, M, L</p>

    <h3 style="color: #2980b9;">Hướng dẫn bảo quản:</h3>
    <p>Hình thật shop chụp nên các nàng yên tâm mua hàng thôi ạ</p>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Giặt riêng sản phẩm với lần giặt đầu tiên.</li>
        <li>Không sử dụng bột giặt có chất tẩy nồng độ cao.</li>
        <li>Khi phơi các bạn nên lộn ngược lại để màu của sản phẩm được bền lâu.</li>
    </ul>

    <h3 style="color: #2980b9;">Hướng dẫn sử dụng:</h3>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Màu của sản phẩm sai lệch 1 - 5 % do ánh sáng của mỗi điện thoại là khác nhau và chênh lệch ánh sáng bên ngoài.</li>
        <li>Sai lệch số đo + -1cm.</li>
        <li>Mẫu cao 1m6, nặng 44kg mang fit dáng rộng như hình (số đo mang tính chất tham khảo do mỗi dáng người là khác nhau).</li>
    </ul>

    <h3 style="color: #2980b9;">Cam kết của shop:</h3>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Hình sản phẩm là ảnh thật 100 % do shop chụp, sản phẩm gửi đi là sản phẩm giống hình.</li>
        <li>Hàng đã được cắt chỉ thừa và kiểm tra trước khi gửi đi, nếu có chỉ thừa sót lại bám vào mong các nàng thông cảm giúp shop ạ.</li>
    </ul>

    <h3 style="color: #2980b9;">Quy định đổi trả:</h3>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Nếu sản phẩm bị lỗi, sai màu, sai size, shop sẽ hỗ trợ đổi trả và chịu toàn bộ phí ship.</li>
        <li>Nếu shop gửi thiếu sản phẩm, shop sẽ ship thêm sản phẩm và chịu toàn bộ phí ship (kèm video khui hàng để được chúng mình hỗ trợ nhanh nhất có thể ạ).</li>
    </ul>
</div>
`,
            variants: ["S", "M", "L"],
        },
        {
            title: "Quần ống suông form rộng, quần ống đứng cạp cao phong cách Hàn Quốc chất tuyết mưa không nhăn dày, có size lớn trên 60kg",
            image: "https://down-vn.img.susercontent.com/file/sg-11134201-22110-haa7sxl5gekv68.webp",
            image2: "https://down-vn.img.susercontent.com/file/sg-11134201-22110-73t281y5gekv18.webp",
            productCode: "AB1",
            brand: "HAVAN",
            price: 129000,
            originalPrice: 229000,
            discount: 44,
            describe: `<div style="font-family: Arial, sans-serif; line-height: 1.6; width: 100%; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
    <h2 style="color: #2c3e50;">Quần ống suông form rộng, quần ống đứng cạp cao phong cách Hàn Quốc</h2>
    
    <h3 style="color: #2980b9;">Thông tin sản phẩm:</h3>
    <p>Chất liệu: Tuyết mưa không nhăn, dày</p>
    <p>Size: S, M, L</p>
    <p>Màu: Kem, đen, nâu</p>
    
    <h3 style="color: #2980b9;">Thông số kích thước:</h3>
    <ul style="list-style-type: none; margin-left: 20px;">
        <li><strong>Size S:</strong> Dài 97cm, Eo 66cm, V3 < 90cm, Ống 23cm</li>
        <li><strong>Size M:</strong> Dài 99cm, Eo 68cm, V3 < 94cm, Ống 24cm</li>
        <li><strong>Size L:</strong> Dài 99cm, Eo 70cm, V3 < 96cm, Ống 24cm</li>
    </ul>

    <h3 style="color: #2980b9;">Hướng dẫn sử dụng:</h3>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Các nàng tham khảo bảng thông số chi tiết để chọn size kĩ hơn ạ.</li>
        <li>Màu của sản phẩm sai lệch 1 - 5 % do ánh sáng của mỗi điện thoại là khác nhau và chênh lệch ánh sáng bên ngoài.</li>
        <li>Sai lệch số đo + -1cm.</li>
        <li>Mẫu cao 1m6, nặng 44kg mang fit dáng rộng như hình (số đo mang tính chất tham khảo do mỗi dáng người là khác nhau).</li>
    </ul>

    <h3 style="color: #2980b9;">Cam kết của shop:</h3>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Hình sản phẩm là ảnh thật 100 % do shop chụp, sản phẩm gửi đi là sản phẩm giống hình.</li>
        <li>Hàng đã được cắt chỉ thừa và kiểm tra trước khi gửi đi, nếu có chỉ thừa sót lại bám vào mong các nàng thông cảm giúp shop ạ.</li>
    </ul>

    <h3 style="color: #2980b9;">Quy định đổi trả:</h3>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Nếu sản phẩm bị lỗi, sai màu, sai size, shop sẽ hỗ trợ đổi trả và chịu toàn bộ phí ship.</li>
        <li>Nếu shop gửi thiếu sản phẩm, shop sẽ ship thêm sản phẩm và chịu toàn bộ phí ship (kèm video khui hàng để được chúng mình hỗ trợ nhanh nhất có thể ạ).</li>
    </ul>
</div>
`,
            variants: ["S", "M", "L"],
        },
        {
            title: "Quần suông ống rộng",
            image: "https://down-vn.img.susercontent.com/file/7cf96c6abe207e4005b6c34bacc40192.webp",
            image2: "https://down-vn.img.susercontent.com/file/e01d1394c539565e76e206b6abd851ea.webp",
            productCode: "AB2",
            brand: "HAVANA",
            price: 145000,
            originalPrice: 170000,
            discount: 15,
            describe: `<div style="font-family: Arial, sans-serif; line-height: 1.6; width: 100%; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
    <h2 style="color: #2c3e50;">THÔNG TIN SẢN PHẨM</h2>
    <h3 style="color: #2980b9;">QUẦN SUÔNG ỐNG RỘNG</h3>
    <p>- Sản phẩm có 3 size: S, M, L</p>
    <p>Chúng mình có bảng size chi tiết ở phần hình ảnh nhé.</p>

    <h2 style="color: #2c3e50;">CAM KẾT VÀ BẢO HÀNH</h2>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Toàn bộ ảnh sản phẩm và video đều do team Havana tự chụp 100 %.</li>
        <li>Form dáng của sản phẩm đẹp chuẩn y hình. Đảm bảo vải chất lượng tốt 100 %.</li>
        <li>Tất cả các đơn hàng trước khi gửi đi chúng mình đều kiểm tra rất kĩ, đóng gói cẩn thận, tránh sai sót.</li>
        <li>Hàng có sẵn 100 %, giao hàng ngay khi nhận được đơn.</li>
        <li>Hỗ trợ đổi trả theo quy định của Shopee.</li>
        <li>Đổi trả sản phẩm trong vòng 3 ngày nếu do lỗi sản xuất.</li>
        <li>Nếu có bất kỳ khiếu nại cần chúng mình hỗ trợ về sản phẩm, khi nhận được sản phẩm Quý Khách hàng vui lòng quay lại video quá trình mở sản phẩm để được đảm bảo 100 % đổi lại sản phẩm mới nếu hàng chúng mình giao bị lỗi ạ.</li>
    </ul>
</div>
`,
            variants: ["S", "M", "L"],
        },
        {
            title: "Quần tây ống loe cạp cao form suông dài",
            image: "https://down-vn.img.susercontent.com/file/eaff89c4effe8da1544bd3ee26c69fe8.webp",
            image2: "https://down-vn.img.susercontent.com/file/255513161193300f29431f0c83ac7a03.webp",
            productCode: "AE86",
            brand: "HAVANA",
            price: 135000,
            originalPrice: 165000,
            discount: 18,
            describe: `<div style="font-family: Arial, sans-serif; line-height: 1.6; width: 100%; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
    <h2 style="color: #2c3e50;">MÔ TẢ SẢN PHẨM</h2>
    <h3 style="color: #2980b9;">Quần tây ống loe cạp cao form suông dài</h3>
    <p><strong>Màu:</strong> đen</p>
    <p><strong>Size:</strong> S, M, L, XL</p>

    <h4 style="color: #2980b9;">Mô tả:</h4>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Quần tây ống loe nhẹ cực hack dáng</li>
        <li>Lưng cao trên rốn cực sang chảnh</li>
        <li>Chất liệu vải tốt tạo cảm giác thoải mái cho người mặc</li>
        <li>Thiết kế 2 nút tạo điểm nhấn cho quần tây</li>
        <li>Dễ phối quần tây ống loe với áo sơ mi, áo thun</li>
        <li>Lên form chuẩn, tôn dáng</li>
        <li>Hình thật 100 % shop chụp</li>
    </ul>

    <h4 style="color: #2980b9;">Hướng dẫn sử dụng:</h4>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Không nên giặt hoặc ngâm chung với các sản phẩm khác màu.</li>
        <li>Vì lý do vận chuyển nên sản phẩm có thể có nếp gấp, việc giặt hoặc ủi sơ sẽ giúp sản phẩm có trạng thái đẹp nhất.</li>
    </ul>
</div>
`,
            variants: ["S", "M", "L", "XL"],
        },
        {
            title: "Áo kiểu linen nhún thân dáng babydoll trễ vai tay bồng tiểu thư 2 dây buộc nơ",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lzlc5uzgwv2l73.webp",
            image2: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lzlc5v0ktu1975.webp",
            productCode: "AO362",
            brand: "HAVANA",
            price: 95000,
            originalPrice: 139000,
            discount: 32,
            describe: `<div style="font-family: Arial, sans-serif; line-height: 1.6; width: 100%; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
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
            describe: `<div style="font-family: Arial, sans-serif; line-height: 1.6; width: 100%; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
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
            describe: `<div style="font-family: Arial, sans-serif; line-height: 1.6; width: 100%; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
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
        },
        {
            title: "Áo babydoll cổ sơ mi tay ngắn vạt xòe dáng ngắn màu vintage, áo sơ mi dáng ngắn formbabydoll",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lr72oaubk04955.webp",
            image2: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lr72oaubmt958e.webp",
            productCode: "AO136",
            brand: "HAVANA",
            price: 104000,
            originalPrice: 199000,
            discount: 48,
            describe: `<div style="font-family: Arial, sans-serif; line-height: 1.6; width: 100%; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
    <h2 style="color: #2c3e50;">Áo babydoll cổ sơ mi tay ngắn vạt xòe dáng ngắn màu vintage HAVANA, áo sơ mi dáng ngắn formbabydoll AO136</h2>
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
        },
        {
            title: "Set áo thun giấy phối nút kèm áo quây buộc dây",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ll8pb5g0xadka0.webp",
            image2: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ll8pb5g103ig4e.webp",
            productCode: "HE308",
            brand: "HAVANA",
            price: 139000,
            originalPrice: 169000,
            discount: 18,
            describe: `<div style="font-family: Arial, sans-serif; line-height: 1.6; width: 100%; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
    <h2 style="color: #2c3e50;">Set áo thun giấy phối nút kèm áo quây buộc dây HE308</h2>
    <p style="font-size: 16px; color: #34495e;">Kèm áo quây cùng màu bên trong<br>Freesize dưới 53kg mang vừa</p>

    <h3 style="color: #2980b9;">Hướng dẫn bảo quản:</h3>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Hình thật shop chụp nên các nàng yên tâm mua hàng thôi ạ.</li>
    </ul>
    
    <h3 style="color: #2980b9;">HƯỚNG DẪN BẢO QUẢN VÀ SỬ DỤNG:</h3>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Giặt riêng sản phẩm với lần giặt đầu tiên.</li>
        <li>Không sử dụng bột giặt có chất tẩy nồng độ cao.</li>
        <li>Khi phơi, các bạn nên lộn ngược lại để màu của sản phẩm được bền lâu.</li>
    </ul>

    <h3 style="color: #2980b9;">Hướng dẫn sử dụng:</h3>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Màu của sản phẩm sai lệch 1 - 5% do ánh sáng của mỗi điện thoại là khác nhau và chênh lệch ánh sáng bên ngoài.</li>
        <li>Sai lệch số đo + -1cm.</li>
        <li>Mẫu cao 1m6, nặng 44kg mang fit dáng rộng như hình (số đo mang tính chất tham khảo do mỗi dáng người là khác nhau).</li>
    </ul>

    <h3 style="color: #2980b9;">Cam kết của shop:</h3>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Hình sản phẩm là ảnh thật 100% do shop chụp, sản phẩm gửi đi là sản phẩm giống hình.</li>
        <li>Hàng đã được cắt chỉ thừa và kiểm tra trước khi gửi đi, nếu có chỉ thừa sót lại bám vào mong các nàng thông cảm giúp shop ạ.</li>
    </ul>

    <h3 style="color: #2980b9;">Quy định đổi trả:</h3>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Nếu sản phẩm bị lỗi, sai màu, sai size, shop sẽ hỗ trợ đổi trả và chịu toàn bộ phí ship.</li>
        <li>Nếu shop gửi thiếu sản phẩm, shop sẽ ship thêm sản phẩm và chịu toàn bộ phí ship (kèm video khui hàng để được chúng mình hỗ trợ nhanh nhất có thể ạ).</li>
    </ul>
</div>
`,
            variants: ["Freesize"],
        },
        {
            title: "[Tặng kèm khoác choàng] Áo thun babytee thêu logo con ngựa kèm khoác choàng thuỷ thủ",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m0slqmm9isj114.webp",
            image2: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m0slrb6tkcy738.webp",
            productCode: "ATH205",
            brand: "HAVANA",
            price: 106800,
            originalPrice: 179000,
            discount: 40,
            describe: `<div style="font-family: Arial, sans-serif; line-height: 1.6; width: 100%; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
    <h2 style="color: #2c3e50;">[Tặng kèm khoác choàng] Áo babytee thêu logo con ngựa kèm khoác choàng thuỷ thủ HAVANA ATH205</h2>
    <p style="font-size: 16px; color: #34495e;">Freesize dưới 53kg mang vừa thoải mái</p>

    <h3 style="color: #2980b9;">Hướng dẫn bảo quản:</h3>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Không dùng nước nóng hoăc xà phòng có tính kiềm quá cao để giặt áo loại này.</li>
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
        <li>Tất cả vấn đề về sản phẩm (lỗi sản phẩm, sai màu / size / mẫu, thiếu sản phẩm) nàng cứ nhắn tin cho Havana để được hỗ trợ giải quyết nhiệt tình.</li>
        <li>Thân thiện ngay sau khi nhận được hàng ạ (kèm hình ảnh và video khui hàng để được hỗ trợ nhanh nhất có thể ạ).</li>
        <li>Chúng mình hỗ trợ đổi hàng trong vòng 7 ngày kể từ ngày nhận hàng đối với sản phẩm chưa qua sử dụng - còn nguyên tem mác.</li>
        <li>Havana chỉ gửi hàng đúng theo sản phẩm trong đơn hàng đã được đặt nên bạn iu đừng ghi chú phân loại riêng nhe.</li>
        <li>Sản phẩm của Havana đã được chọn lọc và kiểm tra sản phẩm vô cùng tỉ mỉ, nói không với hàng kém chất lượng và không giống hình nên bạn iu yên tâm mua hàng nhen.</li>
    </ul>
</div>
`,
            variants: ["Freesize"],
        },
        {
            title: "Áo len xù kẻ ngang phối cúc vai mặc 2 kiểu QC",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m0pojyvwwivj44.webp",
            image2: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m0pm8orcrmof82.webp",
            productCode: "LEN121",
            brand: "HAVANA",
            price: 280000,
            originalPrice: 340000,
            discount: 18,
            describe: `<div style="font-family: Arial, sans-serif; line-height: 1.6; width: 100%; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
    <h2 style="color: #2c3e50;">Áo len xù kẻ ngang phối cúc vai mặc 2 kiểu QC HAVANA LEN121</h2>
    <p style="font-size: 16px; color: #34495e;">Freesize dưới 55kg mang vừa thoải mái</p>

    <h3 style="color: #2980b9;">Hướng dẫn bảo quản:</h3>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Không dùng nước nóng hoăc xà phòng có tính kiềm quá cao để giặt áo loại này.</li>
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
        <li>Tất cả vấn đề về sản phẩm (lỗi sản phẩm, sai màu / size / mẫu, thiếu sản phẩm) nàng cứ nhắn tin cho Havana để được hỗ trợ giải quyết nhiệt tình.</li>
        <li>Thân thiện ngay sau khi nhận được hàng ạ (kèm hình ảnh và video khui hàng để được hỗ trợ nhanh nhất có thể ạ).</li>
        <li>Chúng mình hỗ trợ đổi hàng trong vòng 7 ngày kể từ ngày nhận hàng đối với sản phẩm chưa qua sử dụng - còn nguyên tem mác.</li>
        <li>Havana chỉ gửi hàng đúng theo sản phẩm trong đơn hàng đã được đặt nên bạn iu đừng ghi chú phân loại riêng nhe.</li>
        <li>Sản phẩm của Havana đã được chọn lọc và kiểm tra sản phẩm vô cùng tỉ mỉ, nói không với hàng kém chất lượng và không giống hình nên bạn iu yên tâm mua hàng nhen.</li>
    </ul>
</div>
`,
            variants: ["Freesize"],
        },
        {
            title: "Áo mongtoghi basic cổ tròn thêu chữ ' Butter'",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lyg3ejie1dwha9.webp",
            image2: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lyg3ejie5lcdd0.webp",
            productCode: "ATH335",
            brand: "HAVANA",
            price: 129000,
            originalPrice: 189000,
            discount: 32,
            describe: `<div style="font-family: Arial, sans-serif; line-height: 1.6; width: 100%; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
    <h2 style="color: #2c3e50;">Áo mongtoghi basic cổ tròn thêu chữ "Butter" HAVANA ATH335</h2>
    <p style="font-size: 16px; color: #34495e;">Freesize dưới 53 kg mang vừa thoải mái</p>

    <h3 style="color: #2980b9;">Hướng dẫn bảo quản:</h3>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Không dùng nước nóng hoăc xà phòng có tính kiềm quá cao để giặt áo loại này.</li>
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
        <li>Tất cả vấn đề về sản phẩm (lỗi sản phẩm, sai màu / size / mẫu, thiếu sản phẩm) nàng cứ nhắn tin cho Havana để được hỗ trợ giải quyết nhiệt tình.</li>
        <li>Thân thiện ngay sau khi nhận được hàng ạ (kèm hình ảnh và video khui hàng để được hỗ trợ nhanh nhất có thể ạ).</li>
        <li>Chúng mình hỗ trợ đổi hàng trong vòng 7 ngày kể từ ngày nhận hàng đối với sản phẩm chưa qua sử dụng - còn nguyên tem mác.</li>
        <li>Havana chỉ gửi hàng đúng theo sản phẩm trong đơn hàng đã được đặt nên bạn iu đừng ghi chú phân loại riêng nhe.</li>
        <li>Sản phẩm của Havana đã được chọn lọc và kiểm tra sản phẩm vô cùng tỉ mỉ, nói không với hàng kém chất lượng và không giống hình nên bạn iu yên tâm mua hàng nhen.</li>
    </ul>
</div>
`,
            variants: ["Freesize"],
        },
        {
            title: "Áo gile len lông thỏ hoạ tiết tổ ong cài cúc bọc đính hoa mai",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m0zkyuzehfa75b.webp",
            image2: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m0zkyuzeiu5734.webp",
            productCode: "LEN130",
            brand: "HAVANA",
            price: 159000,
            originalPrice: 189000,
            discount: 16,
            describe: `<div style="font-family: Arial, sans-serif; line-height: 1.6; width: 100%; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
    <h2 style="color: #2c3e50;">Áo gile len lông thỏ hoạ tiết tổ ong cài cúc bọc đính hoa mai HAVANA LEN130</h2>
    <p style="font-size: 16px; color: #34495e;">Freesize dưới 54kg mang vừa thoải mái</p>

    <h3 style="color: #2980b9;">Hướng dẫn bảo quản:</h3>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Không dùng nước nóng hoăc xà phòng có tính kiềm quá cao để giặt áo loại này.</li>
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
        <li>Tất cả vấn đề về sản phẩm (lỗi sản phẩm, sai màu / size / mẫu, thiếu sản phẩm) nàng cứ nhắn tin cho Havana để được hỗ trợ giải quyết nhiệt tình.</li>
        <li>Thân thiện ngay sau khi nhận được hàng ạ (kèm hình ảnh và video khui hàng để được hỗ trợ nhanh nhất có thể ạ).</li>
        <li>Chúng mình hỗ trợ đổi hàng trong vòng 7 ngày kể từ ngày nhận hàng đối với sản phẩm chưa qua sử dụng - còn nguyên tem mác.</li>
        <li>Havana chỉ gửi hàng đúng theo sản phẩm trong đơn hàng đã được đặt nên bạn iu đừng ghi chú phân loại riêng nhe.</li>
        <li>Sản phẩm của Havana đã được chọn lọc và kiểm tra sản phẩm vô cùng tỉ mỉ, nói không với hàng kém chất lượng và không giống hình nên bạn iu yên tâm mua hàng nhen.</li>
    </ul>
</div>
`,
            variants: ["Freesize"],
        },
        {
            title: "Áo kiểu nữ trễ vai dài tay phối hoa hồng ở tay cách điệu hot girl",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m0pot8j2nn9rc7.webp",
            image2: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m0pom9l4cm8f5c.webp",
            productCode: "AO371",
            brand: "HAVANA",
            price: 139000,
            originalPrice: 169000,
            discount: 18,
            describe: `<div style="font-family: Arial, sans-serif; line-height: 1.6; width: 100%; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
    <h2 style="color: #2c3e50;">Áo kiểu nữ trễ vai dài tay phối hoa hồng ở tay cách điệu hot girl HAVANA AO371</h2>
    <p style="font-size: 16px; color: #34495e;">Freesize dưới 53kg mang vừa thoải mái</p>

    <h3 style="color: #2980b9;">Hướng dẫn bảo quản:</h3>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Không dùng nước nóng hoăc xà phòng có tính kiềm quá cao để giặt áo loại này.</li>
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
        <li>Tất cả vấn đề về sản phẩm (lỗi sản phẩm, sai màu / size / mẫu, thiếu sản phẩm) nàng cứ nhắn tin cho Havana để được hỗ trợ giải quyết nhiệt tình.</li>
        <li>Thân thiện ngay sau khi nhận được hàng ạ (kèm hình ảnh và video khui hàng để được hỗ trợ nhanh nhất có thể ạ).</li>
        <li>Chúng mình hỗ trợ đổi hàng trong vòng 7 ngày kể từ ngày nhận hàng đối với sản phẩm chưa qua sử dụng - còn nguyên tem mác.</li>
        <li>Havana chỉ gửi hàng đúng theo sản phẩm trong đơn hàng đã được đặt nên bạn iu đừng ghi chú phân loại riêng nhe.</li>
        <li>Sản phẩm của Havana đã được chọn lọc và kiểm tra sản phẩm vô cùng tỉ mỉ, nói không với hàng kém chất lượng và không giống hình nên bạn iu yên tâm mua hàng nhen.</li>
    </ul>
</div>
`,
            variants: ["Freesize"],
        },
        {
            title: "Váy sơ mi cộc tay, sơ mi khuy gỗ eo chun co giãn, váy thanh lịch form xòe",
            image: "https://down-vn.img.susercontent.com/file/4d45b6ebe366fef186639efe1dc17f96.webp",
            image2: "https://down-vn.img.susercontent.com/file/c9bde33500a3d7f115e0771ccac25777.webp",
            productCode: "AE167",
            brand: "HAVANA",
            price: 115000,
            originalPrice: 189000,
            discount: 39,
            describe: `<div style="font-family: Arial, sans-serif; line-height: 1.6; width: 100%; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
    <h2 style="color: #2c3e50;">Váy sơ mi cộc tay, sơ mi khuy gỗ eo chun co giãn, váy thanh lịch form xòe</h2>

    <h3 style="color: #2980b9;">Thông tin sản phẩm:</h3>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Đầm phù hợp mang đi làm và đi chơi</li>
        <li>Dài: 85 cm</li>
        <li>Eo: từ 60-78cm</li>
        <li>Vai: 35cm</li>
        <li>Freesize dưới 55kg mang vừa luôn ạ</li>
    </ul>

    <h3 style="color: #2980b9;">Hướng dẫn bảo quản:</h3>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Không dùng nước nóng hoăc xà phòng có tính kiềm quá cao để giặt áo loại này.</li>
    </ul>

    <h3 style="color: #2980b9;">Hướng dẫn sử dụng:</h3>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Các nàng tham khảo bảng thông số chi tiết để chọn size kĩ hơn ạ.</li>
        <li>Màu của sản phẩm sai lệch 1 - 5% do ánh sáng của mỗi điện thoại là khác nhau và chênh lệch ánh sáng bên ngoài.</li>
        <li>Sai lệch số đo + -1cm.</li>
        <li>Mẫu cao 1m6, nặng 44kg mang fit dáng rộng như hình (số đo mang tính chất tham khảo do mỗi dáng người là khác nhau).</li>
    </ul>

    <h3 style="color: #2980b9;">Cam kết của shop:</h3>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Hình sản phẩm là ảnh thật 100% do shop chụp, sản phẩm gửi đi là sản phẩm giống hình.</li>
        <li>Hàng đã được cắt chỉ thừa và kiểm tra trước khi gửi đi, nếu có chỉ thừa sót lại bám vào mong các nàng thông cảm giúp shop ạ.</li>
    </ul>

    <h3 style="color: #2980b9;">Quy định đổi trả:</h3>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Nếu sản phẩm bị lỗi, sai màu, sai size, shop sẽ hỗ trợ đổi trả và chịu toàn bộ phí ship.</li>
        <li>Nếu shop gửi thiếu sản phẩm, shop sẽ ship thêm sản phẩm và chịu toàn bộ phí ship (kèm video khui hàng để được chúng mình hỗ trợ nhanh nhất có thể ạ).</li>
    </ul>
</div>
`,
            variants: ["Freesize"],
        },


        {
            title: "Chân váy ngắn xòe 4 tầng nhún bèo họa tiết in nơ chấm bi",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lwqlajjehcd59a.webp",
            image2: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lwqlajjek5i174.webp",
            productCode: "CV247",
            brand: "HAVANA",
            price: 115000,
            originalPrice: 189000,
            discount: 39,
            describe: `<div style="font-family: Arial, sans-serif; line-height: 1.6; width: 100%; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
    <h2 style="color: #2c3e50;">Chân váy ngắn xòe 4 tầng nhún bèo họa tiết in nơ chấm bi</h2>

    <h3 style="color: #2980b9;">Thông tin sản phẩm:</h3>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Freesize dưới 53kg mang vừa thoải mái</li>
    </ul>

    <h3 style="color: #2980b9;">Hướng dẫn bảo quản:</h3>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Không dùng nước nóng hoăc xà phòng có tính kiềm quá cao để giặt áo loại này.</li>
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
        <li>Tất cả vấn đề về sản phẩm (lỗi sản phẩm, sai màu / size / mẫu, thiếu sản phẩm) nàng cứ nhắn tin cho Havana để được hỗ trợ giải quyết nhiệt tình.</li>
        <li>Thân thiện ngay sau khi nhận được hàng ạ (kèm hình ảnh và video khui hàng để được hỗ trợ nhanh nhất có thể ạ).</li>
        <li>Chúng mình hỗ trợ đổi hàng trong vòng 7 ngày kể từ ngày nhận hàng đối với sản phẩm chưa qua sử dụng - còn nguyên tem mác.</li>
        <li>Havana chỉ gửi hàng đúng theo sản phẩm trong đơn hàng đã được đặt nên bạn iu đừng ghi chú phân loại riêng nhe.</li>
        <li>Sản phẩm của Havana đã được chọn lọc và kiểm tra sản phẩm vô cùng tỉ mỉ, nói không với hàng kém chất lượng và không giống hình nên bạn iu yên tâm.</li>
    </ul>
</div>
`,
            variants: ["Freesize"],
        },

        {
            title: "Chân váy kaki thô dáng dài xẻ tà sau lưng chun ",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lyn5k3w1x9vxd7.webp",
            image2: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lyn5k3w1vvkxbb.webp",
            productCode: "CV253",
            brand: "HAVANA",
            price: 129000,
            originalPrice: 169000,
            discount: 24,
            describe: `<div style="font-family: Arial, sans-serif; line-height: 1.6; width: 100%; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
    <h2 style="color: #2c3e50;">Chân váy kaki thô dáng dài xẻ tà sau lưng chun</h2>

    <h3 style="color: #2980b9;">Thông tin sản phẩm:</h3>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Freesize dưới 54kg mang vừa thoải mái</li>
        <li>* Thông số kích thước: dài 88cm, eo < 75cm, mông < 100cm</li>
    </ul>

    <h3 style="color: #2980b9;">Hướng dẫn bảo quản:</h3>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Không dùng nước nóng hoăc xà phòng có tính kiềm quá cao để giặt áo loại này.</li>
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
        <li>Tất cả vấn đề về sản phẩm (lỗi sản phẩm, sai màu / size / mẫu, thiếu sản phẩm) nàng cứ nhắn tin cho Havana để được hỗ trợ giải quyết nhiệt tình.</li>
        <li>Thân thiện ngay sau khi nhận được hàng ạ (kèm hình ảnh và video khui hàng để được hỗ trợ nhanh nhất có thể ạ).</li>
        <li>Chúng mình hỗ trợ đổi hàng trong vòng 7 ngày kể từ ngày nhận hàng đối với sản phẩm chưa qua sử dụng - còn nguyên tem mác.</li>
        <li>Havana chỉ gửi hàng đúng theo sản phẩm trong đơn hàng đã được đặt nên bạn iu đừng ghi chú phân loại riêng nhe.</li>
        <li>Sản phẩm của Havana đã được chọn lọc và kiểm tra sản phẩm vô cùng tỉ mỉ, nói không với hàng kém chất lượng và không giống hình nên bạn iu yên tâm mua hàng nhen.</li>
    </ul>
</div>
`,
            variants: ["Freesize"],
        },

        {
            title: "Chân váy ngắn xếp li chất thu umi lưng chun có khóa kéo",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lyq9msd8bstd61.webp",
            image2: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lyq9msd8r8st95.webp",
            productCode: "CV251",
            brand: "HAVANA",
            price: 105000,
            originalPrice: 145000,
            discount: 28,
            describe: `<div style="font-family: Arial, sans-serif; line-height: 1.6; width: 100%; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
    <h2 style="color: #2c3e50;">Chân váy ngắn xếp li chất thu umi lưng chun có khóa kéo</h2>

    <h3 style="color: #2980b9;">Thông tin sản phẩm:</h3>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Freesize dưới 55kg mang vừa thoải mái tùy chiều cao.</li>
    </ul>

    <h3 style="color: #2980b9;">Hướng dẫn bảo quản:</h3>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Không dùng nước nóng hoăc xà phòng có tính kiềm quá cao để giặt áo loại này.</li>
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
        <li>Tất cả vấn đề về sản phẩm (lỗi sản phẩm, sai màu / size / mẫu, thiếu sản phẩm) nàng cứ nhắn tin cho Havana để được hỗ trợ giải quyết nhiệt tình.</li>
        <li>Thân thiện ngay sau khi nhận được hàng ạ (kèm hình ảnh và video khui hàng để được hỗ trợ nhanh nhất có thể ạ).</li>
        <li>Chúng mình hỗ trợ đổi hàng trong vòng 7 ngày kể từ ngày nhận hàng đối với sản phẩm chưa qua sử dụng - còn nguyên tem mác.</li>
        <li>Havana chỉ gửi hàng đúng theo sản phẩm trong đơn hàng đã được đặt nên bạn iu đừng ghi chú phân loại riêng nhe.</li>
        <li>Sản phẩm của Havana đã được chọn lọc và kiểm tra sản phẩm vô cùng tỉ mỉ, nói không với hàng kém chất lượng và không giống hình nên bạn iu yên tâm mua hàng nhen.</li>
    </ul>
</div>
`,
            variants: ["Freesize"],
        },

        {
            title: "Chân váy jean dáng dài xẻ tà 2 túi sau sọc viền nổi ngang gối",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-m08nvp45gu7he3.webp",
            image2: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-m08nvp45jnnz70.webp",
            productCode: "CVA0002",
            brand: "HAVANA",
            price: 155000,
            originalPrice: 189000,
            discount: 18,
            describe: `<div style="font-family: Arial, sans-serif; line-height: 1.6; width: 100%; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
    <h2 style="color: #2c3e50;">Denim ByHavana - Chân váy jean dáng dài xẻ tà 2 túi sau sọc viền nổi ngang gối CVA0002</h2>

    <h3 style="color: #2980b9;">MÔ TẢ SẢN PHẨM:</h3>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Chất liệu jeans cao cấp dày dặn.</li>
    </ul>

    <h3 style="color: #2980b9;">Thông số kích thước:</h3>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Size S: dài váy 86cm, eo 70cm, V3 84cm.</li>
        <li>Size M: dài váy 86cm, eo 72cm, V3 90cm.</li>
        <li>Size L: dài váy 86cm, eo 84cm, V3 92cm.</li>
    </ul>

    <h3 style="color: #2980b9;">HƯỚNG DẪN BẢO QUẢN:</h3>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Để giữ màu quần jeans đẹp như mới, trong lần giặt đầu tiên bạn không nên giặt bằng xà phòng.</li>
        <li>Giặt tay là cách hiệu quả để giữ quần jeans không bị phai màu.</li>
        <li>Hạn chế dùng nước xả vải với quần jeans. Nước xả vải có tác dụng làm mềm vải, dễ khiến quần jeans mất dáng, không còn đứng form.</li>
        <li>Nếu dùng máy giặt, bạn nhớ lộn trái quần jeans trước khi cho vào máy.</li>
        <li>Để quần jeans được bền đẹp, bạn không nên giặt quần jeans quá nhiều lần. Sau 5 đến 10 lần mặc có thể đem quần ra giặt.</li>
        <li>Không vắt kiệt nước khi giặt: Do chất liệu để làm nên quần jeans có tính co dãn nên những tác động mạnh đều có thể làm mất dáng chiếc quần yêu thích của bạn.</li>
        <li>Không phơi quần jeans dưới nắng gắt. Bạn chỉ cần phơi quần ở những nơi thoáng mát, có nhiều gió là được. Và đừng quên việc lộn trái quần để phơi.</li>
    </ul>

    <h3 style="color: #2980b9;">LƯU Ý MUA HÀNG:</h3>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Các nàng tham khảo bảng thông số chi tiết để chọn size kĩ hơn ạ.</li>
        <li>Màu của sản phẩm sai lệch 1 - 5% do ánh sáng của mỗi điện thoại là khác nhau và chênh lệch ánh sáng bên ngoài.</li>
        <li>Sai lệch số đo + -1cm.</li>
        <li>Mẫu cao 1m6, nặng 44kg mang fit dáng rộng như hình (số đo mang tính chất tham khảo do mỗi dáng người là khác nhau).</li>
    </ul>

    <h3 style="color: #2980b9;">CHÍNH SÁCH MUA HÀNG:</h3>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Tất cả vấn đề về sản phẩm (lỗi sản phẩm, sai màu / size / mẫu, thiếu sản phẩm) nàng cứ nhắn tin cho Havana để được hỗ trợ giải quyết nhiệt tình ngay sau khi nhận được hàng ạ (kèm hình ảnh và video khui hàng để được hỗ trợ nhanh nhất có thể ạ).</li>
        <li>Chúng mình hỗ trợ đổi hàng trong vòng 7 ngày kể từ ngày nhận hàng đối với sản phẩm chưa qua sử dụng - còn nguyên tem mác.</li>
        <li>Havana chỉ gửi hàng đúng theo sản phẩm trong đơn hàng đã được đặt nên bạn iu đừng ghi chú phân loại riêng nhe.</li>
        <li>Sản phẩm của Havana đã được chọn lọc và kiểm tra sản phẩm vô cùng tỉ mỉ, nói không với hàng kém chất lượng và không giống hình nên bạn iu yên tâm mua hàng nhen.</li>
    </ul>
</div>
`,
            variants: ["S", "M", "L"],
        },

        {
            title: "Chân váy midi dạ cashmere caro phối 3 tầng lưng chun co giãn",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lodecwgt3jsj28.webp",
            image2: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lodecwgt6cxfd3.webp",
            productCode: "QJ35",
            brand: "HAVANA",
            price: 168000,
            originalPrice: 168000,
            discount: 0,
            describe: `<div style="font-family: Arial, sans-serif; line-height: 1.6; width: 100%; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
    <h2 style="color: #2c3e50;">Chân váy midi dạ cashmere caro phối 3 tầng lưng chun co giãn HAVANA QJ35</h2>
    <p><strong>Freesize:</strong> < 56kg</p>

    <h3 style="color: #2980b9;">Hướng dẫn bảo quản:</h3>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Không dùng nước nóng hoăc xà phòng có tính kiềm quá cao để giặt áo loại này.</li>
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
        <li>Tất cả vấn đề về sản phẩm (lỗi sản phẩm, sai màu / size / mẫu, thiếu sản phẩm) nàng cứ nhắn tin cho Havana để được hỗ trợ giải quyết nhiệt tình - thân thiện ngay sau khi nhận được hàng ạ (kèm hình ảnh và video khui hàng để được hỗ trợ nhanh nhất có thể ạ).</li>
        <li>Chúng mình hỗ trợ đổi hàng trong vòng 7 ngày kể từ ngày nhận hàng đối với sản phẩm chưa qua sử dụng - còn nguyên tem mác.</li>
        <li>Havana chỉ gửi hàng đúng theo sản phẩm trong đơn hàng đã được đặt nên bạn iu đừng ghi chú phân loại riêng nhe.</li>
        <li>Sản phẩm của Havana đã được chọn lọc và kiểm tra sản phẩm vô cùng tỉ mỉ, nói không với hàng kém chất lượng và không giống hình nên bạn iu yên tâm mua hàng nhen.</li>
    </ul>
</div>
`,
            variants: ["Freesize"],
        },
        {
            title: "Đầm trơn sọc gân cổ tròn kèm váy lót hai dây bên trong vải lụa",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ls9c987qpvb8a6.webp",
            image2: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ls9c987rkrt06f.webp",
            productCode: "HE113",
            brand: "HAVANA",
            price: 159000,
            originalPrice: 199000,
            discount: 20,
            describe: `<div style="font-family: Arial, sans-serif; line-height: 1.6; width: 100%; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
    <h2 style="color: #2c3e50;">Đầm trơn sọc gân cổ tròn kèm hai dây bên trong vải lụa HE113</h2>
    
    <h3 style="color: #2980b9;">Thông số sản phẩm:</h3>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Chiều dài váy: 108 cm</li>
        <li>V1: < 95cm</li>
        <li>Chiều rộng vai: 33cm</li>
    </ul>

    <h3 style="color: #2980b9;">Hướng dẫn bảo quản:</h3>
    <p>Hình thật shop chụp nên các nàng yên tâm mua hàng thôi ạ.</p>
    
    <h3 style="color: #2980b9;">Hướng dẫn bảo quản và sử dụng:</h3>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Giặt riêng sản phẩm với lần giặt đầu tiên.</li>
        <li>Không sử dụng bột giặt có chất tẩy nồng độ cao.</li>
        <li>Khi phơi, các bạn nên lộn ngược lại để màu của sản phẩm được bền lâu.</li>
    </ul>

    <h3 style="color: #2980b9;">Hướng dẫn sử dụng:</h3>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Màu của sản phẩm sai lệch 1 - 5% do ánh sáng của mỗi điện thoại là khác nhau và chênh lệch ánh sáng bên ngoài.</li>
        <li>Sai lệch số đo + -1cm.</li>
        <li>Mẫu cao 1m6, nặng 44kg mang fit dáng rộng như hình (số đo mang tính chất tham khảo do mỗi dáng người là khác nhau).</li>
    </ul>

    <h3 style="color: #2980b9;">Cam kết của shop:</h3>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Hình sản phẩm là ảnh thật 100% do shop chụp, sản phẩm gửi đi là sản phẩm giống hình.</li>
        <li>Hàng đã được cắt chỉ thừa và kiểm tra trước khi gửi đi, nếu có chỉ thừa sót lại mong các nàng thông cảm giúp shop ạ.</li>
    </ul>

    <h3 style="color: #2980b9;">Quy định đổi trả:</h3>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Nếu sản phẩm bị lỗi, sai màu, sai size, shop sẽ hỗ trợ đổi trả và chịu toàn bộ phí ship.</li>
        <li>Nếu shop gửi thiếu sản phẩm, shop sẽ ship thêm sản phẩm và chịu toàn bộ phí ship (kèm video khui hàng để được hỗ trợ nhanh nhất có thể ạ).</li>
    </ul>
</div>
`,
            variants: ["Freesize"],
        },
        {
            title: "Chân váy Jeans dáng dài form chữ A thiết kế túi giả ",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lru1n94ewres38.webp",
            image2: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lru1n94ouy8448.webp",
            productCode: "CV114",
            brand: "HAVANA",
            price: 129000,
            originalPrice: 199000,
            discount: 35,
            describe: `<div style="font-family: Arial, sans-serif; line-height: 1.6; width: 100%; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
    <h2 style="color: #2c3e50;">Chân váy Jeans dáng dài form chữ A thiết kế túi giả HAVANA CV114</h2>
    
    <h3 style="color: #2980b9;">Size:</h3>
    <p>S, M, L</p>

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
        <li>Tất cả vấn đề về sản phẩm (lỗi sản phẩm, sai màu/size/mẫu, thiếu sản phẩm) nàng cứ nhắn tin cho Havana để được hỗ trợ giải quyết nhiệt tình - thân thiện ngay sau khi nhận được hàng ạ (kèm hình ảnh và video khui hàng để được hỗ trợ nhanh nhất có thể ạ).</li>
        <li>Chúng mình hỗ trợ đổi hàng trong vòng 7 ngày kể từ ngày nhận hàng đối với sản phẩm chưa qua sử dụng - còn nguyên tem mác.</li>
        <li>Havana chỉ gửi hàng đúng theo sản phẩm trong đơn hàng đã được đặt nên bạn iu đừng ghi chú phân loại riêng nhé.</li>
        <li>Sản phẩm của Havana đã được chọn lọc và kiểm tra sản phẩm vô cùng tỉ mỉ, nói không với hàng kém chất lượng và không giống hình nên bạn iu yên tâm mua hàng nhen.</li>
    </ul>
</div>
`,
            variants: ["S", "M", "L"],
        },
        {
            title: "Chân váy midi thun Umi form A xoè phong cách ulzzang",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m0in8dke3mofae.webp",
            image2: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m0in8dke0t7x44.webp",
            productCode: "CV273",
            brand: "HAVANA",
            price: 140000,
            originalPrice: 189000,
            discount: 26,
            describe: `<div style="font-family: Arial, sans-serif; line-height: 1.6; width: 100%; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
    <h2 style="color: #2c3e50;">(HÀNG QC LOẠI 1) Chân váy midi thun Umi form A xoè phong cách ulzzang HAVANA CV273</h2>
    
    <h3 style="color: #2980b9;">Freesize:</h3>
    <p>Dưới 56kg mang vừa thoải mái</p>

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
        <li>Tất cả vấn đề về sản phẩm (lỗi sản phẩm, sai màu/size/mẫu, thiếu sản phẩm) nàng cứ nhắn tin cho Havana để được hỗ trợ giải quyết nhiệt tình - thân thiện ngay sau khi nhận được hàng ạ (kèm hình ảnh và video khui hàng để được hỗ trợ nhanh nhất có thể ạ).</li>
        <li>Chúng mình hỗ trợ đổi hàng trong vòng 7 ngày kể từ ngày nhận hàng đối với sản phẩm chưa qua sử dụng - còn nguyên tem mác.</li>
        <li>Havana chỉ gửi hàng đúng theo sản phẩm trong đơn hàng đã được đặt nên bạn iu đừng ghi chú phân loại riêng nhé.</li>
        <li>Sản phẩm của Havana đã được chọn lọc và kiểm tra sản phẩm vô cùng tỉ mỉ, nói không với hàng kém chất lượng và không giống hình nên bạn iu yên tâm mua hàng nhen.</li>
    </ul>
</div>
`,
            variants: ["Freesize"],
        },

        {
            title: "Chân váy Jeans dáng dài form chữ A thiết kế túi giả ",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lru1n94ewres38.webp",
            image2: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lru1n94f0z44c7.webp",
            productCode: "CV114",
            brand: "HAVANA",
            price: 129000,
            originalPrice: 199000,
            discount: 35,
            describe: `<div style="font-family: Arial, sans-serif; line-height: 1.6; width: 100%; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
    <h2 style="color: #2c3e50;">Chân váy Jeans dáng dài form chữ A thiết kế túi giả HAVANA CV114</h2>
    
    <h3 style="color: #2980b9;">Size:</h3>
    <p>S, M, L</p>

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
        <li>Tất cả vấn đề về sản phẩm (lỗi sản phẩm, sai màu/size/mẫu, thiếu sản phẩm) nàng cứ nhắn tin cho Havana để được hỗ trợ giải quyết nhiệt tình - thân thiện ngay sau khi nhận được hàng ạ (kèm hình ảnh và video khui hàng để được hỗ trợ nhanh nhất có thể ạ).</li>
        <li>Chúng mình hỗ trợ đổi hàng trong vòng 7 ngày kể từ ngày nhận hàng đối với sản phẩm chưa qua sử dụng - còn nguyên tem mác.</li>
        <li>Havana chỉ gửi hàng đúng theo sản phẩm trong đơn hàng đã được đặt nên bạn iu đừng ghi chú phân loại riêng nhé.</li>
        <li>Sản phẩm của Havana đã được chọn lọc và kiểm tra sản phẩm vô cùng tỉ mỉ, nói không với hàng kém chất lượng và không giống hình nên bạn iu yên tâm mua hàng nhen.</li>
    </ul>
</div>
`,
            variants: ["S", "M", "L"],
        },
        {
            title: "Chân váy dáng dài basic 2 túi xẻ sau phong cách thanh lịch",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ltbvo439mpqc55.webp",
            image2: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ltbvo439o4as01.webp",
            productCode: "CV174",
            brand: "HAVANA",
            price: 145000,
            originalPrice: 189000,
            discount: 23,
            describe: `<div style="font-family: Arial, sans-serif; line-height: 1.6; width: 100%; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
    <h2 style="color: #2c3e50;">Chân váy dáng dài basic 2 túi xẻ sau phong cách thanh lịch HAVANA CV174</h2>
    
    <h3 style="color: #2980b9;">Size:</h3>
    <p>S, M, L</p>

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
        <li>Tất cả vấn đề về sản phẩm (lỗi sản phẩm, sai màu/size/mẫu, thiếu sản phẩm) nàng cứ nhắn tin cho Havana để được hỗ trợ giải quyết nhiệt tình - thân thiện ngay sau khi nhận được hàng ạ (kèm hình ảnh và video khui hàng để được hỗ trợ nhanh nhất có thể ạ).</li>
        <li>Chúng mình hỗ trợ đổi hàng trong vòng 7 ngày kể từ ngày nhận hàng đối với sản phẩm chưa qua sử dụng - còn nguyên tem mác.</li>
        <li>Havana chỉ gửi hàng đúng theo sản phẩm trong đơn hàng đã được đặt nên bạn iu đừng ghi chú phân loại riêng nhé.</li>
        <li>Sản phẩm của Havana đã được chọn lọc và kiểm tra sản phẩm vô cùng tỉ mỉ, nói không với hàng kém chất lượng và không giống hình nên bạn iu yên tâm mua hàng nhen.</li>
    </ul>
</div>
`,
            variants: ["S", "M", "L"],
        },
        {
            title: "Chân váy dáng dài công sở form A túi giả kèm belt",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ltesi7gnk5ok0c.webp",
            image2: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ltesi7gnoddw89.webp",
            productCode: "CV170",
            brand: "HAVANA",
            price: 186000,
            originalPrice: 189000,
            discount: 2,
            describe: `<div style="font-family: Arial, sans-serif; line-height: 1.6; width: 100%; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
    <h2 style="color: #2c3e50;">Chân váy dáng dài công sở form A túi giả kèm belt HAVANA CV170</h2>
    
    <h3 style="color: #2980b9;">Size:</h3>
    <p>S, M</p>

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
        <li>Tất cả vấn đề về sản phẩm (lỗi sản phẩm, sai màu/size/mẫu, thiếu sản phẩm) nàng cứ nhắn tin cho Havana để được hỗ trợ giải quyết nhiệt tình - thân thiện ngay sau khi nhận được hàng ạ (kèm hình ảnh và video khui hàng để được hỗ trợ nhanh nhất có thể ạ).</li>
        <li>Chúng mình hỗ trợ đổi hàng trong vòng 7 ngày kể từ ngày nhận hàng đối với sản phẩm chưa qua sử dụng - còn nguyên tem mác.</li>
        <li>Havana chỉ gửi hàng đúng theo sản phẩm trong đơn hàng đã được đặt nên bạn iu đừng ghi chú phân loại riêng nhé.</li>
        <li>Sản phẩm của Havana đã được chọn lọc và kiểm tra sản phẩm vô cùng tỉ mỉ, nói không với hàng kém chất lượng và không giống hình nên bạn iu yên tâm mua hàng nhen.</li>
    </ul>
</div>
`,
            variants: ["S", "M"],
        },
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
            describe: ` <div style="font-family: Arial, sans-serif; line-height: 1.6; width: 100%; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
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
            describe: ` <div style="font-family: Arial, sans-serif; line-height: 1.6; width: 100%; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
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
            title: "Áo kiểu linen nhún thân dáng babydoll trễ vai tay bồng tiểu thư 2 dây buộc nơ",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lzlc5uzgwv2l73.webp",
            image2: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lzlc5v0ktu1975.webp",
            productCode: "AO362",
            brand: "HAVANA",
            price: 95000,
            originalPrice: 139000,
            discount: 32,
            describe: `<div style="font-family: Arial, sans-serif; line-height: 1.6; width: 100%; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
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
            describe: `<div style="font-family: Arial, sans-serif; line-height: 1.6; width: 100%; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
    <h2 style="color: #2c3e50;">Áo sơ mi ngắn tay vạt bầu thêu trái tim đôi HAVANA AO283</h2>
    <p style="font-size: 16px; color: #34495e;">Freesize &lt; 54kg<br> 
       Dài áo: 63cm, Dài tay: 15cm, V1 &lt; 92cm, V2 &lt; 77 cm</p>

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
            title: "Áo dài khảm vân BÁCH ĐIỀN voan tơ phối đính nơ cúc ngọc kèm quần dài satin",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m1fbb5o7jwpk17.webp",
            image2: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m1fbb5m9pjq4d5.webp",
            productCode: "AD110",
            brand: "HAVANA",
            price: 299000,
            originalPrice: 379000,
            discount: 21,
            describe: `<div style="font-family: Arial, sans-serif; line-height: 1.6; width: 100%; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
    <h2 style="color: #2c3e50;">Áo dài khảm vân BÁCH ĐIỀN voan tơ phối đính nơ cúc ngọc kèm quần dài satin HAVANA AD110</h2>
    <p style="font-size: 16px; color: #34495e;">Freesize dưới 51kg mang vừa thoải mái</p>

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
            describe: `<div style="font-family: Arial, sans-serif; line-height: 1.6; width: 100%; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
    <h2 style="color: #2c3e50;">Áo dài cách tân XUÂN THÌ voan tơ 4 tà thêu tay nơ nhỏ kèm quần dài satin HAVANA AD103</h2>
    <p style="font-size: 16px; color: #34495e;">Size: S, M<br>
    Màu: Kem - quần kem, Trắng - quần hồng, Đỏ - quần kem, Hồng - quần kem, Xanh lá - quần kem</p>

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
            title: "Áo dài LẠC HÀ cổ sen thêu hoa phối dây buộc nơ tôn eo duyên dáng",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m1c5g6kka6hk93.webp",
            image2: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m1c5g62j1z6gb0.webp",
            productCode: "AD106",
            brand: "HAVANA",
            price: 289000,
            originalPrice: 319000,
            discount: 9,
            describe: `<div style="font-family: Arial, sans-serif; line-height: 1.6; width: 100%; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
    <h2 style="color: #2c3e50;">Áo dài LẠC HÀ cổ sen thêu hoa phối dây buộc nơ tôn eo duyên dáng HAVANA AD106</h2>
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
        {
            title: "Áo dài cách tân TỬ KỲ nhung chéo thêu hoa quả đính cúc bọc phối dây buộc nơ cách điệu kèm quần dài satin",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m1cekrfq64pk3f.webp",
            image2: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m1cekrfq8xek96.webp",
            productCode: "AD104",
            brand: "HAVANA",
            price: 259000,
            originalPrice: 329000,
            discount: 21,
            describe: `<div style="font-family: Arial, sans-serif; line-height: 1.6; width: 100%; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
    <h2 style="color: #2c3e50;">Áo dài cách tân TỬ KỲ nhung chéo thêu hoa quả đính cúc bọc phối dây buộc nơ cách điệu kèm quần dài satin HAVANA AD104</h2>
    <p style="font-size: 16px; color: #34495e;">Freesize dưới 59kg mang vừa thoải mái</p>

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
            title: "Áo dài voan tơ MẪU ĐƠN 4 tà thêu hoa đính cúc bọc phối nơ buộc dễ thương",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m1aq5x54e0bgcf.webp",
            image2: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m1aq5x40fmsc36.webp",
            productCode: "AD99",
            brand: "HAVANA",
            price: 259000,
            originalPrice: 319000,
            discount: 19,
            describe: `<div style="font-family: Arial, sans-serif; line-height: 1.6; width: 100%; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
    <h2 style="color: #2c3e50;">Áo dài voan tơ MẪU ĐƠN 4 tà thêu hoa đính cúc bọc phối nơ buộc dễ thương HAVANA AD99</h2>
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
    ];
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const search = queryParams.get('search'); // Lấy giá trị của tham số 'search'
    const [currentPage, setCurrentPage] = useState(1);

    // Hàm để thay đổi trang
    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    // Tính toán danh sách sản phẩm dựa trên trang hiện tại

    const [priceFilter, setPriceFilter] = useState<string[]>([]);
    const [sortOrder, setSortOrder] = useState<string>("");
    const filterItemsByName = (items: Product[], searchText: string): Product[] => {
        return items.filter(item =>
            item.title.toLowerCase().includes(searchText.toLowerCase())
        );
    };
    // State để lưu danh sách sản phẩm đã lọc
    const [filteredProducts, setFilteredProducts] = useState(filterItemsByName(products, search || ''));

    // Hàm xử lý thay đổi bộ lọc giá
    const handlePriceFilterChange = (selectedPrices: string[]) => {
        setPriceFilter(selectedPrices);
    };

    // Hàm xử lý thay đổi thứ tự sắp xếp
    const handleSortOrderChange = (order: string) => {
        setSortOrder(order);
    };
    const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
    const paginatedProducts = filteredProducts.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );
    // Cập nhật danh sách sản phẩm dựa trên bộ lọc
    useEffect(() => {
        let updatedProducts = [...filteredProducts];

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
        // <div className="w-[90%] mx-auto">
        //     <ScrollToTop />
        //     <nav className="flex mt-8 mb-4" aria-label="Breadcrumb">
        //         <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        //             <li className="inline-flex items-center">
        //                 <a href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
        //                     <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        //                         <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
        //                     </svg>
        //                     Trang chủ
        //                 </a>
        //             </li>
        //             <li aria-current="page">
        //                 <div className="flex items-center">
        //                     <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
        //                         <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
        //                     </svg>
        //                     <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Tất cả sản phẩm</span>
        //                 </div>
        //             </li>
        //         </ol>
        //     </nav>

        //     <div className="grid grid-cols-4 pb-10">
        //         <div className="col-span-1">
        //             <div className="p-4 w-full bg-white rounded-lg shadow">
        //                 <h2 className="text-lg font-bold mb-4">Tất cả sản phẩm</h2>
        //                 {/* <PriceFilter onFilterChange={handleFilterChange} /> */}
        //                 <PriceFilter onFilterChange={handlePriceFilterChange} />
        //                 {/* <TypeFilter /> */}
        //                 {/* <button className="text-blue-500 mt-2">Xem thêm</button> */}
        //             </div>
        //         </div>
        //         <div className="col-span-3">
        //             <div className="flex flex-row-reverse mb-4">
        //                 {/* <div>
        //                     <span>Sắp xếp</span>
        //                     <select className="px-2 py-1 rounded ms-2">
        //                         <option value="">Tên A → Z</option>
        //                         <option value="">Tên Z → A</option>
        //                         <option value="">Giá tăng dần</option>
        //                         <option value="">Giá giảm dần</option>
        //                     </select>
        //                 </div> */}
        //                 <SortFilter onSortChange={handleSortOrderChange} />

        //             </div>
        //             <div className=" grid grid-cols-3 gap-6">
        //                 {filteredProducts.map((product) => (
        //                     <ProductCard
        //                         key={product.title}
        //                         title={product.title}
        //                         image={product.image}
        //                         image2={product.image2}
        //                         price={product.price}
        //                         originalPrice={product.originalPrice}
        //                         discount={product.discount}
        //                         variants={product.variants}
        //                         describe={product.describe}
        //                         productCode={product.productCode}
        //                     />
        //                 ))}
        //             </div>
        //         </div>
        //     </div>
        //     <FloatingButtons></FloatingButtons>
        // </div>
        // <div className="w-[90%] mx-auto">
        //     <ScrollToTop />
        //     <nav className="flex mt-8 mb-4" aria-label="Breadcrumb">
        //         <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        //             <li className="inline-flex items-center">
        //                 <a href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
        //                     <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        //                         <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
        //                     </svg>
        //                     Trang chủ
        //                 </a>
        //             </li>
        //             <li aria-current="page">
        //                 <div className="flex items-center">
        //                     <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
        //                         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
        //                     </svg>
        //                     <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Kết quả tìm kiếm</span>
        //                 </div>
        //             </li>
        //         </ol>
        //     </nav>

        //     <div className="grid grid-cols-4 pb-10">
        //         <div className="col-span-1">
        //             <div className="p-4 w-full bg-white rounded-lg shadow">
        //                 <h2 className="text-lg font-bold mb-4">Kết quả tìm kiếm cho {search}</h2>
        //                 <PriceFilter onFilterChange={handlePriceFilterChange} />
        //             </div>
        //         </div>
        //         <div className="col-span-3">
        //             <div className="flex flex-row-reverse mb-4">
        //                 <SortFilter onSortChange={handleSortOrderChange} />
        //             </div>
        //             <div className="grid grid-cols-3 gap-6">
        //                 {paginatedProducts.map((product) => (
        //                     <ProductCard
        //                         key={product.title}
        //                         title={product.title}
        //                         image={product.image}
        //                         image2={product.image2}
        //                         price={product.price}
        //                         originalPrice={product.originalPrice}
        //                         discount={product.discount}
        //                         variants={product.variants}
        //                         describe={product.describe}
        //                         productCode={product.productCode}
        //                     />
        //                 ))}
        //             </div>

        //             {/* Phân trang */}
        //             <div className="flex justify-center mt-6">
        //                 <button
        //                     onClick={() => handlePageChange(currentPage - 1)}
        //                     disabled={currentPage === 1}
        //                     className="px-4 py-2 mx-1 bg-gray-200 rounded hover:bg-gray-300 disabled:bg-gray-100"
        //                 >
        //                     Trước
        //                 </button>
        //                 {Array.from({ length: totalPages }, (_, index) => (
        //                     <button
        //                         key={index + 1}
        //                         onClick={() => handlePageChange(index + 1)}
        //                         className={`px-4 py-2 mx-1 ${currentPage === index + 1
        //                             ? "bg-blue-500 text-white"
        //                             : "bg-gray-200 hover:bg-gray-300"
        //                             } rounded`}
        //                     >
        //                         {index + 1}
        //                     </button>
        //                 ))}
        //                 <button
        //                     onClick={() => handlePageChange(currentPage + 1)}
        //                     disabled={currentPage === totalPages}
        //                     className="px-4 py-2 mx-1 bg-gray-200 rounded hover:bg-gray-300 disabled:bg-gray-100"
        //                 >
        //                     Tiếp
        //                 </button>
        //             </div>
        //         </div>
        //     </div>
        //     <FloatingButtons />
        // </div>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Kết quả tìm kiếm</span>
                        </div>
                    </li>
                </ol>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 pb-10">
                {/* Sidebar */}
                <div className="col-span-1">
                    <div className="p-4 w-full bg-white rounded-lg shadow">
                        <h2 className="text-lg font-bold mb-4">Kết quả tìm kiếm cho {search}</h2>
                        <PriceFilter onFilterChange={handlePriceFilterChange} />
                    </div>
                </div>

                {/* Main Content */}
                <div className="col-span-1 lg:col-span-3">
                    <div className="flex flex-row-reverse mb-4">
                        <SortFilter onSortChange={handleSortOrderChange} />
                    </div>

                    {/* Product Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {paginatedProducts.map((product) => (
                            <ProductCard
                                key={product.title}
                                title={product.title}
                                image={product.image}
                                image2={product.image2}
                                price={product.price}
                                originalPrice={product.originalPrice}
                                discount={product.discount}
                                variants={product.variants}
                                describe={product.describe}
                                productCode={product.productCode}
                            />
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center mt-6">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="px-4 py-2 mx-1 bg-gray-200 rounded hover:bg-gray-300 disabled:bg-gray-100"
                        >
                            Trước
                        </button>
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index + 1}
                                onClick={() => handlePageChange(index + 1)}
                                className={`px-4 py-2 mx-1 ${currentPage === index + 1
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-200 hover:bg-gray-300"
                                    } rounded`}
                            >
                                {index + 1}
                            </button>
                        ))}
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 mx-1 bg-gray-200 rounded hover:bg-gray-300 disabled:bg-gray-100"
                        >
                            Tiếp
                        </button>
                    </div>
                </div>
            </div>
            <FloatingButtons />
        </div>

    )
}

export default SearchResults;
