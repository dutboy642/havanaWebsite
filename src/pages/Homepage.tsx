import React from "react";
import CouponCard from "../components/CouponCard";
import ProductCard from "../components/ProductCard";
import mainImage from "../assets/1.png"
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
            describe: `Áo kiểu linen nhún thân dáng babydoll trễ vai tay bồng tiểu thư 2 dây buộc nơ HAVANA AO362
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
        - thân thiện ngay sau khi nhận được hàng ạ(kèm hình ảnh và video khui hàng để được hỗ trợ nhanh nhất có thể ạ)
            + Chúng mình hỗ trợ đổi hàng trong vòng 7 ngày kể từ ngày nhận hàng đối với sản phẩm chưa qua sử dụng - còn nguyên tem mác
                + Havana chỉ gửi hàng đúng theo sản phẩm trong đơn hàng đã được đặt nên bạn iu đừng ghi chú phân loại riêng nhe
                    + Sản phẩm của Havana đã được chọn lọc và kiểm tra sản phẩm vô cùng tỉ mỉ, nói không với hàng kém chất lượng và không giống hình nên bạn iu yên tâm mua hàng nhen`
            ,
            variants: ["Freesize"],
        },
        {
            title: "Áo sơ mi ngắn tay vạt bầu thêu trái tim đôi",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lt4r40vxvg78e2.webp",
            image2: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ltbvo43a4z2x29.webp",
            productCode: "AO283",
            brand: "HAVANA",
            price: 105000,
            originalPrice: 149000,
            discount: 30,
            describe: `Áo sơ mi ngắn tay vạt bầu thêu trái tim đôi HAVANA  AO283
Freesize < 54kg
dài áo 63cm, dài tay 15cm, v1 < 92cm, v2 < 77 cm
Hướng dẫn bảo quản:
+ Không dùng nước nóng hoăc xà phòng có tính kiềm quá cao để giặt áo loại này.
+ Đối với việc ủi vải lụa, khi ủi nên có một lớp khăn hoặc vải mỏng phía dưới
    - Hướng dẫn sử dụng:
+ Các nàng tham khảo bảng thông số chi tiết để chọn size kĩ hơn ạ
    + Màu của sản phẩm sai lệch 1 - 5 % do ánh sáng của mỗi điện thoại là khác nhau và chênh lệch ánh sáng bên ngoài
        + Sai lệch số đo + -1cm
            - Chính sách bán hàng:
+ Tất cả vấn đề về sản phẩm(lỗi sản phẩm, sai màu / size / mẫu, thiếu sản phẩm) nàng cứ nhắn tin cho Havana để được hỗ trợ giải quyết nhiệt tình - thân thiện ngay sau khi nhận được hàng ạ(kèm hình ảnh và video khui hàng để được hỗ trợ nhanh nhất có thể ạ)
    + Chúng mình hỗ trợ đổi hàng trong vòng 7 ngày kể từ ngày nhận hàng đối với sản phẩm chưa qua sử dụng - còn nguyên tem mác
        + Havana chỉ gửi hàng đúng theo sản phẩm trong đơn hàng đã được đặt nên bạn iu đừng ghi chú phân loại riêng nhe
            + Sản phẩm của Havana đã được chọn lọc và kiểm tra sản phẩm vô cùng tỉ mỉ, nói không với hàng kém chất lượng và không giống hình nên bạn iu yên tâm mua hàng nhen`,
            variants: ["Freesize"],
        },
        {
            title: "Áo sơ mi kiểu hở vai vai tay bồng phối nơ, áo sơ mi kẻ sọc",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lra19mm99axlf8.webp",
            image2: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lra19mm96hspd5.webp",
            productCode: "AO141",
            brand: "HAVANA",
            price: 139000,
            originalPrice: 199000,
            discount: 30,
            describe: `Áo sơ mi kiểu hở vai vai tay bồng phối nơ, áo sơ mi kẻ sọc Havana AO141
    Freesize < 56kg mang vừa tùy chiều cao
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
        - thân thiện ngay sau khi nhận được hàng ạ(kèm hình ảnh và video khui hàng để được hỗ trợ nhanh nhất có thể ạ)
            + Chúng mình hỗ trợ đổi hàng trong vòng 7 ngày kể từ ngày nhận hàng đối với sản phẩm chưa qua sử dụng - còn nguyên tem mác
                + Havana chỉ gửi hàng đúng theo sản phẩm trong đơn hàng đã được đặt nên bạn iu đừng ghi chú phân loại riêng nhe
                    + Sản phẩm của Havana đã được chọn lọc và kiểm tra sản phẩm vô cùng tỉ mỉ, nói không với hàng kém chất lượng và không giống hình nên bạn iu yên tâm mua hàng nhn`,
            variants: ["Freesize"],
        },
        {
            title: "Áo babydoll cổ sơ mi tay ngắn vạt xòe dáng ngắn màu vintage, áo sơ mi dáng ngắn formbabydoll",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lr72oaubpmf86d.webp",
            image2: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lr72oaubmt958e.webp",
            productCode: "AO136",
            brand: "HAVANA",
            price: 104000,
            originalPrice: 199000,
            discount: 48,
            describe: `Áo babydoll cổ sơ mi tay ngắn vạt xòe dáng ngắn màu vintage HAVANA, áo sơ mi dáng ngắn formbabydoll AO136
    Freesize < 56kg mang vừa tùy chiều cao
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
                    + Sản phẩm của Havana đã được chọn lọc và kiểm tra sản phẩm vô cùng tỉ mỉ, nói không với hàng kém chất lượng và không giống hình nên bạn iu yên tâm mua hàng nhn`,
            variants: ["Freesize"],
        },
        {
            title: "Set áo thun giấy phối nút kèm áo quây buộc dây",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ll8pb5g0xadka0.webp",
            image2: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ll8pb5g1pdqgfb.webp",
            productCode: "HE308",
            brand: "HAVANA",
            price: 139000,
            originalPrice: 169000,
            discount: 18,
            describe: `Set áo thun giấy phối nút kèm áo quây buộc dây HE308
Kèm áo quây cùng màu bên trong
Freesize dưới 53kg mang vừa
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
        + Nếu shop gửi thiếu sản phẩm, shop sẽ ship thêm sản phẩm và chịu toàn bộ phí ship(kèm video khui hàng để được chúng mình hỗ trợ nhanh nhất có thể ạ`,
            variants: ["Freesize"],
        },
        {
            title: "[Tặng kèm khoác choàng] Áo thun babytee thêu logo con ngựa kèm khoác choàng thuỷ thủ",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lv31hffl71fdc5.webp",
            image2: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lulvhjfkhdsi29.webp",
            productCode: "ATH205",
            brand: "HAVANA",
            price: 106800,
            originalPrice: 179000,
            discount: 40,
            describe: `[Tặng kèm khoác choàng] Áo babytee thêu logo con ngựa kèm khoác choàng thuỷ thủ HAVANA ATH205
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
                    + Sản phẩm của Havana đã được chọn lọc và kiểm tra sản phẩm vô cùng tỉ mỉ, nói không với hàng kém chất lượng và không giống hình nên bạn iu yên tâm mua hàng nhn`,
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
            describe: `Áo len xù kẻ ngang phối cúc vai mặc 2 kiểu QC HAVANA LEN121
Freesize dưới 55kg mang vừa thoải mái
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
                    + Sản phẩm của Havana đã được chọn lọc và kiểm tra sản phẩm vô cùng tỉ mỉ, nói không với hàng kém chất lượng và không giống hình nên bạn iu yên tâm mua hàng nhn`,
            variants: ["Freesize"],
        },
        {
            title: "Áo mongtoghi basic cổ tròn thêu chữ ' Butter'",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lyg3ejie1dwha9.webp",
            image2: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lyg3ejie1dn17e.webp",
            productCode: "ATH335",
            brand: "HAVANA",
            price: 129000,
            originalPrice: 189000,
            discount: 32,
            describe: `Áo mongtoghi basic cổ tròn thêu chữ " Butter" HAVANA ATH335
Freesize dưới 53 kg mang vừa thoải mái
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
                    + Sản phẩm của Havana đã được chọn lọc và kiểm tra sản phẩm vô cùng tỉ mỉ, nói không với hàng kém chất lượng và không giống hình nên bạn iu yên tâm mua hàng nhn`,
            variants: ["Freesize"],
        },
        {
            title: "Áo gile len lông thỏ hoạ tiết tổ ong cài cúc bọc đính hoa mai",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m0zkyuzehfa75b.webp",
            image2: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m0zkyuzeitunc9.webp",
            productCode: "LEN130",
            brand: "HAVANA",
            price: 159000,
            originalPrice: 189000,
            discount: 16,
            describe: `Áo gile len lông thỏ hoạ tiết tổ ong cài cúc bọc đính hoa mai HAVANA LEN130
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
                    + Sản phẩm của Havana đã được chọn lọc và kiểm tra sản phẩm vô cùng tỉ mỉ, nói không với hàng kém chất lượng và không giống hình nên bạn iu yên tâm mua hàng nhn`,
            variants: ["Freesize"],
        },
        {
            title: "Áo kiểu nữ trễ vai dài tay phối hoa hồng ở tay cách điệu hot girl",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m0pot8j2nn9rc7.webp",
            image2: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m0i94qxsorn1d6.webp",
            productCode: "AO371",
            brand: "HAVANA",
            price: 139000,
            originalPrice: 169000,
            discount: 18,
            describe: `Áo kiểu nữ trễ vai dài tay phối hoa hồng ở tay cách điệu hot girl HAVANA AO371
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
                    + Sản phẩm của Havana đã được chọn lọc và kiểm tra sản phẩm vô cùng tỉ mỉ, nói không với hàng kém chất lượng và không giống hình nên bạn iu yên tâm mua hàng nhn`,
            variants: ["Freesize"],
        }]
        ;
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
        <div>
            <div className="hover:cursor-pointer">
                <img className="w-[80%] mx-auto my-4" src={mainImage} alt="" />
            </div>
            {/* discount */}
            <div className="flex justify-center items-center bg-gray-50">
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
            <div className="p-8 w-[80%] mx-auto">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">NEW ARRIVAL</h2>
                    <a href="#" className="text-blue-500 text-sm">
                        Xem tất cả
                    </a>
                </div>

                <div className="grid grid-cols-4 gap-6">
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
            {/* Ảnh */}
            <div className="hover:cursor-pointer p-8 w-[80%] mx-auto">
                <img src="https://bizweb.dktcdn.net/100/516/928/themes/951952/assets/slide_product_1_img_1_img.jpg?1726634821799" alt="" />
            </div>
            {/* best seller */}
            <div className="p-8 w-[80%] mx-auto mb-10">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">BEST SELLER</h2>
                    <a href="#" className="text-blue-500 text-sm">
                        Xem tất cả
                    </a>
                </div>

                <div className="grid grid-cols-4 gap-6">
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
            {/* t shirt */}
            {/* <div className="p-8 w-[80%] mx-auto">
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
            {/* <div className="p-8 w-[80%] mx-auto">
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
            {/* <div className="p-8 w-[80%] mx-auto">
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

            {/* <div className="p-8 w-[80%] mx-auto">
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
