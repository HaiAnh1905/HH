import { useState } from "react";
// import { SearchOutlined } from "@ant-design/icons";
import FoodCard from "./foodcard";
import food1 from "../../public/food1.jpg";
import food2 from "../../public/food2.jpg";
import food3 from "../../public/food3.jpg";
import "./style.scss";
// import PopupDetail from "../popup";

// interface IData {
//   id: string;
//   name: String;
//   type: String;
//   discription: String;
//   img: String[];
//   pricing: String;
//   address: String;
//   openclosed: String;
//   map: string;
//   sdt: String;
//   fanpage: string;
//   rating: number;
// }

export default function FoodStore() {
  const [activeTab, setActiveTab] = useState<number>(1);
  const handleClick = (index: number) => {
    setActiveTab(index);
  };
  // const data: IData[] = [];
  // const [data, setData] = useState<IData[]>([]);
  const data = [
    {
      id: "cc4a",
      name: "Nhà Hàng Huy Cường",
      type: "Thạch Thất",
      img: [
        "https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/338420196_131458083076489_3162020215470354941_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeERTCpcnH3D_qYo6IkMQ7S9sC8YoQA0bl6wLxihADRuXur0NBoiJOJGWinR-okO1QAWasBoj0igkKiD2xICn09g&_nc_ohc=7RVYkB3lGHYQ7kNvgEjKxxy&_nc_zt=23&_nc_ht=scontent.fhan2-4.fna&_nc_gid=ANN1wpA_bX1nDagoPIyCojR&oh=00_AYAAu4DR-wf6HAlRwQf-zkJ0W0WF8TE7jLU0nAeQDh1Qkg&oe=67328611",
        "https://lh3.googleusercontent.com/p/AF1QipNY1s6YSVRarG76-DKTqdWk6V2c17DxoM2VnD1I=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipOqSyU3-l-cKt5OLh_PtV2kHw05E3PtlKybzKIT=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipPHucyA4OY7XI9-KvjzI7Pf1Gtsy8Wsux2uxW48=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipNQKHwVh_aVi3m5F9aO4FSqvr3OzpxgINDx7Ope=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipOQ8grT5GPGB2mMN13KVT_ClyuibPrNcH1Zjzor=s1360-w1360-h1020",
      ],
      address: "2G29+PVP, Thôn 3 QL21, Thạch Hoà, Thạch Thất, Hà Nội",
      discription:
        "Ở đây chúng tôi có  vũ nữ chân dài ngon hơn người yêu cũ Đến với Huy Cường quý khách sẽ có cơ hội thưởng thức các món ngon được chế biến 100% từ Ếch tươi chuẩn công thức độc quyền.",
      pricing: "100.000đ - 200.000đ",
      openclosed: "Đóng cửa lúc 0h",
      sdt: "0916 611 972",
      fanpage: "https://www.facebook.com/@LAUHUYCUONGHOALAC2022/",
      map: "https://maps.app.goo.gl/CcEFgSm29poNgWrZ8",
      rating: 4,
    },
    {
      id: "8690",
      name: "Hương Việt Quán Hoà Lạc",
      type: "Thạch Thất",
      img: [
        "https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/304858902_503117081817205_7572578367821237115_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFdlhHWvGJBcq8RKIlL4wM_p8hycFr8toGnyHJwWvy2gdBhggGgNItg7zQ9w-S4v3MWjOw-DQ65_faTOnVdAuXA&_nc_ohc=jYC9QmrGDhwQ7kNvgGvurtI&_nc_zt=23&_nc_ht=scontent.fhan2-3.fna&_nc_gid=AoDuodetKLxTk_4JHCcGnGE&oh=00_AYCBaGECSCOdi-gWxFM3XCe6Rkx4Qnx8Ot_zpz4W67JnZQ&oe=673290FF",
        "https://lh3.googleusercontent.com/p/AF1QipOx8fIUvYDX8FxJUqm9VHHIDJ2TLUDfxXn6Lx8p=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipMBu0jAOWnjqbExrgrld73feErz89TINrL6MPY9=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipOuIQb1uFdlsKYpWBLYoPcWY_tzn61RM_a-PlWb=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipOL-QyNLz34SiJLdHp6lb5YxH4JKYlTAb0U20qF=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipPzrCjb0deWKkDqlw8yAr-uyzlTmFQlGo1m_bpM=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipN7JusqzINPmhcTiKAH3ixGqrZTk42lfzz2h5Oz=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipMEh9ofHT6supEd_3EzThw-w7dgij3OLPyqpvb4=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipOtKqhXx-HodokI2_YrRVqQMGvN4G2ZlKuwybOZ=s1360-w1360-h1020",
      ],
      address: "Cổng chính Trường Đại Học Quốc Gia, Hòa Lạc, Hà Nội 155500",
      discription:
        "Nhà hàng ẩm thực đồng quê, gà ri, lẩu cua đồng. Thực đơn phong phú, đa dạng, giá cả phải chăng, nhà hàng cam kết sử dụng thực phẩm tươi sạch 100% do trang trại Hương Việt tự cung tự cấp. Với diện tích 1000m2, thiết kế sang trọng, ấm cúng, với nhiều phòng VIP không gian riêng biệt và điều hoà mát lạnh. Có phòng karaoke miễn phí với âm thanh ánh sáng xịn cho khách hàng đặt tiệc.",
      pricing: "1 - 100.000đ",
      openclosed: "Đóng cửa lúc 23h",
      sdt: "0944 665 588",
      fanpage: "https://www.facebook.com/huongvietquanhoalac/?locale=vi_VN",
      map: "https://maps.app.goo.gl/qA1BtdqbCuhSwPmj8",
      rating: 4,
    },
    {
      id: "302b",
      name: "Hoà Lạc Viên",
      type: "Thạch Thất",
      img: [
        "https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-1/440937011_1218726289453072_2217639053131094956_n.jpg?stp=dst-jpg_s200x200&_nc_cat=102&ccb=1-7&_nc_sid=f4b9fd&_nc_eui2=AeEhmKquk2YWwQLxpCBJPsw1RiwLO-dh8pVGLAs752HylYA3nvHHfiXUXF9mQHzuReKN8En5oqbKKouBfz9Pjbig&_nc_ohc=ZOZdoE7AZoQQ7kNvgGEa_q-&_nc_zt=24&_nc_ht=scontent.fhan20-1.fna&_nc_gid=AEm8-RcSRywLbzqaRrSauzv&oh=00_AYBFXa9YnP3-mkj3Tr_MPLUiX8P9qmHRnR0aW_Fm5HaDSA&oe=67326B32",
        "https://lh3.googleusercontent.com/p/AF1QipPv92CkplcFVnMzK7fYHUTWeEWTCJhHmvHhU-SA=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipO51mTYIqtb40FuE7BepFd2zpSKa5Iar1i_v810=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipPx4BqUosQXkivqNLd0h-0BtZeZPQBGceqE1r4f=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipPT3375imul0frk7xPIU4XeDcTHjoWUkSK9K9Uy=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipP4A0JcfhzSkmNZen9rOohaEKfXVYzK93p8sneY=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipObVnTv31cH9lIsjQcYPU1CZUyUpRgZg2C7mGjI=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipOlhwDsq3eUdehueDdEWQKIr8Zr5MyVL4dcBx4i=s1360-w1360-h1020",
      ],
      address: "Quốc lộ 21, Thạch Hoà, Thạch Thất, Hà Nội",
      discription:
        "Hòa Lạc Viên Restaurant tại Thạch Hoà, Thạch Thất, Hà Nội là điểm đến lý tưởng cho những ai yêu thích hương vị đồng quê. Nổi bật với món lẩu cua đồng và thực đơn phong phú gồm các món từ lợn mán, chim, cá, nhà hàng mang đến không gian thoáng mát, yên bình giữa thiên nhiên. Với giá cả hợp lý và phục vụ chu đáo, Hòa Lạc Viên là lựa chọn tuyệt vời cho các buổi họp mặt và dã ngoại.",
      pricing: "...",
      openclosed: "Đóng cửa lúc 22h",
      sdt: "024 3368 7396",
      fanpage: "https://www.facebook.com/Hoalacvien/?locale=vi_VN",
      map: "https://maps.app.goo.gl/AWbHbLaf77rN5ty57",
      rating: 4,
    },
    {
      id: "d808",
      name: "Get&Go Cafe",
      type: "Thạch Thất",
      img: [
        "https://lh3.googleusercontent.com/p/AF1QipNq0q_NcFhp7zewn_5k8lTrz6TyrSQSpkKa99a0=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipOMvvjExJKpcENNzGnI2anmto6fs0vTRHSX27Gl=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipPijvMPai_HBBKRffEXSd6X_lntcTojMDhgO04=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipPasRg7pnA_S0BBYYP6cIjKgGrQ_oVzbe7qpxM=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipPNRo5SOuy5DgmdhVoucffMPAylrZdTvI11aPf9=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipOCG3IvAk4MB1TSs66kNOtANzWT9y6D5vYWZOk=s1360-w1360-h1020",
      ],
      address: " QL21B, Thôn 3, Thạch Thất, Hà Nội",
      discription:
        "Một ngoặm là say đắm, hai ngoặm là đắm say, đến ngoặm thứ 3 là chính thức đổ gục trước burger gà chiên của 𝐆𝐞𝐭&𝐆𝐨. Từ ngày chính thức có mặt trong thực đơn, em burder này đã chinh phục vị giác của không biết bao nhiêu fan với vị ngon mềm mịn từ lớp bánh nóng hổi và giòn rụm mọng nước của gà chiên. ",
      pricing: "1 - 100.000đ",
      openclosed: "Đóng cửa lúc 22h30",
      sdt: "0981 469 889",
      fanpage: "https://www.facebook.com/getngofoodndrink/",
      map: "https://maps.app.goo.gl/rbJqquKHjDBWH3qJ8",
      rating: 4,
    },
    {
      id: "de11",
      name: "TheHill BBQ",
      type: "Thạch Thất",
      img: [
        "https://lh3.googleusercontent.com/p/AF1QipOMCkECc8oqGz_UnKL9OJiOrhJtrbu1fioRSfWg=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipNf3053xFW8GK47tO0XbLPi0sc3Vv8c08mb_SD7=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipN9tMe3QM1WMUDwP2iuygHoRmLINPUYtcUdl_1E=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipPHUnKvTjFZjQoAjj7uBQnLhzN4jQUcDz7ZV-9J=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipP5564TWAoBgXtSXHwcdlzrg5w3g8wpAQrgKq6u=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipPcROpruhR2hkdaykGt01sfU8mdKEHfY4ccPx8t=s1360-w1360-h1020",
      ],
      address: "XGJJ+JGV, Thạch Hoà, Thạch Thất, Hà Nội",
      discription:
        "Nhà hàng TheHill BBQ Tiên phong Ẩm thực Buffet Hàn Quốc trong không gian Châu Âu tại Hòa Lạc. - Dành riêng cho những khách hàng kỹ tính: Yêu cái Đẹp, Thích Ăn NGON, SẠCH, SANG và trải nghiệm thú vị trong không gian ẩm thực thanh lịch.",
      pricing: "200.000 - 300.000đ",
      openclosed: "Mở lúc 10h",
      sdt: "0816 188 588",
      fanpage: "https://www.facebook.com/TheHillBBQ/?_rdr",
      map: "https://maps.app.goo.gl/qngWBcQ5TtuvEbY48",
      rating: 4,
    },
    {
      id: "6d74",
      name: "Bún đậu Sơn béo",
      type: "Thạch Thất",
      img: [
        "https://lh5.googleusercontent.com/p/AF1QipOzvxIvm0_8qCBH2Q9XnMeSpD7UlILJQAREfyIF=w325-h218-n-k-no",
        "https://lh3.googleusercontent.com/p/AF1QipN86FunG_uTI1TCTymwido1Ox8WnbA88tSr2YMa=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipPZTXUGFN-PSxcfxSel0a2pqNXw2TycQzqxs4i9=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipPt6snNvBsebLD4XuKcNCsJvYieNKmuwGHHjPpL=s1360-w1360-h1020",
      ],
      address: "Thôn 3 QL21, Thạch Hoà, Thạch Thất, Hà Nội",
      discription:
        "Bún đậu Sơn Béo nổi bật với phần mắm tôm đậm đà, thơm ngon được pha chế cẩn thận để tạo nên hương vị hài hòa, hấp dẫn. Mỗi phần bún đậu tại đây đều được chuẩn bị tỉ mỉ, với bún tươi, đậu phụ giòn tan bên ngoài, mềm mịn bên trong, chả cốm dẻo dai và thịt chân giò luộc vừa chín tới. Tất cả nguyên liệu đều được chọn lọc kỹ lưỡng để đảm bảo độ tươi ngon và hương vị thơm ngon nhất cho món ăn.",
      pricing: "30.000đ - 100.000đ",
      openclosed: "Mở cả ngày",
      sdt: "0866 823 822",
      fanpage:
        "https://hoalac247.com/quan-bun-djau-son-beo-thach-hoa-thach-that-ha-noi",
      map: "https://maps.app.goo.gl/Ke6x7oG7YaWtcqX67",
      rating: 4,
    },
  ];

  // useEffect(() => {
  //   fetch("http://localhost:3004/foodstore")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setData(data);
  //     });
  // }, []);

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
                      <FoodCard key={e.id} {...e} />
                    )
                  );
                } else {
                  return <FoodCard key={e.id} {...e} />;
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
                if (value != "" && e.type == "Tân Xã") {
                  return (
                    e.name
                      .trim()
                      .toLowerCase()
                      .includes(value.trim().toLowerCase()) && (
                      <FoodCard key={e.id} {...e} />
                    )
                  );
                } else if (e.type == "Tân Xã") {
                  return <FoodCard key={e.id} {...e} />;
                }
              })}
            </div>
          </div>
          {/* Tabs 3 */}
          <div
            className={
              activeTab == 3
                ? "content-wrapper tabs1"
                : "content-wrapper disable"
            }
          >
            <div className="tab flex flex-wrap gap-3 items-center justify-center">
              {data.map((e) => {
                if (value != "" && e.type == "Thạch Thất") {
                  return (
                    e.name
                      .trim()
                      .toLowerCase()
                      .includes(value.trim().toLowerCase()) && (
                      <FoodCard key={e.id} {...e} />
                    )
                  );
                } else if (e.type == "Thạch Thất") {
                  return <FoodCard key={e.id} {...e} />;
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
