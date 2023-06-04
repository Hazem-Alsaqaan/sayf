import React, { memo, useState } from "react";
import "./ChangePassword.css"
import axios from "axios";
import {ToastContainer, toast} from "react-toastify"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ChangePassword =()=>{
    const {token} = useSelector((state)=> state.authSlice)
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const navigate = useNavigate()

    const handleNewPassword = async(e)=>{
        e.preventDefault()
        try{
            const res = await axios.post(`https://nestjs-now-saif3-osamakamelmohamed6-gmailcom.vercel.app/users/change-password`,
            {
                oldPassword: oldPassword,
                newPassword: newPassword
            },
            {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            toast.success("تم تغيير كلمة المرور بنجاح")
            navigate("/login")
        }catch(err){
            if(err.message === "Network Error"){
                toast.error("تأكد من اتصالك بالانترنت")
            }else if(err.response.data.errorMessage){
                toast.error(err.response.data.errorMessage)
            }
        }
        setOldPassword("")
        setNewPassword("")
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
                            <label htmlFor="oldPassword">كلمة المرور القديمة</label>
                            <input
                            id="oldPassword"
                            type="password"
                            onChange={(e)=>setOldPassword(e.target.value)}
                            value={oldPassword}
                            required
                            />
                            <label htmlFor="newPassword">كلمة المرور الجديدة</label>
                            <input
                            id="newPassword"
                            type="password"
                            onChange={(e)=>setNewPassword(e.target.value)}
                            value={newPassword}
                            required
                            />
                            <button
                            >تغيير كلمة المرور
                            </button>
                        </form>
                    </section>
                </div>
            </section>
        </>
    )
}
export default memo(ChangePassword)