import { useEffect, useState } from "react";
import Coffee from "./location/Coffee";
import { SearchOutlined } from "@ant-design/icons";
// import useSWR from "swr";
import "./style.scss";

interface IData {
  name: String;
  type: String;
  discription: String;
  img: string[];
  rating: number;
  paragraph: String;
  link: string;
  fanpage: string;
  map: string;
}

export default function EntertainmentPage() {
  const a = [1, 2, 3];
  const [tabs, setTabs] = useState<Number>(1);
  const handleClick = (index: Number) => {
    setTabs(index);
  };

  //search function
  const [value, setValue] = useState<any>("");
  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  //render data
  const [data, setData] = useState<IData[]>([]);

  useEffect(() => {
     fetch("http://localhost:3004/location")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []); 
  
  return (
    <div className="playPage relative">
      {/* ==============================Header============================ */}
      <div className="wrapper-header flex items-center justify-center gap-28">
        <div className="title">
          <h1 className="text-5xl font-semibold orange mb-4">
            Hòa Lạc có gì hot?!??
          </h1>
          <h2 className="text-xl mb-2">
            Các bạn muốn tìm những nơi vui chơi, giải trí cuối tuần sau những
            giờ học giờ làm việc căng thẳng trên trường tại HOLA?
          </h2>
          <h2 className="text-xl mb-10">
            Tại đây chúng tôi cung cấp cho các bạn các địa điểm vui chơi nổi
            tiếng tại Hòa Lạc.
          </h2>
          <button className="text-3xl text-white">Xem ngay!!</button>
        </div>
        <div className="img"></div>
      </div>

      {/* ==============================Body============================== */}
      <div className="wrapper-body">
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
              Khu vui chơi
            </div>
            <div
              className={tabs == 3 ? "tabs active-tabs" : "tabs"}
              onClick={() => handleClick(3)}
            >
              Coffee
            </div>
            <div
              className={tabs == 4 ? "tabs active-tabs" : "tabs"}
              onClick={() => handleClick(4)}
            >
              Thể thao
            </div>
            <div
              className={tabs == 5 ? "tabs active-tabs" : "tabs"}
              onClick={() => handleClick(5)}
            >
              Khu mua sắm
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
            <div className={tabs == 1 ? "content tabs1" : "content disable"}>
              <div className="content-wrapper">
                {data.map((e) => {
                  if (value != "") {
                    return (
                      e.name
                        .trim()
                        .toLowerCase()
                        .includes(value.trim().toLowerCase()) && (
                        <Coffee {...e} />
                      )
                    );
                  } else {
                    return <Coffee {...e} />;
                  }
                })}
              </div>
            </div>
            <div className={tabs == 2 ? "content tabs2" : "content disable"}>
              <div className="content-wrapper">
                {data.map((e) => {
                  if (value != "" && e.type == "playground") {
                    return (
                      e.name
                        .trim()
                        .toLowerCase()
                        .includes(value.trim().toLowerCase()) && (
                        <Coffee {...e} />
                      )
                    );
                  } else if (e.type == "playground") {
                    return <Coffee {...e} />;
                  }
                })}
              </div>
            </div>
            <div className={tabs == 3 ? "content tabs3" : "content disable"}>
              <div className="content-wrapper">
                {data.map((e) => {
                  if (value != "" && e.type == "coffee") {
                    return (
                      e.name
                        .trim()
                        .toLowerCase()
                        .includes(value.trim().toLowerCase()) && (
                        <Coffee {...e} />
                      )
                    );
                  } else if (e.type == "coffee") {
                    return <Coffee {...e} />;
                  }
                })}
              </div>
            </div>
            <div className={tabs == 4 ? "content tabs4" : "content disable"}>
              <div className="content-wrapper">
                {data.map((e) => {
                  if (value != "" && e.type == "sport") {
                    return (
                      e.name
                        .trim()
                        .toLowerCase()
                        .includes(value.trim().toLowerCase()) && (
                        <Coffee {...e} />
                      )
                    );
                  } else if (e.type == "sport") {
                    return <Coffee {...e} />;
                  }
                })}
              </div>
            </div>
            <div className={tabs == 5 ? "content tabs5" : "content disable"}>
              <div className="content-wrapper">
                {data.map((e) => {
                  if (value != "" && e.type == "market") {
                    return (
                      e.name
                        .trim()
                        .toLowerCase()
                        .includes(value.trim().toLowerCase()) && (
                        <Coffee {...e} />
                      )
                    );
                  } else if (e.type == "market") {
                    return <Coffee {...e} />;
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
