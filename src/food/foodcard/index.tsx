// import React from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import PopupDetail from "../../popup";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

import { Autoplay, Navigation, Thumbs, FreeMode } from "swiper/modules";

interface IData {
  id: string;
  name: String;
  type: String;
  discription: String;
  img: String[];
  pricing: String;
  address: String;
  openclosed: String;
  map: string;
  sdt: String;
  fanpage: string;
  rating: number;
}

export default function FoodCard(data: IData) {
  //popup function
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
  console.log(thumbsSwiper);

  return (
    <div className="foodcard relative w-fit">
      <div className="outside">
        <div
          className="img mb-3"
          style={{ backgroundImage: `url(${data.img[0]})` }}
        ></div>
        <h1 className="text-3xl font-semibold px-2 mb-3">{data.name}</h1>
        <div className="pricing px-2 text-xl mb-3">
          💸<b>Giá trung bình: </b> {data.pricing}
        </div>
        <div className="address text-xl pl-2 mb-4">
          🏡<b>Địa chỉ: </b>
          {data.address}
        </div>
        <div className="bottom flex items-center gap-5 cursor-pointer">
          <div
            className="readmore ml-2 text-xl"
            onClick={() => {
              handlePopup();
            }}
          >
            Xem thêm
          </div>
        </div>
      </div>
      <PopupDetail
        key={data.id}
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
              thumbs={{ swiper: !thumbsSwiper ? thumbsSwiper : 0 }}
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
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={data.img.length < 4 ? data.img.length : 4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Thumbs, Navigation]}
              className="mySwiper2 mb-6 m-auto"
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
              💸<b>Giá trung bình: </b> {data.pricing}
            </div>
            <div className="flex items-center gap-20">
              <div className="text-xl address">
                🏡<b>Địa chỉ: </b> <a target="_blank" className="underline" href={data.map}>{data.address}</a>
              </div>
            </div>
            <div className="flex items-center gap-20">
              <div className="text-xl address">
                ☎️<b>SĐT: </b> {data.sdt}
              </div>
            </div>
            <div className="flex items-center gap-20">
              <div className="text-xl address underline oorange">
                📫<b>Fanpage của quán: </b> <a href={data.fanpage}>{data.name}</a>
              </div>
            </div>
          </div>
        </div>
      </PopupDetail>
    </div>
  );
}
