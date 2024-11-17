import { useEffect, useState } from "react";
// import Filter from "../components/Filter";
import FloatingButtons from "../components/FloatingButtons";
import ProductCard from "../components/ProductCard";
import ScrollToTop from "../components/ScrollToTop";
import PriceFilter from "../components/PriceFilter";
import SortFilter from "../components/SortFilter";
// import TypeFilter from "../components/TypeFilter";
const Skirt: React.FC = () => {
    const products = [

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
        //                     <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Váy</span>
        //                 </div>
        //             </li>
        //         </ol>
        //     </nav>

        //     <div className="grid grid-cols-4 pb-10">
        //         <div className="col-span-1">
        //             <div className="p-4 w-full bg-white rounded-lg shadow">
        //                 <h2 className="text-lg font-bold mb-4">Váy</h2>
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
        //                 {/* <SortFilter onSortChange={handleSortChange}></SortFilter> */}
        //                 <SortFilter onSortChange={handleSortOrderChange} />
        //             </div>
        //             <div className="grid grid-cols-3 gap-6">
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
        //                         productCode={product.productCode}
        //                         describe={product.describe}
        //                     />
        //                 ))}
        //             </div>
        //         </div>
        //     </div>
        //     <FloatingButtons></FloatingButtons>

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
                            <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Váy</span>
                        </div>
                    </li>
                </ol>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 pb-10">
                {/* Sidebar */}
                <div className="col-span-1">
                    <div className="p-4 w-full bg-white rounded-lg shadow">
                        <h2 className="text-lg font-bold mb-4">Váy</h2>
                        <PriceFilter onFilterChange={handlePriceFilterChange} />
                    </div>
                </div>

                {/* Main Content */}
                <div className="col-span-1 lg:col-span-3">
                    <div className="flex flex-row-reverse mb-4">
                        <SortFilter onSortChange={handleSortOrderChange} />
                    </div>

                    {/* Product Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
            <FloatingButtons />
        </div>

    )
}

export default Skirt;
