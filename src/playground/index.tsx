import { useEffect, useState } from "react";
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
    {
      name: "Quin Hill Hòa Lạc - Khu nghỉ dưỡng cho những kỳ nghỉ ngắn hạn",
      type: "playground",
      discription:
        "Quin Hill Hòa Lạc nằm tại xóm Dục, xã Yên Bình, huyện Thạch Thất, Hà Nội. Nơi đây chỉ cách Hà Nội khoảng 30 phút di chuyển. Điều này rất thuận tiện cho các chuyến du lịch trong ngày và qua đêm. Khu Quin Hill Hòa Lạc nằm trong bầu không khí trong lành, gần gũi với thiên nhiên.",
      img: [
        "https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/462228842_936048835023846_8282798394451855512_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGlKV2Ogiw1dKHihmJA-EB2jCW0dPQ_KsiMJbR09D8qyI8eSyO-0wYgqNfpbajyIGc8B1apKprryNm2_pdqCs_Y&_nc_ohc=Xc5wBK8d9loQ7kNvgFLkYuh&_nc_zt=23&_nc_ht=scontent.fhan2-3.fna&_nc_gid=AlD94oDPvkDSkuQ47Epuw3w&oh=00_AYCXXPIiIbd8EzO6TPeThxlXIUeenIwogPSSzoys5outMw&oe=672A5CB9",
        "https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/462216076_936048845023845_2302728988441525516_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHd7n-BT-UFToSq8aKduARIyMXoosfDylbIxeiix8PKVpr9Rb_ldZNo6-Q4OfHX8G9UkJH-K70HRnSr3AL1P-0M&_nc_ohc=3ulyvm4xE8MQ7kNvgFUN-WG&_nc_zt=23&_nc_ht=scontent.fhan2-3.fna&_nc_gid=AWeSRbZjCRk6zHIpVfxypGv&oh=00_AYCkqB896Y4KBkv-ZAO-hMzkUD96PzXPbAN6fMEmp7jemw&oe=672A7855",
        "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/462229390_936049045023825_8966478733619817635_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGvIbVpUiowjWFLdmV7QG1K6YuqT8rZb6npi6pPytlvqT8Dg9sdzyOC1tFNXX6adMqYGoW6sdL_UBnuUEq1cWuv&_nc_ohc=IxkJ661uBXoQ7kNvgELmRuP&_nc_zt=23&_nc_ht=scontent.fhan2-5.fna&_nc_gid=A9iUy4dEH0X1V5n5XX5XRzD&oh=00_AYDYz5bxgF249xNGEfqP-RvKqhCYI_tA6M69vsCEqjE99g&oe=672A7102",
        "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/462225069_936049065023823_7096032387005809770_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFqGllSdlnsIgO5Wfj_3FCk51CfT-Mi4TvnUJ9P4yLhO7gXQ-XlO5tAkNCihNDmq1reVgnuBLFlOjD6MbfMOXKJ&_nc_ohc=q8nPQZbceWIQ7kNvgGR7nAZ&_nc_zt=23&_nc_ht=scontent.fhan2-5.fna&_nc_gid=Ak2HXWvAJ1uy4u48VgYG8wx&oh=00_AYCBg-6Bmiaq3hV4Tgeqn21v1oQ-EzNkYE1Rng9j6WsUXw&oe=672A6E27",
        "https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/462187324_936049118357151_8230249560488933439_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF6Dmb_gzrcqMXAmx5ut-diQFI5u39_AyhAUjm7f38DKNdp4c9xB8_oo55XgSEpInZH6S1uvQMbdrTdu6ctZ5Wl&_nc_ohc=NomQ9YjQApAQ7kNvgG6JiuB&_nc_zt=23&_nc_ht=scontent.fhan2-3.fna&_nc_gid=AiAxrrBj6KcQ57RMvBAUvrW&oh=00_AYC726m7REQBrSwiIYQ1EdKyoISYN-8P7wWv_aQRz3_ZkQ&oe=672A4F9D",
        "https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/430837593_811355790826485_6009581772319920657_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFP7DWX_M4LMgWvbsIVSQ1EEnmAEmwJ_qwSeYASbAn-rPS-1gbnt5a3FMHFcHscZCRX09-sVffpwhBl0BqvVkH3&_nc_ohc=2CZc6Cz85r0Q7kNvgEdOJF4&_nc_zt=23&_nc_ht=scontent.fhan2-4.fna&_nc_gid=AHQd4xu9stVGdvBSy7BG9BJ&oh=00_AYC3rbrwLdzdW_upnpn6SO9ciyF9W9-6TxsQGMbvwxWl2A&oe=672A5BF2",
        "https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/430464206_806816167947114_8486363433792344028_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFk02HqPhIL7tjv8lzzeBvqh7epmgCAkcqHt6maAICRyg58xH5JWBge0xzHCf3vnPdeR282bF5_YM57E4eUVJnS&_nc_ohc=1jte2WWFpmYQ7kNvgE_bquA&_nc_zt=23&_nc_ht=scontent.fhan2-4.fna&_nc_gid=AjTRYg96uxg3vqlSHy3iSoi&oh=00_AYCFIoN48hUhxiTJ-6J_6zvn2oazzrACpnvEjdVVWB3W_A&oe=672A7104",
        "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/436206859_848245427137521_2227885297173267531_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFG3ZaOmuclVrfkT6ip6hNsbfpmW44xTcNt-mZbjjFNw1-hreyq1w7jAp89BVJBLCFA49ivC8JU_vW7t5ZhGtB6&_nc_ohc=wazid9IzFSUQ7kNvgE-W9Ow&_nc_zt=23&_nc_ht=scontent.fhan2-5.fna&_nc_gid=Ar0gh1MVGUhLr0e4LYhcz6B&oh=00_AYDhVYLDhEPLGmlcfWBGAZ9LEGz2FG4pT8CNHYnjA2NOQA&oe=672A6A70",
        "https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/433113510_811355697493161_8674307512359242224_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeG0kZn3qj1mtOrF9xDt2poe89g6QcgTg1bz2DpByBODVpfK8g0KIbUP6BJuEyl26YlA34Flbra7qGPWr8L1KwRs&_nc_ohc=TFZBHhzpd9kQ7kNvgHp4tWm&_nc_zt=23&_nc_ht=scontent.fhan2-4.fna&_nc_gid=ArwsHK7wN7nIfgNblhmzB94&oh=00_AYCmQhbeXOKi6c8HcA6Rats_ysDynU-YbFqsp75zd7FPUg&oe=672A4AAA",
        "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/432928115_811355667493164_6766064732920402049_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeH8kF4lg51f6bD6pHDbRewClDS4U4bUudGUNLhThtS50SVupS9vUgGQ-odZxfb26xIGFfHk1jyE6071rZZJV_CK&_nc_ohc=uAV1PQ0aTWoQ7kNvgFqWfnZ&_nc_zt=23&_nc_ht=scontent.fhan2-5.fna&_nc_gid=A4DTVfe5wfw45rnAcqgCMRz&oh=00_AYCaIfuLmXFZgNuHT3K9QZ1lIUrhW3rRnOiOkA-kOXIN1w&oe=672A5FAE",
      ],
      rating: 4.5,
      paragraph: [
        "Có rất nhiều dịch vụ tích hợp ở Quill Hill với giá từ 100.000đ/ người cho bạn thỏa sức lựa chọn.",
        "Điểm nhấn đầu tiên thu hút du khách chính là thiết kế của villa. Căn villa được thiết kế theo hướng hiện đại kết hợp với truyền thống. Nét hiện đại của villa thể hiện ở phần mái bằng cùng kính xung quanh. Với nguyên liệu là kính giúp du khách ngắm được phong cảnh xung quanh, hoàng hôn hay bình minh.",
        "Vì là một ngọn đồi hoang vắng, nên rất khó để tìm được một quán ăn hoặc một hàng tạp hóa nào đó. Đây gần như là một nơi chốn mà khi đến bạn sẽ phải biết mình nên mang những gì cần thiết. Các bữa ăn sẽ được nhân viên của khu nghỉ dưỡng chuẩn bị. Buổi tối sẽ có tiệc BBQ, đi nhiều người sẽ có đốt lửa trải, hát Karaoke… Bữa sáng bạn có thể order trước với các chị bên nhà bếp để các chị có thời gian chuẩn bị.",
        "Có rất nhiều dịch vụ tích hợp ở Quill Hill với giá từ 100.000đ/ người cho bạn thỏa sức lựa chọn.",
      ],
      link: "https://www.traveloka.com/vi-vn/explore/destination/gns-quin-hill-hoa-lac/228697",
      fanpage: "https://www.facebook.com/quinhillhoalac/",
      map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13485.464473455635!2d105.462025!3d20.9733543!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345d60728bcb91%3A0xa4c9bc4c52418864!2sQuin%20Hill%20Retreat!5e1!3m2!1svi!2s!4v1730798299696!5m2!1svi!2s",
    },
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
  ];
  console.log(data);

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
