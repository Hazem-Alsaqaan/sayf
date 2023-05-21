import React, { useState } from "react";
import  {Link, useLocation, useNavigate} from "react-router-dom"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFacebook, faGooglePlus, faSquareTwitter} from "@fortawesome/free-brands-svg-icons"
import axios from "axios"
import {useDispatch, useSelector} from "react-redux"
import "./Login.css"
import { logOut, loginFulfilled, loginPending, loginRejected } from "../../redux/reducers/authSlice";
import { ToastContainer, toast } from 'react-toastify';
import {useGoogleLogin } from "@react-oauth/google"

const Login =()=>{
    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()
    const redirectPath =  "/" || location.state?.path
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {error} = useSelector((state)=> state.authSlice)
// handle google auth
const handleGoogleLogin = useGoogleLogin ({
    onSuccess: async (tokenResponse)  => {
        console.log(tokenResponse);
            try{
                const res = await axios.post(`https://saif-production-e995.up.railway.app/auth/login-googel`, 
                {
                    access_token: tokenResponse.access_token
                },
                {
                    headers:{
                        Authorization: `Bearer ${tokenResponse.access_token}`
                    }
                })
                console.log(res.data)
            }catch(err){
                console.log(err)
            }
        },
    
    });
// handle login 
const handleLogin = async(e)=>{
    e.preventDefault()
    dispatch(loginPending())
    try{
        const res = await axios.post(`https://saif-production-e995.up.railway.app/auth/login`, {
        phone: email,
        password: password
    })
    window.sessionStorage.setItem("user", JSON.stringify(res.data.user))
    window.sessionStorage.setItem("token", JSON.stringify(res.data.token))
    dispatch(loginFulfilled(res.data))
    navigate(redirectPath, {replace: true})
    }catch(err){
        dispatch(loginRejected(err.response.data))
        if(err.response.data.errorMessage){
            toast.error(err.response.data.errorMessage)
        }
    }
    setEmail("")
    setPassword("")
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
                                value={email}
                                required
                                />
                                <label htmlFor="password">كلمة المرور</label>
                                <input
                                id="password"
                                name="password"  
                                type="password"
                                onChange={(e)=>setPassword(e.target.value)}
                                value={password}
                                required
                                />
                                <Link 
                                className="forget-password"
                                to="/sentCode"
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
                                    <FontAwesomeIcon 
                                    icon={faGooglePlus}
                                    onClick={handleGoogleLogin}
                                    />
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



// useEffect(()=>{
//     const unsubscrip = onAuthStateChanged(auth, (user)=>{
//         return user
//     })
//     return()=> unsubscrip()
// },[])
// //  handle signin with firebase
// const handleGoogleAuth = ()=>{
//     const provider = new GoogleAuthProvider()
//     signInWithPopup(auth, provider).then((data)=>{
//         if(data.user){
//             // console.log(data.user.accessToken)
//             try{
//                     axios.post(`https://saif-production-e995.up.railway.app/auth/login-googel`,{
//                     access_token: `Bearer ${data.user.accessToken}`
//                 }).then((res)=>{
//                     console.log(res.data)
//                     window.sessionStorage.setItem("user", JSON.stringify(data.user))
//                     window.sessionStorage.setItem("token", JSON.stringify(data.user.accessToken))
//                     dispatch(loginFulfilled(data.user))
//                     navigate(redirectPath, {replace: true})
//                 })
                
//             }catch(err){
//                 console.log(err)
//             }
            
//         }else{
//             dispatch(logOut())
//             window.sessionStorage.removeItem("user")
//             window.sessionStorage.removeItem("token")
//         }
//     })
    
// }