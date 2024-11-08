// import React from "react";
import { useState } from "react";
import fptLogo from "../../public/fpt-logo.png";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import "./style.scss";

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleChangeEmail = (e: any) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e: any) => {
    setPassword(e.target.value);
  };
  return (
    <div className="LoginPage w-full grid relative">
      <div className="img relative z-0">
        {/* ======================================title=========================== */}
        <div className="title z-10 absolute flex gap-4">
          <div className="title-logo w-32">
            <img src={fptLogo} alt="" />
          </div>
          <div className="text-title text-white flex h-fit self-center items-center justify-center w-fit text-6xl font-semibold">
            Hola
            <div className="smalltext text-2xl self-end h-fit">Handbook</div>
          </div>
        </div>
        {/* ==============================Background Img============================== */}
        <div
          className="background-img w-full h-full absolute top-0 z-0"
          style={{
            backgroundImage:
              "url(https://daihoc.fpt.edu.vn/wp-content/uploads/2022/05/dai-hoc-fpt-hoa-lac-3-1652327802-910x587.jpeg)",
          }}
        ></div>
        {/* =============================IMG-center================================ */}
        <div
          className="img-center z-10 absolute"
          style={{
            // height: "22rem",
            maxWidth: "120rem",
            width: "65%",
            aspectRatio: "3/2",
          }}
        >
          <img
            src="https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/458218931_908629571295307_2568324779341406338_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEHwTTnOq5zIl37prRD7t111iboWYfPI0XWJuhZh88jRUzw71w-wt_UHhIBLuw8tnWKR7d3SkvqHl-WHa3y5q2g&_nc_ohc=bJ_Jh90ld2MQ7kNvgGzCJHj&_nc_zt=23&_nc_ht=scontent.fhan15-1.fna&_nc_gid=Am4zcL-dQ0CqXOiroCgvg4v&oh=00_AYB2mXglsYmoCD6qiJgdTg0V5jwjFK3uFBexdz1visNMIg&oe=6710F7DC"
            alt=""
          />
        </div>
        {/* ================================Discription=================================== */}
        <div className="discription absolute text-white">
          <h1 className="text-2xl w-fit m-auto mb-2">Cẩm nang Hòa Lạc</h1>
          <div className="w-fit m-auto text-center">
            Trở thành thành viên của cẩm nang để có thể góp ý tới mọi người
          </div>
        </div>
      </div>
      {/* ==============================Form============================== */}
      <div className="login-form px-6 py-4 h-fit m-auto">
        <h1 className="text-6xl font-semibold m-auto w-fit">Đăng nhập</h1>
        <div className="guest text-base font-semibold m-auto w-fit mb-5">
          Chào mừng trở lại
        </div>
        <form
          action=""
          className="flex w-full flex-col px-3 justify-center mb-2"
        >
          <span className="text-grey">Email</span>
          <input
            value={email}
            onChange={handleChangeEmail}
            type="text"
            className="inpEmail pl-2 w-full outline-none py-1 text-base mb-3"
            placeholder="Nhập email"
            required
          />
          <span className="text-grey">Mật khẩu</span>
          <input
            value={password}
            onChange={handleChangePassword}
            type="text"
            className="inpPassword pl-2 w-full outline-none py-1 text-base mb-3"
            placeholder="Nhập mật khẩu"
            required
          />
        </form>
        <div className="toSignup w-fit m-auto">
          Chưa có tài khoản?
          <NavLink to="/signup" className="ora-text">
            {" "}
            Đăng ký ngay
          </NavLink>
        </div>
        <NavLink
          to="/reset"
          className="toForget ora-text w-fit m-auto block mb-4"
        >
          {" "}
          Quên mật khẩu?
        </NavLink>
        <button
          onClick={() => {
            if (email != "" && password != "") {
              Swal.fire({
                title: "Thành công!",
                text: "Đăng nhập thành công",
                icon: "success",
              });
            } else {
              Swal.fire({
                title: "Thất bại!",
                text: "Yêu cầu điền đầy đủ thông tin cần thiết",
                icon: "error",
              });
            }
          }}
          className="text-2xl w-full py-2 btn-cf"
        >
          Đăng Nhập
        </button>
      </div>
    </div>
  );
}
