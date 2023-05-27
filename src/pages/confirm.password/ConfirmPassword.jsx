import React, { memo, useState } from "react";
import "./ConfirmPassword.css"
import axios from "axios";

const ConfirmPassword =({email, code})=>{
    const [newPassword, setNewPassword] = useState("")
    const [confirmNewPassword, setConfirmNewPassword] = useState("")

    const handleNewPassword = async(e)=>{
        e.preventDefault()
        try{
            const res = await axios.post(`https://nestjs-now-saif3-e59v8g2z9-osamakamelmohamed6-gmailcom.vercel.app/auth/reset-password`,
            {
                phone: email,
                code: code,
                password: newPassword
            })
            console.log(res.data)
        }catch(err){
            console.log(err)
        }
    }
    return(
        <>
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
                            />
                            <label htmlFor="confirmNewPassword">تأكيد كلمة المرور</label>
                            <input
                            id="confirmNewPassword"
                            type="password"
                            onChange={(e)=>setConfirmNewPassword(e.target.value)}
                            value={confirmNewPassword}
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