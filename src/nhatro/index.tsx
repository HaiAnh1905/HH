import { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
// import useSWR from "swr";
import "./style.scss";
import Nhatro from "./nhatro.tsx";

interface IData {
  name: String;
  type: String;
  discription: String;
  img: String;
  pricing: String;
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
  const data : IData[] = [{
    "name": "Nhà Trọ HolaGates",
    "address": "Mục Uyên, thôn 9, Tân Xã",
    "type": "tanxa",
    "pricing": "3tr - 4tr VNĐ",
    "distance": "Cách trường FPT 3km",
    "discription": "an toàn, cửa an ninh bằng vân tay, camera, khá đầy đủ tiện nghi: ban công tập thể phơi đồ, có bao gồm: tủ đựng đồ, máy giặt chung, nóng lạnh,... ",
    "img": "https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/373489964_24469605455972483_926705395534968466_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeFGoP3JBxEq8Oxgii1sLbSxqgpLEwlUus6qCksTCVS6zneNv4CSbAws4kVBI5u7xgerqp0UwT2FQl-pu_usUkS2&_nc_ohc=9dlMRoq4TLgQ7kNvgEmdn-x&_nc_zt=23&_nc_ht=scontent.fhan14-3.fna&_nc_gid=At6v3ZqAb_VcEtsh1ulpfCs&oh=00_AYAU-tV0wbQfTyWzab57dc2YHI1gq9KbqMh5aIYp83G3wA&oe=6727E4AB",
    "rating": 4
  },
  {
    "name": "Nhà Trọ Young House 8",
    "type": "tanxa",
    "address": "Đường Mục Uyên, Thôn 5, Tân Xã",
    "pricing": "2tr - 2,3tr VNĐ, dịch vụ 200/người, điện 3,5k/số",
    "distance": "Cách trường FPT 3,5km",
    "discription": "an toàn, cửa vân tay, báo cháy đầy đủ dịch vụ chăm sóc khách hàng tốt, ưu đãi young food and drink voucher giảm giá, cơ sở vật chất đầy đủ tiện nghi, phòng đẹp lịch sự có ghác xếp có ban công mát nhưng hơi nhỏ, máy giặt chung, có thang máy, tiền dịch vụ tất cả là 200k/tháng mỗi người bao gồm cả nước, gần chợ, gần quán ăn chỗ sửa xe nhà thuốc.",
    "img": "https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-6/460842564_1879412892557348_5458603487897647487_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeHWhpI3E2ECinFjcy3zqWLtyIBVBDyDsU3IgFUEPIOxTdjYh7PuN2KebkSeYAPHvVQ42BBu_J5PN_3BOr0fVIwY&_nc_ohc=GRsD2Yfc2x0Q7kNvgFGTVbb&_nc_zt=23&_nc_ht=scontent.fhan14-5.fna&_nc_gid=AdIT2IFOLVR1dufu81E2TBc&oh=00_AYCnVshl_752u7WQp8nWwwGPNaR8psLH3nm8wm1-fKXfcA&oe=672846CA",
    "rating": 4.5
  },
  {
    "name": "Nhà Trọ Thành Nam 2",
    "type": "thachhoa",
    "address": "số 12, ngõ 2, cụm 4, thôn 3, Thạch Hòa",
    "pricing": "1,3tr - 1,8tr VNĐ",
    "distance": "Cách trường FPT 1km",
    "discription": "Giờ giới nghiêm: 24h (bạn nào cần đi có việc báo bảo vệ mở hoặc đưa cho khóa riêng). Bảo vệ 24/24, có camera quan sát và gần bến xe bus. Có sẵn giường, bàn, ghế, wifi, tủ, nóng lạnh, điều hòa, khu bếp riêng, chỗ phơi quần áo trong nhà….",
    "img": "https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-6/430720514_274960018979051_5470552854697490723_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeE4mSehP1a1WmZ2Au5knp_iEi5ARs9G70QSLkBGz0bvRP32oqsVhdR0jEwclYO0jsV-sSZuB86v1-SPoSxWfEKR&_nc_ohc=PaO-RCjt0mYQ7kNvgFc6-ss&_nc_zt=23&_nc_ht=scontent.fhan14-5.fna&_nc_gid=AXYjx83LhqlylJI8Z7WvxwE&oh=00_AYCu5g3mB4m_Src-ab7NqOUxp9pLAlQv6u8jzSJxjTvBGw&oe=67282B8A",
    "rating": 3
  },
  {
    "name": "Nhà Trọ Minh Quân",
    "type": "binhyen",
    "address": "Thôn Thái Bình, xã Bình Yên, Thạch Thất, Hà Nội",
    "pricing": "1,5tr – 1,8tr VNĐ",
    "distance": "Cách trường FPT 3km",
    "discription": "Bảo vệ 24/24, có camera quan sát. Có sẵn giường, bàn, ghế, wifi, tủ, nóng lạnh, điều hòa, khu bếp riêng, có wifi mạnh free",
    "img": "https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/454449812_1183831612965856_4907198535674261902_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeHP62zzI1nhvTBReoDmM1mYlqg-FVjDf4-WqD4VWMN_j_A4mrCWjN9eORHjUR0EKsaktHqPPHDMOvpW-12Rjly3&_nc_ohc=rp1jokq6PyYQ7kNvgFaPv0w&_nc_zt=23&_nc_ht=scontent.fhan14-2.fna&_nc_gid=AyAN9t4UtKjPJQGXj2Ugmob&oh=00_AYClP3JkXcFEAWktETszVAtkgL8cYk4NQQBDJxO0phviDA&oe=67281E95",
    "rating": 3
  },
  {
    "name": "Nhà trọ Hòa Lạc Xanh",
    "type": "thachhoa",
    "address": "cụm 4, thôn 3, Thạch Hòa",
    "pricing": "1.3tr - 1.8tr VNĐ",
    "distance": "Cách trường FPT 1km",
    "discription": "An ninh đảm bảo, ra vào tất cả đều bằng vân tay, camera an ninh 24/24, giờ giấc thoải mái Nội thất có sẵn: tủ, giường, đệm, điều hoà, nóng  lạnh, bàn nấu ăn, bồn rửa bát, kệ bát, quạt; máy giặt, máy lọc nước Mỗi phòng có 1 cục wifi riêng vào từng phòng. Có lối thoát hiểm, đầy đủ giấy phép kinh doanh và đảm bảo An Toàn PCCC",
    "img": "https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/461297456_2873294902834689_5059798071531272561_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeHmhLS-t3CuvayPXEUF-7O015mWT6XNAObXmZZPpc0A5stE1WyF5vzoegEyMUGjYYLSTyWjL_WmITEneBbC0aN6&_nc_ohc=sb0lAF09YOoQ7kNvgHbVNDT&_nc_zt=23&_nc_ht=scontent.fhan14-2.fna&_nc_gid=At6yD7UAjWRvzPKT6h79iek&oh=00_AYB9eSUqDr5-6bT11kc04stTTxpkxxg7BcFdu456trywRQ&oe=67281E01",
    "rating": 3.5
  },
  {
    "name": "Nhà trọ New House",
    "type": "thachhoa",
    "address": "TĐC Bắc Phú Cát, Thạch Hòa, Thạch Thất Hà Nội",
    "pricing": "1.5tr - 2tr VNĐ",
    "distance": "Cách trường FPT 5km",
    "discription": "Được trang bị PCCC đầy đủ đảm bảo an toàn. Đặc biệt ĐIỆN KHỎE NƯỚC MẠNH Hệ thống camera an ninh đầy đủ An toàn, khóa cửa Vân Tay Đầy đủ nội thất: Giường, tủ quần áo, bàn học, giá sách, tủ lạnh, điều hòa, nóng lạnh, máy giặt chung trên sân thượng, máy lọc nước chung tiện ích Vệ sinh khép kín, bếp tách biệt Tiện ích photocopy tại tầng 1. Chỗ để xe rộng rãi",
    "img": "https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-6/464597822_1218803566061802_7547718240780388594_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeEObXJNk9pCOgHaHF9UruEOMDHqvOKYCT8wMeq84pgJP5p3DQS-sjeiX2t2ybQiECkQ6WwkpBYVp1xyuZUzx8Lr&_nc_ohc=7eyDv8vZrq0Q7kNvgHhbXqr&_nc_zt=23&_nc_ht=scontent.fhan14-5.fna&_nc_gid=AL0ELZXOO9Qpahb6Vc4gs1H&oh=00_AYCiK2LBj-CV_CFnX6o0tqp6S43ZkFZLgv7hr3pjrfn9CQ&oe=672843D9",
    "rating": 3
  },
  {
    "name": "Nhà trọ Kim Ngân",
    "type": "thachhoa",
    "address": "Thôn 4, Thạch Hòa, Thạch Thất",
    "pricing": "1,6tr - 2,3tr VNĐ (bao gồm dịch vụ)",
    "distance": "Cách trường FPT 1.5km",
    "discription": "cửa từ vân tay an toàn, hệ thống camera an ninh tốt Đầy đủ nội thất: Kệ Bếp nấu ăn+ chậu rửa, bình nóng lạnh, điều hoà, máy lọc nước, máy giặt, wifi tốc độ cao trang bị từng phòng...tất cả đều free! 2 mặt thoáng sáng, ban công. Bãi đỗ xe rộng rãi, cửa từ vân tay an toàn. Không giới hạn giờ giấc, không chung chủ Không gian xanh mướt rộng rãi cực kỳ thoáng mát!",
    "img": "https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/463402841_1760933811107712_8607329580460468270_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeGXoEreJxSBpA2plxWZwfDXlb1qyN_H2vaVvWrI38fa9mve-qtUP5GwUmURQglGj8ggu61YlmqRb38j0_Tc4BQG&_nc_ohc=Ttm_R1wNATQQ7kNvgGKl-i1&_nc_zt=23&_nc_ht=scontent.fhan14-1.fna&_nc_gid=AzI8jck9ITNfX9T4ly2teQQ&oh=00_AYCT14RugtJUJGLtK1XqA-_CXfqPyVpqGId3gK0az-gM4A&oe=6728384D",
    "rating": 4
  },
  {
    "name": "Nhà trọ Hà Nội House",
    "type": "thachhoa",
    "address": "Thôn 2, Thạch Hòa, Thạch Thất",
    "pricing": "2tr - 3tr tùy phòng, điện 3k, miễn phí dịch vụ, miễn phí nước",
    "distance": "Cách trường FPT 2km",
    "discription": "Bảo vệ 24/24, PCCC đầy đủ, cửa từ cửa cuốn an toàn, cửa từ cửa cuốn an toàn full nội thất, đệm, điều hòa, nóng lạnh tủ lạnh, bếp từ... phòng sạch sẽ, thoáng mát, điện nước mạnh",
    "img": "https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-6/394274264_6492933027500709_3732250912208681367_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeGuZCZ9MCuSkScyviiai5ncBYrz4VYHfYMFivPhVgd9g0MPV1V6dYFIVqRWh9unJokihKwg0GeysM-sIVwJTknZ&_nc_ohc=v0G-s7p_ob0Q7kNvgEdz3dB&_nc_zt=23&_nc_ht=scontent.fhan14-5.fna&_nc_gid=AoTolIHhN3sYMOxkVeEQ9_l&oh=00_AYBOpINQ9xow3DgQwIYyzHKw2u5PLO5zXXHAW0IzHGRLng&oe=67282D61",
    "rating": 4
  },
  {
    "name": "Nhà Trọ Bảo Ngọc",
    "type": "thachhoa",
    "address": "Thôn 3 Thạch Hòa Sau Nhà Hàng Phú Bình",
    "pricing": "1,5tr - 2,5tr VNĐ phí dịch vụ 150k",
    "distance": "Cách trường FPT 1.5km",
    "discription": "cổng vân tay ,có bảo vệ ,an ninh đảm bảo Đặc biệt Đảm bảo các an toàn về PCCC - Thang thoát hiểm - Hệ thống báo cháy nổ từng phòng. Phòng đầy đủ Tủ đồ ,bàn học,tủ bếp, nóng lạnh, điều hòa,… luôn nhé Nhà xe rộng thoáng mát ,thang máy Cách trạm bus 80m tuyến bus 88.107.chạy qua cổng trg FPT ,gần cửa hàng tiện lợi ,siêu thị,quán cơm sv ,quán ăn vặt",
    "img": "https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-6/377499817_2299583696906693_3424247856176784431_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeFjdXfMwmO_bebCI5-T87U1lpWffEWyVDSWlZ98RbJUNJTAllQ4IaajBUefL7oLZ4t75z2CtvXbUGqr_HCbHyjX&_nc_ohc=kGzwFrVJ-T4Q7kNvgEawVgg&_nc_zt=23&_nc_ht=scontent.fhan14-5.fna&_nc_gid=ADgM694Nr9fZWUaKZ_YIaB6&oh=00_AYAUS20Uvmsa1F9Yw8nWZgbtcjAZm1hZtDO7pnynAnTGiA&oe=672854BE",
    "rating": 4
  },
  {
    "name": "Nhà trọ Hồng Nhàn",
    "type": "tanxa",
    "address": "Thôn 2 Tân XÃ",
    "pricing": "2tr - 2tr3 VNĐ tiền dịch vụ 150k tiền điện 3k/số ",
    "distance": "Cách trường FPT 3.5km",
    "discription": "cổng vân tay, camera an ninh đảm bảo, báo cháy an toàn Phòng có sẵn wifi, bàn, ghế, tủ, nóng lạnh, điều hòa, giường, ... gần quán ăn, gần hồ Tân xã, cách trạm xá 400m, gần quầy thuốc,...",
    "img": "https://scontent.fhan14-4.fna.fbcdn.net/v/t39.30808-6/454627157_7868229313305650_4445337647380800960_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeE7HNf3HjlJaBwaqFfUoIqOUtktgB0zmbFS2S2AHTOZsXkAdY31Li4-HrvnBwh-JZlsSokkCANhEJoDRnZPWVI2&_nc_ohc=BVohdCaZSugQ7kNvgG87-Ue&_nc_zt=23&_nc_ht=scontent.fhan14-4.fna&_nc_gid=ANZxuiT6FyXi1lqm5Dcn77r&oh=00_AYDWDjO7hoHu43bOqLpK8bCLm2Y__E9TXUSeM1qFRezk2Q&oe=672850A2",
    "rating": 3
  },
  {
    "name": "Nhà trọ Quỳnh Anh",
    "address": "Thôn 4, Thạch Hoà Thạch Thất",
    "type": "thachhoa",
    "pricing": "1,6tr - 2tr",
    "distance": "Cách trường FPT 2.5km",
    "discription": "an toàn, cửa vân tay, báo cháy đầy đủ, camera an ninh đảm bảo, Phòng có sẵn wifi, bàn, ghế, tủ, gần quán ăn, gần quầy thuốc, có wifi mạnh free...",
    "img": "https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/362257259_1235054617209313_7355697804170619808_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeHmemrPtjNaQEO43H4t--LOT18Xnjg4ShNPXxeeODhKEyWhq3z6ufkSut8oIPfFeAzkN1MC6xU4MefiMA_nDl3g&_nc_ohc=_RNAQbfRQegQ7kNvgGMXXYn&_nc_zt=23&_nc_ht=scontent.fhan14-3.fna&_nc_gid=AiEPI7U4Qhs-j1tj3xQe_rQ&oh=00_AYCYlC3TMyU_oVsucrA_Kxl9Ht6dftmWeIc-C8uqfn-FvA&oe=67284C01",
    "rating": 3.5
  },
  {
    "name": "Nhà trọ Whitehouse",
    "type": "tanxa",
    "address": "Kim Bông, Xóm Quán, Tân Xã, Thạch Thất",
    "pricing": "2,5tr - 4tr",
    "distance": "Cách trường FPT 3.7km",
    "discription": "an toàn, cửa vân tay, báo cháy đầy đủ, camera an ninh đảm bảo, Phòng có sẵn wifi, bàn, ghế, tủ, Phòng đẹp rộng từ 25m đến 45m cách mixue Tân xã hồ Tân Xã 500m Trạm điện riêng biệt",
    "img": "https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/465150622_9412103255471360_8953773435860994657_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeHzw111gXXSy8Yj2vIfX2AJdrrUgc4x4bR2utSBzjHhtJZQO7lOKTVYQqr2jOWVYUSWF9-IPMvWsv5Rcc2JsQoN&_nc_ohc=2lBKOIE871MQ7kNvgE6ISUm&_nc_zt=23&_nc_ht=scontent.fhan14-1.fna&_nc_gid=AlvsZ479J69EQ45EWzLQXOL&oh=00_AYDJxxBu9J0Okg1cOxGlt2j8MUAWTu7HxDO-ka_uG8JNaA&oe=67285741",
    "rating": 4
  },
  {
    "name": "Nhà trọ Hoàng Kim House",
    "type": "binhyen",
    "address": "Cổng làng thôn Linh Sơn, xã Bình Yên, Thạch Thất, Hà Nội",
    "pricing": "1tr7- 2tr5",
    "distance": "Cách trường FPT 2.4km",
    "discription": "Diện Tích sử dụng: 20-45m2 Đầy đủ: Điều hòa, Nóng Lạnh, tu lanh.Tủ Quần áo, Bàn học, Khu nấu ăn có kệ bếp, bồn rửa, tủ bếp, giá bát, vệ sinh khép kín, giường , chăn ga, gối đệm đủ cả Cách Trung tâm ngã 3 Hòa Lạc 300m:Chợ hòa Lạc, Điện máy xanh, Mediamart, thế giới di động, FPTshop, Siêu Thị, Tạp Hóa, điểm Bus, cách đường Quốc lộ 21 là 50m tiện các xe khách đi các tỉnh.",
    "img": "https://scontent.fhan14-4.fna.fbcdn.net/v/t39.30808-6/464813266_2975318179289347_3686721606846435800_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeGfGTpif3SX3PbfCJAkvhlNDh4GaaYtjRMOHgZppi2NE-LkX-_-y_aff3MowuE1GKuQhDuVBUzRoAotVI3_qLiM&_nc_ohc=qFQSXbzhdNgQ7kNvgGGkHzn&_nc_zt=23&_nc_ht=scontent.fhan14-4.fna&_nc_gid=A3vt5W3IG5CqhU68zYPj4g4&oh=00_AYBuIEdmeIOWlYkeae4fvVN9yLx3DhO1VUvtJVhmJV6aiw&oe=6728AC29",
    "rating": 4.5
  },
  {
    "name": "Nhà trọ Gia Bảo",
    "type": "thachhoa",
    "address": "Thôn 2, Kim Bông (cách siêu thị Mạnh Quân tân xã chưa tới 1km)",
    "pricing": "1tr5- 2tr bao dịch vụ",
    "distance": "Cách trường FPT 2.5km",
    "discription": "Điều hòa, Nóng Lạnh.Tủ Quần áo, bồn rửa, giường, (cách siêu thị Mạnh Quân tân xã chưa tới 1km), Không giới hạn giờ giấc, camera an ninh. Anh chị chủ siêu thân thiện.",
    "img": "https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/465055341_1768432430559317_6152979389006576357_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeHD6AyWWodnLvzcPTaLatReeOsOt6Hu6Qd46w63oe7pBwIzmffnSldo7-Shh6OFOo0WmlqogGHMiP4pVQ5pXr_q&_nc_ohc=70O-y9YcqJYQ7kNvgEqEUFR&_nc_zt=23&_nc_ht=scontent.fhan14-2.fna&_nc_gid=ApsaoZ5Pkelti88NdUQ2qSj&oh=00_AYCLM8K44izIDIIcyKF6ZbyLAl4niSZCnW-BLgi20zsJiQ&oe=672895D7",
    "rating": 3.5
  },
  {
    "name": "Nhà trọ Mạnh Tuyến 1",
    "address": "Kim Bông, Tân Xá, Thạch Thất",
    "pricing": "2tr1- 2tr8 dịch vụ 200k/ người, Điện 2,8k/số",
    "distance": "Cách trường FPT 3.8km",
    "type": "tanxa",
    "discription": "Phòng có Điều hòa, Nóng Lạnh, Tủ Quần áo, camera an ninh Ngay gần trọ có 2 tiệm tạp hoá Không chung chủ, không giới hạn giờ giấc, cổng có khoá vân tay. Anh chị chủ siêu thân thiện",
    "img": "https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/453408946_1016437530268199_5442523166702481165_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeFSPydZFQ7I4j9PTtIpjfKwBO85A38AK_cE7zkDfwAr929p4J_KQtLsq-MvDnNhxw9HZEz_VYTB2c5q2fpA_KiA&_nc_ohc=Ic82CxlWdsQQ7kNvgGj6evL&_nc_zt=23&_nc_ht=scontent.fhan14-3.fna&_nc_gid=AvzuLue3h0Ktirt4e4fVxE7&oh=00_AYBy4llhijKvRtWg7oKLJ-656XR9uDRgLUAnGbSUlgW0gw&oe=6729260E",
    "rating": 4.5
  },
  {
    "name": "Nhà trọ Sweet Home",
    "address": "Kim Bông, Tân Xá, Thạch Thất",
    "pricing": "2tr2- 3tr gồm dịch vụ, Điện 3,5k/số",
    "distance": "Cách trường FPT 3.5km",
    "type": "tanxa",
    "discription": "Phòng có Điều hòa, Nóng Lạnh, Tủ Quần áo, camera an ninh Ngay gần trọ có 2 tiệm tạp hoá Không chung chủ, không giới hạn giờ giấc, cổng có khoá vân tay. Anh chị chủ siêu thân thiện",
    "img": "https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/419299127_122147852624058766_4561394251012339928_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeE2n50Vq0I85-Py3tC--wofLQ_kBlRg1CctD-QGVGDUJweW06eYc6_3RhtL503D527ZU0Tmpe4tm2DhbxNAwhI8&_nc_ohc=WdMeiFMjQLIQ7kNvgFyagiJ&_nc_zt=23&_nc_ht=scontent.fhan14-2.fna&_nc_gid=AosvjueqjBZOIX6GJPQm6OU&oh=00_AYCo8QberUysXazCfxrb7EmXezR0oE35dc10MwdKyeeXLw&oe=67295179",
    "rating": 4
  },
  {
    "name": "Nhà trọ Sweet Home",
    "address": "Kim Bông, Tân Xá, Thạch Thất",
    "pricing": "2tr - 2tr3 gồm dịch vụ, Điện 3k/số",
    "distance": "Cách trường FPT 3.5km",
    "type": "tanxa",
    "discription": "Phòng 20m2  có gác xép rộng 10 mét ngủ trên gác xép được khép kín đầy đủ tiện nghi,nóng lạnh điều hòa, tủ quần áo, bệ bếp, trạn úp bát- máy giặt - cửa vân tay ! chỗ để xe  rộng rãi thoáng mát cam an ninh xung quanh nhà 24 /24 Vị trí thuận tiện sát mixue- hải sản làng chài , siêu thị mạnh quân, sân bóng đại dương",
    "img": "https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/363839095_305672715292766_5954009855968757043_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeGPgOAfbATRV7hK_niGNS4MUWgZt2d_hPRRaBm3Z3-E9FXzOX_2y03ErgMU9pqAzi2u1O64K0ttpzUyswUnttIf&_nc_ohc=SNGpDNMkW0kQ7kNvgEXGYf8&_nc_zt=23&_nc_ht=scontent.fhan14-1.fna&_nc_gid=AMOeERN6gB36H1zJbmpo7m2&oh=00_AYCTwqc5uynG6gBsvjiWnEiwNkUwwbR004Ee8G84t3aX9g&oe=67295808",
    "rating": 4
  },
  {
    "name": "Nhà trọ Homeme",
    "address": "Kim Bông, Tân Xá, Thạch Thất",
    "pricing": "1tr8 - 2tr",
    "distance": "Cách trường FPT 3.5km",
    "type": "tanxa",
    "discription": "Đầy đủ tiện nghi,nóng lạnh điều hòa, tủ quần áo, máy giặt - cửa vân tay! chỗ để xe  rộng rãi, cam an ninh xung quanh nhà, Vị trí thuận tiện sát mixue- hải sản làng chài , siêu thị mạnh quân, sân bóng đại dương",
    "img": "https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/451730898_1201356341057076_1353763417115359256_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeE3KwIWSb9fTvKvLybDp3gmxnOK4WUUu6XGc4rhZRS7pUWXR8ieffKE1aNhSuPVsdN2lA51w3_olFehNod0kgVQ&_nc_ohc=CKSfVnjuAl4Q7kNvgFYqRiC&_nc_zt=23&_nc_ht=scontent.fhan14-1.fna&_nc_gid=AkN7RcqO8veTzhnloDkBy4I&oh=00_AYAYY95T3o5qddA60xYWKMs7U3Mbd5DqSuUXtreGwiiJzA&oe=672937E9",
    "rating": 4
  }

  ]
  // const [data, setData] = useState<IData[]>([]);

  // useEffect(() => {
  //   fetch("http://localhost:3004/tro")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setData(data);
  //     });
  // }, []);
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
