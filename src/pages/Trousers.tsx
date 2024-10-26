import Filter from "../components/Filter";
import FloatingButtons from "../components/FloatingButtons";
import ProductCard from "../components/ProductCard";
import ScrollToTop from "../components/ScrollToTop";
const Trousers: React.FC = () => {
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
    ];
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
                            <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Quần</span>
                        </div>
                    </li>
                </ol>
            </nav>

            <div className="grid grid-cols-4 pb-10">
                <div className="col-span-1">
                    <Filter title="Quần" />
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
            <FloatingButtons></FloatingButtons>

        </div>
    )
}

export default Trousers;
