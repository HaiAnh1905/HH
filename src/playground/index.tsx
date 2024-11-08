import { useState } from "react";
import Coffee from "./location/Coffee";
import { SearchOutlined } from "@ant-design/icons";
// import useSWR from "swr";
import "./style.scss";

// const pgUrl = process.env.REACT_APP_HOLA_HANBOOK;

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

export default function EntertainmentPage() {
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
  // const [data, setData] = useState<IData[]>([]);
  const data: IData[] = [
    {
      name: "Thiên đường Bảo Sơn",
      type: "playground",
      discription:
        "Thiên đường Bảo Sơn là một trong các khu vui chơi gần Hòa Lạc nhất, rất phù hợp với những gia đình có con nhỏ, là một tổ hợp vui chơi giải trí gồm tất cả 8 địa điểm chuyên biệt: Thiên đường văn hóa, sinh thái, trò chơi, nghệ thuật, ẩm thực, công nghệ, hội thảo, và dưới nước. Trong đó thiên đường sinh thái là nơi được ưa chuộng nhất. Ngay kể cả vào mùa đông, không phù hợp để chơi các trò chơi dưới nước thì đây vẫn là lựa chọn tuyệt vời. Trong khuôn viên Thiên đường Bảo Sơn có cả khu vực nhà hàng để các gia đình có thể ăn trưa và chơi cả ngày tại đây.",
      img: [
        "https://baosonparadise.vn/Uploads/images/hinh-anh-huong-dan--vui-choi-tu-a-z-tai-thien-duong-bao-son-2023-so-2.jpg",
        "https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/464950516_999229605580919_330119374135356835_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEwB8NLbgFPBhE1eVZfvtswOTt-ruAB1e45O36u4AHV7tgOeCpbTEM08JNpshcOMSEvA6lUk2MIcq6QF_OQ5Iz8&_nc_ohc=DNVOdQtqTgQQ7kNvgE4UiRW&_nc_zt=23&_nc_ht=scontent.fhan2-3.fna&_nc_gid=AHCQntQ5c4js4whNfDaQx61&oh=00_AYA3tv7JLwMgTDwd_UJsjxX_CpILW5-dpVvORcBJlWrViQ&oe=672F986B",
        "https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/437976549_859942562842958_4847094285779543464_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF6pKEAAKGOWXuxqsxR3qK_vGVtYK-2sqa8ZW1gr7ayplrnYbWzFzP6HwvBdHQeVcb-no4eIRjpTALg8F5LneH3&_nc_ohc=JRC0Q05PkgsQ7kNvgFceH3W&_nc_zt=23&_nc_ht=scontent.fhan2-4.fna&_nc_gid=ACzetiPL-3n36p-7iCBLMIR&oh=00_AYAYik5YSvqBxY0tkrrikDVR46WIqgW97AxU6lRVdgA73w&oe=672FC0F0",
        "https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/435005036_856082176562330_6370249112025708011_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE1JrqQOpkwrxSoyKqMrBFfwYJ4YE2ybojBgnhgTbJuiEK-Cq7T7In6wq9uTRPVEI3O4l72c9zON93sTNlfctSy&_nc_ohc=_ep0PM_E7nEQ7kNvgEwDGuM&_nc_zt=23&_nc_ht=scontent.fhan20-1.fna&_nc_gid=A9m4M1qpgh3ULR-SyZx-hWQ&oh=00_AYDsdt7-CNvacCdFfDFeNc0GOUGMK8dOGRUlmvNS1uDLPQ&oe=672FA878",
        "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/435104033_856074973229717_6671236484062679652_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEXlsmYthG0bg7SvEn5LZWBCVWCK04y3SkJVYIrTjLdKfKr3DnC1FsmOchzKUCp0cZ00AhXF_uPCRXfm2PrU25s&_nc_ohc=HR_uI73DOgEQ7kNvgF07BsE&_nc_zt=23&_nc_ht=scontent.fhan2-5.fna&_nc_gid=AxxKOqV9lXk00RZu4580as3&oh=00_AYDGOfJ2AlKDS8g27fCZhORBBEK6Gp0i-fGJA3JShwXCNQ&oe=672FACAC",
        "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/438206184_867765872060627_1408122406027587902_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG6a4M84R2XJ65oFOv4gZApOAriCIYfGBo4CuIIhh8YGuz-GEJRr84SuYQnvuXEGwwp86-qwOacYirk6CDjo9Y6&_nc_ohc=xhMOTnDsni4Q7kNvgHC23aV&_nc_zt=23&_nc_ht=scontent.fhan2-5.fna&_nc_gid=AyQDC-DSgy0fOlB8IcQUjeg&oh=00_AYBs6rEOwpoHZluwaHWhBed_Be-KVKcnCR-MrDlJkVL_bA&oe=672FC31D",
        "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/438239221_867765568727324_1670238143213496521_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEQfIHD_oDB5qIafpwo0bgeor2QejNHM1KivZB6M0czUnzpPm0yD-DC2-hYi9htpq7hRLTTYPcMinZvUOzIGFd0&_nc_ohc=pLj_GPgNIWoQ7kNvgGBoRXV&_nc_zt=23&_nc_ht=scontent.fhan2-5.fna&_nc_gid=AuNucIxj4xCNxbyAPXyS9OQ&oh=00_AYApKA2I2lJJLcxm3XG-jqFWu_Zo8T_BXH5IOVv1R62Svw&oe=672FC00A",
        "https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/438256108_867163372120877_4248976915097471356_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGrwoiBWHI4aVwS3CyBUDrpqqDDmIxjRxGqoMOYjGNHEYcQx5IvnC_sL7U3VlIg01D-MdmrY0Kep6smk_BSLgJL&_nc_ohc=4CaCT3FLiFUQ7kNvgGO92K0&_nc_zt=23&_nc_ht=scontent.fhan2-3.fna&_nc_gid=A24iIOmOKEJrncgUCIXutXF&oh=00_AYAiv-UE_i9faIq8h9JX5q2PYKwrijii797d8yG5zNMVTw&oe=672FC615",
        "https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/438217048_867163408787540_4232408936134588046_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEaIvbRD2_iyiChLo_CyZulsPMoWfFjANmw8yhZ8WMA2d0ApZmcN3OJKOnMhuPIimTTLLU4HjuB-bVz-_zMBK1n&_nc_ohc=ac_C9OOWJpsQ7kNvgGEZVAY&_nc_zt=23&_nc_ht=scontent.fhan2-3.fna&_nc_gid=A501KZJ5-A96d8vN4W1NKK3&oh=00_AYBmcXEfM1NfbSX40ZoljfK5UYUJSgAGPfuUSFzWFVstIw&oe=672FA5C4",
        "https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/438204793_867163432120871_8583951396648231444_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEYHjVKoHrM96p-Gnr0pr_y39GrQXMnCC_f0atBcycIL7GsAQNt5_sPC0_z4xc1YTpcywuT_Vjsj_4yAh2wT94I&_nc_ohc=Ilh7JP9dH5oQ7kNvgF9N9rg&_nc_zt=23&_nc_ht=scontent.fhan2-4.fna&_nc_gid=AcJ6w-PCvw5-amgl05XFqCy&oh=00_AYCqVtLa7SIjjcXhYYZBmuP9CYL8fuBZeMXD6Q13ZKa4ZQ&oe=672FBD04",
      ],
      rating: 4.5,
      paragraph: [
        "Khai trương từ năm 2008, với vốn đầu tư ban đầu lên đến 100 triệu USD, Công viên Thiên đường Bảo Sơn là 1 phần trong tổng thể dự án xây dựng, phát triển khu đô thị mới tại An Khánh, Hà Nội. Khu đô thị mới An Khánh sẽ là điểm nhấn của Miền Bắc Việt Nam trong tương lai với những công trình độc đáo về kiến trúc, hài hòa về phong thủy, tôn vinh văn hóa Việt Nam và đạt tiêu chuẩn quốc tế về điều kiện, môi trường và an ninh.",
        "Toạ lạc trên một không gian rộng lớn và thoáng đãng chỉ cách Trung tâm hội nghị Quốc gia 6 km dọc theo Đại lộ Thăng Long, Thiên Đường Bảo Sơn là khu giải trí tổng hợp cả lĩnh vực kinh tế và du lịch, là nơi kết hợp hài hoà giữa truyền thống và hiện đại trong sự lựa chọn tinh hoa và hội tụ - Thiên Đường Bảo Sơn là nơi lưu giữ nét đẹp văn hoá truyền thống, là thiên đường của văn hoá nghệ thuật, của công nghệ, sinh thái, giải trí và ẩm thực. Công viên là nơi mang vẻ đẹp nên thơ kết hợp hài hoà, khéo léo giữa thiên nhiên và nhân tạo, giữa kiến trúc cổ và kiến trúc hiện đại. Không khí trong lành nơi đây sẽ đem đến những giây phút cực kỳ sảng khoái, thanh thản cho du khách.",
        "Thiên đường Bảo Sơn là khu vui chơi nổi bật ở Hà Nội, thu hút du khách với các hoạt động như tham quan thủy cung, vườn thú, trải nghiệm trò chơi mạo hiểm, công viên nước, khám phá làng nghề và ẩm thực truyền thống Việt Nam. Ngoài ra, khu này còn tổ chức nhiều buổi biểu diễn nghệ thuật và lễ hội đặc sắc theo mùa, mang đến không gian giải trí phong phú và trải nghiệm văn hóa hấp dẫn.",
        "Công viên mở cửa vào tất cả các ngày trong tuần. Giá vé vui chơi trọn gói tại công viên Thiên đường Bảo Sơn hiện nay nằm trong khoảng 320.000 VNĐ đến 390.000 VNĐ.",
      ],
      link: "https://baosonparadise.vn/",
      fanpage:
        "https://www.facebook.com/congvienthienduongbaoson/?locale=vi_VN/",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3370.792382101786!2d105.7335397!3d20.998771599999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134539f01c0e377%3A0x1b615783eee3f50f!2zQ8O0bmcgVmnDqm4gVGhpw6puIMSQxrDhu51uZyBC4bqjbyBTxqFu!5e1!3m2!1svi!2s!4v1730798240358!5m2!1svi!2s",
    },
    // {
    //   name: "Quin Hill Hòa Lạc - Khu nghỉ dưỡng cho những kỳ nghỉ ngắn hạn",
    //   type: "playground",
    //   discription:
    //     "Quin Hill Hòa Lạc nằm tại xóm Dục, xã Yên Bình, huyện Thạch Thất, Hà Nội. Nơi đây chỉ cách Hà Nội khoảng 30 phút di chuyển. Điều này rất thuận tiện cho các chuyến du lịch trong ngày và qua đêm. Khu Quin Hill Hòa Lạc nằm trong bầu không khí trong lành, gần gũi với thiên nhiên.",
    //   img: [
    //     "https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/462228842_936048835023846_8282798394451855512_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGlKV2Ogiw1dKHihmJA-EB2jCW0dPQ_KsiMJbR09D8qyI8eSyO-0wYgqNfpbajyIGc8B1apKprryNm2_pdqCs_Y&_nc_ohc=Xc5wBK8d9loQ7kNvgFLkYuh&_nc_zt=23&_nc_ht=scontent.fhan2-3.fna&_nc_gid=AlD94oDPvkDSkuQ47Epuw3w&oh=00_AYCXXPIiIbd8EzO6TPeThxlXIUeenIwogPSSzoys5outMw&oe=672A5CB9",
    //     "https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/462216076_936048845023845_2302728988441525516_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHd7n-BT-UFToSq8aKduARIyMXoosfDylbIxeiix8PKVpr9Rb_ldZNo6-Q4OfHX8G9UkJH-K70HRnSr3AL1P-0M&_nc_ohc=3ulyvm4xE8MQ7kNvgFUN-WG&_nc_zt=23&_nc_ht=scontent.fhan2-3.fna&_nc_gid=AWeSRbZjCRk6zHIpVfxypGv&oh=00_AYCkqB896Y4KBkv-ZAO-hMzkUD96PzXPbAN6fMEmp7jemw&oe=672A7855",
    //     "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/462229390_936049045023825_8966478733619817635_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGvIbVpUiowjWFLdmV7QG1K6YuqT8rZb6npi6pPytlvqT8Dg9sdzyOC1tFNXX6adMqYGoW6sdL_UBnuUEq1cWuv&_nc_ohc=IxkJ661uBXoQ7kNvgELmRuP&_nc_zt=23&_nc_ht=scontent.fhan2-5.fna&_nc_gid=A9iUy4dEH0X1V5n5XX5XRzD&oh=00_AYDYz5bxgF249xNGEfqP-RvKqhCYI_tA6M69vsCEqjE99g&oe=672A7102",
    //     "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/462225069_936049065023823_7096032387005809770_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFqGllSdlnsIgO5Wfj_3FCk51CfT-Mi4TvnUJ9P4yLhO7gXQ-XlO5tAkNCihNDmq1reVgnuBLFlOjD6MbfMOXKJ&_nc_ohc=q8nPQZbceWIQ7kNvgGR7nAZ&_nc_zt=23&_nc_ht=scontent.fhan2-5.fna&_nc_gid=Ak2HXWvAJ1uy4u48VgYG8wx&oh=00_AYCBg-6Bmiaq3hV4Tgeqn21v1oQ-EzNkYE1Rng9j6WsUXw&oe=672A6E27",
    //     "https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/462187324_936049118357151_8230249560488933439_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF6Dmb_gzrcqMXAmx5ut-diQFI5u39_AyhAUjm7f38DKNdp4c9xB8_oo55XgSEpInZH6S1uvQMbdrTdu6ctZ5Wl&_nc_ohc=NomQ9YjQApAQ7kNvgG6JiuB&_nc_zt=23&_nc_ht=scontent.fhan2-3.fna&_nc_gid=AiAxrrBj6KcQ57RMvBAUvrW&oh=00_AYC726m7REQBrSwiIYQ1EdKyoISYN-8P7wWv_aQRz3_ZkQ&oe=672A4F9D",
    //     "https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/430837593_811355790826485_6009581772319920657_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFP7DWX_M4LMgWvbsIVSQ1EEnmAEmwJ_qwSeYASbAn-rPS-1gbnt5a3FMHFcHscZCRX09-sVffpwhBl0BqvVkH3&_nc_ohc=2CZc6Cz85r0Q7kNvgEdOJF4&_nc_zt=23&_nc_ht=scontent.fhan2-4.fna&_nc_gid=AHQd4xu9stVGdvBSy7BG9BJ&oh=00_AYC3rbrwLdzdW_upnpn6SO9ciyF9W9-6TxsQGMbvwxWl2A&oe=672A5BF2",
    //     "https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/430464206_806816167947114_8486363433792344028_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFk02HqPhIL7tjv8lzzeBvqh7epmgCAkcqHt6maAICRyg58xH5JWBge0xzHCf3vnPdeR282bF5_YM57E4eUVJnS&_nc_ohc=1jte2WWFpmYQ7kNvgE_bquA&_nc_zt=23&_nc_ht=scontent.fhan2-4.fna&_nc_gid=AjTRYg96uxg3vqlSHy3iSoi&oh=00_AYCFIoN48hUhxiTJ-6J_6zvn2oazzrACpnvEjdVVWB3W_A&oe=672A7104",
    //     "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/436206859_848245427137521_2227885297173267531_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFG3ZaOmuclVrfkT6ip6hNsbfpmW44xTcNt-mZbjjFNw1-hreyq1w7jAp89BVJBLCFA49ivC8JU_vW7t5ZhGtB6&_nc_ohc=wazid9IzFSUQ7kNvgE-W9Ow&_nc_zt=23&_nc_ht=scontent.fhan2-5.fna&_nc_gid=Ar0gh1MVGUhLr0e4LYhcz6B&oh=00_AYDhVYLDhEPLGmlcfWBGAZ9LEGz2FG4pT8CNHYnjA2NOQA&oe=672A6A70",
    //     "https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/433113510_811355697493161_8674307512359242224_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeG0kZn3qj1mtOrF9xDt2poe89g6QcgTg1bz2DpByBODVpfK8g0KIbUP6BJuEyl26YlA34Flbra7qGPWr8L1KwRs&_nc_ohc=TFZBHhzpd9kQ7kNvgHp4tWm&_nc_zt=23&_nc_ht=scontent.fhan2-4.fna&_nc_gid=ArwsHK7wN7nIfgNblhmzB94&oh=00_AYCmQhbeXOKi6c8HcA6Rats_ysDynU-YbFqsp75zd7FPUg&oe=672A4AAA",
    //     "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/432928115_811355667493164_6766064732920402049_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeH8kF4lg51f6bD6pHDbRewClDS4U4bUudGUNLhThtS50SVupS9vUgGQ-odZxfb26xIGFfHk1jyE6071rZZJV_CK&_nc_ohc=uAV1PQ0aTWoQ7kNvgFqWfnZ&_nc_zt=23&_nc_ht=scontent.fhan2-5.fna&_nc_gid=A4DTVfe5wfw45rnAcqgCMRz&oh=00_AYCaIfuLmXFZgNuHT3K9QZ1lIUrhW3rRnOiOkA-kOXIN1w&oe=672A5FAE",
    //   ],
    //   rating: 4.5,
    //   paragraph: [
    //     "Có rất nhiều dịch vụ tích hợp ở Quill Hill với giá từ 100.000đ/ người cho bạn thỏa sức lựa chọn.",
    //     "Điểm nhấn đầu tiên thu hút du khách chính là thiết kế của villa. Căn villa được thiết kế theo hướng hiện đại kết hợp với truyền thống. Nét hiện đại của villa thể hiện ở phần mái bằng cùng kính xung quanh. Với nguyên liệu là kính giúp du khách ngắm được phong cảnh xung quanh, hoàng hôn hay bình minh.",
    //     "Vì là một ngọn đồi hoang vắng, nên rất khó để tìm được một quán ăn hoặc một hàng tạp hóa nào đó. Đây gần như là một nơi chốn mà khi đến bạn sẽ phải biết mình nên mang những gì cần thiết. Các bữa ăn sẽ được nhân viên của khu nghỉ dưỡng chuẩn bị. Buổi tối sẽ có tiệc BBQ, đi nhiều người sẽ có đốt lửa trải, hát Karaoke… Bữa sáng bạn có thể order trước với các chị bên nhà bếp để các chị có thời gian chuẩn bị.",
    //     "Có rất nhiều dịch vụ tích hợp ở Quill Hill với giá từ 100.000đ/ người cho bạn thỏa sức lựa chọn.",
    //   ],
    //   link: "https://www.traveloka.com/vi-vn/explore/destination/gns-quin-hill-hoa-lac/228697",
    //   fanpage: "https://www.facebook.com/quinhillhoalac/",
    //   map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13485.464473455635!2d105.462025!3d20.9733543!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345d60728bcb91%3A0xa4c9bc4c52418864!2sQuin%20Hill%20Retreat!5e1!3m2!1svi!2s!4v1730798299696!5m2!1svi!2s",
    // },
    {
      name: "Làng Văn hóa Du lịch các Dân tộc Việt Nam",
      type: "playground",
      discription:
        "Làng văn hóa các dân tộc Đồng Mô là một địa điểm du lịch chỉ cách Hòa Lạc khoảng gần 13km, được xây dựng với tổng diện tích 1544 ha (trong đó có 605 ha mặt đất và 939 ha mặt nước). Đây là một khu văn hóa quốc gia, nơi lưu giữ bảo tồn và giới thiệu những di sản văn hóa truyền thống đặc sắc của 54 dân tộc Việt Nam. Khu vực tham quan chính là khu nhà ở các dân tộc Ba Na, M’ Nông, Xu Đăng, Giẻ Triêng, Gia Rai và Ê đê.",
      img: [
        "https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/454324689_475997071733754_8513109290974027699_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEusri9V2U8w6ehSOsE1a51eIDG74jZFNt4gMbviNkU22jGDJk5exKufruYWD-1NGrNNtgWRJClvcJ4K3Q67Zwa&_nc_ohc=CqgBWZSZVecQ7kNvgFZcwyH&_nc_zt=23&_nc_ht=scontent.fhan2-3.fna&_nc_gid=ACg9giWuqH5ESlRXKXFS1vo&oh=00_AYC5XjTjxJl6cIRGF4CGfaocO5Hib8xm_Zr4pbJUD7kfCQ&oe=672FB2CE",
        "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/460636307_507699091896885_6680526298723320309_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEyQ7K5mlTBVJK9pD9DUtFzW1u1eLwpymlbW7V4vCnKaV4iN_gMFOVpFM_8wmlmMuw-ve4ts-GIFfKrhIYHPk5R&_nc_ohc=REmrgYwGOfEQ7kNvgH9lsgN&_nc_zt=23&_nc_ht=scontent.fhan2-5.fna&_nc_gid=ArXLqoMN5Ai7Y0vftelGCAz&oh=00_AYB2Q0NvH32LZALX5o6t-niXdK7wCpDvqapr4ayER6k1AA&oe=672F9F15",
        "https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/449124252_453089194024542_4449789400138148677_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE4JFYLoAbx_iq_VMQYukUuyhik3Xo4UR_KGKTdejhRH4tygnXeCbcBPVpSHQ--32kuIv9oykn6YTvoTeXV6DvV&_nc_ohc=7BQZcfwbEWoQ7kNvgFIEekJ&_nc_zt=23&_nc_ht=scontent.fhan20-1.fna&_nc_gid=ASTwm-dqPUf5kEQsRbBQ33_&oh=00_AYAzSocXEwcJXne-8kX_-oXAlYB6Wmzosg0VbVJq-_m0ZQ&oe=672FBBED",
        "https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/437971379_412137721453023_887869607278515902_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG6A9JZG-i7hPbzvp6mW6cS332t9OSXTFfffa305JdMVyHHiayGVIKoRMRD6d3--Wk0dAP8t8j5JVAtUn1dhkw_&_nc_ohc=JvHZw0a1Lc4Q7kNvgGg4WW5&_nc_zt=23&_nc_ht=scontent.fhan20-1.fna&_nc_gid=ALTAo090fRGKKfrOeI-EIUT&oh=00_AYCzQU1ZIHPkADLauVGA7OirZ3PiE3Rm2VF_uDoN4npcuw&oe=672FC63F",
        "https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/428599350_377425004924295_7877144893030270626_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFWoHal2ZSOhr1KN5kqEsdaxo9xEaSb7W7Gj3ERpJvtbuB_wBhIwIfdFhcfDb7OcxQsrRmI0uWy5smNK86p8CLh&_nc_ohc=J4cAlm29Z-YQ7kNvgGt3eq4&_nc_zt=23&_nc_ht=scontent.fhan2-4.fna&_nc_gid=APYQr2PNz0JnNSXm0ShHL4J&oh=00_AYDwYaTXtaY1e6mnFMxMo-KQf_967mAaExRChUDuUejVHw&oe=672FCCCF",
        "https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/421668858_363466269653502_4976391143817924978_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFPc6yrLTPYHEyQcBQGKnuYg1b2zJWcGuuDVvbMlZwa62hitfLKYr1xhVi_2YXqeGAp6DBFkSjEexVdUCEgOKgo&_nc_ohc=KXBxie7WjJgQ7kNvgHA3O_p&_nc_zt=23&_nc_ht=scontent.fhan20-1.fna&_nc_gid=A016MphGfMjy1f3FJvAFOlq&oh=00_AYAJ_J_Al-T3zjrSNPGq-KydCKpjMwpmZgGc7_rNQXvouw&oe=672FC621",
        "https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/337268373_120186377669121_1868351487848277017_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFB8q04CLXpS-PF3i2QksasN6iuxg9rqEA3qK7GD2uoQFiP5YEJ14vI2jFgB7cHFySE7yevkAh6JcphQAaFsQe3&_nc_ohc=8_UCjmql6DcQ7kNvgFA9Mny&_nc_zt=23&_nc_ht=scontent.fhan2-3.fna&_nc_gid=AX2OFvhGSatibPeHCHpfIqf&oh=00_AYBin_Orfnegzv8_pYCXV3R6V7EHexqW1mBKVtql-02GIA&oe=672FB39B",
        "https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/316549007_1989572104568724_4399320825591452461_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFNfI_p6t5oNjJyRB2ockNC_nutuD8LNnD-e624Pws2cJkUYXmVsSCoab4Nn7t2IQ7D1pV7scPIBD1Ts69iRTIC&_nc_ohc=5SdMYMvZcqsQ7kNvgGPlL9w&_nc_zt=23&_nc_ht=scontent.fhan2-3.fna&_nc_gid=ABbhAF9vu65TFLfWkrK8l7V&oh=00_AYCIp3Rzi-ObPJh8Ml7vMZTIecms3r_DTyzkdZHnMCgTzg&oe=672FC0D0",
        "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/320751797_1230885874449869_6474091886341543113_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHJyc49rFMVjk__dJcdTX2cS_3NrruTh9NL_c2uu5OH08LbfzLIVs6dffxr5ptBPXI_DqJmjeykK_zFYCxsju6d&_nc_ohc=zXR13_Ryk8UQ7kNvgHcurPP&_nc_zt=23&_nc_ht=scontent.fhan2-5.fna&_nc_gid=A5jdd0e7dYKNfnpA8oA9TE9&oh=00_AYCc9oZlF20raM7ghNiVIySiP7sL4-YLnXeajBzKF3tt0w&oe=672FC7A3",
        "https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/319390299_482128640719204_7951604646239124908_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHPNod2UTKvmTji18gF3wU8colT6RZWDO1yiVPpFlYM7fJFntLbYRszkv4f8S_GEPGZjfK6NZ7zXMDNlQgtwksa&_nc_ohc=vnIrfQ0RCE0Q7kNvgGu47L_&_nc_zt=23&_nc_ht=scontent.fhan20-1.fna&_nc_gid=ApqyoYeKpdlVNjzbsHCqU3Z&oh=00_AYBi1z0z3A386AyS8f1aqsYfHwWLorQeNWIDZZGN4hvcWw&oe=672FB225",
      ],
      rating: 4.5,
      paragraph: [
        "Làng Văn hóa - Du lịch các dân tộc Việt Nam thuộc thôn Đồng Mô, thị xã Sơn Tây, Hà Nội. Đây là nơi giới thiệu các giá trị văn hóa, lịch sử tiêu biểu của đồng bào các dân tộc Việt Nam.  ",
        "Hiện nay, tại làng có cộng đồng các dân tộc đang hoạt động hàng ngày như Tày, Dao, Mông, Mường, Thái, Khơ Mú, Tà Ôi, Cơ Tu, Raglai, Ê Đê, Khmer... nhằm tái hiện đời sống, sinh hoạt, văn hóa, tín ngưỡng; bảo tồn giá trị truyền thống văn hóa của dân tộc mình.",
        "Du khách đến đây có thể tham gia nhiều hoạt động như lễ hội truyền thống, múa hát dân gian, và thưởng thức ẩm thực đặc sản vùng miền. Các sự kiện văn hóa đặc sắc thường xuyên được tổ chức, tạo cơ hội để tìm hiểu sâu hơn về di sản văn hóa phong phú của các dân tộc Việt Nam. Đây là điểm đến lý tưởng cho những ai muốn khám phá nét đa dạng văn hóa trong một không gian xanh mát, yên bình.",
        "Giá vé tham quan",
        "- Người lớn: 30.000đ/ lượt.",
        "- Sinh viên các trường đại học, cao đẳng, trung cấp, dạy nghề: 10.000đ/lượt.",
        "- Học sinh tại các cơ sở giáo dục phổ thông: 5.000đ/ lượt.",
        "- Miễn phí trẻ em dưới 6 tuổi.",
      ],
      link: "https://www.sgtiepthi.vn/den-ha-noi-kham-pha-lang-van-hoa-du-lich-cac-dan-toc-viet-nam/",
      fanpage: "https://www.facebook.com/Langvhdl/?locale=vi_VN",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26959.372321275245!2d105.47068114999999!3d21.0373017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345c4822ff69d7%3A0x33e7af3fb92750e6!2zTMOgbmcgVsSDbiBow7NhIER1IGzhu4tjaCBjw6FjIETDom4gdOG7mWMgVmnhu4d0IE5hbSwgQ-G7lSDEkMO0bmcsIEJhIFbDrCwgSMOgIE7hu5lp!5e1!3m2!1svi!2s!4v1730798172353!5m2!1svi!2s",
    },
    {
      name: "Thung Lũng Ngọc Linh Hoà Lạc ",
      type: "playground",
      discription:
        "Thung Lũng Ngọc Linh Resort & Spa ở Hòa Lạc, Hà Nội là khu nghỉ dưỡng sinh thái với vườn rau thủy canh hữu cơ và không gian xanh mát. Du khách có thể tận hưởng dịch vụ spa thư giãn, thưởng thức ẩm thực sạch và tham gia workshop “Thưởng vị” để trải nghiệm triết lý “ăn sạch, sống xanh”​",
      img: [
        "https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/438961503_965874795545485_1481066133472037603_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEcdeyM0p2DxyTE5FjLkgM3bcOw10kWrCltw7DXSRasKTtfeWqGWTFMipvKGbF2ZeLw3jWJDeAWGvJHCLsUCtZK&_nc_ohc=5i_tPsqxi-sQ7kNvgH6ZY4l&_nc_zt=23&_nc_ht=scontent.fhan2-3.fna&_nc_gid=AS5Ci7Dgur9cYkj-VVP8VzX&oh=00_AYAE4ofpbIMQ5_1mVOwh8reZ0rL6me9nV___4RxppygTAQ&oe=6732DFD6",
        "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/439337428_965875278878770_3144107208301223599_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFRyWzW8mbPrihp1eHj2R9Y0YTQFUFQDjzRhNAVQVAOPNNkceeMOPGCygtZqGRmKk2k4I1hGRlvVOs3rvTqZG0x&_nc_ohc=GmvNIN-KgKoQ7kNvgGKyPLh&_nc_zt=23&_nc_ht=scontent.fhan2-5.fna&_nc_gid=AQZOnlGs2TtXWBW3lhbrdpv&oh=00_AYCnFeMcZRAsNDb1nE4OaVQY9bTohYQjHDxA1ZixSSXbOg&oe=6732DED3",
        "https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/434194484_948406660625632_4646533013682811956_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFmSNkEChIKvffZOZzPLCZ2qoIR6WBk80eqghHpYGTzR39kbThTWqrP8AC4mPqQY9qsuxkQ7WDPeQ7DU8tC2h8m&_nc_ohc=EfxzgPMYcHAQ7kNvgE44XKP&_nc_zt=23&_nc_ht=scontent.fhan2-4.fna&_nc_gid=AG2Ndv0Jq52cMxg9gkvrnL2&oh=00_AYAYcrZ126uczCIEemvUeDxv7d07Q4tFNvk9lkqwmoaAVg&oe=6732C910",
        "https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/433436003_943982197734745_39177106748772944_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGGBR4_pcoMSl2UrxBSpAYAX08dAt550eFfTx0C3nnR4W5b17lQhyaBldUP6I5ohCQ5y7YLzq4Wby2iVSroVdm9&_nc_ohc=eRFeDBc6tpwQ7kNvgH-IxkC&_nc_zt=23&_nc_ht=scontent.fhan2-3.fna&_nc_gid=ARN8Y3J1TqpwKYqrYj7DLRd&oh=00_AYAT6QS4KV5fjk0lEGx6taBu7tmsxA59MAzjRuUqrvokjA&oe=6732C802",
        "https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/419496846_896888482444117_8670365663245985724_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFZ9PwQ_i7US17Nl2gseIJq8LEQC0nbadLwsRALSdtp0jA4J5bY4rRJmzXFmYRRa2soOfzOBFJmKGGn7Eqjps9-&_nc_ohc=U5slSq3e7SIQ7kNvgH6iaUG&_nc_zt=23&_nc_ht=scontent.fhan2-4.fna&_nc_gid=AIRoIum03OBmNiMSeNGfiZh&oh=00_AYDASQ-M355C_DasSc4Uxw4knPIQY2roAu9YFuF23Z7_1g&oe=6732B050",
        "https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/322460480_556614159354681_677899429367805249_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEmudCkhHCOWEN_OHud-nsIe6U7HsymiWR7pTsezKaJZFuSpcLJaCRCbGzc5v-2_LP5pk8Tpg6JF8bs2hWLHizN&_nc_ohc=R9B8iotqYZsQ7kNvgFoRwn4&_nc_zt=23&_nc_ht=scontent.fhan2-3.fna&_nc_gid=AV1MA6rzOxqGopYXiRHubQR&oh=00_AYCgIRzZcIFnP_UTDM2Z9nsVBjac2EiN_ad-3ukLVrh1Ag&oe=6732C434",
        "https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/300779132_1739797949713025_918235983109524603_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHCYvEGOuKfFCP7pbp1HPwj_M7BrSf7dAj8zsGtJ_t0CMzviBg2YgQ40TesickWfnoMYDWl9rSyAwGeHax7VHtR&_nc_ohc=Jl19nVxDyBAQ7kNvgGIb70W&_nc_zt=23&_nc_ht=scontent.fhan2-4.fna&_nc_gid=Aq2dyTWYcwa5uyGIFXx7ziO&oh=00_AYBYCHEYtrzqpX1sbKt4gtHNKr03RzN4P-rpe6urPfBS6g&oe=6732C104",
        "https://scontent.fhan2-4.fna.fbcdn.net/v/t1.6435-9/91427078_1095536230805870_7852253957249302528_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGQGKOsrQzniPrTlUUJosCeS3RnDUOjX2lLdGcNQ6NfaSLrK29Tj4xupRi_NOzm5UfcrECKezMJyHy6oY4igE5f&_nc_ohc=-SC4LqMAQJ4Q7kNvgFeSQO7&_nc_zt=23&_nc_ht=scontent.fhan2-4.fna&_nc_gid=AXLCpEO_HylWvVpxxitPqlp&oh=00_AYDIoxTpUtofQj1PLs9cpiDBY3EAVRgrHexODNV1lKfm0A&oe=67547F96",
        "https://scontent.fhan2-4.fna.fbcdn.net/v/t1.6435-9/84341206_1054872854872208_5463691488527384576_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFTxZrVjL3sJTfscwMupY5gO04tUDyoF2w7Ti1QPKgXbEwhdGrspEdzO_dVfTZgc2hqSW75DQ40owXCjV_b8fCi&_nc_ohc=YXVGmFZMIEgQ7kNvgG13f70&_nc_zt=23&_nc_ht=scontent.fhan2-4.fna&_nc_gid=A2yrSrqvAkIK4c3w1c9UIA8&oh=00_AYBQ9LCw_1R4G7EgpgfGMUdOA_IXQezsKZ4WuRc9tV-8Lg&oe=67546F0C",
        "https://scontent.fhan2-5.fna.fbcdn.net/v/t1.6435-9/74596687_978728869153274_961220299389403136_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHLYANvOpigFG8yPYfC4T1jSOLFyuTb0t9I4sXK5NvS34GloZg_70RslQRa8936L2cWJLQtNT8jP3kGFUXtI7SK&_nc_ohc=RfUc6x9e2UoQ7kNvgHTjIdA&_nc_zt=23&_nc_ht=scontent.fhan2-5.fna&_nc_gid=AK8Mc4ldoKWcm0-zJCljG9M&oh=00_AYAP2YvzC22tZ23cAa7CbGWk1-M5HYvg-NVQdHb5ssiKkg&oe=67547A62",
      ],
      rating: 4.5,
      paragraph: [
        "🌿 Cách trung tâm Hà Nội 35km Thung lũng Ngọc Linh là một địa điểm lý tưởng để tổ chức sự kiện, teambuiding, nơi mà bạn có thể hòa mình cùng thiên nhiên thơ mộng, bạn sẽ đắm chìm trong không gian rộng lớn, cảnh sắc thiên nhiên tuyệt đẹp, bầu không khí trong lành, mang vẻ đẹp hoang sơ, hoài cổ.",
        "🌿 Đây là địa điểm tuyệt vời cho các cặp đôi thích lãng mạn, chèo thuyền KAYAK ngắm hoàng hôn, hay các nhóm bạn cùng nhau chơi trò chơi, ăn tiệc nướng ngoài trời.",
        "🌿 Bạn ưa thích sống ảo, bạn ưa thích xê dịch, tìm kiếm những khoảng trời mới, thì đây là địa điểm rất lý tưởng, với thiết kế kiến trúc thông minh, bạn tha hồ mà check in, thỏa mãn trong bữa tiệc của mây trời.",
        "Công viên mở cửa vào tất cả các ngày trong tuần. Giá vé vui chơi trọn gói tại công viên Thiên đường Bảo Sơn hiện nay nằm trong khoảng 200.000 - 300.000đ.",
      ],
      link: "",
      fanpage:
        "https://www.facebook.com/p/Thung-L%C5%A9ng-Ng%E1%BB%8Dc-Linh-Ho%C3%A0-L%E1%BA%A1c-100063689197707/?locale=vi_VN",
      map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13484.634077580698!2d105.4892929!3d20.9825562!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345d2a64af57dd%3A0x24e17633391b1420!2zVGh1bmcgTMWpbmcgTmfhu41jIExpbmg!5e1!3m2!1svi!2s!4v1730998639977!5m2!1svi!2s",
    },
    {
      name: "Sơn Tinh Camp - Cắm trại Ba Vì",
      type: "playground",
      discription:
        "Bạn đang cảm thấy mệt mỏi và áp lực với cuộc sống ở thành phố ồn ào, náo nhiệt? Bạn đang muốn tìm một nơi không cách quá xa Hà Nội nhưng lại gần gũi với thiên nhiên để bạn xả stress và tái tạo nguồn năng lượng mới? Vậy thì hãy cùng theo chân chúng tôi tìm hiểu về khu du lịch Sơn Tinh Camp – địa điểm cắm trại dã ngoại ở ngoại ô Hà Nội đang “khuấy đảo” giới trẻ thời gian gần đây nhé. ",
      img: [
        "https://lh3.googleusercontent.com/p/AF1QipNh_o5Xf4tTUmiImmOe3Jz4xGyo7Bdq4YYn8BOa=s680-w680-h510",
        "https://lh3.googleusercontent.com/p/AF1QipNgyJutzlQrRYG8sAxcEKXHeh5yorE_-tUAlC9G=s680-w680-h510",
        "https://lh3.googleusercontent.com/p/AF1QipPj7pD-n-kFLpB58JZ1zUU9hv7X0EmVoFC0D8-M=s680-w680-h510",
        "https://lh3.googleusercontent.com/p/AF1QipMqi44Wl2DjL4hSVzJ25BSpDRn8y66kVmpymLhE=s680-w680-h510",
        "https://lh3.googleusercontent.com/p/AF1QipOBbCarG4CXGNSn3Z2hS4QU-D7c1e2TgbA3k7YN=s680-w680-h510",
        "https://lh3.googleusercontent.com/p/AF1QipNNUZfe7_CtUtNr4_rmq68gH2Qi2DC0PflcWuuG=s680-w680-h510",
        "https://lh3.googleusercontent.com/p/AF1QipNsQYtrtGCfA9ZfH5odg3FLq5cqoIZnMutd_E8M=s680-w680-h510",
        "https://lh3.googleusercontent.com/p/AF1QipMJlGtQv5Hgi4AkqUjsVx4JGhHtVPMtqm1JQGK6=s680-w680-h510",
        "https://lh3.googleusercontent.com/p/AF1QipMwPAH39TxQ94kSBzmJhx-qoQrLln_4QnuYK2VO=s680-w680-h510    ",
        "https://lh3.googleusercontent.com/p/AF1QipOTaGo1ZLQjOizfdIsCRsklrW42EJS4Dzu9Vkk-=s680-w680-h510",
      ],
      rating: 4.5,
      paragraph: [
        "🌿 Sơn Tinh Camp là một khu cắm trại và dã ngoại nổi tiếng ở thôn Muồng Cháu, xã Vân Hoà, Ba Vì, cách trung tâm Hà Nội khoảng 40 km. Với không gian thiên nhiên trong lành, thoáng mát và gần hồ Đồng Mô, nơi này trở thành điểm đến lý tưởng cho các nhóm bạn, gia đình, hoặc công ty muốn tham gia các hoạt động ngoài trời, teambuilding và trải nghiệm cắm trại giữa thiên nhiên.",
        "🌿 Khu cắm trại này có diện tích rộng với nhiều khu vực cắm trại và tiện nghi như lều, nhà gỗ, bếp nướng, và dụng cụ tổ chức tiệc BBQ. Sơn Tinh Camp cung cấp nhiều trò chơi đồng đội, khu vực tổ chức sự kiện, và các hoạt động giải trí như đi thuyền trên hồ và chụp ảnh check-in tại những cảnh quan đẹp mắt. Đây cũng là điểm dừng chân lý tưởng để tận hưởng bầu không khí trong lành và cảnh quan núi đồi thơ mộng",
        "🌿 Bạn ưa thích sống ảo, bạn ưa thích xê dịch, tìm kiếm những khoảng trời mới, thì đây là địa điểm rất lý tưởng, với thiết kế kiến trúc thông minh, bạn tha hồ mà check in, thỏa mãn trong bữa tiệc của mây trời.",
      ],
      link: "https://sontinhcamp.com/",
      fanpage: "https://www.facebook.com/Camtrai.Trekking.BaVi/",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3369.662184513405!2d105.39743037471499!3d21.048763787092323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313467533ecf91b1%3A0x8f9426595837c6e8!2sS%C6%A1n%20Tinh%20Camp%20-%20Teambuilding%20-%20Event%20-%20Trekking!5e1!3m2!1svi!2s!4v1731012418586!5m2!1svi!2s",
    },
    {
      name: "Twitter Beans Coffee Hòa Lạc",
      type: "coffee",
      discription:
        "Twitter Beans Coffee là thương hiệu cà phê chuyên nghiệp đầu tiên ở Việt Nam, luôn đồng hành cùng những khách hàng yêu cà phê hiện đại có lối sống đơn giản, năng động. Với một phong cách phục vụ rất riêng, Twitter Beans Coffee chinh phục khách hàng bằng sự quyến rũ từ hương vị cà phê Ý và mang đến cho khách hàng những không gian thưởng thức cà phê chuẩn phong cách Ý.",
      img: [
        "https://lh3.googleusercontent.com/p/AF1QipNvsD-pawS97h9RoBp1X2lJuT8S9bxEjvYxUCsa=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipP6nsYJvAAQiHlftWWaveMnaUnIWk50B5S-MN0A=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipPk7fbX3EI7tg1Cgwjlf7JuifZbo8DcSpeen29X=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipM-6ZdZx-AddrzxZh8RrNtSquKmLZJvsr-G3GCl=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipOJ0p_X-zgb0Se2-2pUPYwfcj2fajx2uc-N7Q62=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipN_SqXz8EYuEJnQOpgvRk6nh86g68vyoT2gQ0ip=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipNFmnd0sfDslNtyM6oSzikAnaGlx56StwuLmf_u=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipOm9LuaudiBqEEPn5UInRnXUQI5PS3n913yOFLY=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipNo9zpgXbbdIXFF_WDHMSZ1Fkg1MlPWywh_wTG7=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipM9JoxP_frUt4XivHgZi0L33cA3MVaIw9WLTkoy=s1360-w1360-h1020",
      ],
      rating: 4.5,
      paragraph: [
        "Thuộc chuỗi quán cafe ngon mang phong cách hiện đại phương Tây, Twitter Beans Coffee cơ sở KCNC Hoà Lạc chắc chắn sẽ là cái tên không thể bỏ qua. Toàn bộ không gian quán đều nằm trong nhà nên thực khách có thể hoàn toàn yên tâm lựa chọn chỗ ngồi yêu thích để thưởng thức tách cafe yêu thích. ",
        "Với khởi điểm là những thức uống từ cafe, hiện tại Twitter Beans đã phát triển nhiều dòng sản phẩm mới để phù hợp với thị hiếu của thực khách. Chính vì vậy là đây chắc chắn là điểm đến mà bạn có cùng bàn bạc công việc với đối tác, thư giãn bên gia đình và bạn bè hay hẹn hò cùng nửa kia.    ",
        "Quán phục vụ nhiều loại đồ uống đa dạng từ cà phê rang xay, trà trái cây cho đến các món tráng miệng, với mức giá hợp lý từ 20.000 đến 100.000 VNĐ. Twitter Beans Coffee không chỉ chú trọng chất lượng đồ uống mà còn là nơi tổ chức nhiều workshop về cà phê, thu hút đông đảo người yêu thích cà phê và các hoạt động trải nghiệm​",
      ],
      link: "https://twitterbeanscoffee.com/",
      fanpage: "https://www.facebook.com/twitterbeanscoffeeofficial/",
      map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13483.006407291477!2d105.5374618!3d21.0005818!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345bae201b3bf5%3A0xf193b32b643aeedc!2sTwitter%20Beans%20Coffee%20H%C3%B2a%20L%E1%BA%A1c!5e1!3m2!1svi!2s!4v1731013546241!5m2!1svi!2s",
    },
    {
      name: "CAFE HOÀ LẠC QUÁN",
      type: "coffee",
      discription:
        "Hoà Lạc Quán là không gian cafe ngon, view đẹp với khuôn viên vườn rộng với nhiều cây xanh, thích hợp để thưởng thức tách cà phê dịp cuối tuần cùng đại gia đình. Với ưu điểm là không gian riêng tư khép kín, Hoà Lạc Quán sẽ là sự lựa chọn cho những ai muốn tận hưởng không gian tĩnh tại, thoát khỏi nhịp sống hối hả ngoài kia. ",
      img: [
        "https://lh3.googleusercontent.com/p/AF1QipOl9qbYBWpLbI7oLRzwdUKEid1b4Md8e2tKgBx8=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipMtFWYU3nyZDTHfFlv9WieihsOEe08qTKObAhKn=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipPajygdVOeuxi15jvgV9JpEZ4M0b0OXn4-yoTZ6=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipPy4fajF0-7cjtR_I1Q2Rcqw07rEekx6_jXpK3F=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipMI5iD96ZYzP-KvmFUBenz0D0GK2SguhQkWLhSo=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipMJwFbOnDfgQRW5YCtCmjvXygX5OCx0mKKRb-if=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipMeMGxD-hwEYeO4vQ8pSmfH-53pVUwoNgMtvRky=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipOj01J7-rqRte7Ep7roLSUbNYi1l4rPRuhPAtw=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipPPEXRjKUbquWmGCxOOjya1joX02Q0gAeuhQYWx=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipNckC2Jp9Dny7LmfGsqx5ik-7m_6FqZsF7WfQqI=s1360-w1360-h1020",
      ],
      rating: 4.5,
      paragraph: [
        "Cafe Hòa Lạc Quán là một quán cà phê mang phong cách giản dị, gần gũi, tọa lạc tại Hòa Lạc, Thạch Thất, Hà Nội. Nơi đây đặc biệt thu hút với khuôn viên rộng rãi, nhiều cây xanh và không gian thoáng mát, thích hợp cho các buổi gặp gỡ cuối tuần. Không gian thiên nhiên tại quán tạo cảm giác thư giãn, giúp thực khách thoát khỏi nhịp sống bận rộn của thành phố. Quán phục vụ đa dạng đồ uống với mức giá hợp lý, và là lựa chọn lý tưởng cho các gia đình hay nhóm bạn muốn tìm kiếm một nơi thư giãn gần Hà Nội.",
        "Ta sẽ dễ dàng nhận thấy sự yêu thích của chủ quán dành cho hội hoạ thông qua cái trang trí của quán. Điều này là một điểm tạo nên sự khác biệt và tạo thêm phần ấn tượng cho quán.",
        "Các quán nổi tiếng như Amici Coffee & Tea, Charm Cha và TocoToco thu hút khách nhờ không gian rộng rãi, trang trí đẹp mắt và đồ uống chất lượng, với mức giá khá hợp lý từ 20.000 - 45.000 VND.",
      ],
      link: "",
      fanpage: "https://www.facebook.com/Cafehoalac/?locale=vi_VN",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3371.1305247598734!2d105.5235291747132!3d20.983792389322623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345b0cee1ee463%3A0x6673905e0e8c662!2zQ2FmZSBIb8OgIEzhuqFj!5e1!3m2!1svi!2s!4v1731014152790!5m2!1svi!2s",
    },
    {
      name: "An Coffee - Hòa Lạc ",
      type: "coffee",
      discription:
        "Nếu một ngày bạn muốn tạm xa sự xô bồ của phố thị, hãy đến An Coffee – Hòa Lạc vào những ngày thu đẹp nhất. Đó sẽ là một trải nghiệm khiến bạn nhớ mãi – giản dị, nhưng đầy sâu lắng.",
      img: [
        "https://lh3.googleusercontent.com/p/AF1QipOE1TJq9suJZFxSTjJz1Tk_BzAujv53ekS86N92=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipP9N8TjagJp3uSLvmNXPUzVihTKAjfKAAecGcuh=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipNooA_NOxoKVMpCWTNjnA-jZOnSZa16zYDoIQX9=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipPrEreEYKIDfNLYJLfFHN5CX40ZCfV_Ob7pkGLK=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipNPBjzuZKVdigxPGjmgyLueUWtlQY3gKvP72hF8=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipOhuGfyTGsd2B7oWkrUvyQzG16-HNWeUWALNlU2=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipOhuGfyTGsd2B7oWkrUvyQzG16-HNWeUWALNlU2=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipPIgS0odfmOUyXboh5U9fsk52u1IfYVVYNFerEN=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipOYK3anhjVjkX1q0AKwVoeDgXz4JTUdkMrk0s26=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipPLd9OzxrMJff_lIVsXRvyNpdAtOWpdCtb6KYdV=s1360-w1360-h1020",
      ],
      rating: 4.5,
      paragraph: [
        "An Coffee là một quán cà phê nổi tiếng ở Hòa Lạc, Thạch Thất, với không gian yên bình và phong cách thiết kế gần gũi với thiên nhiên. Đây là một điểm dừng chân lý tưởng cho những ai muốn tìm nơi thư giãn và tận hưởng đồ uống chất lượng cao. An Coffee có thực đơn phong phú từ cà phê, trà đến các loại đồ uống sáng tạo khác, phù hợp với nhiều sở thích. Nhờ vị trí thuận lợi, quán thu hút khách từ nhiều nơi, đặc biệt là những ai làm việc và học tập tại khu vực Hòa Lạc.",
        "Quán có không gian mộc mạc, ấm áp, từ ánh đèn vàng đến tiếng nhạc du dương. Ngồi bên cửa sổ, ngắm nhìn những gánh hoa, mọi mệt mỏi như tan biến. An Coffee không chỉ là nơi thưởng thức cà phê mà còn là góc bình yên giữa lòng Hoà Lạc",
        "Các quán nổi tiếng như Amici Coffee & Tea, Charm Cha và TocoToco thu hút khách nhờ không gian rộng rãi, trang trí đẹp mắt và đồ uống chất lượng, với mức giá khá hợp lý từ 20.000 - 45.000 VND.",
      ],
      link: "",
      fanpage: "https://www.facebook.com/Cafehoalac/?locale=vi_VN",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3371.1305247598734!2d105.5235291747132!3d20.983792389322623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345b0cee1ee463%3A0x6673905e0e8c662!2zQ2FmZSBIb8OgIEzhuqFj!5e1!3m2!1svi!2s!4v1731014152790!5m2!1svi!2s",
    },
    {
      name: "Trà Chanh Lemon House Hòa Lạc",
      type: "coffee",
      discription:
        "Lemon House là chuỗi trà chanh được nhiều bạn trẻ yêu thích ở Hà Nội, nổi bật với phong cách hiện đại kết hợp không gian mở thư giãn. Quán phục vụ đa dạng các loại trà chanh và đồ uống giải khát, với mức giá hợp lý từ khoảng 10,000 đến 50,000 đồng, rất phù hợp cho học sinh, sinh viên và dân văn phòng. Ngoài trà chanh truyền thống, menu còn có nhiều món ăn nhẹ như bánh trứng gà non và các loại trà sữa, đảm bảo đáp ứng sở thích đa dạng của khách hàng.",
      img: [
        "https://lh3.googleusercontent.com/p/AF1QipPQ1GeCV1uVlewIiyrLP91Ipavo79w7EGKbxvI0=s1360-w1360-h1020",
        "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/457184848_994118565840028_2748398469239272465_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEyZqRSelp1foNWh6Tb9j5f-U1sQtRmzJr5TWxC1GbMmmlStwHQJe3l8PYkwv5x0aEZO8kYXKa14qM6rI8k6Nfx&_nc_ohc=h3eJlBPwpH8Q7kNvgELZ8sm&_nc_zt=23&_nc_ht=scontent.fhan2-5.fna&_nc_gid=AN_ouXGVw37EjSgCLmBgHAm&oh=00_AYCOjaoCofP08vlt9OfxqZ8COPmchjV9PzPjlgWY1dQvSg&oe=67332E33",
        "https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/455692903_987057279879490_1217173266068558206_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF7blAiHkYLsrCqQMH7EXrFF9ofESFQp4wX2h8RIVCnjPp5izlugtYlwyjE146Blb-sWGNlITVsYVi97DYoEbrO&_nc_ohc=Lw8aLjee6G8Q7kNvgHZQIrh&_nc_zt=23&_nc_ht=scontent.fhan2-3.fna&_nc_gid=AyvJOvmAlr7JYkiSpkzuL_u&oh=00_AYBKtbnNkV0dIxeHgpwS64UTsPYNWMuolRSpjEXvY3R9wA&oe=67333247",
        "https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/451414992_968852011700017_7689358722947732195_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH7QKlty5fB5EX3m6tvW_kr_oxUByhz3gv-jFQHKHPeC1r2Ke5jQ-Q61BtTnPLGB4hBJ8szxgUn-2R12N65XelE&_nc_ohc=kzoSK7S0ssoQ7kNvgE0BeAV&_nc_zt=23&_nc_ht=scontent.fhan20-1.fna&_nc_gid=Ao3rflqnoQ2qjyRrqiTjH7b&oh=00_AYCGyk2JYnpIEPx_4ks5YuMt_ctt9DX2LepDFwDtGRXBtw&oe=67332A03",
        "https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/431246394_889428549642364_608693328126964988_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeET2DK8_k0mA49U18s9Lj_z8RXR41ZllZzxFdHjVmWVnMfGePE9H8UcrS-EAsYuUAgrVIa8kLStgiV983sovPHH&_nc_ohc=P3ra6B7wt0IQ7kNvgHs06CO&_nc_zt=23&_nc_ht=scontent.fhan2-4.fna&_nc_gid=AdtwIWBu3fgiV0Wboxosuen&oh=00_AYD-6CIxSE4OQVIugqmKAG7F0Y9wJ9olJvUCdTfCsuuysg&oe=67330A37",
        "https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/429529524_884021263516426_4106357524095888103_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGu_ImBCKPjMd6MKGaoDdzKRfTLr7lsD3ZF9MuvuWwPdohX4v2uhXhHnZDz_mrOir1d9ksNcyxwDWjux9KVpz9d&_nc_ohc=rR5nwYNT8fgQ7kNvgGXAf6n&_nc_zt=23&_nc_ht=scontent.fhan2-3.fna&_nc_gid=AzV5oH5-4DkmHmVaRVdx8UC&oh=00_AYDSPZuBDnCxiY8ggzzgAKB2sMhT6FWPWY2QcYzHop8UVw&oe=6733171F",
        "https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/379132686_792739759311244_455726565524259192_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHxkjuM8jkEMRogr1f2uEq0zvW0mCzZ5F3O9bSYLNnkXep_gyUy1GrqnitL4E56xtazDx-0ps2flPYS0eJIhGRm&_nc_ohc=GJ9AIwB2bl0Q7kNvgFdSt5g&_nc_zt=23&_nc_ht=scontent.fhan2-4.fna&_nc_gid=A3eWBO1Ja5f5mPNvBpHyIVD&oh=00_AYBldUeXk_KrvjC6XqPqHcMHJgfm_PAnp6yRgdfsCJGWIQ&oe=67331162",
        "https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/354630241_742908817627672_2437913478879768870_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEh8Suhw6ocHU6umXEG9OtJQ_PlWJlN7UVD8-VYmU3tRZ1g0_XCQEo-qtwpM7tmYhBAyjFJmNf_uW1YCx_1tVhq&_nc_ohc=dEIONfjboF0Q7kNvgFDrzT4&_nc_zt=23&_nc_ht=scontent.fhan2-3.fna&_nc_gid=AxW4pSIbUV6yxa7o_dllq4I&oh=00_AYA-EXgpSzPc84qp7n6hohTDntCdvHzDS2sBWDQBWmiRfw&oe=673339D1",
        "https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/350380031_638470251116538_6385139858431291054_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEgKUQ-vh2pVOMRCgCWvaEd4P6mrNffv5bg_qas19-_lkqw5hk1vpOhEeYT8etAwRo1F2S68FYHokmxjiqLORHb&_nc_ohc=nlCO48_xbBcQ7kNvgH5Kv1P&_nc_zt=23&_nc_ht=scontent.fhan2-3.fna&_nc_gid=AUUJ1S9HvW7ZcNERtpdRVzY&oh=00_AYBQMH_cPwEtikdrwYeFKXTdwz21d0o2hj6Ew5vo8H9-Yg&oe=67330E55",
        "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/343942276_776640433982260_7035747907945237452_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGnv9-M-fZwtZmTQgEd0r6qnac8zy82raudpzzPLzatq3TYz4TD8CR4Zs0c36C6ziWuoBvyB_NX328YqKlPsRK3&_nc_ohc=0CrjMgupuV0Q7kNvgHgKTvt&_nc_zt=23&_nc_ht=scontent.fhan2-5.fna&_nc_gid=A5abiQtsS533ed9LemS5-EI&oh=00_AYA3ugirw191PPUvW5DYaLYIbYUyviccpliXmC1BRIpHcA&oe=67333414",
      ],
      rating: 4.5,
      paragraph: [
        "Lemon House là chuỗi trà chanh được nhiều bạn trẻ yêu thích ở Hà Nội, nổi bật với phong cách hiện đại kết hợp không gian mở thư giãn. Quán phục vụ đa dạng các loại trà chanh và đồ uống giải khát, với mức giá hợp lý từ khoảng 10,000 đến 50,000 đồng, rất phù hợp cho học sinh, sinh viên và dân văn phòng. Ngoài trà chanh truyền thống, menu còn có nhiều món ăn nhẹ như bánh trứng gà non và các loại trà sữa, đảm bảo đáp ứng sở thích đa dạng của khách hàng.",
        "Lemon House là thương hiệu TRÀ HOA QUẢ TƯƠI thuộc công ty Cổ phần thực phẩm Chiko Food với hệ thống gần 40 cửa hàng trên toàn quốc. Chúng tôi là thương hiệu Việt Nam có concept hoàn chỉnh từ sản phẩm tới chiến lược kinh doanh. Chúng tôi là thương hiệu Việt Nam có concept hoàn chỉnh từ sản phẩm tới chiến lược kinh doanh. Hợp tác với Lemon House, đối tác nhận được hỗ trợ trọn gói từ thiết kế thi công, đào tạo và chuyển giao vận hành cho tới cách thức bán hàng hiệu quả.",
      ],
      link: "https://lemonhouse.com.vn/",
      fanpage: "https://www.facebook.com/lemonhouse.thachban/?locale=vi_VN",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3370.5074784396143!2d105.51588907471391!3d21.01138448837612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345bcdf49f3727%3A0xe2fad2f263fc4df!2zVHLDoCBDaGFuaCBMZW1vbiBIb3VzZSBIw7JhIEzhuqFj!5e1!3m2!1svi!2s!4v1731021282608!5m2!1svi!2s",
    },
    {
      name: "Bảo Kim Pickleball",
      type: "sport",
      discription:
        "Bảo Kim Pickleball là một địa điểm dành cho những người yêu thích môn Pickleball tại Hà Nội, một môn thể thao đang thu hút nhiều sự chú ý nhờ sự kết hợp giữa tennis, cầu lông và bóng bàn. Bảo Kim Pickleball cung cấp một không gian thoáng đãng và tiện nghi, đáp ứng nhu cầu giải trí và rèn luyện sức khỏe của người chơi ở mọi độ tuổi. Đặc biệt, với sân bãi được thiết kế theo tiêu chuẩn và trang thiết bị hiện đại, nơi đây tạo điều kiện cho cả những người chơi nghiệp dư và các vận động viên chuyên nghiệp tham gia.",
      img: [
        "https://lh3.googleusercontent.com/p/AF1QipPcPbs20v95YoCqvTvvY1R0WhpiLomaoXps0LzD=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipPMYL_yO9_GMtJfWH-3RtCu1pp6onLNRQeqzcPi=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipO2PViWTJsZtMEKhGpOXA02zmNleDxyldI-3o7k=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipOreYBZ6qZLitOUWvuVmF-vFf0VGsw4BmKsrCei=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipOyCponYmtFquFKyg4HSqZVyqif-uzIKwhtFlKh=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipM8Rka3tAAXGjw0jkMznaEjuebq34voKAFwtL7f=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipMkfYx_G0Y4Po2doc_qVZ7W765nNEFMLymoJCx7=s1360-w1360-h1020",
      ],
      rating: 4.5,
      paragraph: [
        "Pickleball được đánh giá là dễ chơi và mang lại nhiều lợi ích cho sức khỏe như cải thiện sự nhanh nhạy, phối hợp tay mắt, và tăng cường thể lực. Do đó, Bảo Kim Pickleball đã trở thành lựa chọn lý tưởng cho các hoạt động vui chơi và tổ chức giải đấu phong trào",
      ],
      link: "",
      fanpage: "",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3370.438440268104!2d105.51787397478968!3d21.0144353882714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345b0032682087%3A0xed662ce1b6ebe31c!2sB%E1%BA%A3o%20Kim%20Pickleball!5e1!3m2!1svi!2s!4v1731022185785!5m2!1svi!2s",
    },
    {
      name: "Sân Cầu Lông Bao Cấp",
      type: "sport",
      discription:
        "Sân Cầu Lông Bao Cấp là một địa điểm thể thao đặc biệt ở Thạch Thất, mang phong cách hoài cổ với không gian thiết kế giản dị, tái hiện những nét kiến trúc thời bao cấp Việt Nam. Sân mang lại cảm giác gần gũi, thân quen, đặc biệt thu hút những ai yêu thích không gian cũ và muốn trải nghiệm cầu lông trong một không gian độc đáo. Với chất lượng sân đạt tiêu chuẩn cùng hệ thống chiếu sáng tốt, nơi đây là lựa chọn lý tưởng cho các trận cầu giải trí hoặc thi đấu phong trào.",
      img: [
        "https://lh3.googleusercontent.com/p/AF1QipOYDNFE9qyInBO8MnKmmyA2XKmVnWq7M6PtOtb3=s1360-w1360-h1020",
        "https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/451986915_122125949396316796_4671283988719775650_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeGkhueQQUPoQj0hdR1N43mPEhm4BE7x-_gSGbgETvH7-FzvgVYPpyGoz1PoXSjEjbf55A5jwujeGHeIHWO26J72&_nc_ohc=TMEUKM82PncQ7kNvgExRKqI&_nc_zt=23&_nc_ht=scontent.fhan2-3.fna&_nc_gid=A8k7s1kH3ostJwQiOMYC5_T&oh=00_AYAsGVIahUl_ofjG-bj7hGFBhSPz23vSNMBMfdysV7yuBA&oe=67332454",
        "https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/465377075_122149081460316796_1289132617412992730_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeHA_iQQx23SSP28dAJcjiwIaYRfw5NLrHpphF_Dk0usevNnm73SJrYCcHM3Geujz8IcLNuToW0F3H-dhO1JgR7K&_nc_ohc=xqpUx7ASQhgQ7kNvgHpKICd&_nc_zt=23&_nc_ht=scontent.fhan20-1.fna&_nc_gid=AOWI_aA4s3oulNWOUsKHVhV&oh=00_AYCbdO-dtl-KTmK-kmc8anjUDsIyDABRxEA9NRobz1_4eg&oe=673312E4",
        "https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/465660000_122148886574316796_3372043544007066151_n.jpg?stp=dst-jpg_s600x600&_nc_cat=100&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeGTA1Oc_hlVMwTjU8a6FN1MfNJs-8I9RRZ80mz7wj1FFkT8QHRq2sOY04gNTL_1eEwDzVpYxmaee6zsV_mR1PlD&_nc_ohc=mSnNGK4g1BoQ7kNvgH-NTXi&_nc_zt=23&_nc_ht=scontent.fhan2-4.fna&_nc_gid=AfQad7KC1h_ROAlgGGwzDeW&oh=00_AYBFhX5qcL5TgqI41WIjI0vFlphv3IIBHbFwDaZuvQvBKw&oe=6733101E",
      ],
      rating: 4.5,
      paragraph: [],
      link: "",
      fanpage: "",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3370.7689554214876!2d105.51847407471362!3d20.99980898877334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345b000fbfb7ff%3A0x45867ee2b0c1c475!2zU8OibiBD4bqndSBMw7RuZyBCYW8gQ-G6pXA!5e1!3m2!1svi!2s!4v1731022792053!5m2!1svi!2s",
    },
    {
      name: "Sân Bóng 1 Đại học FPT",
      type: "sport",
      discription:
        "Sân Bóng 1 của Đại học FPT Hòa Lạc là một trong các sân bóng nổi bật trong khu thể thao của trường. Nơi đây có sân cỏ nhân tạo với tiêu chuẩn quốc tế, được thiết kế chủ yếu cho các trận bóng đá 7 người, tạo điều kiện thuận lợi cho sinh viên thỏa sức rèn luyện thể thao và tham gia các hoạt động ngoại khóa. Được bao quanh bởi không gian xanh mát và không khí trong lành, sân bóng này thu hút sinh viên đến tập luyện sau giờ học, giúp họ duy trì sức khỏe và gắn kết tình bạn.",
      img: [
        "https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/302547379_6149280578434825_8963880247385977425_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFWvkwqrnVr09JaY7RbHXMVjRSNPOap71SNFI085qnvVLqlm5EWJa63DOeZJB46yrtRbo2mYAHoXYw6H7F2-815&_nc_ohc=j8oDTzXClzgQ7kNvgEFTA0N&_nc_zt=23&_nc_ht=scontent.fhan20-1.fna&_nc_gid=AWO3a0zjojk94lL6qvy-tMk&oh=00_AYAlTyu89cy7gnhcX9psW3BEAJ83w5saH6E3vVrKeFNHbQ&oe=67330AFE",
        "https://lh3.googleusercontent.com/p/AF1QipNUy4yTUI6DFd6iPOBdEsaBoIcoSHF-F7TUOH9G=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipNZRGBguqfjrgQ9CC6ZUvaJfBxHv9ysx1sAqnij=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipMgUYANlO-iNxhw_CRlBntsytyMxMoFdRW6ItoV=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipMh7bwlmOx5KQjpBw7288Zd6ioGw02adNTF3b1s=s1360-w1360-h1020",
      ],
      rating: 4.5,
      paragraph: [],
      link: "",
      fanpage: "",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3370.4820564131373!2d105.52349887471395!3d21.012509588337608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345bbfb06986ef%3A0x5cf13befb13a1de!2zU8OibiBCw7NuZyAxIMSQ4bqhaSBo4buNYyBGUFQ!5e1!3m2!1svi!2s!4v1731022734558!5m2!1svi!2s",
    },
    {
      name: "Siêu thị BigTrend",
      type: "market",
      discription:
        "Siêu thị BigTrend là một chuỗi cửa hàng tiện lợi và đa dạng, chuyên cung cấp từ thực phẩm tươi sống, hàng tiêu dùng thiết yếu, đến các sản phẩm thời trang, mỹ phẩm, và đồ gia dụng. Tại BigTrend, khách hàng có thể tìm thấy nhiều loại sản phẩm chất lượng cao với giá cả hợp lý, đáp ứng nhu cầu mua sắm của các hộ gia đình và cá nhân.",
      img: [
        "https://lh3.googleusercontent.com/p/AF1QipPuK5ECvtU8fcQo8dPLMp_ojm-muymXGMHU9hyE=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipONPVDIk6ii-TL37BLoArzvXDH-a4zd4c_8XlEO=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipME7vppO_0svlDcl48DvkwB1sVKvXg-cDf49yBw=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipPAoamcqy34B6ngZH8WfKCu37UlAXAnSYTF-kMv=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipOqhRFGVIG44WFADAOmpQXQxgjuPrsFhbUs9H2z=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipPqMwzj70VgRJvUuORUtaQFlDOq5M7ohHwGvb2k=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipMWL3X41-ynStirStB2BNa6ZRqS9flxOMilgt8Z=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipMvB13q62IqGAitCuLHCe1mpIB3Y3VLT1_ql-LE=s1360-w1360-h1020",
      ],
      rating: 4.5,
      paragraph: [
        "Với không gian mua sắm hiện đại, rộng rãi, BigTrend không chỉ chú trọng đến chất lượng sản phẩm mà còn đầu tư vào dịch vụ khách hàng chuyên nghiệp, tạo sự thoải mái và tiện lợi. Siêu thị này thường xuyên cập nhật các chương trình khuyến mãi và ưu đãi để mang đến trải nghiệm mua sắm tiết kiệm và thú vị. Mục tiêu của BigTrend là trở thành một điểm đến tin cậy cho mọi nhu cầu mua sắm hàng ngày của cộng đồng.",
      ],
      link: "https://sieuthibigtrend.com/",
      fanpage: "https://www.facebook.com/sieuthibigtrend/?_rdr",
      map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13482.239886808376!2d105.5179502!3d21.0090655!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345b329809841b%3A0x35c2e5a0cae9ca39!2zU2nDqnUgVGjhu4sgQmlnIFRyZW5k!5e1!3m2!1svi!2s!4v1731023207426!5m2!1svi!2s",
    },
    {
      name: "Siêu Thị Mạnh Quân",
      type: "market",
      discription:
        "Với không gian rộng rãi, thoáng mát cùng cách bày trí hợp lý, siêu thị Mạnh Quân mang lại trải nghiệm mua sắm thoải mái cho khách hàng. Bên cạnh đó, siêu thị cũng thường xuyên có các chương trình khuyến mãi và ưu đãi đặc biệt, giúp người dân tiết kiệm chi phí mua sắm. Nhờ dịch vụ chăm sóc khách hàng chu đáo và sự tiện lợi về vị trí, Mạnh Quân đã trở thành một điểm đến đáng tin cậy và là lựa chọn hàng đầu cho nhiều gia đình trong khu vực.",
      img: [
        "https://lh3.googleusercontent.com/p/AF1QipOEqdUFgQnZFBu9vOfb6dEJ6fw9gg9OHLUH-FcR=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipMmBZJkFazmQrgUYOfKZgKwP191BT4GR-ezwf_G=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipOch4vhNyq8kIKZFokr5bWbTf0KLCF76sXxKdrd=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipN1Pr3-uj3L57rTlAKdEcF6F6YFPtxG6DztUd-Q=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipNs2PBzbI_qAlSvJL5qifR4EJgLP-cfEmH1JTFr=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipNI0azJk4UibgIfztNN-kl_-WKSOZ--yQJHObcQ=s1360-w1360-h1020",
      ],
      rating: 4.5,
      paragraph: [],
      link: "",
      fanpage: "",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3370.5476661343064!2d105.51548667471396!3d21.009605788437284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345bdc669aaadd%3A0xd3faec175b49b779!2zU2nDqnUgVGjhu4sgTeG6oW5oIFF1w6Ju!5e1!3m2!1svi!2s!4v1731023505310!5m2!1svi!2s   ",
    },
    {
      name: "Ohio Mart 2",
      type: "market",
      discription:
        "Ohio Mart 2 tọa lạc tại khu đô thị Hòa Lạc, Thạch Thất, một trong những trung tâm phát triển nhanh nhất của Hà Nội. Vị trí chiến lược này không chỉ dễ dàng tiếp cận từ các khu vực lân cận mà còn nằm trong khu vực giao thông thuận lợi, giúp khách hàng dễ dàng di chuyển đến cửa hàng bằng nhiều phương tiện khác nhau.",
      img: [
        "https://lh3.googleusercontent.com/p/AF1QipPysQpa1wX2CoSj44ru_JfhSImuVwBqw-QEVR5Q=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipNQWXA6m7PpVGd1DRadoCVq7IUtXZx6u-pR-d9p=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipOTwAtXeBLE7J1bt70gF_EIeVWBvpTB6_I8944=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipNQeXrBkO6bOp0YcG2DmYXQRMVEHjhojwkWh9A=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipNec3QiW8D5mcevdPiyQbUn_TIoCEqTieJcl7Y=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipOGCDMg6qvXoV8kDI0e4akEfUItPksez7R3pJ81=s1360-w1360-h1020",
      ],
      rating: 4.5,
      paragraph: [
        "Phòng thực phẩm của Ohio Mart 2 luôn đảm bảo nguồn hàng tươi ngon, đa dạng từ rau củ, thịt cá đến các sản phẩm nhập khẩu. Ngoài ra, khu vực đồ uống cung cấp nhiều lựa chọn từ nước giải khát, nước ép tự nhiên đến các loại rượu vang và bia đa dạng.",
        "Ohio Mart 2 không chỉ chú trọng đến chất lượng sản phẩm mà còn đặt dịch vụ khách hàng lên hàng đầu. Đội ngũ nhân viên thân thiện, chuyên nghiệp luôn sẵn sàng hỗ trợ và tư vấn cho khách hàng trong quá trình mua sắm. Ngoài ra, cửa hàng còn cung cấp các dịch vụ tiện ích như giao hàng tận nơi, thanh toán linh hoạt và các chương trình khách hàng thân thiết hấp dẫn.",
        "Với không gian mua sắm rộng rãi, ánh sáng tự nhiên và không khí trong lành, Ohio Mart 2 tạo cảm giác thoải mái cho khách hàng khi đến tham quan và mua sắm. Khu vực khuôn viên xanh mát và khu vực trẻ em an toàn cũng là điểm cộng giúp gia đình có thể tận hưởng thời gian mua sắm cùng nhau.",
      ],
      link: "",
      fanpage: "https://www.facebook.com/ohiomart/",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3370.5476661343064!2d105.51548667471396!3d21.009605788437284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345bdc669aaadd%3A0xd3faec175b49b779!2zU2nDqnUgVGjhu4sgTeG6oW5oIFF1w6Ju!5e1!3m2!1svi!2s!4v1731023505310!5m2!1svi!2s   ",
    },
  ];
  // console.log(data);

  // useEffect(() => {
  //    fetch("http://localhost:3004/location")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setData(data);
  //     });
  // }, []);

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
          <div className="block-tabs flex gap-2 text-2xl mb-5 pb-6 cursor-pointer">
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
