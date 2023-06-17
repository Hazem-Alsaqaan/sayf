import React, { memo, useState } from "react";
import "./ChangePassword.css"
import axios from "axios";
import {ToastContainer, toast} from "react-toastify"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import WhiteHeader from "../../components/white.header/WhiteHeader";
import Footer from "../../components/footer/Footer";

const ChangePassword =()=>{
    const {userProfile} = useSelector((state)=>state.unitsSlice)
    const {token} = useSelector((state)=> state.authSlice)
    const [usernameChangePass, setUsernameChangePass] = useState("")
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
        setUsernameChangePass("")
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
            <WhiteHeader/>
            <section className="change-password">
                <div className="container">
                    <h1>تغيير كلمة المرور</h1>
                    <section className="auth-form">
                        <form onSubmit={(e)=>handleNewPassword(e)}>
                            <label htmlFor="usernameChangePass">اسم المستخدم</label>
                            <input
                            id="usernameChangePass"
                            placeholder={userProfile.username}
                            type="text"
                            onChange={(e)=>setUsernameChangePass(e.target.value)}
                            value={usernameChangePass}
                            required
                            />
                            <label htmlFor="oldPassword">كلمة المرور الحاليه</label>
                            <input
                            id="oldPassword"
                            placeholder="كلمة المرور الحاليه"
                            type="password"
                            onChange={(e)=>setOldPassword(e.target.value)}
                            value={oldPassword}
                            required
                            />
                            <label htmlFor="newPassword">كلمة المرور الجديده</label>
                            <input
                            id="newPassword"
                            placeholder="كلمة المرور الجديده"
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
            <Footer/>
        </>
    )
}
export default memo(ChangePassword)