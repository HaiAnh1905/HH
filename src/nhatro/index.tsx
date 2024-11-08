import { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
// import useSWR from "swr";
import "./style.scss";
import Nhatro from "./nhatro.tsx";

interface IData {
  name: String;
  type: String;
  discription: String;
  img: String[];
  pricing: String;
  rating: number;
  address: String;
  distance: String;
  map: string;
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
  const data: IData[] = [
    {
      name: "Nhà Trọ HolaGates",
      address: "Mục Uyên, thôn 9, Tân Xã",
      type: "tanxa",
      pricing: "3tr - 4tr VNĐ",
      distance: "Cách trường FPT 3km",
      discription:
        "an toàn, cửa an ninh bằng vân tay, camera, khá đầy đủ tiện nghi: ban công tập thể phơi đồ, có bao gồm: tủ đựng đồ, máy giặt chung, nóng lạnh,... ",
      img: [
        "https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/371480182_1064630918249339_3986696712995582672_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeGEoVHtqBHyBWdXpA4WJFnWt1dcq6BtefS3V1yroG159FIEioyVWBRFd5fNm0V3YFDCMg-fRJj0CcOwqckRN-Kd&_nc_ohc=3qzM_CCwGL4Q7kNvgG9bAw4&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&_nc_gid=An7aSA8uyAodAR5SuTCUlSn&oh=00_AYBkDh7V7JjygSj3J65WzhnSf_yGn22gCukPTpu6qEF_Vw&oe=6732A249",
      ],
      rating: 4,
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.3829877082!2d105.54650827438397!3d21.017356380629124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345b7976e327fd%3A0x26032d86f6c42c69!2zTmjDoCBUcuG7jSBIb2xhIEdhdGVz!5e0!3m2!1svi!2s!4v1731026577486!5m2!1svi!2s  ",
    },
    {
      name: "Nhà Trọ Young House 8",
      type: "tanxa",
      address: "Đường Mục Uyên, Thôn 5, Tân Xã",
      pricing: "2tr - 2,3tr VNĐ, dịch vụ 200/người, điện 3,5k/số",
      distance: "Cách trường FPT 3,5km",
      discription:
        "an toàn, cửa vân tay, báo cháy đầy đủ dịch vụ chăm sóc khách hàng tốt, ưu đãi young food and drink voucher giảm giá, cơ sở vật chất đầy đủ tiện nghi, phòng đẹp lịch sự có ghác xếp có ban công mát nhưng hơi nhỏ, máy giặt chung, có thang máy, tiền dịch vụ tất cả là 200k/tháng mỗi người bao gồm cả nước, gần chợ, gần quán ăn chỗ sửa xe nhà thuốc.",
      img: [
        "https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/460842564_1879412892557348_5458603487897647487_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeHWhpI3E2ECinFjcy3zqWLtyIBVBDyDsU3IgFUEPIOxTdjYh7PuN2KebkSeYAPHvVQ42BBu_J5PN_3BOr0fVIwY&_nc_ohc=IlouJ6V09IQQ7kNvgFefcwf&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&_nc_gid=AZAUdyD9u-t14T8fecge69n&oh=00_AYBheu9ak_wCKLv9uVaKdR5mT0_D8K1ThNsr6uGqsZC3nA&oe=67329A8A",
      ],
      rating: 4.5,
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.318131790531!2d105.55284797438402!3d21.019953080627197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345b5ddf893bd3%3A0xc7e243a204cc7516!2sYoung%20Hostel%208!5e0!3m2!1svi!2s!4v1731026690200!5m2!1svi!2s",
    },
    {
      name: "Nhà Trọ Thành Nam 2",
      type: "thachhoa",
      address: "số 12, ngõ 2, cụm 4, thôn 3, Thạch Hòa",
      pricing: "1,3tr - 1,8tr VNĐ",
      distance: "Cách trường FPT 1km",
      discription:
        "Giờ giới nghiêm: 24h (bạn nào cần đi có việc báo bảo vệ mở hoặc đưa cho khóa riêng). Bảo vệ 24/24, có camera quan sát và gần bến xe bus. Có sẵn giường, bàn, ghế, wifi, tủ, nóng lạnh, điều hòa, khu bếp riêng, chỗ phơi quần áo trong nhà….",
      img: [
        "https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/459559886_8309119142537421_4731538111609805528_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeGNTS_iL-LE1FkyOz-krJBDd0TKaY0MNGd3RMppjQw0Z7gbhrujcE3RZ7kKhJvOc0QIddiusCydk2sdjD5geIwc&_nc_ohc=8Te1j_8iTzEQ7kNvgFMbW76&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&_nc_gid=AyHF8L32xD5l4PzPWphnhDz&oh=00_AYD8bchBxdo3ebZinFKMcIikEABh6Ls9RHBomuo2lBvDxA&oe=6732AD81",
      ],
      rating: 3,
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.6265255665417!2d105.5146489743837!3d21.007602880636465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345b4c6051be09%3A0xb78a62151036ad49!2zTmjDoCBUcuG7jSBUaMOgbmggTmFtIDI!5e0!3m2!1svi!2s!4v1731026733601!5m2!1svi!2s",
    },
    {
      name: "Nhà Trọ Minh Quân",
      type: "binhyen",
      address: "Thôn Thái Bình, xã Bình Yên, Thạch Thất, Hà Nội",
      pricing: "1,5tr – 1,8tr VNĐ",
      distance: "Cách trường FPT 3km",
      discription:
        "Bảo vệ 24/24, có camera quan sát. Có sẵn giường, bàn, ghế, wifi, tủ, nóng lạnh, điều hòa, khu bếp riêng, có wifi mạnh free",
      img: [
        "https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/455918450_481808181136354_1486140052071412170_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeFozWuclrK0iVu7bZEwYPHtJbeQ82mqffUlt5Dzaap99R8dXawefyJa43q-VmsObPzgPbBK-SWuMILTUvTVwBHI&_nc_ohc=-uwZLwtGZTAQ7kNvgHzXckp&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&_nc_gid=AwcyEZzgABxoPGckcEwsu_5&oh=00_AYAZi5f10AR5Sqn2og5xsR5rzkjLZcO0CF4YY4Gbsrl77Q&oe=6732BEFF",
      ],
      rating: 3,
      map: "",
    },
    {
      name: "Nhà trọ Hòa Lạc Xanh",
      type: "thachhoa",
      address: "cụm 4, thôn 3, Thạch Hòa",
      pricing: "1.3tr - 1.8tr VNĐ",
      distance: "Cách trường FPT 1km",
      discription:
        "An ninh đảm bảo, ra vào tất cả đều bằng vân tay, camera an ninh 24/24, giờ giấc thoải mái Nội thất có sẵn: tủ, giường, đệm, điều hoà, nóng  lạnh, bàn nấu ăn, bồn rửa bát, kệ bát, quạt; máy giặt, máy lọc nước Mỗi phòng có 1 cục wifi riêng vào từng phòng. Có lối thoát hiểm, đầy đủ giấy phép kinh doanh và đảm bảo An Toàn PCCC",
      img: [
        "https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/459006428_450000891402217_8707389178345333806_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeFqZ4xCai0Ww7RjIEhzvoOJsBCwFLWJQ-6wELAUtYlD7i3HvPA8sJfoy8POZSxMDbt7GMMFjAYvHMQ2obiYnRyH&_nc_ohc=RGINlXrWL9IQ7kNvgGj35PK&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&_nc_gid=Ay_T07AHO8nBU8D5HI9tGuX&oh=00_AYB-GBEMFzjpSEeIU838YrbcgYgL8GtdwxfTTV98-UMR4A&oe=6732A3B5",
      ],
      rating: 3.5,
      map: "",
    },
    {
      name: "Nhà trọ New House",
      type: "thachhoa",
      address: "TĐC Bắc Phú Cát, Thạch Hòa, Thạch Thất Hà Nội",
      pricing: "1.5tr - 2tr VNĐ",
      distance: "Cách trường FPT 5km",
      discription:
        "Được trang bị PCCC đầy đủ đảm bảo an toàn. Đặc biệt ĐIỆN KHỎE NƯỚC MẠNH Hệ thống camera an ninh đầy đủ An toàn, khóa cửa Vân Tay Đầy đủ nội thất: Giường, tủ quần áo, bàn học, giá sách, tủ lạnh, điều hòa, nóng lạnh, máy giặt chung trên sân thượng, máy lọc nước chung tiện ích Vệ sinh khép kín, bếp tách biệt Tiện ích photocopy tại tầng 1. Chỗ để xe rộng rãi",
      img: [
        "https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/466339847_1244714090108678_1452057722412601664_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeFJOwQC7oMhOp1l4uCUy5m5XwvEioIk5LJfC8SKgiTksoNI3Yorv4pZcYX5HRlzM0jANQ5MYPEOWyzXDm9WUth8&_nc_ohc=X_gh3-_TxvUQ7kNvgEFdrjb&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&_nc_gid=AgdY9K6FjyzE05DkRk_3nlT&oh=00_AYC5WVR6iyhXx16yivISY63WMY7PDS2wQ4YAIMkLg7A4AQ&oe=6732B482",
      ],
      rating: 3,
      map: "",
    },
    {
      name: "Nhà trọ Kim Ngân",
      type: "thachhoa",
      address: "Thôn 4, Thạch Hòa, Thạch Thất",
      pricing: "1,6tr - 2,3tr VNĐ (bao gồm dịch vụ)",
      distance: "Cách trường FPT 1.5km",
      discription:
        "cửa từ vân tay an toàn, hệ thống camera an ninh tốt Đầy đủ nội thất: Kệ Bếp nấu ăn+ chậu rửa, bình nóng lạnh, điều hoà, máy lọc nước, máy giặt, wifi tốc độ cao trang bị từng phòng...tất cả đều free! 2 mặt thoáng sáng, ban công. Bãi đỗ xe rộng rãi, cửa từ vân tay an toàn. Không giới hạn giờ giấc, không chung chủ Không gian xanh mướt rộng rãi cực kỳ thoáng mát!",
      img: [
        "https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/455037425_816164143975335_1537406796794375886_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeGOZO3ThvPImR9Kq94oyPjhFEpABfChzuUUSkAF8KHO5ajkNro2hX7_3A8Yzt6xP36BXfxPs-UGDTk5iMCFjtZs&_nc_ohc=CngqEfey30EQ7kNvgFg0ART&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&_nc_gid=AWyxn-117Z1y40Z2W0e5d5l&oh=00_AYDjA0I-IVaJLNiQf3pIauDFNfGpdZ5EwRMfIcuO0UV5YA&oe=6732B4EB",
      ],
      rating: 4,
      map: "",
    },
    {
      name: "Nhà trọ Hà Nội House",
      type: "thachhoa",
      address: "Thôn 2, Thạch Hòa, Thạch Thất",
      pricing: "2tr - 3tr tùy phòng, điện 3k, miễn phí dịch vụ, miễn phí nước",
      distance: "Cách trường FPT 2km",
      discription:
        "Bảo vệ 24/24, PCCC đầy đủ, cửa từ cửa cuốn an toàn, cửa từ cửa cuốn an toàn full nội thất, đệm, điều hòa, nóng lạnh tủ lạnh, bếp từ... phòng sạch sẽ, thoáng mát, điện nước mạnh",
      img: [
        "https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/464948194_2975306159290549_4846382143806361608_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeGeW2C_U4LyOvBDQ5FCVPbOdQOlHUho_Il1A6UdSGj8iU7QJb6HHWQ4F4vtIXQ4_e7vC5DdhBmHn6HMzenFhet9&_nc_ohc=Ndt0wpt2Mw0Q7kNvgEXHLmd&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&_nc_gid=A21tokRTnltL-fG7ylGIwIe&oh=00_AYD8D5OvS7BYseOvjyvUCZrF75VWeNdkglb_Mt7xiA-BnA&oe=6732A775",
      ],
      rating: 4,
      map: "",
    },
    {
      name: "Nhà Trọ Bảo Ngọc",
      type: "thachhoa",
      address: "Thôn 3 Thạch Hòa Sau Nhà Hàng Phú Bình",
      pricing: "1,5tr - 2,5tr VNĐ phí dịch vụ 150k",
      distance: "Cách trường FPT 1.5km",
      discription:
        "cổng vân tay ,có bảo vệ ,an ninh đảm bảo Đặc biệt Đảm bảo các an toàn về PCCC - Thang thoát hiểm - Hệ thống báo cháy nổ từng phòng. Phòng đầy đủ Tủ đồ ,bàn học,tủ bếp, nóng lạnh, điều hòa,… luôn nhé Nhà xe rộng thoáng mát ,thang máy Cách trạm bus 80m tuyến bus 88.107.chạy qua cổng trg FPT ,gần cửa hàng tiện lợi ,siêu thị,quán cơm sv ,quán ăn vặt",
      img: [
        "https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/465737672_3346044855528873_721784053261211264_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeEMvfYlPW6w46CLUEbVs8zk0IfenFrs8DXQh96cWuzwNfkAo-1Xby2yMnVTLs1D7N7Wkxmn_ZTzT9cYyXfkIPZ4&_nc_ohc=gnnejZ8V3p0Q7kNvgHKwFXy&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&_nc_gid=AGa7Q_X8pYPa7_yh4mO0oO9&oh=00_AYCMgjbJdMiIWhwFLzlz5Bl00Rp19TfRZ3ViSqT-m8M0Zg&oe=6732A4D0",
      ],
      rating: 4,
      map: "",
    },
    {
      name: "Nhà trọ Hồng Nhàn",
      type: "tanxa",
      address: "Thôn 2 Tân XÃ",
      pricing: "2tr - 2tr3 VNĐ tiền dịch vụ 150k tiền điện 3k/số ",
      distance: "Cách trường FPT 3.5km",
      discription:
        "cổng vân tay, camera an ninh đảm bảo, báo cháy an toàn Phòng có sẵn wifi, bàn, ghế, tủ, nóng lạnh, điều hòa, giường, ... gần quán ăn, gần hồ Tân xã, cách trạm xá 400m, gần quầy thuốc,...",
      img: [
        "https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/452321373_3841977332795143_7204678898841661651_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeEV7G9TZRRvmo_6UCQyy5TMa0BgkRqm-95rQGCRGqb73hqQOQ3uX_ZH4DJSGBuenaWJnU3_aFukg3F6N4XCLb3E&_nc_ohc=97pfZNowkHkQ7kNvgHmGKn_&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&_nc_gid=AN8UodlenCnc-tSIxs_b2hZ&oh=00_AYDfhKp-gkKUhtFYCeNxB7ocpcMmTUlT9XfGaHnOaGbkKw&oe=6732AC1C",
      ],
      rating: 3,
      map: "",
    },
    {
      name: "Nhà trọ Quỳnh Anh",
      address: "Thôn 4, Thạch Hoà Thạch Thất",
      type: "thachhoa",
      pricing: "1,6tr - 2tr",
      distance: "Cách trường FPT 2.5km",
      discription:
        "an toàn, cửa vân tay, báo cháy đầy đủ, camera an ninh đảm bảo, Phòng có sẵn wifi, bàn, ghế, tủ, gần quán ăn, gần quầy thuốc, có wifi mạnh free...",
      img: [
        "https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/453864707_3801671430113008_5264503850294604620_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeGGzOfiFbkFBrJG8uSSm5zpewIOv54gwH97Ag6_niDAf3stl3iwmiWVwelqloJlbA3E6laGWm3eAM_fZ_zqo8kz&_nc_ohc=6Q-EfrCP7c4Q7kNvgGXZ9Nd&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&_nc_gid=A9JSjHWISOWmkjwIun0Hf2D&oh=00_AYDlXAMFfUT9IO2QU5rNebTh9rYCIhYSC6K1Im82L2Jp3Q&oe=6732BAA9",
      ],
      rating: 3.5,
      map: "",
    },
    {
      name: "Nhà trọ Whitehouse",
      type: "tanxa",
      address: "Kim Bông, Xóm Quán, Tân Xã, Thạch Thất",
      pricing: "2,5tr - 4tr",
      distance: "Cách trường FPT 3.7km",
      discription:
        "an toàn, cửa vân tay, báo cháy đầy đủ, camera an ninh đảm bảo, Phòng có sẵn wifi, bàn, ghế, tủ, Phòng đẹp rộng từ 25m đến 45m cách mixue Tân xã hồ Tân Xã 500m Trạm điện riêng biệt",
      img: [
        "https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/453386016_8757989437549415_3228375370848462550_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeGg47YHheZFyqLazb20LLo08Aw_8B8VWJLwDD_wHxVYksMZNBx5pwmw5xcP29RD7tdv4174WNkamIBAd_nNHKFT&_nc_ohc=WQLwYTks6PoQ7kNvgGelP7Q&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&_nc_gid=AykWhvzyI5aC0n1rSyBpBb2&oh=00_AYBG6hHowsCHt2wOY4l6sEteb3craPeen3E8ztmb-AzIcw&oe=67329EE0",
      ],
      rating: 4,
      map: "",
    },
    {
      name: "Nhà trọ Hoàng Kim House",
      type: "binhyen",
      address: "Cổng làng thôn Linh Sơn, xã Bình Yên, Thạch Thất, Hà Nội",
      pricing: "1tr7- 2tr5",
      distance: "Cách trường FPT 2.4km",
      discription:
        "Diện Tích sử dụng: 20-45m2 Đầy đủ: Điều hòa, Nóng Lạnh, tu lanh.Tủ Quần áo, Bàn học, Khu nấu ăn có kệ bếp, bồn rửa, tủ bếp, giá bát, vệ sinh khép kín, giường , chăn ga, gối đệm đủ cả Cách Trung tâm ngã 3 Hòa Lạc 300m:Chợ hòa Lạc, Điện máy xanh, Mediamart, thế giới di động, FPTshop, Siêu Thị, Tạp Hóa, điểm Bus, cách đường Quốc lộ 21 là 50m tiện các xe khách đi các tỉnh.",
      img: [
        "https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/465052425_2975306449290520_7765254370572377175_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeGURNKqIkcRIDHAGNcA9wnP_0CtumduxvT_QK26Z27G9LTPg5_ZbaVvka1BTbxo5rtNPYilE1FfFczA1tiJqY2Z&_nc_ohc=-4_ISBYUj1AQ7kNvgGcfSHD&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&_nc_gid=AChllNSdLRNJPicOG-Kmpr3&oh=00_AYAHvW0EVO3AWV3kfk-9rYVDI6Vz93BMCj2LLKPMTwlGbA&oe=6732A849",
      ],
      rating: 4.5,
      map: "",
    },
    {
      name: "Nhà trọ Gia Bảo",
      type: "thachhoa",
      address: "Thôn 2, Kim Bông (cách siêu thị Mạnh Quân tân xã chưa tới 1km)",
      pricing: "1tr5- 2tr bao dịch vụ",
      distance: "Cách trường FPT 2.5km",
      discription:
        "Điều hòa, Nóng Lạnh.Tủ Quần áo, bồn rửa, giường, (cách siêu thị Mạnh Quân tân xã chưa tới 1km), Không giới hạn giờ giấc, camera an ninh. Anh chị chủ siêu thân thiện.",
      img: [
        "https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/457050791_1718804675522093_836610345721433368_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeHaGtRtg43B-EA7nnhoOYZMoqGv779vo3Kioa_vv2-jciDWbNks5tNg-FkLIHuFmV10MY8gExegt9442JjumcJ7&_nc_ohc=CYLWaRWOvvMQ7kNvgEq9K1o&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&_nc_gid=AnVLKbZ9LDcZDQLg9N21ZMk&oh=00_AYAaQwp3Kn4O3Dcox5HWFtYdeQ-CBMHHgbGlt21ty2WwLA&oe=6732BAB4",
      ],
      rating: 3.5,
      map: "",
    },
    {
      name: "Nhà trọ Mạnh Tuyến 1",
      address: "Kim Bông, Tân Xá, Thạch Thất",
      pricing: "2tr1- 2tr8 dịch vụ 200k/ người, Điện 2,8k/số",
      distance: "Cách trường FPT 3.8km",
      type: "tanxa",
      discription:
        "Phòng có Điều hòa, Nóng Lạnh, Tủ Quần áo, camera an ninh Ngay gần trọ có 2 tiệm tạp hoá Không chung chủ, không giới hạn giờ giấc, cổng có khoá vân tay. Anh chị chủ siêu thân thiện",
      img: [
        "https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/458780079_1301070060860937_1460600502277750793_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeF4gOPyLsYFlbALcfjVaXDnctNZRGvhSyZy01lEa-FLJjlvsv88oYa-hikpeieHYaeYoDMI-EpJXg-H6Lp8WbUM&_nc_ohc=fAxtSUKApksQ7kNvgELyTbE&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&_nc_gid=A8xNoKfZeWxdO3WTiYGktxZ&oh=00_AYBaGv85rPYBSID3qlpYfP6fr6iJ9raYDpcxLReIzUZoVw&oe=67329983",
      ],
      rating: 4.5,
      map: "",
    },
    {
      name: "Nhà trọ Sweet Home",
      address: "Kim Bông, Tân Xá, Thạch Thất",
      pricing: "2tr2- 3tr gồm dịch vụ, Điện 3,5k/số",
      distance: "Cách trường FPT 3.5km",
      type: "tanxa",
      discription:
        "Phòng có Điều hòa, Nóng Lạnh, Tủ Quần áo, camera an ninh Ngay gần trọ có 2 tiệm tạp hoá Không chung chủ, không giới hạn giờ giấc, cổng có khoá vân tay. Anh chị chủ siêu thân thiện",
      img: [
        "https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/466064111_494772840258355_2804270843091863477_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeEdSWPxIpG-aQhPIdzrindCdLb1BEuNxFx0tvUES43EXEJJKZG-USzCR8yrtNIj5hx9-jXtzgBXrKcE1lhFOMal&_nc_ohc=YStZmSF94JQQ7kNvgEiKQdP&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&_nc_gid=AdNgZV-IsIVrNkJIlSuAYHq&oh=00_AYBzizrHpoHabqB_rd0BQJtuGL70eTP3A1OVzig-JnvhCg&oe=67329E90",
      ],
      rating: 4,
      map: "",
    },
    {
      name: "Nhà trọ Homeme",
      address: "Kim Bông, Tân Xá, Thạch Thất",
      pricing: "1tr8 - 2tr",
      distance: "Cách trường FPT 3.5km",
      type: "tanxa",
      discription:
        "Đầy đủ tiện nghi,nóng lạnh điều hòa, tủ quần áo, máy giặt - cửa vân tay! chỗ để xe  rộng rãi, cam an ninh xung quanh nhà, Vị trí thuận tiện sát mixue- hải sản làng chài , siêu thị mạnh quân, sân bóng đại dương",
      img: [
        "https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/459170687_450000984735541_5162187720886046152_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeGZ8BXzsivQiFI4TzFYc2ehG8XwWHnH_ZEbxfBYecf9kbAflBx8UriMI1TLJ4iSgmBwexwHCZ3jxLb-sIOPqRr3&_nc_ohc=5LXj1DqAzsEQ7kNvgEAKuSi&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&_nc_gid=AsT-guz6vJLuR3QKNgsuA1P&oh=00_AYCzpltnSIB7rXx5bQ24C1Za3gLdAH9h5dqaRrzWyzyNXg&oe=6732AC2C",
      ],
      rating: 4,
      map: "",
    },
  ];
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
                  padding: "0.4% 1%",
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
