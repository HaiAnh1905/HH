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
  characterist: String[];
  openclosed: String;
}

export default function FoodStore() {
  const [activeTab, setActiveTab] = useState<number>(1);
  const handleClick = (index: number) => {
    setActiveTab(index);
  };
  const data: IData[] = [
    {
      name: "Cơm Tún",
      type: "Sáng - trưa - tối",
      discription:
        "Nếu bạn đang tìm kiếm một địa điểm ấm cúng để thưởng thức những bữa cơm ngon miệng, đậm đà hương vị quê nhà, thì 'Cơm Tún' là lựa chọn tuyệt vời dành cho bạn. Quán nằm nép mình trên một con phố yên tĩnh, không gian nhỏ xinh nhưng không kém phần thoải mái và thân thiện. 'Cơm Tún' đặc biệt thu hút thực khách bởi cách chế biến món ăn tỉ mỉ và hương vị truyền thống, đậm chất Việt Nam",
      img: [
        "https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/461167576_2256464758021830_6284656808973205052_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeFbcNlDCWeM_Cnor94HeETL7PjIplV-xh_s-MimVX7GH8jAomS4lhB5OVEZKTADaUoYTPErtqKKNJmYEoRYZwFv&_nc_ohc=EmQO3ApC89oQ7kNvgFmJO12&_nc_zt=23&_nc_ht=scontent.fhan2-3.fna&_nc_gid=AnxAJtHpo2DMNDv7bFEA8mG&oh=00_AYCoCzWhUgPtNKqdB0R9BhqcIKJ7VwSiwjsciaEhUjZvYg&oe=672A77E6",
        "https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/461171354_2256464761355163_8478021977308522031_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeGwnO-hrSIPlAVleA2bUbwJlvLM4FP7z9yW8szgU_vP3FGT-6pv20OOEslY7TbkIpCD7blNL7-DTEgG5QK4GtdE&_nc_ohc=jtT18IoSdMQQ7kNvgH3lD-w&_nc_zt=23&_nc_ht=scontent.fhan2-3.fna&_nc_gid=AwUkfIZKHupF3K3_K9IE-bM&oh=00_AYBo0A_Z6LDXwkalxTUjKgS2rEczkFf3wFgw9fgEMSFAug&oe=672A913C",
        "https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/461165874_2256464754688497_8051238634596897977_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeHBApY4NDb2bTFcPPbFpN-RjKDxoQTmXH2MoPGhBOZcfX10URd8tbkbTr3Uz7u73T5AC8eaApgnobp3Nuh0mKJy&_nc_ohc=KZiMRfNlmQsQ7kNvgFPlB7V&_nc_zt=23&_nc_ht=scontent.fhan2-3.fna&_nc_gid=AZ8rZrMqB73g1wv8KPyBs1-&oh=00_AYA42lc78Ixd_cWs6VSZAxQa8JbIHS_e9T9yAHtDkHGCcQ&oe=672A8AED",
        "https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/460978167_2256464838021822_7579556125307131111_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeEVEBzAqnE1UeiNMp4efHNkuZ0eOuTIlT65nR465MiVPiflndbRSPr50mPuaLGutxZSmtydAhsrKt_m-mflJJ4C&_nc_ohc=Tky_ns-X228Q7kNvgE7DLNX&_nc_zt=23&_nc_ht=scontent.fhan2-4.fna&_nc_gid=AcPXPprgzv3WpgVwDkHuZIT&oh=00_AYDjjRrfB-AjhqiOOdoLCU17Dpjtc3Z7R4rLVpmZIK0LSw&oe=672A6CBF",
        "https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/461146857_2256464841355155_6955631272058326888_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeGueC-GeZUMXd7cUObRJGVNgOErFCpBCd2A4SsUKkEJ3Td6nQxlTJM21Wbgg9SbNqpWh3HLMGoPjpRciOhlM3oW&_nc_ohc=0cmY9F2x3pQQ7kNvgG4_Y2I&_nc_zt=23&_nc_ht=scontent.fhan2-4.fna&_nc_gid=ARVqb9MUai10Hi1vL8PuG4P&oh=00_AYBIuX1uzH3VftYctLPXKRp9IeFWXMsZprrN59nbjOoB8g&oe=672A918C",
        "https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/461150239_2256464811355158_4507161141509285488_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeEyNyLtbQqI2YoqSMyVGqg-6SaCgyX-fU7pJoKDJf59TrRKEH12NJP9aA0iFT-R_RvNG8lAXi6kUyTyGKXEEEfi&_nc_ohc=ukwZNIn4-2oQ7kNvgEIvkv9&_nc_zt=23&_nc_ht=scontent.fhan20-1.fna&_nc_gid=Awif4y0ijEELj94KXqzyOkk&oh=00_AYCipvXOTOOl19HyoDNwREQJM8vpuLVVtxaykylJ5Z-wdA&oe=672A72D5",
        "https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/460976455_2256464911355148_4744525798927706574_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeHBPNgQraZCDeIlOn-KGV5M5tiw1keFTwXm2LDWR4VPBdoPxczyLIQyIzC3cKhu_5BGp7swdT7TQLuBPmoCD13_&_nc_ohc=hJowGcUOO30Q7kNvgHt-xmJ&_nc_zt=23&_nc_ht=scontent.fhan2-3.fna&_nc_gid=Az-3midTiJCsKPCo34X6zCY&oh=00_AYBGSlwxd0UeSM0SZRK65uAccNp7WGbvtQle-h9giN_mEg&oe=672A82B1",
        "https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/461172912_2256464938021812_1855453214171133119_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeFiUP4w_uyARVJpECm8xh8IiWUv3nZBdaiJZS_edkF1qJAMK9SvkW712r-neKkuWKEVhUsS9nUPBRnahugKWans&_nc_ohc=oslL0-MASjEQ7kNvgHVdVg_&_nc_zt=23&_nc_ht=scontent.fhan2-3.fna&_nc_gid=AXToHRVGQjSTe2FKQ1uBxHZ&oh=00_AYB7DFUAckRKmUBJ0P6VqKMnE4mYlfAgdPVjHtF6ge7-gw&oe=672A8BC5",
      ],
      address: "Tân Xã",
      paragraph: "",
      howtoeat: "Ăn tại quán hoặc đặt giao",
      pricing: "35.000đ - 40.000đ",
      link: "https://www.facebook.com/share/g/zXCAZPQ6UMVm7JHm/",
      characterist: ["", "", ""],
      openclosed: "PHỤC VỤ 20/7",
      rating: 4,
    },
    {
      name: "Cơm Phương Nguyễn",
      type: "Sáng - trưa - tối",
      discription:
        "Cơm Phương Nguyễn là một địa chỉ ẩm thực quen thuộc chuyên phục vụ các món cơm gia đình đậm chất Việt Nam, với hương vị thơm ngon, chuẩn vị nhà làm. Quán tập trung vào những món ăn giản dị nhưng giàu dinh dưỡng, phù hợp cho các bữa ăn gia đình, văn phòng và các dịp tụ tập.",
      img: [
        "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/465795214_8515936081852588_8500227610321645400_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeGCAfZdRGUFCcdiEHAQrjz8jePSewPKzv6N49J7A8rO_jqt3s6j3B1pkFCCheGnWhMZ__KT--QZ2BHdgwDqqnDF&_nc_ohc=nlP-9wt_KWkQ7kNvgGsXYXm&_nc_zt=23&_nc_ht=scontent.fhan2-5.fna&_nc_gid=A3ntPEhy8uD8CfDHh7vIUYa&oh=00_AYDUZWIh_e-yG1NWoSqg-EIg364eLKCz_dYVQUyjubR6gQ&oe=672FA724",
        "https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/465664788_8515936265185903_1965750476841355237_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeE4Q15gASOdo9KTTyXLVWSXb1Ux6LmwZbBvVTHoubBlsCLF1UzKEN2_PFh2gVbHCkEPErmkL-jcfjEBBFPH2Py-&_nc_ohc=Tmc6hRjHLGcQ7kNvgEObbpS&_nc_zt=23&_nc_ht=scontent.fhan20-1.fna&_nc_gid=AR0q8Ttnh78d5Ib3NjGsaXI&oh=00_AYB1hQWRZ_TFtMaaZAse5RWHQWHY2kACO6iBltJYsHftIQ&oe=672FCA93",
        "https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/465382268_8515724091873787_6962731688612178862_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeHMyjm6En-ZZU-QIqJgoW1r3fo11LyR517d-jXUvJHnXrf4O2PdJpskpkSpvpVenBRO01o8_JU9GCOjAz80ShWC&_nc_ohc=ZIcy_dIH60oQ7kNvgFMiGoT&_nc_zt=23&_nc_ht=scontent.fhan2-4.fna&_nc_gid=AcHlTsovn8UsK_IZ2Du_z3Q&oh=00_AYAgwh27CgAmaxp1gIS-0U2b0-mrTduKJi9pV1VFNUKiLg&oe=672FA5F4",
        "https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/465653979_8515723961873800_6319998102648949334_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeGAZZzfgn5gtuIMTcr8Ki_SPgGCB0vJii8-AYIHS8mKL3ztLduQ7XjI5xdYq6Rne45n-wQWIFZfInpLJk2fVLqE&_nc_ohc=AlEw43c8-aAQ7kNvgFe_nRf&_nc_zt=23&_nc_ht=scontent.fhan2-4.fna&_nc_gid=AoMF3eypwlVFuiNRKft5mzE&oh=00_AYCGiGF33RPF6FscRNeU69TSTKI3UO6q6waMObNxZLGxcQ&oe=672FA074",
        "https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/465438059_8511745025605027_6787262004507998838_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeFd9nHpQcqzgxE3Bcqgf2kLYvL34mqK2kdi8vfiaoraR1GhY8Gxw0UlWVdXh9Ojj4HjJoe9FOcQyGAuhwz7vj0d&_nc_ohc=DIMO7PShEbkQ7kNvgFNqX_I&_nc_zt=23&_nc_ht=scontent.fhan2-3.fna&_nc_gid=AGVufmoygXAygl5RDzG4tA6&oh=00_AYBTXDOfxGxzIdT-_Yx0FZREGnN1HveFm90fGYZlNRsJcg&oe=672FB215",
        "https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/465375490_8511745065605023_4011612375504594681_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeEgUeSUiayYVK90sDE80zHVIAMWYaU3POEgAxZhpTc84VzRWVBqNqjgJQf6uz5La0SBklJuqvtvJZkVd32wbXKO&_nc_ohc=yHuckmKoZ_gQ7kNvgHSbK7H&_nc_zt=23&_nc_ht=scontent.fhan20-1.fna&_nc_gid=AEAOdvsKguUQaz5TrMkF-9o&oh=00_AYDoBoBpEpgsLesyzJwtKFW4ajTqvmZaFexX8YZ0PyGiFw&oe=672FA3AD",
        "https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/465285176_8511268425652687_7327388272470887023_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeFCsbflRbFBzFZKeHp_DqGjYsa_hchC1ppixr-FyELWmgTl1Y-S_-LifNflGxg8Rerj10_P56gsgeYJeC1JplNa&_nc_ohc=06CyEAiOQBIQ7kNvgEMdSbr&_nc_zt=23&_nc_ht=scontent.fhan20-1.fna&_nc_gid=Az5YKO42PNJXPrwdm2NaeXJ&oh=00_AYDeZLCrEL8NJBWrxdqjEq1lugtMwplDRmYX8tZxJ4HSCA&oe=672FA5BA",
        "https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/465375591_8509846529128210_8298339127472239575_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeHAINKjcsA9KY_duArSa9Dbu7E8sQeTBdi7sTyxB5MF2MnBZ_f07zk90czVhxmEoNkCgggmY4Qui6ELKJDJNeVu&_nc_ohc=mlgn7Syb54EQ7kNvgG9NEus&_nc_zt=23&_nc_ht=scontent.fhan20-1.fna&_nc_gid=Ac6lQ7Yjm3EuURH1MzGebge&oh=00_AYDLidRdMgJMBgvOxCaZ-1EZ3EpvJ_Qc3_MhBv4QiIA2Ww&oe=672FA8F9",
      ],
      address: "Tân Xã",
      paragraph:
        "Với nguyên liệu tươi ngon, thực đơn phong phú từ các món mặn như cá kho, thịt rang, canh chua đến rau xào, cơm Phương Nguyễn mang đến cảm giác thân thuộc và ấm áp trong mỗi bữa ăn. Quán luôn chú trọng chất lượng, an toàn vệ sinh và giá cả hợp lý, tạo nên sự hài lòng cho khách hàng.",
      howtoeat: "Đặt giao",
      pricing: "35.000đ - 40.000đ",
      link: "https://www.facebook.com/share/g/zXCAZPQ6UMVm7JHm/",
      characterist: ["", "", ""],
      openclosed: " 10h45a.m and 5.45p.m",
      rating: 4,
    },
    {
      name: "Cơm Nguyễn Như Trang",
      type: "Sáng - trưa - tối",
      discription:
        "Cơm Nguyễn Như Trang không chỉ phục vụ các món cơm gia đình đậm đà, mà còn mở rộng thực đơn với các loại đồ uống hấp dẫn như trà sữa, trà đào và milo dầm. Những món uống này được chế biến tỉ mỉ, đảm bảo hương vị tươi ngon, phù hợp để giải khát và thưởng thức cùng các món ăn. Với sự kết hợp đa dạng giữa các món ăn chuẩn vị cơm nhà và đồ uống phong phú, Cơm Nguyễn Như Trang mang đến trải nghiệm ẩm thực trọn vẹn, tiện lợi cho bữa trưa, bữa tối hay các buổi gặp mặt thân mật.",
      img: [
        "https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/465925039_2764696630403565_7823812921365620553_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeGvuwAeCPhEbiZq4SLARTgDCn9PYl4CFAoKf09iXgIUChCW57-feyHFrDpZtLHW6Ei-NmhedmiVu4wd9Rzxz5Jh&_nc_ohc=_aGIUxnRHyUQ7kNvgEqvbFZ&_nc_zt=23&_nc_ht=scontent.fhan2-4.fna&_nc_gid=AIn1ENr1TUPao24Lv0-E0jR&oh=00_AYAyIkGOnuxAuCKLS3yk-smoc-OSJinKRjvbDugaK8bonA&oe=672FA79F",
        "https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/465678426_2764696650403563_7356660949245389852_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeGWoVAKb9zbtq0Fi4YhpFC3tgj8jIrMzk62CPyMiszOTqYuS446zxcV-q0VQrBxUrXkKTYv17lPr3M63tY0d67V&_nc_ohc=pqi4tua1DzkQ7kNvgG0C2p8&_nc_zt=23&_nc_ht=scontent.fhan20-1.fna&_nc_gid=AnrGK2zbwAgHUFxs3uGSd6I&oh=00_AYBFklH5hUyzIvTg5QK-hPoMLOkzZJyiDcQEQEAi79dzZg&oe=672FAC96",
        "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/465669182_2764696663736895_1418864632370711995_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeEivru7zNnA-ygYyS6PQyMbMUnW9uBAPFgxSdb24EA8WPGZE5N3oMCwbnSmZwjhPJ35-Msm1RvKLYqbUsEA-97H&_nc_ohc=bsACRMxqZGwQ7kNvgEVHeJ3&_nc_zt=23&_nc_ht=scontent.fhan2-5.fna&_nc_gid=AwlCgdO5HfByQdfYdtsqNil&oh=00_AYAcywQhz0L1GPUYdeTYCjqLbDoBdJXYoR8-rXrVMzHmag&oe=672FB727",
        "https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/465671188_2764696683736893_680023014696084953_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeFFsGj-KWuayxGSeKntnFWlK_FjHCp8CA0r8WMcKnwIDTXv2Pzu7hfIA3la1l_9Ke7Ma_FkjF9HYOYdbyeMVWCx&_nc_ohc=3-gOueavZaYQ7kNvgFVO74R&_nc_zt=23&_nc_ht=scontent.fhan2-4.fna&_nc_gid=ATQXTK1Fhaoy4rzg2P0JbtA&oh=00_AYD-HfLbtcqSG0_ZQKom5BuyLfRljg2fJ6PnGXd45V27cA&oe=672FCF52",
        "https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/465791977_2764696693736892_2548369639650586018_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeHl6etKlMpkRoF_y0RFMQesTr7setXbT1JOvux61dtPUuELBLTw-PQ-P6853EM0D96t8tgVz2Zmxud-SU2gbNe5&_nc_ohc=LD6Vjvup9cMQ7kNvgHojZo_&_nc_zt=23&_nc_ht=scontent.fhan2-3.fna&_nc_gid=AFRFXtWsD8AXIs58B5nsNTu&oh=00_AYD9azfgbKKkdOMXEcIqQ24GvLiJAFuzFgGm_TJePdmJ3w&oe=672FB262",
        "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/465731353_2764696477070247_5555723859918492457_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeFBDa6exZpW3Uz3ACNl0hrm_-MpBchMW13_4ykFyExbXX80W1qjJncWzUEJaOxaqwWoCSbNLeIDSpBxYpY8tzHQ&_nc_ohc=F-A3WSs1Xq4Q7kNvgGOWV5i&_nc_zt=23&_nc_ht=scontent.fhan2-5.fna&_nc_gid=A05hZSOMpvOv3zmTK_wtsAW&oh=00_AYDl1VYDl4jZvsCVe38NVYPAbX3kPuVfMiVCWo82fwJ7kw&oe=672FCC8A",
        "https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/465597940_2764683963738165_4588102733860973967_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeFdRKpSzSd6A_4EetkHzRSHCJ_VmCv_5nMIn9WYK__mcx9yB0RTTq3jrLoulo2QL9h2S7D4J0PRxbrKLEj384I0&_nc_ohc=8m63CrDcatQQ7kNvgGNwNoH&_nc_zt=23&_nc_ht=scontent.fhan20-1.fna&_nc_gid=Akmwza5r7Bn9OS4AOroaCXw&oh=00_AYCXmqyWRmbseUWWxYbinpTmapmBpX7zeDkiHr2WvdhZHQ&oe=672FAF65",
        "https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/465672391_2764684170404811_1018779432883206677_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeHmh_w64RYGeNDMjQMzhY5x1RjkPtYcQ3DVGOQ-1hxDcBNR1Q9md6fUtBtWzejqywR9noENHB6tI25JjtLTkTiz&_nc_ohc=sH7-3pdBeWIQ7kNvgEVhO4s&_nc_zt=23&_nc_ht=scontent.fhan2-3.fna&_nc_gid=AOkt33ORrbyz1H3dF7Zpj_t&oh=00_AYBte6UmBtQDA1tdMxrBca961HWPvhuLtYUE4v3ZZjjsZw&oe=672FAB41",
      ],
      address: "Tân Xã",
      paragraph:
        "Cơm Nguyễn Như Trang không chỉ chú trọng vào hương vị mà còn luôn giữ mức giá hợp lý, phù hợp cho những ai mong muốn có bữa ăn ngon miệng, đầy đủ dinh dưỡng giữa cuộc sống bận rộn.",
      howtoeat: "Đặt giao",
      pricing: "35.000đ - 40.000đ",
      link: "https://www.facebook.com/share/g/zXCAZPQ6UMVm7JHm/",
      characterist: ["", "", ""],
      openclosed: "PHỤC VỤ 20/7",
      rating: 4,
    },
  ];
  // const [data, setData] = useState<IData[]>([]);

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
