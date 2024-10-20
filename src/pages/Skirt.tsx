import Filter from "../components/Filter";
import ProductCard from "../components/ProductCard";
import ScrollToTop from "../components/ScrollToTop";
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
            describe: `- Tên sản phẩm: Váy sơ mi cộc tay, sơ mi khuy gỗ eo chun co giãn, váy thanh lịch form xòe
                - Thông tin sản phẩm:
                + Đầm phù hợp mang đi làm và đi chơi
Dài: 85 cm
Eo: từ 60-78cm
Vai: 35cm
+ Freesize dưới 55kg mang vừa luôn ạ
        - Hướng dẫn bảo quản:
        + Không dùng nước nóng hoăc xà phòng có tính kiềm quá cao để giặt áo loại này.
- Hướng dẫn sử dụng:
        + Các nàng tham khảo bảng thông số chi tiết để chọn size kĩ hơn ạ
        + Màu của sản phẩm sai lệch 1 - 5 % do ánh sáng của mỗi điện thoại là khác nhau và chênh lệch ánh sáng bên ngoài
            + Sai lệch số đo + -1cm
                + Mẫu cao 1m6, nặng 44kg mang fit dáng rộng như hình(số đo mang tính chất tham khảo do mỗi dáng người là khác nhau)
    - Cam kết của shop:
    + Hình sản phẩm là ảnh thật 100 % do shop chụp, sản phẩm gửi đi là sản phẩm giống hình
        + Hàng đã được cắt chỉ thừa và kiểm tra trước khi gửi đi, nếu có chỉ thừa sót lại bám vào mong các nàng thông cảm giúp shop ạ
            - Quy định đổi trả:
    + Nếu sản phẩm bị lỗi, sai màu, sai size, shop sẽ hỗ trợ đổi trả và chịu toàn bộ phí ship
        + Nếu shop gửi thiếu sản phẩm, shop sẽ ship thêm sản phẩm và chịu toàn bộ phí ship(kèm video khưi hàng để được chúng mình hỗ trợ nhanh nhất có thể ạ)`,
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
            describe: `Chân váy ngắn xòe 4 tầng nhún bèo họa tiết in nơ chấm bi Havana CV247
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
                + Sản phẩm của Havana đã được chọn lọc và kiểm tra sản phẩm vô cùng tỉ mỉ, nói không với hàng kém chất lượng và không giống hình nên bạn iu yên tâm
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
            describe: `Chân váy kaki thô dáng dài xẻ tà sau lưng chun HAVANA CV253
Freesize dưới 54kg mang vừa thoải mái
        * Thông số kích thước: dài 88cm eo < 75cm mông < 100cm
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
                    + Sản phẩm của Havana đã được chọn lọc và kiểm tra sản phẩm vô cùng tỉ mỉ, nói không với hàng kém chất lượng và không giống hình nên bạn iu yên tâm mua hàng nhen`,
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
            describe: `Chân váy ngắn xếp li chất thu umi lưng chun có khóa kéo HAVANA CV251
Freesize dưới 55kg mang vừa thoải mái tùy chiều cao
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
                    + Sản phẩm của Havana đã được chọn lọc và kiểm tra sản phẩm vô cùng tỉ mỉ, nói không với hàng kém chất lượng và không giống hình nên bạn iu yên tâm mua hàng nhen `,
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
            describe: `Denim ByHavana - Chân váy jean dáng dài xẻ tà 2 túi sau sọc viền nổi ngang gối CVA0002
MÔ TẢ SẢN PHẨM:
    - Chất liệu jeans cao cấp dày dặn
        - Thông số kích thước:
Size s: dài váy 86, eo 70, V3 84
Size m: dài váy 86, eo 72, V3 90
Size L: dài váy 86, eo 84, V3 92
HƯỚNG DẪN BẢO QUẢN:
    - Để giữ màu quần jeans đẹp như mới, trong lần giặt đầu tiên bạn không nên giặt bằng xà phòng.
