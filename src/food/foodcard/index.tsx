import React from "react";
import { Rate } from "antd";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import PopupDetail from "../../popup";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

import {
  Autoplay,
  Navigation,
  Thumbs,
  FreeMode,
} from "swiper/modules";

interface IData {
  name: String;
  type: String;
  discription: String;
  img: String[];
  rating: number;
  paragraph: string;
  howtoeat: String;
  pricing: String;
  address: String;
  link: string;
  characterist: String[];
  openclosed: String;
}

export default function FoodCard(data: IData) {
  const [popup, setPopup] = useState<boolean>(false);
  const handlePopup = () => {
    setPopup(!popup);
  };

  //Img data
  const dataKeys = Object.keys(data.img);
  const imgArr = dataKeys.map((key: any) => {
    let item = data.img[key];

    return item;
  });

  //thumbs swiper
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <div className="foodcard relative w-fit">
      <div
        className="img mb-3"
        style={{ backgroundImage: `url(${data.img[1]})` }}
      ></div>
      <h1 className="text-3xl font-semibold px-2 mb-3">{data.name}</h1>
      <div
        className="discription text-xl px-2 mb-2"
        style={{
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          display: "-webkit-box",
        }}
      >
        {data.discription}
      </div>
      <div className="pricing px-2 text-xl mb-3">Giá tiền: {data.pricing}</div>
      <div className="address text-xl pl-2 mb-4">Địa chỉ: {data.address}</div>
      <div className="bottom flex items-center gap-5">
        <div
          className="readmore ml-2 text-xl"
          onClick={() => {
            handlePopup();
          }}
        >
          Xem thêm
        </div>
        <div className="rating px-2 mb-3 ">
          <Rate
            style={{ color: "#e0702b" }}
            allowHalf
            disabled
            defaultValue={data.rating}
          />
        </div>
      </div>
      <PopupDetail
        popup={popup}
        handlePopup={() => {
          handlePopup();
        }}
      >
        <div className="popup-content-wrapper px-6 pt-6 grid gap-5">
          <div className="swiperz">
            <Swiper
              loop={true}
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              navigation={true}
              pagination={{ clickable: false }}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[Autoplay, Thumbs, Navigation, FreeMode]}
              className="mySwiper mb-6 z-20 relative"
            >
              {imgArr.map((e) => {
                return (
                  <SwiperSlide>
                    <div
                      className="img-slider w-full h-full bg-cover bg-no-repeat"
                      style={{
                        backgroundPositionY: "50%",
                        backgroundImage: `url(${e})`,
                      }}
                    ></div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <Swiper
              // loop={true}
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Thumbs, Navigation]}
              className="mySwiper2 mb-6"
            >
              {imgArr.map((e) => {
                return (
                  <SwiperSlide className="slider-me flex items-center justify-center border h-14">
                    <div
                      className="img-slider w-full h-full bg-cover bg-no-repeat"
                      style={{
                        backgroundPositionY: "50%",
                        backgroundImage: `url(${e})`,
                      }}
                    ></div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="detail-content">
            <h1 className="text-5xl font-semibold mb-3">{data.name}</h1>
            <div className="discription-popup text-xl indent-6">
              {data.discription}
            </div>
            <br />
            <div className="pricingz text-xl">
              Giá mỗi món ăn: <span className="orange">{data.pricing}</span> mỗi
              món
            </div>
            <br />
            <div className="flex items-center gap-20">
            <div className="rating flex items-center justify-center">
              <Rate allowHalf disabled defaultValue={data.rating}></Rate>
            </div>
            <div className="open-closed text-xl">Mở cửa: {data.openclosed}</div>
            </div>
            <br />
            <div className="link text-xl flex gap-1 w-fit justify-self-end">
              <a
                className="alink block text-3xl"
                target="_blank"
                href={data.link}
              >
                Đặt ngay?
              </a>
            </div>
            {/* <div className="map mt-8">
            <iframe
              src={`${data.map}`}
              width="100%"
              height="450"
              style={{ border: "0" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div> */}
          </div>
        </div>
      </PopupDetail>
    </div>
  );
}
