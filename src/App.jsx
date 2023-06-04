import React, { useEffect, useState } from "react"
import {Routes, Route} from "react-router-dom"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import Home from "./pages/home/Home"
import MyBookings from "./pages/my.bookings/MyBookings"
import ShowYourApartment from "./pages/show.your.apartment/ShowYourApartment"
import MyFavourite from "./pages/my.favourite/MyFavourite"
import ShowUnit from "./pages/show.unit/ShowUnit"
import UnitSwiperImages from "./components/unit.swiper.images/UnitSwiperImages"
import UnitLocation from "./components/unit.location/UnitLocation"
import Payment from "./pages/payment/Payment"
import SearchResult from "./components/search.result/SearchResult"
import HomeContent from "./components/home.content/HomeContent"
import RequireAuth from "./components/require.auth/RequireAuth"
import SentCode from "./pages/sent.code/SentCode"
import VerifyCode from "./pages/verify.code/VerifyCode"
import Profile from "./pages/profile/Profile"
import ManageAccount from "./pages/manage.account/ManageAccount"
import NotFound from "./pages/not.found/NotFound"
import ConfirmCodeToRestPass from "./pages/confirm.code.rest.pass/ConfirmCodeToRestPass"
import AddRating from "./pages/add.rating/AddRating"
import ChangePassword from "./pages/change.password/ChangePassword"



function App() {
  const [email, setEmail] = useState("")
  const [registerMail, setRegisterMail] = useState("")
  const [code, setCode] = useState("")

  const getMailFromSentCode = (mail)=>{
    setEmail(mail)
  }
  const getCodeFromConfirmCode = (theCode)=>{
    setCode(theCode)
  }
  const getEmailFromRegister = (mail)=>{
    setRegisterMail(mail)
  }

  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/" element={<Home/>}>
          <Route index element={<HomeContent/>}/>
          <Route path="search" element={<SearchResult/>}/>
          <Route path="home" element={<HomeContent/>}/>
        </Route>
        <Route path="/profile" element={<RequireAuth><Profile/></RequireAuth>}/>
        <Route path="/manageAccount" element={<RequireAuth><ManageAccount/></RequireAuth>}/>
        <Route path="/myFavourite" element={<RequireAuth><MyFavourite/></RequireAuth>}/>
        <Route path="/myBookings" element={<RequireAuth><MyBookings/></RequireAuth>}/>
        <Route path="/showYourApartment" element={<RequireAuth><ShowYourApartment/></RequireAuth>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register getEmailFromRegister ={getEmailFromRegister}/>}/>
        <Route path="/verifyCode" element={<VerifyCode registerMail ={registerMail}/>}/>
        <Route path="/sentCode" element={<SentCode getMailFromSentCode = {getMailFromSentCode}/>}/>
        <Route path="/confirmCode" element={<ConfirmCodeToRestPass email = {email} getCodeFromConfirmCode = {getCodeFromConfirmCode}/>}/>
        <Route path="/changePassword" element={<RequireAuth><ChangePassword/></RequireAuth>}/>
        <Route path="/showUnit/:unitId/payment" element={<RequireAuth><Payment /></RequireAuth>}/>
        <Route path="/showUnit/:unitId/addRating" element={<RequireAuth><AddRating /></RequireAuth>}/>
        <Route path="/showUnit/:unitId" element={<RequireAuth><ShowUnit/></RequireAuth>}>
          <Route index element={<UnitSwiperImages/>}/>
          <Route path="images" element={<UnitSwiperImages/>}/>
          <Route path="location" element={<UnitLocation/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
