import { Route, Routes } from 'react-router-dom'
import NavBar from './navbar'
import HomePage from './homepage/index.tsx'
import FPTU from './fptu/index.tsx'
import EntertainmentPage from './playground/index.tsx'
import BusRoutes from './tuyenxe/index.tsx'
import FoodStore from './food/index.tsx'
import Motel from './nhatro/index.tsx'
// import LogoGroup from '../public/LogoWWeb.jpg';
import './App.css'

function App() {

  return (
    <>
      <div className="container">
        <NavBar/>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/fptu' element={<FPTU />}></Route>
          {/* <Route path='/login' element={<LoginPage />}></Route>
          <Route path='/signup' element={<SignUpPage />}></Route>
          <Route path='/reset' element={<Reset />}></Route> */}
          <Route path='/vuichoi' element={<EntertainmentPage />}></Route>
          <Route path='/tuyenxe' element={<BusRoutes />}></Route>
          <Route path='/anuong' element={<FoodStore />}></Route>
          <Route path='/nhatro' element={<Motel />}></Route>
        </Routes>
        {/* <PopupDetail /> */}
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

          <div className="hinhlogo absolute">
            <h1 className="font-extrabold mt-3 mb-11 ml-14 font-sans">
              HolaWeb
            </h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
