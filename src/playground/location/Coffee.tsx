// import React from "react";
// import { SearchOutlined } from "@ant-design/icons";
// import { Rate } from "antd";
import { useState } from "react";
import PopupDetail from "../../popup/index.tsx";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "../../popup/style.scss";

interface IData {
  name: String;
  type: String;
  discription: String;
  img: string[];
  rating: number;
  paragraph: String[];
  link: string;
  fanpage: string;
  map: string;
}

export default function Coffee(data: IData) {
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

  const paraKeys = Object.keys(data.paragraph);
  const paraArr = paraKeys.map((key: any) => {
    let items = data.paragraph[key];

    return items;
  });

  return (
    <div className="content-item relative grid items-center gap-10 mb-11 mx-auto">
      <div
        className="img"
        style={{
          backgroundImage: `url(${data.img[0]})`,
        }}
      ></div>
      <div className="content-text relative">
        <h1 className="locationName text-4xl font-semibold mb-4">{data.name}</h1>
        <div
          className="locationDetail text-lg mb-3"
          style={{
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            display: "-webkit-box",
          }}
        >
          {data.discription}
        </div>
        <div className="end flex items-center gap-10">
          <div
            onClick={() => {
              handlePopup();
            }}
            className="more w-fit text-lg text-white font-bold cursor-pointer"
          >
            Xem thêm
          </div>
          {/* <div className="rating">
            <Rate allowHalf disabled defaultValue={data.rating} />
          </div> */}
        </div>
      </div>
      <PopupDetail
        popup={popup}
        handlePopup={() => {
          handlePopup();
        }}
      >
        <div className="popup-content-wrapper px-6 pt-6">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            navigation={true}
            pagination={{ clickable: false }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper mb-6 m-auto"
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
          <div className="detail-content">
            <h1 className="text-5xl font-semibold mb-5">{data.name}</h1>
            <div className="discription text-xl indent-6 mb-4">
              {data.discription}
            </div>
            {paraArr.map((e) => {
              return <div className="details text-xl indent-6 mb-4">{e}</div>;
            })}
            <br />
            <div className="link text-xl flex gap-1">
              Đọc thêm tại:
              <a className="alink block" target="_blank" href={data.link}>
                {data.link}
              </a>
            </div>
            <div className="link text-xl flex gap-1">
              Trang fanpage chính thức:
              <a className="alink block" target="_blank" href={data.fanpage}>
                {data.fanpage}
              </a>
            </div>
            <div className="map mt-8">
              <iframe
                src={`${data.map}`}
                width="100%"
                height="450"
                style={{ border: "0" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </PopupDetail>
    </div>
  );
}
