// import { useState } from "react";
import FPTUbg from "../../public/FPTU_background.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, FreeMode } from "swiper/modules";
import Canteen2 from '../../public/Canteen 2.jpg'
import Canteen1 from '../../public/Canteen1.jpg'
import MetaBridge from '../../public/Cầu meta.jpg'
import Alpha from '../../public/Alpha.jpeg'
import Gamma from '../../public/Gamma - Copy.png'
import Gym from '../../public/Gym.jpg'
import KTX from '../../public/KTX.jpg'
import FootballCourt from '../../public/Sân bóng đá.jpg'
import BasketbalCourt from '../../public/Sân bóng rổ.jpg'
import SanXa from '../../public/Sân xà.jpg'
import HallOfHistory from '../../public/Sảnh đường lịch sử.jpg'
import SelfMadeMan from '../../public/SelfMadeMan - Copy.png'
import Beta from '../../public/Beta - Copy.png'
import Delta from '../../public/Delta - Copy.png'

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.scss";

// interface FPTUInfo {
//   name: String,
//   img: String
// }

export default function FPTU() {
  const listInfo = [
    {
      name: 'Alpha',
      img: `${Alpha}`
    },
    {
      name: 'Beta',
      img: `${Beta}`
    },
    {
      name: 'Delta',
      img: `${Delta}`
    },
    {
      name: 'Gamma',
      img: `${Gamma}`
    },
    {
      name: 'Canteen 1',
      img: `${Canteen1}`
    },
    {
      name: 'Canteen 2',
      img: `${Canteen2}`
    },
    {
      name: 'Kí túc xá',
      img: `${KTX}`
    },
    {
      name: 'Sân xà',
      img: `${SanXa}`
    },
    {
      name: 'Sân bóng đá',
      img: `${FootballCourt}`
    },
    {
      name: 'Sân bóng rổ',
      img: `${BasketbalCourt}`
    },
    {
      name: 'Gym',
      img: `${Gym}`
    },
    {
      name: 'Self-made Man',
      img: `${SelfMadeMan}`
    },
    {
      name: 'Sảnh đường lịch sử',
      img: `${HallOfHistory}`
    },
    {
      name: 'Cầu Meta',
      img: `${MetaBridge}`
    },
  ];
  return (
    <div className="FPTUPage relative">
      <div
        className="part1 bg-cover relative"
        style={{
          aspectRatio: "9/4",
          margin: "0 auto",
          backgroundImage: `url(${FPTUbg})`,
        }}
      >
        <div className="opa w-full h-full absolute"></div>
        <div className="intro absolute">
          <h1 className="text-6xl font-semibold italic mb-5">
            Bạn cần thông tin về FPT Hola
          </h1>
          <p className="text-xl font-semibold">
            Vậy bạn tìm đúng chỗ rồi đó, tại cẩm nang Hòa Lạc chúng tôi cung cấp
            mọi thông tin hữu ích cho các bạn về ngôi trường FPT này
          </p>
        </div>
        <Swiper
          slidesPerView={5}
          spaceBetween={10}
          loop={true}
          // centeredSlides={true}
          freeMode={true}
          autoplay={{
            delay: 2600,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, FreeMode, Navigation]}
          className="lists absolute"
        >
          {listInfo.map((e) => {
            return (
              <SwiperSlide className="lists-item" style={{
                backgroundImage: `url(${e.img})`,
                backgroundSize: "cover"
              }}>
                <div className="text mb-3 z-10 text">{e.name}</div>
                <div className="linear absolute w-full"></div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
