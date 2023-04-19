import React from "react"
import {Routes, Route} from "react-router-dom"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import Forgetpassword from "./pages/forget.password/ForgetPassword"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/forgetPassword" element={<Forgetpassword/>}/>
      </Routes>
    </div>
  )
}

export default App
