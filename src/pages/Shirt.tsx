import Filter from "../components/Filter";
import ProductCard from "../components/ProductCard";
import ScrollToTop from "../components/ScrollToTop";
const Shirt: React.FC = () => {
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
            describe: `<div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
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
            describe: `<div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
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
            describe: `<div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
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
            describe: `<div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
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
            describe: `<div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
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
            describe: `<div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
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
            describe: `<div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
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

    ]
        ;
    return (
        <div className="max-w-[1055px] mx-auto">
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
                            <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Áo</span>
                        </div>
                    </li>
                </ol>
            </nav>

            <div className="grid grid-cols-4 pb-10">
                <div className="col-span-1">
                    <Filter title="Áo" />
                </div>
                <div className="col-span-3">
                    <div className="flex flex-row-reverse mb-4">
                        <div>
                            <span>Sắp xếp</span>
                            <select className="px-2 py-1 rounded ms-2">
                                <option value="">Tên A → Z</option>
                                <option value="">Tên Z → A</option>
                                <option value="">Giá tăng dần</option>
                                <option value="">Giá giảm dần</option>
                            </select>
                        </div>
                    </div>
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
                                productCode={product.productCode}
                                describe={product.describe}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shirt;
