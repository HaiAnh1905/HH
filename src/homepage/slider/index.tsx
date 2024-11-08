// import { useState } from "react";

interface sliderArrayI {
  sliderUrl: {
    index: number;
    title: String;
    sentence: String;
    img: String;
  };
}

export default function Slider(sliderUrl: sliderArrayI) {
  return (
    <div
      className="slider-item w-full relative "
      style={{
        maxWidth: "120rem",
        width: "100%",
        aspectRatio: "10/4",
        margin: "0 auto",
      }}
    >
      <div className="text absolute text-white z-10 prevent-select text-center">
        <h1 className="text-4xl m-auto font-semibold mb-3 text-center">
          {sliderUrl.sliderUrl.title}
        </h1>
        <div className="intro m-auto text-lg w-fit">
          {sliderUrl.sliderUrl.sentence}
        </div>
      </div>
      <div className="op absolute opacity-65 w-full h-full"></div>
      <img className="slider-img" src={`${sliderUrl.sliderUrl.img}`} alt="" />
    </div>
  );
}
