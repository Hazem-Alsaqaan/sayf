import React, { memo, useState } from "react";
import "./Register.css"
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGooglePlus, faSquareTwitter } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { registerFulfilled, registerPending, registerRejected } from "../../redux/reducers/authSlice";
import { ToastContainer, toast } from 'react-toastify';

const Register = ({getEmailFromRegister})=>{
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const {error} = useSelector((state)=>state.authSlice)

    const handleRegister = async(e)=>{
        e.preventDefault()
        dispatch(registerPending())
        try{
            const res = await axios.post(`https://saif-production-e995.up.railway.app/auth/signup`,
            {
                username: username,
                password:password,
                phone: email
            })
            getEmailFromRegister(email)
            dispatch(registerFulfilled(res.data))
            navigate("/verifyCode")
        }catch(err){
            dispatch(registerRejected(err.response.data.errorMessage))
            if(err.response.data.errorMessage){
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
            <section className="register">
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
                                <label htmlFor="email">البريد الالكتروني</label>
                                <input
                                id="email"
                                name="email" 
                                type="text"
                                required
                                onChange={(e)=>setEmail(e.target.value)}
                                value={email}
                                />
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
                                >إنشاء حساب</button>
                            </form>
                            <div className="new-account">
                                <span>لديك حساب بالفعل؟</span>
                                <Link to="/login">تسجيل الدخول</Link>
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
export default memo(Register)