- Giặt tay là cách hiệu quả để giữ quần jeans không bị phai màu.
- Hạn chế dùng nước xả vải với quần jeans.Nước xả vải có tác dụng làm mềm vải, dễ khiến quần jeans mất dáng, không còn đứng form.
- Nếu dùng máy giặt, bạn nhớ lộn trái quần jeans trước khi cho vào máy.
- Để quần jeans được bền đẹp, bạn không nên giặt quần jeans quá nhiều lần.Sau 5 đến 10 lần mặc có thể đem quần ra giặt.
- Không vắt kiệt nước khi giặt: Do chất liệu để làm nên quần jeans có tính co dãn nên những tác động mạnh đều có thể làm mất dáng chiếc quần yêu thích của bạn.
- Không phơi quần jeans dưới nắng gắt.Bạn chỉ cần phơi quần ở những nơi thoáng mát, có nhiều gió là được.Và đừng quên việc lộn trái quần để phơi
        - LƯU Ý MUA HÀNG:
    + Các nàng tham khảo bảng thông số chi tiết để chọn size kĩ hơn ạ
        + Màu của sản phẩm sai lệch 1 - 5 % do ánh sáng của mỗi điện thoại là khác nhau và chênh lệch ánh sáng bên ngoài
            + Sai lệch số đo + -1cm
                + Mẫu cao 1m6, nặng 44kg mang fit dáng rộng như hình(số đo mang tính chất tham khảo do mỗi dáng người là khác nhau)
    - CHÍNH SÁCH MUA HÀNG:
    + Tất cả vấn đề về sản phẩm(lỗi sản phẩm, sai màu / size / mẫu, thiếu sản phẩm) nàng cứ nhắn tin cho Havana để được hỗ trợ giải quyết nhiệt tình ngay sau khi nhận được hàng ạ(kèm hình ảnh và video khưi hàng để được hỗ trợ nhanh nhất có thể ạ)
        + Chúng mình hỗ trợ đổi hàng trong vòng 7 ngày kể từ ngày nhận hàng đối với sản phẩm chưa qua sử dụng - còn nguyên tem mác
            + Havana chỉ gửi hàng đúng theo sản phẩm trong đơn hàng đã được đặt nên bạn iu đừng ghi chú phân loại riêng nhe
                + Sản phẩm của Havana đã được chọn lọc và kiểm tra sản phẩm vô cùng tỉ mỉ, nói không với hàng kém chất lượng và không giống hình nên bạn iu yên tâm mua hàng nhen `,
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
            describe: `Chân váy midi dạ cashmere caro phối 3 tầng lưng chun co giãn HAVANA QJ35
    Freesize < 56kg

Hướng dẫn bảo quản:
    + Không dùng nước nóng hoăc xà phòng có tính kiềm quá cao để giặt áo loại này.
