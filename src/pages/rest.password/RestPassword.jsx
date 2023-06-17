import React, { memo, useState } from "react";
import "./RestPassword.css"
import axios from "axios";
import {ToastContainer, toast} from "react-toastify"
import { useNavigate } from "react-router-dom";

const RestPassword =({email, code})=>{
    const [restPassword, setRestPassword] = useState("")
    const navigate = useNavigate()

    const handleRestPassword = async(e)=>{
        e.preventDefault()
        try{
            const res = await axios.post(`https://nestjs-now-saif3-osamakamelmohamed6-gmailcom.vercel.app/auth/reset-password`,
            {
                phone: `+2${email}`,
                code: code,
                password: restPassword
            })
            toast.success("تم اعادة كلمة المرور ")
            setTimeout(() => {
                navigate("/login")
            }, 1500);
        }catch(err){
            if(err.message === "Network Error"){
                toast.error("تأكد من اتصالك بالانترنت")
            }else if(err.response.data.errorMessage){
                toast.error(err.response.data.errorMessage)
            }
        }
        setOldPassword("")
    }
    return(
        <>
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
            <section className="rest-password">
                <div className="container">
                    <h1>كلمة مرور جديدة</h1>
                    <h2>قم بادخال كلمة مرور قوية حتى تتمكن من حماية حسابك</h2>
                    <section className="auth-form">
                        <form onSubmit={(e)=>handleRestPassword(e)}>
                            <label htmlFor="restPassword">كلمة المرور</label>
                            <input
                            id="restPassword"
                            type="password"
                            onChange={(e)=>setRestPassword(e.target.value)}
                            value={restPassword}
                            required
                            />
                            <button
                            >تسجيل الدخول
                            </button>
                        </form>
                    </section>
                </div>
            </section>
        </>
    )
}
export default memo(RestPassword)