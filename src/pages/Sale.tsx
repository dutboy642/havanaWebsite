import Filter from "../components/Filter";
import ProductCard from "../components/ProductCard";
import ScrollToTop from "../components/ScrollToTop";
const Sale: React.FC = () => {
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
            describe: `Set áo sơ mi tay cánh dơi phối nhíu eo cách điệu dây rút kèm chân váy dáng bí cạp chun trendy HAVANA SAT224
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
            title: "Set áo sơ mi đũi phối dây buộc hai bên eo tôn dáng kèm quần short cạp chun phong cách ulzzang",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lyq9msd8d7dtd0.webp",
            image2: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lyq9qqow1xsd18.webp",
            productCode: "SAT 237",
            brand: "HAVANA",
            price: 149000,
            originalPrice: 199000,
            discount: 32,
            describe: ` Set áo sơ mi đũi phối dây buộc hai bên eo tôn dáng kèm quần short cạp chun phong cách ulzzang HAVANA SAT237
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
                + Sản phẩm của Havana đã được chọn lọc và kiểm tra sản phẩm vô cùng tỉ mỉ, nói không với hàng kém chất lượng và không giống hình nên bạn iu yên tâm mua hàng nhn
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
            describe: ` Set áo sơ mi thêu nơ nhỏ kèm chân váy hai tầng hot trend HAVANA SAT228
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
                    + Sản phẩm của Havana đã được chọn lọc và kiểm tra sản phẩm vô cùng tỉ mỉ, nói không với hàng kém chất lượng và không giống hình nên bạn iu yên tâm mua hàng nhen
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
            title: "Áo dài khảm vân BÁCH ĐIỀN voan tơ phối đính nơ cúc ngọc kèm quần dài satin",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m1fbb5o7jwpk17.webp",
            image2: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m1fbb5m9pjq4d5.webp",
            productCode: "AD110",
            brand: "HAVANA",
            price: 299000,
            originalPrice: 379000,
            discount: 21,
            describe: `Áo dài khảm vân BÁCH ĐIỀN voan tơ phối đính nơ cúc ngọc kèm quần dài satin HAVANA AD110
Freesize dưới 51kg mang vừa thoải mái

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
                        + Có may, đo theo thông số
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
            describe: ` Áo dài cách tân XUÂN THÌ voan tơ 4 tà thêu tay nơ nhỏ kèm quần dài satin HAVANA AD103
Size: S, M
Màu: Kem - quần kem, Trắng - quần hồng, Đỏ - quần kem, Hồng - quần kem, Xanh lá - quần kem

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
            title: "Áo dài LẠC HÀ cổ sen thêu hoa phối dây buộc nơ tôn eo duyên dáng",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m1c5g6kka6hk93.webp",
            image2: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m1c5g62j1z6gb0.webp",
            productCode: "AD106",
            brand: "HAVANA",
            price: 289000,
            originalPrice: 319000,
            discount: 9,
            describe: ` Áo dài LẠC HÀ cổ sen thêu hoa phối dây buộc nơ tôn eo duyên dáng HAVANA AD106
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
                    + Sản phẩm của Havana đã được chọn lọc và kiểm tra sản phẩm vô cùng tỉ mỉ, nói không với hàng kém chất lượng và không giống hình nên bạn iu yên tâm mua hàng nhen
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
    ];
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
                            <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Hàng tồn kho</span>
                        </div>
                    </li>
                </ol>
            </nav>

            <div className="grid grid-cols-4 pb-10">
                <div className="col-span-1">
                    <Filter title="Hàng tồn kho" />
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

export default Sale;
