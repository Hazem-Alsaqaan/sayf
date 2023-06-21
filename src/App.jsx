import React, { useState } from "react"
import {Routes, Route} from "react-router-dom"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
const Home = React.lazy(()=> import("./pages/home/Home"))
const MyBookings = React.lazy(()=> import("./pages/my.bookings/MyBookings"))
const ShowYourApartment = React.lazy(()=> import("./pages/show.your.apartment/ShowYourApartment"))
const MyFavourite = React.lazy(()=>import("./pages/my.favourite/MyFavourite"))
const ShowUnit = React.lazy(()=>import("./pages/show.unit/ShowUnit"))
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
import RestPassword from "./pages/rest.password/RestPassword"
import TirmsOfUse from "./pages/tirms.of.use/TirmsOfUse"
import PrivacyPolicy from "./pages/privacy.policy/PrivacyPolicy"
const MyUnits = React.lazy(()=>import("./pages/my.units/MyUnits"))
import HouseReservations from "./pages/house.reservations/HouseReservations"
import { RotatingLines } from "react-loader-spinner"



function App() {
  // spinner loader pages to add fallback
  const mainPagesLoader = <div className="main-pages-loading-spinner">
                            <RotatingLines
                              strokeColor="#5500A1"
                              strokeWidth="5"
                              animationDuration="0.75"
                              width="100"
                              visible={true}
                              />
                          </div>
  // ################################################################### //
  const [email, setEmail] = useState("")
  const [registerMail, setRegisterMail] = useState("")
  const [code, setCode] = useState("")
  const [pageNumber, setPageNumber] = useState(1)

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
        <Route path="/" element={<React.Suspense fallback={mainPagesLoader}><Home pageNumber = {pageNumber} setPageNumber = {setPageNumber}/></React.Suspense>}>
          <Route index element={<HomeContent/>}/>
          <Route path="search" element={<SearchResult pageNumber = {pageNumber} setPageNumber = {setPageNumber}/>}/>
          <Route path="home" element={<HomeContent/>}/>
        </Route>
        <Route path="/tirms-of-use" element={<RequireAuth><TirmsOfUse/></RequireAuth>}/>
        <Route path="/privacy-policy" element={<RequireAuth><PrivacyPolicy/></RequireAuth>}/>
        <Route path="/profile" element={<RequireAuth><Profile/></RequireAuth>}/>
        <Route path="/manageAccount" element={<RequireAuth><ManageAccount/></RequireAuth>}/>
        <Route path="/myFavourite" element={<RequireAuth><React.Suspense fallback={mainPagesLoader}><MyFavourite/></React.Suspense></RequireAuth>}/>
        <Route path="/myBookings" element={<RequireAuth><React.Suspense fallback={mainPagesLoader}><MyBookings/></React.Suspense></RequireAuth>}/>
        <Route path="/showYourApartment" element={<RequireAuth><React.Suspense fallback={mainPagesLoader}><ShowYourApartment/></React.Suspense></RequireAuth>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register getEmailFromRegister ={getEmailFromRegister}/>}/>
        <Route path="/verifyCode" element={<VerifyCode registerMail ={registerMail}/>}/>
        <Route path="/sentCode" element={<SentCode getMailFromSentCode = {getMailFromSentCode}/>}/>
        <Route path="/confirmCode" element={<ConfirmCodeToRestPass email = {email} getCodeFromConfirmCode = {getCodeFromConfirmCode}/>}/>
        <Route path="/restPassword" element={<RestPassword email = {email} code = {code}/>}/>
        <Route path="/changePassword" element={<RequireAuth><ChangePassword/></RequireAuth>}/>
        <Route path="/showUnit/:unitId/payment" element={<RequireAuth><Payment /></RequireAuth>}/>
        <Route path="/showUnit/:unitId/addRating" element={<RequireAuth><AddRating /></RequireAuth>}/>
        <Route path="/showUnit/:unitId" element={<RequireAuth><React.Suspense fallback={mainPagesLoader}><ShowUnit/></React.Suspense></RequireAuth>}>
          <Route index element={<UnitSwiperImages/>}/>
          <Route path="images" element={<UnitSwiperImages/>}/>
          <Route path="location" element={<UnitLocation/>}/>
        </Route>
        <Route path="/myUnits" element={<RequireAuth><React.Suspense fallback={mainPagesLoader}><MyUnits/></React.Suspense></RequireAuth>}/>
        <Route path="/myUnits/:unitId" element={<RequireAuth><HouseReservations/></RequireAuth>}/>
      </Routes>
    </div>
  )
}

export default App


//super-reaction.surge.sh
