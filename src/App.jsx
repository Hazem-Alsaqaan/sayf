import React from "react"
import {Routes, Route} from "react-router-dom"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import Forgetpassword from "./pages/forget.password/ForgetPassword"
import ConfirmCode from "./pages/confirm.code/ConfirmCode"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/forgetPassword" element={<Forgetpassword/>}/>
        <Route path="/confirmCode" element={<ConfirmCode/>}/>
      </Routes>
    </div>
  )
}

export default App
