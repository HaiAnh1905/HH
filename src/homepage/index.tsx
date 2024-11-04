import { useState } from "react";
import Slider from "./slider/index.tsx";
import "./style.scss";
import { NavLink } from "react-router-dom";

interface sliderArrayItem {
  index: number;
  title: String;
  sentence: String;
  img: String;
}

export default function HomePage() {
  const [sliderImg, setSliderImg] = useState<sliderArrayItem[]>([
    {
      index: 0,
      title: "Chào mừng các bạn đến với Hòa Lạc",
      sentence: "Vũ trụ thông tin về Hòa Lạc",
      img: "https://daihoc.fpt.edu.vn/wp-content/uploads/2021/02/144409980_10164565272570062_7625633052716715320_o.jpg",
    },
    {
      index: 1,
      title: "Những sự kiện đầy thú vị",
      sentence:
        "Hằng năm, có tới hơn 20 sự kiện được tổ chức tại khuôn viên trường Đại Học FPT",
      img: "https://hanoi.fpt.edu.vn/wp-content/uploads/2024/10/C8-scaled.jpg",
    },
    {
      index: 2,
      title: "Canteen trường FPT",
      sentence:
        "Cung cấp các món ăn ngon, rẻ, chất lượng, sạch sẽ,... và siêu thì có thể mua cả thế giới",
      img: "https://hoalac-school.fpt.edu.vn/wp-content/uploads/FPTSchool-0081-scaled.jpg",
    },
  ]);
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
    window.scrollTo(0,0);
  }
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
      <div className="choose mt-5">
        <h1 className="text-2xl font-bold oorange w-fit m-auto">Thông tin</h1>
        <h1 className="text-xl font-semibold w-fit m-auto mb-5">
          Trang web của chúng mình có cung cấp các thông tin dưới đây
        </h1>
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
            <NavLink onClick={toTop} to="/tuyenxe" className="more z-20">Thêm</NavLink>
          </div>
          {/* Phòng Trọ */}
          <div className="item" style={
            {
              backgroundImage: "url(https://toquoc.mediacdn.vn/280518851207290880/2023/8/28/photo1693226747-16932267725902030247411.jpeg)"
            }
          }>
            <div className="opa"></div>
            <h1 className="text-2xl font-semibold z-20">Phòng trọ</h1>
            <div className="detail z-20">
              Cung cấp cho các bạn khu vực phòng trọ uy tín xung quanh đất Hòa
              Lạc
            </div>
            <NavLink onClick={toTop} to="/" className="more z-20">Thêm</NavLink>
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
            <NavLink onClick={toTop} to="/vuichoi" className="more z-20">Thêm</NavLink>
          </div>
          {/* Ăn uống */}
          <div className="item"
          style={{
            backgroundImage: "url(https://i.pinimg.com/originals/ee/bb/7c/eebb7c99453679a28a7698ca16f466b0.jpg)"
          }}>
            <div className="opa"></div>
            <h1 className="text-2xl font-semibold z-20">Ăn uống</h1>
            <div className="detail z-20">
              Chia sẻ cho các bạn những quán ăn nổi tiếng tại Hòa Lạc
            </div>
            <NavLink onClick={toTop} to="/anuong" className="more z-20">Thêm</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
