import { useEffect, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
// import useSWR from "swr";
import "./style.scss";
import Nhatro from "./nhatro.tsx";

interface IData {
  name: String;
  type: String;
  discription: String;
  img: String;
  rating: number;
  address: String;
  distance: String;
}

export default function Motel() {
  const [tabs, setTabs] = useState<Number>(1);
  const handleClick = (index: Number) => {
    setTabs(index);
  };
  console.log(tabs);

  //search function
  const [value, setValue] = useState<any>("");
  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  //render data
  const [data, setData] = useState<IData[]>([]);

  useEffect(() => {
    fetch("http://localhost:3004/tro")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <div className="playPage">
      {/* ==============================Header============================ */}
      <div className="nenphongtro flex items-center justify-center gap-28">
        <h1 className="stitle absolute"></h1>
        <div className="title z-10">
          <h1 className="text-5xl font-semibold font-serif mb-4">
            Một mái nhà tại Hola !!!
          </h1>
          <h2 className="text-gl mb-2 font-mono  text-white">
            Các bạn muốn tìm nơi để về, nơi để nghỉ ngơi, sinh hoạt và ngủ sau
            những giờ học giờ làm việc căng thẳng trên trường?
          </h2>
          <h2 className="text-gl mb-10 font-mono  text-white">
            Tại đây chúng tôi sẽ giúp các bạn tìm được nơi mà bạn đang cần ngay
            tại Hòa Lạc này đó.
          </h2>
          <button className="text-3xl text-white font-bold font-mono">
            Xem thêm !!
          </button>
        </div>
        <div className="img">
          <div className="img2"></div>
          <div className="img3"></div>
        </div>
      </div>

      {/* ==============================Body============================== */}
      <div className="swrapper-body">
        <div className="tabs-wrapper m-auto mt-10">
          <div className="block-tabs flex gap-2 text-2xl mb-5 pb-6">
            {/* ===================================Block tabs======================================= */}
            <div
              className={tabs == 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => handleClick(1)}
            >
              All
            </div>
            <div
              className={tabs == 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => handleClick(2)}
            >
              Tân Xã
            </div>
            <div
              className={tabs == 3 ? "tabs active-tabs" : "tabs"}
              onClick={() => handleClick(3)}
            >
              Thạch Hòa
            </div>
            <div
              className={tabs == 4 ? "tabs active-tabs" : "tabs"}
              onClick={() => handleClick(4)}
            >
              Bình Yên
            </div>
          </div>
          {/* =======================================Content tabs========================================= */}
          <div className="content-tabs">
            <div className="search-content ml-4 flex gap-5 mb-9">
              <input
                value={value}
                className="text-lg"
                type="text"
                style={{
                  padding: "0.3rem 0.5rem",
                }}
                onChange={handleChange}
                placeholder="Tìm kiếm..."
              />
              <div className="searchOutlined flex items-center justify-center">
                <SearchOutlined
                  style={{
                    fontSize: "1.5rem",
                  }}
                />
              </div>
            </div>
            <div className={tabs == 1 ? "content stabs1" : "content disable"}>
              <div className="content-wrapper">
                {data.map((e) => {
                  if (value != "") {
                    return (
                      e.name
                        .trim()
                        .toLowerCase()
                        .includes(value.trim().toLowerCase()) && (
                        <Nhatro {...e} />
                      )
                    );
                  } else {
                    return <Nhatro {...e} />;
                  }
                })}
              </div>
            </div>
            <div className={tabs == 2 ? "content stabs2" : "content disable"}>
              <div className="content-wrapper">
                {data.map((e) => {
                  if (value != "" && e.type == "tanxa") {
                    return (
                      e.name
                        .trim()
                        .toLowerCase()
                        .includes(value.trim().toLowerCase()) && (
                        <Nhatro {...e} />
                      )
                    );
                  } else if (e.type == "tanxa") {
                    return <Nhatro {...e} />;
                  }
                })}
              </div>
            </div>
            <div className={tabs == 3 ? "content stabs3" : "content disable"}>
              <div className="content-wrapper">
                {data.map((e) => {
                  if (value != "" && e.type == "thachhoa") {
                    return (
                      e.name
                        .trim()
                        .toLowerCase()
                        .includes(value.trim().toLowerCase()) && (
                        <Nhatro {...e} />
                      )
                    );
                  } else if (e.type == "thachhoa") {
                    return <Nhatro {...e} />;
                  }
                })}
              </div>
            </div>
            <div className={tabs == 4 ? "content stabs4" : "content disable"}>
              <div className="content-wrapper">
                {data.map((e) => {
                  if (value != "" && e.type == "binhyen") {
                    return (
                      e.name
                        .trim()
                        .toLowerCase()
                        .includes(value.trim().toLowerCase()) && (
                        <Nhatro {...e} />
                      )
                    );
                  } else if (e.type == "binhyen") {
                    return <Nhatro {...e} />;
                  }
                })}
              </div>
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
      </div>
    </div>
  );
}
