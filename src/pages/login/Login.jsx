import React, { memo, useState } from "react";
import  {Link, useLocation, useNavigate} from "react-router-dom"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faGooglePlus} from "@fortawesome/free-brands-svg-icons"
import axios from "axios"
import {useDispatch, useSelector} from "react-redux"
import "./Login.css"
import {  loginFulfilled, loginPending, loginRejected } from "../../redux/reducers/authSlice";
import { ToastContainer, toast } from 'react-toastify';
import {useGoogleLogin } from "@react-oauth/google"
import { RotatingLines } from "react-loader-spinner";
import { Helmet } from "react-helmet-async";

const Login =()=>{
    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()
    const redirectPath = location.state?.path || "/"
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {loginError} = useSelector((state)=> state.authSlice)
    const {loginLoading} = useSelector((state)=> state.authSlice)
// handle google auth
const handleGoogleLogin = useGoogleLogin ({
    onSuccess: async (tokenResponse)  => {
            try{
                const res = await axios.post(`https://nestjs-now-saif3-osamakamelmohamed6-gmailcom.vercel.app/auth/login-googel`, 
                {
                    access_token: tokenResponse.access_token
                })
                window.sessionStorage.setItem("user", JSON.stringify(res.data.user))
                window.sessionStorage.setItem("token", JSON.stringify(res.data.token))
                dispatch(loginFulfilled(res.data))
                navigate(redirectPath, {replace: true})
            }catch(err){
                // console.log(err)
                if(err.message === "Network Error"){
                    toast.error("تأكد من اتصالك بالانترنت")
                }else if (err.message){
                    toast.error(err.message)
                }
            }
        },
    
    });
// handle login 
const handleLogin = async(e)=>{
    e.preventDefault()
    dispatch(loginPending())
    try{
        const res = await axios.post(`https://nestjs-now-saif3-osamakamelmohamed6-gmailcom.vercel.app/auth/login`, {
        phone: `+2${email}`,
        password: password
    })
    window.sessionStorage.setItem("user", JSON.stringify(res.data.user))
    window.sessionStorage.setItem("token", JSON.stringify(res.data.token))
    dispatch(loginFulfilled(res.data))
    navigate(redirectPath, {replace: true})
    }catch(err){
        dispatch(loginRejected(err.message || err.response.data))
        if(err.message === "Network Error"){
            toast.error("تأكد من اتصالك بالانترنت")
        }else if (err.response.data.errorMessage){
            toast.error(err.response.data.errorMessage)
        }
    }
    setEmail("")
    setPassword("")
}

    return(
        <>
        <Helmet>
            <title>صيـف |  تسجيل الدخول </title>
            <meta name="description" content=" شقة للإيجار. توافر جيد وأسعار رائعة لإيجار الشقق. احجز الشقة المناسبة ،اعرض شقتك للايجار ، حدد موقعك ، احجز اونلاين واختر أفضل العروض لإقامتك."/>
            <meta name="keywords" content="سكن، إقامة, فندق, الفنادق, عروض خاصة، شقق مصيفية ، أسعار مغرية، عطل نهاية الأسبوع، قضاء العطل في المدينة، صفقات, اقتصادي، رخيص، حسم، توفير"/>
        </Helmet>
            <section className="login">
            {
                    loginError ? 
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
                                <label htmlFor="email-login">رقم الموبايل</label>
                                <div className="mobile-number">
                                    <input
                                        id="email-login"
                                        name="email-login" 
                                        type="text"
                                        onChange={(e)=>setEmail(e.target.value)}
                                        value={email}
                                        className="user-mobile-number"
                                        required
                                        />
                                </div>
                                <label htmlFor="password-login">كلمة المرور</label>
                                <input
                                id="password-login"
                                name="password-login"  
                                type="password"
                                onChange={(e)=>setPassword(e.target.value)}
                                value={password}
                                required
                                />
                                {/* <Link 
                                className="forget-password"
                                to="/sentCode"
                                >نسيت كلمة المرور؟</Link> */}
                                <button
                                type="submit"
                                >{loginLoading ? 
                                    <RotatingLines
                                    strokeColor="#fff"
                                    strokeWidth="5"
                                    animationDuration="0.75"
                                    width="30"
                                    visible={true}
                                    />:
                                    "تسجيل الدخول"
                                }</button>
                            </form>
                            <div className="new-account">
                                <span>ليس لديك حساب؟ </span>
                                <Link to="/register">حساب جديد</Link>
                            </div>
                            <div className="fire-base">
                                <p>أو قم بالتسجيل التالي</p>
                                <div>
                                    <FontAwesomeIcon 
                                    icon={faGooglePlus}
                                    onClick={handleGoogleLogin}
                                    />
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </>
    )
}
export default memo(Login)