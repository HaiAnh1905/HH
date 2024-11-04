import { useState, useEffect } from "react";
// import { SearchOutlined } from "@ant-design/icons";
import FoodCard from "./foodcard";
import food1 from "../../public/food1.jpg";
import food2 from "../../public/food2.jpg";
import food3 from "../../public/food3.jpg";
import "./style.scss";
// import PopupDetail from "../popup";

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
  fanpage: string;
  characterist: String[];
  openclosed: String;
}

export default function FoodStore() {
  const [activeTab, setActiveTab] = useState<number>(1);
  const handleClick = (index: number) => {
    setActiveTab(index);
  };
  const [data, setData] = useState<IData[]>([]);

  useEffect(() => {
    fetch("http://localhost:3004/foodstore")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);

  //search function
  const [value, setValue] = useState<any>("");
  const handleChange = (e: any) => {
    setValue(e.target.value);
  };
  return (
    <div className="food-wrapper-content mb-5">
      <div
        className="head-wrapper-content mb-10 p-10 grid items-center justify-center"
        style={{
          backgroundImage:
            "url(https://i.pinimg.com/564x/ef/77/48/ef7748b8f279499c56b85ec0f898fafb.jpg)",
        }}
      >
        <div className="img relative m-auto">
          <div
            className="img-food1 mb-2"
            style={{
              backgroundImage: `url(${food1})`,
              width: "14rem",
              height: "14rem",
              backgroundSize: "cover",
              borderRadius: "0.2rem",
              padding: "1.5rem",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            }}
          ></div>
          <div
            className="img-food2 absolute z-10"
            style={{
              backgroundImage: `url(${food2})`,
              width: "14rem",
              height: "14rem",
              backgroundSize: "cover",
              borderRadius: "0.2rem",
              padding: "1.5rem",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            }}
          ></div>
          <div
            className="img-food3 z-20 relative ml-5"
            style={{
              backgroundImage: `url(${food3})`,
              width: "14rem",
              height: "14rem",
              backgroundSize: "cover",
              borderRadius: "0.2rem",
              padding: "1.5rem",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            }}
          ></div>
        </div>
        <div className="text ml-10">
          <h1 className=" text-5xl font-semibold mb-3">
            Những địa điểm ăn uống nổi tiếng ở Hòa Lạc
          </h1>
          <div className="text-2xl">
            Đời người có ai mà không muốn ăn những món ngon, hãy để{" "}
            <span className="orange">Hola HandBook</span> tìm kiếm cho bạn những
            món đáng tiền nhất nhé!
          </div>
        </div>
      </div>
      <div className="body-wrapper-content">
        <div className="tabs-wrapper flex justify-between items-center mb-6 w-10/12 m-auto ">
          <div className="tabsComp flex gap-5 text-2xl font-semibold">
            <div
              className={activeTab == 1 ? "tab active-tab" : "tab"}
              onClick={() => {
                handleClick(1);
              }}
            >
              All
            </div>
            <div
              className={activeTab == 2 ? "tab active-tab" : "tab"}
              onClick={() => {
                handleClick(2);
              }}
            >
              Tân Xã
            </div>
            <div
              className={activeTab == 3 ? "tab active-tab" : "tab"}
              onClick={() => {
                handleClick(3);
              }}
            >
              Thạch Thất
            </div>
          </div>
          <div className="searchComp flex">
            <input
              value={value}
              onChange={handleChange}
              type="text"
              className="searchInp"
              placeholder="Tìm kiếm..."
            />
          </div>
        </div>
        <div className="tabs-content-wrapper">
          <div
            className={
              activeTab == 1
                ? "content-wrapper tabs1"
                : "content-wrapper disable"
            }
          >
            <div className="tab flex flex-wrap gap-3 items-center justify-center">
              {data.map((e) => {
                if (value != "") {
                  return (
                    e.name
                      .trim()
                      .toLowerCase()
                      .includes(value.trim().toLowerCase()) && (
                      <FoodCard {...e} />
                    )
                  );
                } else {
                  return <FoodCard {...e} />;
                }
              })}
            </div>
          </div>
          {/* tabs2 */}
          <div
            className={
              activeTab == 2
                ? "content-wrapper tabs1"
                : "content-wrapper disable"
            }
          >
            <div className="tab flex flex-wrap gap-3 items-center justify-center">
              {data.map((e) => {
                if (value != "" && e.address == "Tân Xã") {
                  return (
                    e.name
                      .trim()
                      .toLowerCase()
                      .includes(value.trim().toLowerCase()) && (
                      <FoodCard {...e} />
                    )
                  );
                } else {
                  return <FoodCard {...e} />;
                }
              })}
            </div>
          </div>
        </div>
      </div>
      {/* <PopupDetail popup={true}/> */}
    </div>
  );
}
