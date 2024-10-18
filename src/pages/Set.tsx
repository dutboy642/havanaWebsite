import Filter from "../components/Filter";
import ProductCard from "../components/ProductCard";
import ScrollToTop from "../components/ScrollToTop";
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
            title: "Set áo sơ mi tay bồng đính nơ nhỏ kèm chân váy xếp ly dáng bí cạp chun phong cách dễ thương",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lxxvyhoyrnq1e3.webp",
            image2: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lxxvznevmz89c5.webp",
            productCode: "SAT 243",
            brand: "HAVANA",
            price: 169000,
            originalPrice: 199000,
            discount: 15,
            describe: ` Set áo sơ mi tay bồng đính nơ nhỏ kèm chân váy xếp ly dáng bí cạp chun phong cách dễ thương HAVANA SAT243
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
            title: "Set áo sơ mi cổ nhọn đính nơ phối dây buộc eo kèm quốc short",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lzk91g5gbxal39.webp",
            image2: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lzk952sr57pp68.webp",
            productCode: "SAT 246",
            brand: "HAVANA",
            price: 149000,
            originalPrice: 189000,
            discount: 23,
            describe: ` Set áo sơ mi cổ nhọn đính nơ phối dây buộc eo kèm quốc short HAVANA SAT246
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
            title: "Set áo sơ mi form babydoll có dây buộc eo phối cà vạt kèm chân váy 2 tầng dáng xòe",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lyem3dcz3uzl89.webp",
            image2: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lyem3dcz59al78.webp",
            productCode: "SAT249",
            brand: "HAVANA",
            price: 155800,
            originalPrice: 189000,
            discount: 18,
            describe: ` Set áo sơ mi form babydoll có dây buộc eo phối cà vạt kèm chân váy 2 tầng dáng xòe HAVANA SAT249
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
            title: "Set áo sơ mi sọc gân cổ sen phối cúc tàu có dây buộc tôn eo kèm chân váy 3 tầng trendy",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m0fcz7m4h5sf57.webp",
            image2: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m0fcz7kqj6jxac.webp",
            productCode: "SAT265",
            brand: "HAVANA",
            price: 145000,
            originalPrice: 189000,
            discount: 23,
            describe: ` Set áo sơ mi sọc gân cổ sen phối cúc tàu có dây buộc tôn eo kèm chân váy 3 tầng trendy HAVANA SAT265
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
            title: "Set áo sơ mi tay hến phối nơ nhỏ cách điệu nhíu sườn kèm quần short cạp chun phong cách thanh lịch",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lyma270ua4dd97.webp",
            image2: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lyma270ua43x87.webp",
            productCode: "SAT 259",
            brand: "HAVANA",
            price: 149000,
            originalPrice: 189000,
            discount: 23,
            describe: ` Set áo sơ mi tay hến phối nơ nhỏ cách điệu nhíu sườn kèm quần short cạp chun phong cách thanh lịch HAVANA SAT259
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
            title: "Set áo sơ mi phối hai túi vuông kèm chân váy ngắn xếp ly belt",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-luizgdo3te6q53.webp",
            image2: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-luizgdo47fv6fb.webp",
            productCode: "SAT 112",
            brand: "HAVANA",
            price: 179000,
            originalPrice: 219000,
            discount: 18,
            describe: ` Set áo sơ mi phối hai túi vuông kèm chân váy ngắn xếp ly belt HAVANA SAT112
    Freeszize < 53kg

Hướng dẫn bảo quản:
    + Không dùng nước nóng hoăc xà phòng có tính kiềm quá cao để giặt áo loại này.
+ Đối với việc ủi vải lụa, khi ủi nên có một lớp khăn hoặc vải mỏng phía dưới
        - Hướng dẫn sử dụng:
    + Các nàng tham khảo bảng thông số chi tiết để chọn size kĩ hơn ạ
        + Màu của sản phẩm sai lệch 1 - 5 % do ánh sáng của mỗi điện thoại là khác nhau và chênh lệch ánh sáng bên ngoài
            + Sai lệch số đo + -1cm
                - Chính sách bán hàng:
    + Tất cả vấn đề về sản phẩm(lỗi sản phẩm, sai màu / size / mẫu, thiếu sản phẩm) nàng cứ nhắn tin cho Havana để được hỗ trợ giải quyết nhiệt tình - thân thiện ngay sau khi nhận được hàng ạ(kèm hình ảnh và video khưi hàng để được hỗ trợ nhanh nhất có thể ạ)
        + Chúng mình hỗ trợ đổi hàng trong vòng 7 ngày kể từ ngày nhận hàng đối với sản phẩm chưa qua sử dụng - còn nguyên tem mác
            + Havana chỉ gửi hàng đúng theo sản phẩm trong đơn hàng đã được đặt nên bạn iu đừng ghi chú phân loại riêng nhe
                + Sản phẩm của Havana đã được chọn lọc và kiểm tra sản phẩm vô cùng tỉ mỉ, nói không với hàng kém chất lượng và không giống hình nên bạn iu yên tâm mua hàng nhen
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
            describe: ` [Tặng khen turban] Set 3 món áo croptop caro đính nơ kèm chân váy ngắn xòe HAVANA SAT213
Freesize dưới 55kg mang vừa thoải mái

Hướng dẫn bảo quản:
    + Không dùng nước nóng hoăc xà phòng có tính kiềm quá cao để giặt áo loại này.
+ Đối với việc ủi vải lụa, khi ủi nên có một lớp khăn hoặc vải mỏng phía dưới
        - Hướng dẫn sử dụng:
    + Các nàng tham khảo bảng thông số chi tiết để chọn size kĩ hơn ạ
        + Màu của sản phẩm sai lệch A1 - 5 % do ánh sáng của mỗi điện thoại là khác nhau và chênh lệch ánh sáng bên ngoài
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
    ]
        ;
    return (
        <div className="max-w-[1055px] mx-auto">
            <ScrollToTop/>
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
                            <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Set đồ</span>
                        </div>
                    </li>
                </ol>
            </nav>

            <div className="grid grid-cols-4 pb-10">
                <div className="col-span-1">
                    <Filter title="Set đồ" />
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
                    <div className="grid grid-cols-2 gap-6">
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

export default Set;
