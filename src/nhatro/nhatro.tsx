// import React from "react";
import { Rate } from 'antd';

interface IData {
  name: String;
  type: String;
  discription: String;
  img: String;
  rating: number;
  address: String;
  distance: String;
}

export default function Nhatro(data: IData) {
  return (
    <div className="thenhatro grid ">
      <div>
        <h1 className="tentro font-bold text-4xl font-sans">{data.name}</h1>

        <h1 className="diachi font-mono">{data.address}</h1>

        <h1 className="mota font-mono">{data.discription}</h1>

        <h1 className="khoangcach font-mono">{data.distance}</h1>

        <h1 className="danhgia"><Rate style={{color: "#ff0000"}} allowHalf disabled defaultValue={data.rating}/></h1>

        <div className="xemthem w-fit text-lg text-white font-bold">
          Đây nè !
        </div>
      </div>

      <h1 className="hinh" style={{ backgroundImage: `url(${data.img})` }}></h1>
    </div>
  );
}
