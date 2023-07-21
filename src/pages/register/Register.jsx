import React, { memo, useState } from "react";
import "./Register.css"
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGooglePlus, faSquareTwitter } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { loginFulfilled, registerFulfilled, registerPending, registerRejected } from "../../redux/reducers/authSlice";
import { ToastContainer, toast } from 'react-toastify';
import { useGoogleLogin } from "@react-oauth/google";
import { RotatingLines } from "react-loader-spinner";
import { Helmet } from "react-helmet-async";

const Register = ({getEmailFromRegister})=>{
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const {registerLoading} = useSelector((state)=>state.authSlice)

    const redirectPath =  "/" || location.state?.path

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
                if(err.message === "Network Error"){
                    toast.error("تأكد من اتصالك بالانترنت")
                }else if(err.response.data.errorMessage){
                    toast.error(err.response.data.errorMessage)
                }
            }
        },
    
    });
    const handleRegister = async(e)=>{
        e.preventDefault()
        dispatch(registerPending())
        try{
            const res = await axios.post(`https://nestjs-now-saif3-osamakamelmohamed6-gmailcom.vercel.app/auth/signup`,
            {
                username: username,
                password:password,
                phone: `+2${email}`
            })
            getEmailFromRegister(email)
            dispatch(registerFulfilled(res.data))
            navigate("/login")
        }catch(err){
            dispatch(registerRejected())
            if(err.message === "Network Error"){
                toast.error("تأكد من اتصالك بالانترنت")
            }else if(err.response.data.errorMessage){
                toast.error(err.response.data.errorMessage)
            }
        }
        setUsername("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
    }

    return(
        <>
        <Helmet>
            <title>صيـف | إنشاء حساب جديد </title>
            <meta name="description" content=" شقة للإيجار. توافر جيد وأسعار رائعة لإيجار الشقق. احجز الشقة المناسبة ،اعرض شقتك للايجار ، حدد موقعك ، احجز اونلاين واختر أفضل العروض لإقامتك."/>
            <meta name="keywords" content="سكن، إقامة, فندق, الفنادق, عروض خاصة، شقق مصيفية ، أسعار مغرية، عطل نهاية الأسبوع، قضاء العطل في المدينة، صفقات, اقتصادي، رخيص، حسم، توفير"/>
        </Helmet>
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
                        /> 
            <section className="register">
                <div className="container">
                    <div className="register-content">
                        <section className="landing">
                            <div className="text">
                                <h1>أهلا بك</h1>
                                <p>قم بإنشاء حسابك باستخدام<br/>بريدك الالكتروني</p>
                            </div>
                            <div className="image">
                                <img 
                                src="https://res.cloudinary.com/dkhu7rt8n/image/upload/v1681155353/sayf/login_blxnkh.png" 
                                alt=""/>
                            </div>
                        </section>
                        <section className="auth-form">
                            <form onSubmit={(e)=>handleRegister(e)}>
                                <label htmlFor="username">الاسم</label>
                                <input
                                id="username"
                                name="username" 
                                type="text"
                                required
                                onChange={(e)=> setUsername(e.target.value)}
                                value={username}
                                />
                                <label htmlFor="email">رقم الموبايل</label>
                                <div className="mobile-number">
                                    <input
                                    id="email"
                                    name="email" 
                                    type="text"
                                    className="user-mobile-number"
                                    required
                                    onChange={(e)=>setEmail(e.target.value)}
                                    value={email}
                                        />
                                </div>
                                <label htmlFor="password">كلمة المرور</label>
                                <input
                                id="password"
                                name="password"  
                                type="password"
                                required
                                onChange={(e)=>setPassword(e.target.value)}
                                value={password}
                                />
                                <label htmlFor="confirmPassword">تأكيد كلمة المرور</label>
                                <input
                                id="confirmPassword"
                                name="confirmPassword"  
                                type="password"
                                required
                                onChange={(e)=>setConfirmPassword(e.target.value)}
                                value={confirmPassword}
                                />
                                <button
                                type="submit"
                                >{registerLoading ? 
                                    <RotatingLines
                                    strokeColor="#fff"
                                    strokeWidth="5"
                                    animationDuration="0.75"
                                    width="30"
                                    visible={true}
                                    />:
                                    "إنشاء حساب"
                                }</button>
                            </form>
                            <div className="new-account">
                                <span>لديك حساب بالفعل؟</span>
                                <Link to="/login">تسجيل الدخول</Link>
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
export default memo(Register)