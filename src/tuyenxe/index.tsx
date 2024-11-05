// import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.scss";

// interface tuyenxeInfo {
//   name: String;
//   img: String;
// }

export default function BusRoutes() {
  const listInfo =[
    {
      name: "CHUYẾN XE",
      img: "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/319015218_3233095813609679_5832714119388566604_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGj-ZnCxbvSET7iE6_oryYQ_RKnkQvCPff9EqeRC8I993teG8GpSmI4FbR7LPBPe00SnOfR-sa_Uf46SZCBqISu&_nc_ohc=jE_QPJTO0CEQ7kNvgGwgCQe&_nc_ht=scontent.fhan2-5.fna&_nc_gid=Aa9HshFTDjHybnPoefX0UHz&oh=00_AYBw_UzSaWqjbQ2MDGoktpi3a1VQopiJCtfi4qN8roIylQ&oe=671F9D67",
    },
    {
      name: "BẾN XE",
      img: "https://mt.gov.vn/Images/editor/images/HOA/2024/8/buyt%20ket%20noi%20metro%20nhon%20ga%20ha%20noi.jpeg",
    },
    {
      name: "LỊCH TRÌNH XE",
      img: "https://cafefcdn.com/2020/4/25/photo-7-1587798090065628168180.jpg",
    },
    {
      name: "VÉ XE",
      img: "https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/435712902_493760803162531_2851977825187482960_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGnqL4QSS843F6tiqDgKhZwB3055Vd6EQIHfTnlV3oRAt3KxzjvvLcWDawSldKPbdK4OFJ4LEzOCufFMlbAH9gQ&_nc_ohc=Ym7zaCrvEu4Q7kNvgGZpj_6&_nc_ht=scontent.fhan14-1.fna&_nc_gid=Au7o_-W8BzD_QMKKHUhIHjM&oh=00_AYDAXxZE_3sUzzORNN16KJpHuoaExbogDxfUFQui0mt49A&oe=671FC6E1",
    },
  ]
  return (
    <div className="tuyenxe relative">
      <div
        className="part1 bg-cover relative overflow-x-hidden"
        style={{
          aspectRatio: "1.37",
          margin: "0 auto",
        }}
      >
        <Swiper
          slidesPerView={1}
          spaceBetween={1}
          loop={true}
          // centeredSlides={true}
          freeMode={true}
          autoplay={{
            delay: 3200,
            disableOnInteraction: false,
          }}
          // navigation={true}
          modules={[Autoplay, FreeMode]}
          className="lists absolute"
        >
          {listInfo.map((e) => {
            return (
              <SwiperSlide
                className="lists-item"
                style={{
                  backgroundImage: `url(${e.img})`,
                  backgroundSize: "cover",
                }}
              >
                <div className="text mb-3 z-10 text">{e.name}</div>
                <div className="linear absolute w-full"></div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* CÁI NỀN MÀU XANH LÁ CÂY */}
        <div className="opa w-full h-full absolute"></div>

        {/* CÁI HÌNH NỀN OTO */}
        <div className="nentuyenxe w-full h-full absolute"></div>

        {/* CÁI NỀN XANH NHẠT Ở TRÊN  */}
        <div className="intro absolute">
          <div className="anhbus absolute"></div>

          {/* CÁI TRANG TRÍ MÀU XANH */}
          <div className="trangtri1 absolute"></div>
          <div className="trangtri2 absolute"></div>
          <div className="trangtri3 absolute"></div>

          {/* CÁI NỀN NHẠT Ở BÊN DƯỚI */}
          <div className="intro2 w-full h-full absolute"></div>

          {/* CÁI TITLE Ở TRÊN */}
          <div className="title absolute">
            <h1 className="text-2xl font-sans mt-4 mb-10 ml-5 font-bold">
              BẠN CẦN THÔNG TIN LỘ TRÌNH NHỮNG CHUYẾN XE
            </h1>
          </div>

          {/* CÁI TITLE Ở DƯỚI */}
          <div className="title2 absolute">
            <h1 className="text-3xl font-extrabold mt-5 mb-11 ml-5 font-sans">
              BẠN SẼ CẦN ĐẤY
            </h1>

            {/* NỀN MÀU XANH NHẠT CHỖ XE BUS */}
            <div className="stitle2 absolute"></div>

            {/* BUS74 */}
            <div className="muiten74 absolute"></div>
            <div className="nenlotrinh74 absolute"></div>
            <div className="lotrinh74 absolute">
              <h1 className="font-mono">
                BX Mỹ Đình - Phạm Hùng - Mễ Trì - ĐL - Thăng Long - Tòa nhà
                Trung tâm công nghệ cao Viettel(khu công nghệ cao Hòa Lạc) -
                Cổng trường ĐH FPT Hà Nội - QL 21A - Phố Tùng Thiện - Viện 105 -
                Thanh Vị - Xuân Khanh
              </h1>
            </div>
            <div className="thongtin74 absolute">
              <h1 className="font-bold font-mono">
                Tần suất: 20-25 phút/lượt <br />
                Thời gian hoạt động: 5:00 - 20:30 <br />
                Giá vé: 20.000VNĐ/lượt; Có áp dụng vé tháng
              </h1>
            </div>
            <div className="nen74 absolute"></div>
            <div className="hinh74 absolute">
              <h1 className="text-5xl font-extrabold mt-1 mb-11 ml-80 font-sans">
                BUS74
              </h1>
            </div>

            {/* BUS88 */}
            <div className="muiten88 absolute"></div>
            <div className="nenlotrinh88 absolute"></div>
            <div className="lotrinh88 absolute">
              <h1 className="font-mono">
                BX Mỹ Đình - Phạm Hùng - Mễ Trì - Lê Quang Đạo - ĐL Thăng
                Long(làn đường gom) - Nút giao Hòa Lạc - QL 21 - Đường Hồ Chí
                Minh - Xuân Mai(Trường Cao đẳng Cộng đồng Hà Tây){" "}
              </h1>
            </div>
            <div className="thongtin88 absolute">
              <h1 className="font-bold font-mono">
                Tần suất: 20-25 phút/lượt <br />
                Thời gian hoạt động: 5:00 - 20:55 <br />
                Giá vé: 20.000VNĐ/lượt; Có áp dụng vé tháng
              </h1>
            </div>
            <div className="nen88 absolute"></div>
            <div className="hinh88 absolute">
              <h1 className="text-5xl font-extrabold mt-1 mb-11 ml-80 font-sans">
                BUS88
              </h1>
            </div>

            {/* BUS119 */}
            <div className="muiten119 absolute"></div>
            <div className="nenlotrinh119 absolute"></div>
            <div className="lotrinh119 absolute">
              <h1 className="font-mono">
                Trường ĐH FPT Hòa Lạc - QL 21A - ĐL Thăng Long kéo dài (qua xã
                Thạch Hòa, Tiến Xuân(Thạch Thất), Yên Bài, Văn Hòa(Ba vì)) -
                Đường 87A - Đường 86(qua các xã Tân Lĩnh, Ba Trại, Thuần Mĩ(Ba
                vì)) - Bất Bạt{" "}
              </h1>
            </div>
            <div className="thongtin119 absolute">
              <h1 className="font-bold font-mono">
                Tần suất: 20-25 phút/lượt <br />
                Thời gian hoạt động: 5:00 - 20:00 <br />
                Giá vé: 20.000VNĐ/lượt; Có áp dụng vé tháng
              </h1>
            </div>
            <div className="nen119 absolute"></div>
            <div className="hinh119 absolute">
              <h1 className="text-5xl font-extrabold mt-1 mb-11 ml-80 font-sans">
                BUS119
              </h1>
            </div>

            {/* BUS107 */}
            <div className="muiten107 absolute"></div>
            <div className="nenlotrinh107 absolute"></div>
            <div className="lotrinh107 absolute">
              <h1 className="font-mono">
                Kim Mã(Tòa nhà PTA Kim Mã) - Giảng Võ - Núi Trúc - Kim Mã -
                Nguyễn Chí Thanh - Trần Duy Hưng - ĐL Thăng Long(đường gom) -
                Đường nội bộ khu công nghệ cao Hòa Lạc - Đường mới nối Khu công
                nghệ cao Láng Hòa Lạc với QL 21 - Ngã 4 Hòa Lạc - Đường làng văn
                hóa(xã Hòa Thạch, xã Yên Bình huyện Thạch Thất) - Làng văn hóa
                du lịch các dân tộc Việt Nam{" "}
              </h1>
            </div>
            <div className="thongtin107 absolute">
              <h1 className="font-bold font-mono">
                Tần suất: 15-20 phút/lượt <br />
                Thời gian hoạt động: 5:00 - 20:50 <br />
                Giá vé: 20.000VNĐ/lượt; Có áp dụng vé tháng
              </h1>
            </div>
            <div className="nen107 absolute"></div>
            <div className="hinh107 absolute">
              <h1 className="text-5xl font-extrabold mt-1 mb-11 ml-80 font-sans">
                BUS107
              </h1>
            </div>

            {/* BUS117 */}
            <div className="muiten117 absolute"></div>
            <div className="nenlotrinh117 absolute"></div>
            <div className="lotrinh117 absolute">
              <h1 className="font-mono">
                Trường ĐH FPT Hòa Lạc - QL 21A - Đường 419(qua xã Bình Yên) -
                Đường 420(qua các xã Thúy Lai, Hương Ngải, Dị Nậu) - Đường
                421(qua các xã Liên Hiệp, Hiệp Thuận, Đồng Tháp) - QL 32 - ĐTC
                xe buýt Nhổn{" "}
              </h1>
            </div>
            <div className="thongtin117 absolute">
              <h1 className="font-bold font-mono">
                Tần suất: 20-25 phút/lượt <br />
                Thời gian hoạt động: 5:00 - 20:30 <br />
                Giá vé: 15.000VNĐ/lượt; Có áp dụng vé tháng
              </h1>
            </div>
            <div className="nen117 absolute"></div>
            <div className="hinh117 absolute">
              <h1 className="text-5xl font-extrabold mt-1 mb-11 ml-80 font-sans">
                BUS117
              </h1>
            </div>
          </div>
          {/* MẤY CÁI CHỮ BÊN DƯỚI Ở CÁI BÊN TRÊN */}
          <div className="stitle absolute">
            <p className="text-xl font-thin mt-4 mb-10 ml-5">
              Vậy mời bạn thảm khảo thông tin về những tuyến xe bus tại đây nhé
              chúng tôi sẽ cố gắng cung cấp mọi thông tin hữu ích cho bạn !!!
            </p>
            <p className="text-xl font-thin mb-10 ml-5">
              Mời bạn kéo xuống phía dưới để biết thêm thông tin nhé
            </p>
          </div>
        </div>

        {/* NỀN VÀNG BÊN DƯỚI */}
        <div className="nenvang absolute">
          <div className="anhnenvang absolute"></div>
          {/* CÁI HÌNH VÀNG NHẠT BÊN DƯỚI */}
          <div className="yellow absolute"></div>
          {/* ẢNH QẢNG CÁO APP */}
          <div className="anhapp"></div>
          {/* TITLE MÀU VÀNG */}
          <div className="title3 absolute">
            <h1 className="font-extrabold mt-5 mb-11 ml-5 font-sans">
              NHỮNG ỨNG DỤNG BẠN NÊN BIẾT
            </h1>
          </div>
          {/* CHỖ GIỚI THIỆU APP */}
          <div className="nengioithieuapp absolute"></div>
          <div className="gioithieuapp">
            <h1 className="font-medium font-mono">
              Hiện nay, có rất nhiều ứng dụng giúp việc di chuyển bằng xe buýt
              trở nên thuận tiện và dễ dàng hơn. Các app như Moovit, BusMap,
              Google Maps, Citymapper, những app này không chỉ cung cấp và tổng
              hợp thông tin lộ trình chi tiết mà còn cập nhật thời gian thực,
              giúp bạn chủ động hơn trong việc sắp xếp hành trình. Mỗi ứng dụng
              đều có ưu điểm riêng, từ việc chỉ dẫn đường đi, đưa ra các cảnh
              báo giao thông đến gợi ý tuyến đường nhanh nhất. Với các công cụ
              này, bạn sẽ không còn phải lo lắng về việc lỡ chuyến hoặc không rõ
              đường đi – tất cả đều nằm trong tầm tay chỉ với một vài thao tác.
            </h1>
          </div>
          <div className="nengioithieuapp1 absolute"></div>
          <div className="gioithieuapp1">
            <h1 className="font-bold font-sans">
              Dưới đây là một số app mà có thể sẽ giúp ích cho các bạn.
            </h1>
          </div>
          <div className="keoxuong absolute"></div>
          {/* MÀU VÀNG TRANG TRÍ CHỖ MẤY CÁI APP */}
          <div className="yellow2 absolute"></div>
          {/* APP1 BUSMAP */}
          <div className="muitenapp1 absolute"></div>
          <div className="nenthongtinapp1"></div>
          <div className="thongtinapp1 absolute">
            <h1 className="font-bold mt-5 mb-11 ml-5 font-sans">
              BusMap là ứng dụng hướng đến người dùng Việt Nam, giúp tìm kiếm lộ
              trình xe buýt tại TP. HCM, Hà Nội và Đà Nẵng, với bản đồ offline,
              chi tiết trạm dừng và thời gian xe đến, tuy nhiên, chỉ hỗ trợ các
              thành phố lớn trong nước.
            </h1>
          </div>
          <div className="nenlinkapp1 absolute">
            <h1 className="font-extrabold mt-5 mb-11 ml-5 font-sans">
              TRUY CẬP NGAY APP TẠI ĐÂY NHÉ !!
              <p>
                <b>
                  <a href="https://busmap.vn/" target="_blank">
                    BUSMAP
                  </a>
                </b>
              </p>
            </h1>
          </div>
          <div className="nenapp1 absolute"></div>
          <div className="hinhapp1 absolute"></div>

          {/* APP2 MOOVIT */}
          <div className="muitenapp2 absolute"></div>
          <div className="nenthongtinapp2 absolute"></div>
          <div className="thongtinapp2 absolute">
            <h1 className="font-bold mt-5 mb-11 ml-5 font-sans">
              Moovit cung cấp lộ trình giao thông công cộng trên phạm vi quốc
              tế, hỗ trợ người dùng tìm xe buýt, tàu điện ngầm với cảnh báo giao
              thông thời gian thực, song một số khu vực có dữ liệu chưa đầy đủ.
            </h1>
          </div>
          <div className="nenlinkapp2 absolute">
            <h1 className="font-extrabold mt-5 mb-11 ml-5 font-sans">
              TRUY CẬP NGAY APP TẠI ĐÂY NHÉ !!
              <p>
                <b>
                  <a
                    href="https://moovitapp.com/h%C3%A0_n%E1%BB%99i-2921/poi/vi"
                    target="_blank"
                  >
                    MOOVIT
                  </a>
                </b>
              </p>
            </h1>
          </div>
          <div className="nenapp2 absolute"></div>
          <div className="hinhapp2 absolute"></div>

          {/* APP3 GGMAP */}
          <div className="muitenapp3 absolute"></div>
          <div className="nenthongtinapp3 absolute"></div>
          <div className="thongtinapp3 absolute">
            <h1 className="font-bold mt-5 mb-11 ml-5 font-sans">
              Google Maps hỗ trợ đa dạng hình thức di chuyển toàn cầu với bản đồ
              chi tiết, tích hợp Street View và thời gian thực, nhưng phụ thuộc
              nhiều vào kết nối mạng và độ chi tiết tùy khu vực.
            </h1>
          </div>
          <div className="nenlinkapp3 absolute">
            <h1 className="font-extrabold mt-5 mb-11 ml-5 font-sans">
              TRUY CẬP NGAY APP TẠI ĐÂY NHÉ !!
              <p>
                <b>
                  <a
                    href="https://www.google.com/maps/search/Ho%CC%80a+La%CC%A3c/@21.0119541,105.52429,16.5z?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                  >
                    GOOGLE MAP
                  </a>
                </b>
              </p>
            </h1>
          </div>
          <div className="nenapp3 absolute"></div>
          <div className="hinhapp3 absolute"></div>

          {/* APP4 TIMBUS */}
          <div className="muitenapp4 absolute"></div>
          <div className="nenthongtinapp4"></div>
          <div className="thongtinapp4 absolute">
            <h1 className="font-bold mt-5 mb-11 ml-5 font-sans">
              Tìm Buýt là ứng dụng hỗ trợ người dùng tra cứu thông tin lộ trình
              xe buýt tại Hà Nội, giúp dễ dàng tìm tuyến, theo dõi thời gian và
              các trạm dừng trên đường. Ứng dụng có giao diện thân thiện, phù
              hợp cho người dân và du khách khi di chuyển.{" "}
            </h1>
          </div>
          <div className="nenlinkapp4 absolute">
            <h1 className="font-extrabold mt-5 mb-11 ml-5 font-sans">
              TRUY CẬP NGAY APP TẠI ĐÂY NHÉ !!
              <p>
                <b>
                  <a href="http://www.timbus.vn/" target="_blank">
                    TIMBUS
                  </a>
                </b>
              </p>
            </h1>
          </div>
          <div className="nenapp4 absolute"></div>
          <div className="hinhapp4 absolute"></div>
        </div>

        {/* THANH MAU ĐEN Ở CUỐI CÙNG */}
        <div className="cuoicung absolute">
          <div className="vechungtoi">
            <a
              href="https://www.facebook.com/photo?fbid=122102938130567799&set=pcb.122102949434567799"
              target="_blank"
            >
              Về chúng tôi
            </a>
          </div>

          <div className="fanpage">
            <a
              href="https://www.facebook.com/profile.php?id=61567033975415"
              target="_blank"
            >
              Facebook
            </a>
          </div>

          <div className="diachi">
            <a
              href="https://www.google.com/maps/place/Tr%C6%B0%E1%BB%9Dng+%C4%90%E1%BA%A1i+h%E1%BB%8Dc+FPT+H%C3%A0+N%E1%BB%99i/@21.0133225,105.5229,15.25z/data=!4m6!3m5!1s0x3135abc60e7d3f19:0x2be9d7d0b5abcbf4!8m2!3d21.0124167!4d105.5252892!16s%2Fm%2F02rsytm?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
            >
              Trường Đại Học FPT, Khu Công Nghệ Cao Hòa Lạc, km 29, Đại lộ,
              Thăng Long, Hà Nội, Việt Nam
            </a>
          </div>

          <div className="sdt absolute">
            <h1>+84 985745613</h1>
          </div>
          
          <div className="gmail absolute">
            <h1>vutruthongtinhola@gmail.com</h1>
          </div>

          <div className="hinhlogo absolute">
            <h1 className="font-extrabold mt-3 mb-11 ml-14 font-sans">
              HolaWeb
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