+ Đối với việc ủi vải lụa, khi ủi nên có một lớp khăn hoặc vải mỏng phía dưới
        - Hướng dẫn sử dụng:
    + Các nàng tham khảo bảng thông số chi tiết để chọn size kĩ hơn ạ
        + Màu của sản phẩm sai lệch 1 - 5 % do ánh sáng của mỗi điện thoại là khác nhau và chênh lệch ánh sáng bên ngoài
            + Sai lệch số đo + -1cm
                + Mẫu cao 1m6, nặng 44kg mang fit dáng rộng như hình(số đo mang tính chất tham khảo do mỗi dáng người là khác nhau)
    - Chính sách bán hàng:
    + Tất cả vấn đề về sản phẩm(lỗi sản phẩm, sai màu / size / mẫu, thiếu sản phẩm) nàng cứ nhắn tin cho Havana để được hỗ trợ giải quyết nhiệt tình - thân thiện ngay sau khi nhận được hàng ạ(kèm hình ảnh và video khưi hàng để được hỗ trợ nhanh nhất có thể ạ)
        + Chúng mình hỗ trợ đổi hàng trong vòng 7 ngày kể từ ngày nhận hàng đối với sản phẩm chưa qua sử dụng - còn nguyên tem mác
            + Havana chỉ gửi hàng đúng theo sản phẩm trong đơn hàng đã được đặt nên bạn iu đừng ghi chú phân loại riêng nhe
                + Sản phẩm của Havana đã được chọn lọc và kiểm tra sản phẩm vô cùng tỉ mỉ, nói không với hàng kém chất lượng và không giống hình nên bạn iu yên tâm mua hàng nhen
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
            describe: `Tên sản phẩm: Đầm trơn sọc gân cổ tròn kèm hai dây bên trong vải lụa HE113
                                        - Thông số sản phẩm:
Chiều dài váy: 108 cm
    V1 < 95cm
Chiều rộng vai: 33cm
        - Hướng dẫn bảo quản:
Hình thật shop chụp nên các nàng yên tâm mua hàng thôi ạ
HƯỚNG DẪN BẢO QUẢN VÀ SỬ DỤNG
        - Giặt riêng sản phẩm với lần giặt đầu tiên.
- Không sử dụng bột giặt có chất tẩy nồng độ cao.
- Khi phơi các bạn nên lộn ngược lại để màu của sản phẩm được bền lâu
        - Hướng dẫn sử dụng:
    + Màu của sản phẩm sai lệch 1 - 5 % do ánh sáng của mỗi điện thoại là khác nhau và chênh lệch ánh sáng bên ngoài
        + Sai lệch số đo + -1cm
            + Mẫu cao 1m6, nặng 44kg mang fit dáng rộng như hình(số đo mang tính chất tham khảo do mỗi dáng người là khác nhau)
    - Cam kết của shop:
    + Hình sản phẩm là ảnh thật 100 % do shop chụp, sản phẩm gửi đi là sản phẩm giống hình
        + Hàng đã được cắt chỉ thừa và kiểm tra trước khi gửi đi, nếu có chỉ thừa sót lại bám vào mong các nàng thông cảm giúp shop ạ
            - Quy định đổi trả:
    + Nếu sản phẩm bị lỗi, sai màu, sai size, shop sẽ hỗ trợ đổi trả và chịu toàn bộ phí ship
        + Nếu shop gửi thiếu sản phẩm, shop sẽ ship thêm sản phẩm và chịu toàn bộ phí ship(kèm video khưi hàng để được chúng mình hỗ trợ nhanh nhất có thể ạ) `,
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
            describe: `Chân váy Jeans dáng dài form chữ A thiết kế túi giả HAVANA CV114
    Size: S, M, L

Hướng dẫn bảo quản:
    + Không dùng nước nóng hoăc xà phòng có tính kiềm quá cao để giặt áo loại này.
+ Đối với việc ủi vải lụa, khi ủi nên có một lớp khăn hoặc vải mỏng phía dưới
        - Hướng dẫn sử dụng:
    + Các nàng tham khảo bảng thông số chi tiết để chọn size kĩ hơn ạ
        + Màu của sản phẩm sai lệch 1 - 5 % do ánh sáng của mỗi điện thoại là khác nhau và chênh lệch ánh sáng bên ngoài
            + Sai lệch số đo + -1cm
                + Mẫu cao 1m6, nặng 44kg mang fit dáng rộng như hình(số đo mang tính chất tham khảo do mỗi dáng người là khác nhau)
    - Chính sách bán hàng:
    + Tất cả vấn đề về sản phẩm(lỗi sản phẩm, sai màu / size / mẫu, thiếu sản phẩm) nàng cứ nhắn tin cho Havana để được hỗ trợ giải quyết nhiệt tình - thân thiện ngay sau khi nhận được hàng ạ(kèm hình ảnh và video khưi hàng để được hỗ trợ nhanh nhất có thể ạ)
        + Chúng mình hỗ trợ đổi hàng trong vòng 7 ngày kể từ ngày nhận hàng đối với sản phẩm chưa qua sử dụng - còn nguyên tem mác
            + Havana chỉ gửi hàng đúng theo sản phẩm trong đơn hàng đã được đặt nên bạn iu đừng ghi chú phân loại riêng nhe
                + Sản phẩm của Havana đã được chọn lọc và kiểm tra sản phẩm vô cùng tỉ mỉ, nói không với hàng kém chất lượng và không giống hình nên bạn iu yên tâm mua hàng nhen
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
            describe: `(HÀNG QC LOẠI 1)Chân váy midi thun Umi form A xoè phong cách ulzzang HAVANA CV273
