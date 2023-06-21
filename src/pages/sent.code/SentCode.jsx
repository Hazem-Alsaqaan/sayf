import React, { memo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SentCode.css"
import axios from "axios";
import {ToastContainer, toast} from "react-toastify"
import { Helmet } from "react-helmet-async";

const SentCode =({getMailFromSentCode})=>{
    const [email, setEmail] = useState("")
    const navigate = useNavigate()
    
    const handleConfirmEmail = async(e)=>{
        e.preventDefault()
        getMailFromSentCode(email)
        try{
            const res = await axios.post(`https://nestjs-now-saif3-osamakamelmohamed6-gmailcom.vercel.app/phone-confirmation`, 
            {phone: `+2${email}`})
            navigate("/confirmCode")
        }catch(err){
            if(err.message === "Network Error"){
                toast.error("تأكد من اتصالك بالانترنت")
            }else if(err.response.data.errorMessage){
                toast.error(err.response.data.errorMessage)
            }
        }
        setEmail("")
    }

    return(
        <>
        <Helmet>
            <title>صيـف | إرسال الرمز التأكيدي </title>
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
        <section className="forget-password-content">
            <div className="container">
                <h1>نسيت كلمة المرور</h1>
                <h2>من فضلك أدخل رقم الموبايل الذي استخدمته في التسجيل</h2>
                <section className="auth-form">
                    <form onSubmit={(e)=>handleConfirmEmail(e)}>
                        <label>رقم الموبايل</label>
                        <div className="mobile-number">
                            <input
                            type="text"
                            required
                            onChange={(e)=>setEmail(e.target.value)}
                            className="user-mobile-number"
                            value={email}
                            />
                        </div>
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