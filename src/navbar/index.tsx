import { NavLink } from "react-router-dom";
// import logoFPTU from "../../public/fpt-logo.png";
import logoGroup from "../../public/group-logo.png";
import "./style.scss";

export default function NavBar() {
  return (
    <div className="navbar grid px-14 py-2">
      <NavLink to="/" className="logo-branch flex gap-1 items-center w-fit">
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
      <div className="nav-list self-center">
        <ul className="flex gap-7 items-center justify-center w-fit text-xl font-bold">
          <NavLink
            className={({ isActive }) => (isActive ? "oorange" : "")}
            to="/"
          >
            Trang chủ
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "oorange" : "")}
            to="/tuyenxe"
          >
            Tuyến Xe
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "oorange" : "")}
            to="/anuong"
          >
            Ăn uống
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "oorange" : "")}
            to="/nhatro"
          >
            Phòng Trọ
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "oorange" : "")}
            to="/vuichoi"
          >
            Vui chơi
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "oorange" : "")}
            to="/fptu"
          >
            FPTU
          </NavLink>
        </ul>
      </div>
    </div>
  );
}