Freesize dưới 56kg mang vừa thoải mái

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
                    + Sản phẩm của Havana đã được chọn lọc và kiểm tra sản phẩm vô cùng tỉ mỉ, nói không với hàng kém chất lượng và không giống hình nên bạn iu yên tâm mua hàng nhen `,
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
            describe: `Chân váy Jeans dáng dài form chữ A thiết kế túi giả HAVANA CV114
    Size: S, M, L

Hướng dẫn bảo quản:
    + Không dùng nước nóng hoăc xà phòng có tính kiềm quá cao để giặt áo loại này.
+ Đối với việc ủi vải lụa, khi ủi nên có một lớp khăn hoặc vải mỏng phía dưới
        - Hướng dẫn sử dụng:
    + Các nàng tham khảo bảng thông số chi tiết để chọn size kĩ hơn ạ
        + Màu của sản phẩm sai lệch 1 - 5 % do ánh sáng của mỗi điện thoại là khác nhau và chênh lệch ánh sáng bên ngoài
            + Sai lệch số đo + -1cm
                + Mẫu cao 1m6, nặng 44kg mang fit dáng rộng như hình(số đo mang tính chất tham khảo do mỗi dáng người là khác nhau)
    - Chính sách bán hàng:
    + Tất cả vấn đề về sản phẩm(lỗi sản phẩm, sai màu / size / mẫu, thiếu sản phẩm) nàng cứ nhắn tin cho Havana để được hỗ trợ giải quyết nhiệt tình - thân thiện ngay sau khi nhận được hàng ạ(kèm hình ảnh và video khưi hàng để được hỗ trợ nhanh nhất có thể ạ)
        + Chúng mình hỗ trợ đổi hàng trong vòng 7 ngày kể từ ngày nhận hàng đối với sản phẩm chưa qua sử dụng - còn nguyên tem mác
            + Havana chỉ gửi hàng đúng theo sản phẩm trong đơn hàng đã được đặt nên bạn iu đừng ghi chú phân loại riêng nhe
                + Sản phẩm của Havana đã được chọn lọc và kiểm tra sản phẩm vô cùng tỉ mỉ, nói không với hàng kém chất lượng và không giống hình nên bạn iu yên tâm mua hàng nhen
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
            describe: `Chân váy dáng dài basic 2 túi xẻ sau phong cách thanh lịch HAVANA CV174
    Size: S, M, L

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
                    + Sản phẩm của Havana đã được chọn lọc và kiểm tra sản phẩm vô cùng tỉ mỉ, nói không với hàng kém chất lượng và không giống hình nên bạn iu yên tâm mua hàng nhen `,
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
            describe: `Chân váy dáng dài công sở form A túi giả kèm belt HAVANA CV170
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
                    + Sản phẩm của Havana đã được chọn lọc và kiểm tra sản phẩm vô cùng tỉ mỉ, nói không với hàng kém chất lượng và không giống hình nên bạn iu yên tâm mua hàng nhen`,
            variants: ["S", "M"],
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
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Váy</span>
                        </div>
                    </li>
                </ol>
            </nav>

            <div className="grid grid-cols-4 pb-10">
                <div className="col-span-1">
                    <Filter title="Váy" />
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

export default Skirt;
