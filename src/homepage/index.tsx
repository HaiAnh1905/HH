import { useState } from "react";
import Slider from "./slider/index.tsx";
import "./style.scss";
import { NavLink } from "react-router-dom";

// interface sliderArrayItem {
//   index: number;
//   title: String;
//   sentence: String;
//   img: String;
// }

export default function HomePage() {
  const sliderImg = [
    {
      index: 0,
      title: "Chào mừng các bạn đến với Hòa Lạc",
      sentence:
        "Tại đây chúng tôi tổng hợp các thông tin bạn cần có để có một khởi đầu thuận lợi khi đặt chân đến mảnh đất Hòa Lạc nhiều tiềm năng này!",
      img: "https://daihoc.fpt.edu.vn/wp-content/uploads/2021/02/144409980_10164565272570062_7625633052716715320_o.jpg",
    },
    {
      index: 1,
      title: "Rất nhiều thông tin thú vị!!",
      sentence:
        "Không chỉ cung cấp những thông tin giúp đỡ các em tân sinh viên học tập trong trường, chúng tôi cũng cung cấp cho các bạn những thông tin hữu ích về mảnh đất Hòa Lạc này như khu vui chơi, quán ăn, hay những sự kiện thú vị, ...",
      img: "https://hanoi.fpt.edu.vn/wp-content/uploads/2024/10/C8-scaled.jpg",
    },
    {
      index: 2,
      title: "Tham gia ngay thôi nào!",
      sentence:
        "Còn chần chờ chi khi mà không bắt đầu trải nghiệm web của chúng mình nào!",
      img: "https://hoalac-school.fpt.edu.vn/wp-content/uploads/FPTSchool-0081-scaled.jpg",
    },
  ];
  const [sliderIndex, setSliderIndex] = useState<number>(0);
  const handleNext = () => {
    if (sliderIndex === sliderImg.length - 1) {
      setSliderIndex(0);
      return;
    }
    setSliderIndex(sliderIndex + 1);
  };
  const handlePrevious = () => {
    if (sliderIndex === 0) {
      setSliderIndex(sliderImg.length - 1);
      return;
    }
    setSliderIndex(sliderIndex - 1);
  };
  const toTop = () => {
    window.scrollTo(0, 0);
  };
  // console.log(sliderImg[sliderIndex]);
  return (
    <div className="homepage">
      <div className="relative slider">
        <div className="arrow flex items-center h-full w-full justify-between absolute z-10">
          <div
            onClick={handlePrevious}
            className="left-arrow h-full flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.3"
              stroke="white"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </div>
          <div
            onClick={handleNext}
            className="right-arrow h-full flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.3"
              stroke="white"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
        <Slider sliderUrl={sliderImg[sliderIndex]} />
      </div>
      <div className="introduce mt-6 relative w-full mb-5">
        <h1 className="text-3xl font-semibold oorange w-fit m-auto mb-2">Giới thiệu về Cẩm nang Hòa Lạc</h1>
        <div className="introduce-detail m-auto text-lg font-semibold mb-5">
          Cẩm nang Hòa Lạc là trang web cung cấp thông tin thiết yếu cho tân
          sinh viên và những người mới đến định cư tại Hòa Lạc. Trang web giới
          thiệu các dịch vụ, địa điểm ăn uống, phương tiện di chuyển, và các
          hoạt động giải trí tại khu vực. Đây là nguồn tài liệu hữu ích giúp bạn
          nhanh chóng làm quen và hòa nhập với cuộc sống mới.
        </div>
        <div className="choose-item flex items-center justify-center gap-6">
          {/* Tuyến xe */}
          <div
            className="item"
            style={{
              backgroundImage:
                " url(https://bcp.cdnchinhphu.vn/334894974524682240/2024/3/26/20240325212743-511-1711419723640496434441-0-0-1200-1920-crop-17114197268691344326084.jpeg)",
              // backgroundPositionX: "55%"
            }}
          >
            <div className="opa"></div>
            <h1 className="text-2xl font-semibold z-20">Tuyến xe</h1>
            <div className="detail z-20">
              Cung cấp các tuyến xe đi nối giữa trung tâm và Hòa Lạc và quanh
              Hòa Lạc
            </div>
            <NavLink onClick={toTop} to="/tuyenxe" className="more z-20">
              Thêm
            </NavLink>
          </div>
          {/* Phòng Trọ */}
          <div
            className="item"
            style={{
              backgroundImage:
                "url(https://toquoc.mediacdn.vn/280518851207290880/2023/8/28/photo1693226747-16932267725902030247411.jpeg)",
            }}
          >
            <div className="opa"></div>
            <h1 className="text-2xl font-semibold z-20">Phòng trọ</h1>
            <div className="detail z-20">
              Cung cấp cho các bạn khu vực phòng trọ uy tín xung quanh đất Hòa
              Lạc
            </div>
            <NavLink onClick={toTop} to="/nhatro" className="more z-20">
              Thêm
            </NavLink>
          </div>
          {/* Vui chơi */}
          <div
            className="item"
            style={{
              backgroundImage:
                "url(https://disantrangan.vn/wp-content/uploads/2021/05/royal_city_times_city_04-1.jpg)",
            }}
          >
            <div className="opa"></div>
            <h1 className="text-2xl font-semibold z-20">Vui chơi</h1>
            <div className="detail z-20">
              Cho những con người thích đi vui chơi, nơi đây mai đó
            </div>
            <NavLink onClick={toTop} to="/vuichoi" className="more z-20">
              Thêm
            </NavLink>
          </div>
          {/* Ăn uống */}
          <div
            className="item"
            style={{
              backgroundImage:
                "url(https://i.pinimg.com/originals/ee/bb/7c/eebb7c99453679a28a7698ca16f466b0.jpg)",
            }}
          >
            <div className="opa"></div>
            <h1 className="text-2xl font-semibold z-20">Ăn uống</h1>
            <div className="detail z-20">
              Chia sẻ cho các bạn những quán ăn nổi tiếng tại Hòa Lạc
            </div>
            <NavLink onClick={toTop} to="/anuong" className="more z-20">
              Thêm
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
