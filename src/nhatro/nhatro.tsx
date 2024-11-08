// import React from "react";
import { Rate } from "antd";
import { useState } from "react";
import PopupDetail from "../popup/index.tsx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
interface IData {
  map: string;
  name: String;
  type: String;
  discription: String;
  img: String[];
  pricing: String;
  rating: number;
  address: String;
  distance: String;
}
export default function Nhatro(data: IData) {
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

  return (
    <div className="thenhatro grid ">
      <div>
        <h1 className="tentro font-bold text-4xl font-sans">{data.name}</h1>

        <h1 className="diachi font-mono">{data.address}</h1>

        <h1 className="mota font-mono">{data.discription}</h1>

        <h1 className="khoangcach font-mono">{data.distance}</h1>

        <h1 className="danhgia">
          <Rate
            style={{ color: "#ff0000" }}
            allowHalf
            disabled
            defaultValue={data.rating}
          />
        </h1>

        <div
          onClick={() => {
            setPopup(!popup);
          }}
          className="xemthem w-fit text-lg text-white font-bold"
        >
          Đây nè !
        </div>
      </div>

      <h1
        className="hinh"
        style={{ backgroundImage: `url(${imgArr[0]})` }}
      ></h1>
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
