import React, { useState } from "react";
import  {Link, useLocation, useNavigate} from "react-router-dom"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFacebook, faGooglePlus, faSquareTwitter} from "@fortawesome/free-brands-svg-icons"
import axios from "axios"
import {useDispatch, useSelector} from "react-redux"
import "./Login.css"
import { loginFulfilled, loginPending, loginRejected } from "../../redux/reducers/authSlice";
import { ToastContainer, toast } from 'react-toastify';



const Login =()=>{
    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {error} = useSelector((state)=> state.authSlice)
    const redirectPath = location.state?.path || "/"
    
// handle login 
const handleLogin = async(e)=>{
    e.preventDefault()
    dispatch(loginPending())
    try{
        const res = await axios.post(`https://saif-production-e995.up.railway.app/auth/login`, {
        phone: email,
        password: password
    })
    window.localStorage.setItem("user", JSON.stringify(res.data.user))
    window.localStorage.setItem("token", JSON.stringify(res.data.token))
    dispatch(loginFulfilled(res.data))
    navigate(redirectPath, {replace: true})
    }catch(err){
        dispatch(loginRejected(err.response.data))
        if(err.response.data.errorMessage){
            toast.error(err.response.data.errorMessage)
        }
    }
}

    return(
        <>
            <section className="login">
            {
                    error ? 
                    <ToastContainer
                        position="top-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                        /> : ""
                }
                <div className="container">
                    <div className="login-content">
                        <section className="landing">
                            <div className="text">
                                <h1>أهلا بك</h1>
                                <p>سجل دخولك باستخدام بريدك <br/>الإلكتروني</p>
                            </div>
                            <div className="image">
                                <img 
                                src="https://res.cloudinary.com/dkhu7rt8n/image/upload/v1681155343/sayf/sign_up_ox2rhz.png" 
                                alt=""/>
                            </div>
                        </section>
                        <section className="auth-form">
                            <form onSubmit={(e)=>handleLogin(e)}>
                                <label htmlFor="email">البريد الالكتروني</label>
                                <input
                                id="email"
                                name="email" 
                                type="text"
                                onChange={(e)=>setEmail(e.target.value)}
                                required
                                />
                                <label htmlFor="password">كلمة المرور</label>
                                <input
                                id="password"
                                name="password"  
                                type="password"
                                onChange={(e)=>setPassword(e.target.value)}
                                required
                                />
                                <Link 
                                className="forget-password"
                                to="/forgetPassword"
                                >نسيت كلمة المرور؟</Link>
                                <button
                                type="submit"
                                >تسجيل الدخول</button>
                            </form>
                            <div className="new-account">
                                <span>ليس لديك حساب؟ </span>
                                <Link to="/register">حساب جديد</Link>
                            </div>
                            <div className="fire-base">
                                <p>أو قم بالتسجيل التالي</p>
                                <div>
                                    <FontAwesomeIcon icon={faGooglePlus}/>
                                    <FontAwesomeIcon icon={faSquareTwitter}/>
                                    <FontAwesomeIcon icon={faFacebook}/>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Login