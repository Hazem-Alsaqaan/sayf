import React from "react"
import {Routes, Route} from "react-router-dom"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import Forgetpassword from "./pages/forget.password/ForgetPassword"
import ConfirmCode from "./pages/confirm.code/ConfirmCode"
import ConfirmPassword from "./pages/confirm.password/ConfirmPassword"
import Home from "./pages/home/Home"
import MyBookings from "./pages/my.bookings/MyBookings"
import ShowYourApartment from "./pages/show.your.apartment/ShowYourApartment"
import MyFavourite from "./pages/my.favourite/MyFavourite"
import ShowUnit from "./pages/show.unit/ShowUnit"

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/myFavourite" element={<MyFavourite/>}/>
        <Route path="/myBookings" element={<MyBookings/>}/>
        <Route path="/showYourApartment" element={<ShowYourApartment/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/forgetPassword" element={<Forgetpassword/>}/>
        <Route path="/confirmCode" element={<ConfirmCode/>}/>
        <Route path="/confirmPassword" element={<ConfirmPassword/>}/>
        <Route path="/showUnit/:unitId" element={<ShowUnit/>}/>
      </Routes>
    </div>
  )
}

export default App
