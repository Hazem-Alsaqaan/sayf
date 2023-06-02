import React, { memo, useState } from "react";
import "./ConfirmPassword.css"
import axios from "axios";
import {ToastContainer, toast} from "react-toastify"
import { useNavigate } from "react-router-dom";

const ConfirmPassword =({email, code})=>{
    const [newPassword, setNewPassword] = useState("")
    const [confirmNewPassword, setConfirmNewPassword] = useState("")
    const navigate = useNavigate()

    const handleNewPassword = async(e)=>{
        e.preventDefault()
        try{
            const res = await axios.post(`https://nestjs-now-saif3-osamakamelmohamed6-gmailcom.vercel.app/auth/reset-password`,
            {
                phone: email,
                code: code,
                password: newPassword
            })
            console.log(res.data)
            toast.success("تم تغيير الرقم السري بنجاح")
            navigate("/login")
        }catch(err){
            if(err.message === "Network Error"){
                toast.error("تأكد من اتصالك بالانترنت")
            }else if(err.response.data.errorMessage){
                toast.error(err.response.data.errorMessage)
            }
        }
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
            <section className="confirm-password">
                <div className="container">
                    <h1>كلمة مرور جديدة</h1>
                    <h2>قم بادخال كلمة مرور قوية حتى تتمكن من حماية حسابك</h2>
                    <section className="auth-form">
                        <form onSubmit={(e)=>handleNewPassword(e)}>
                            <label htmlFor="newPassword">كلمة المرور</label>
                            <input
                            id="newPassword"
                            type="password"
                            onChange={(e)=>setNewPassword(e.target.value)}
                            value={newPassword}
                            required
                            />
                            <label htmlFor="confirmNewPassword">تأكيد كلمة المرور</label>
                            <input
                            id="confirmNewPassword"
                            type="password"
                            onChange={(e)=>setConfirmNewPassword(e.target.value)}
                            value={confirmNewPassword}
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
export default memo(ConfirmPassword)