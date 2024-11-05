import { NavLink } from "react-router-dom";
// import logoFPTU from "../../public/fpt-logo.png";
import logoGroup from "../../public/group-logo.png";
import "./style.scss";
import { useState } from "react";

export default function NavBar() {
  const [activeTabs, setActiveTabs] = useState<number>(1);

  const handleTabs = (index:number) => {
    setActiveTabs(index);
  }
  return (
    <div className="navbar grid px-14 py-2">
      <NavLink to='/' className="logo-branch flex gap-1 items-center w-fit">
        {/* <div
          className="logo"
          style={{ backgroundImage: `url(${logoFPTU})` }}
        ></div> */}
        <div className="branch text-3xl font-bold flex">
          Hola<div className="small text-base self-end">HandBook</div>
        </div>
        <div
          className="small-logo"
          style={{ backgroundImage: `url(${logoGroup})` }}
        ></div>
      </NavLink>
      <div className="nav-list self-center justify-self-center">
        <ul className="flex gap-7 items-center justify-center w-fit text-xl font-bold">
          <NavLink onClick={() => {handleTabs(1)}} className={activeTabs == 1 ? "oorange" : ""} to='/'>Trang chủ</NavLink>
          <NavLink onClick={() => {handleTabs(2)}} className={activeTabs == 2 ? "oorange" : ""} to='/tuyenxe'>Tuyến Xe</NavLink>
          <NavLink onClick={() => {handleTabs(3)}} className={activeTabs == 3 ? "oorange" : ""} to='/anuong'>Ăn uống</NavLink>
          <NavLink onClick={() => {handleTabs(4)}} className={activeTabs == 4 ? "oorange" : ""} to='/nhatro'>Phòng Trọ</NavLink>
          <NavLink onClick={() => {handleTabs(5)}} className={activeTabs == 5 ? "oorange" : ""} to='/vuichoi'>Vui chơi</NavLink>
          <NavLink onClick={() => {handleTabs(6)}} className={activeTabs == 6 ? "oorange" : ""} to='/fptu'>FPTU</NavLink>
        </ul>
      </div>
      <div className="right flex items-center justify-center gap-5 justify-self-end">
        <div className="search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
        {/* <NavLink to='/login' className="login font-bold text-xl">Đăng nhập</NavLink>
        <NavLink to='/signup' className="signup font-bold text-xl">Đăng ký</NavLink> */}
      </div>
    </div>
  );
}
