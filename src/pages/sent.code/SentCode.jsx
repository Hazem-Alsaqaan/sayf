import React, { memo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SentCode.css"
import axios from "axios";

const SentCode =()=>{
    const [email, setEmail] = useState("")
    const navigate = useNavigate()
    
    const handleConfirmEmail = async(e)=>{
        e.preventDefault()
        try{
            const res = await axios.post(`https://saif-production-e995.up.railway.app/phone-confirmation`, 
            {phone: email})
            navigate("/confirmCode")
        }catch(err){
            console.log(err)
        }
        setEmail("")
    }

    return(
        <>
        <section className="forget-password-content">
            <div className="container">
                <h1>نسيت كلمة المرور</h1>
                <h2>من فضلك أدخل البريد الالكتروني الذي استخدمته في التسجيل</h2>
                <section className="auth-form">
                    <form onSubmit={(e)=>handleConfirmEmail(e)}>
                        <label>البريد الالكتروني</label>
                        <input
                        type="text"
                        required
                        onChange={(e)=>setEmail(e.target.value)}
                        value={email}
                        />
                        <button>التالي</button>
                    </form>
                </section>
                <div className="new-account">
                    <span>ليس لديك حساب؟ </span>
                    <Link to="/register">حساب جديد</Link>
                </div>
            </div>
        </section>
        </>
    )
}
export default memo(SentCode)