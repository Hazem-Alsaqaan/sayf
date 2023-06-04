import React, { memo, useState } from "react";
import "./ConfirmCodeToRestPass.css"
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {ToastContainer, toast} from "react-toastify"

const ConfirmCodeToRestPass =({email, getCodeFromConfirmCode})=>{
    const {user} = useSelector((state)=> state.authSlice)
    const navigate = useNavigate()
    const[firstNum, setFirstNum] = useState(0)
    const[secondNum, setSecondNum] = useState(0)
    const[thirdNum, setThirdNum] = useState(0)
    const[fourdNum, setFourdNum] = useState(0)
    const[fiveNum, setFiveNum] = useState(0)
    const[sixNum, setSixNum] = useState(0)

    const handleConfirmCode = async(e)=>{
        e.preventDefault()
        getCodeFromConfirmCode(`${firstNum}${secondNum}${thirdNum}${fourdNum}${fiveNum}${sixNum}`)
        try{
            const res = await axios.post(`https://nestjs-now-saif3-osamakamelmohamed6-gmailcom.vercel.app/phone-confirmation/verify.app/auth/check-code-to-reset`
            , {
                phone: email,
                code: `${firstNum}${secondNum}${thirdNum}${fourdNum}${fiveNum}${sixNum}`
            })
            navigate("/confirmPassword")
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
            <section className="confirm-code">
                <div className="container">
                    <h1>نسيت كلمة المرور</h1>
                    <h2>{`تم إرسال الكود على البريد الالكتروني ${email ? email : "unknown"}`}</h2>
                    <section className="auth-form">
                        <form onSubmit={(e)=>handleConfirmCode(e)}>
                            <label>الرمز التأكيدي</label>
                            <div className="code-input">
                                <input
                                type="tel"
                                maxLength={1}
                                required
                                onChange={(e)=>setFirstNum(e.target.value)}
                                value={firstNum}
                                />
                                <input
                                type="tel"
                                maxLength={1}
                                required
                                onChange={(e)=>setSecondNum(e.target.value)}
                                value={secondNum}
                                />
                                <input
                                type="tel"
                                maxLength={1}
                                required
                                onChange={(e)=>setThirdNum(e.target.value)}
                                value={thirdNum}
                                />
                                <input
                                type="tel"
                                maxLength={1}
                                required
                                onChange={(e)=>setFourdNum(e.target.value)}
                                value={fourdNum}
                                />
                                <input
                                type="tel"
                                maxLength={1}
                                required
                                onChange={(e)=>setFiveNum(e.target.value)}
                                value={fiveNum}
                                />
                                <input
                                type="tel"
                                maxLength={1}
                                required
                                onChange={(e)=>setSixNum(e.target.value)}
                                value={sixNum}
                                />
                            </div>
                            {/* time */}
                            <button>تحقق</button>
                        </form>
                    </section>                    
                </div>
            </section>
        </>
    )
}
export default memo(ConfirmCodeToRestPass)