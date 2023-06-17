import React, { memo, useRef, useState } from "react";
// import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {ToastContainer, toast} from "react-toastify"

const VerifyCode =({registerMail})=>{
    const navigate = useNavigate()
    const[firstNum, setFirstNum] = useState("")
    const[secondNum, setSecondNum] = useState("")
    const[thirdNum, setThirdNum] = useState("")
    const[fourdNum, setFourdNum] = useState("")
    const[fiveNum, setFiveNum] = useState("")
    const[sixNum, setSixNum] = useState("")

    const firstRef = useRef()
    const secondRef = useRef()
    const thirdRef = useRef()
    const fourdRef = useRef()
    const fiveRef = useRef()
    const sixRef = useRef()

    if(firstNum !== ""){
        secondRef.current.select()
    }
    if(secondNum !== ""){
        thirdRef.current.select()
    }
    if(thirdNum !== ""){
        fourdRef.current.select()
    }
    if(fourdNum !== ""){
        fiveRef.current.select()
    }
    if(fiveNum !== ""){
        sixRef.current.select()
    }

    const handleVerifyCode = async(e)=>{
        e.preventDefault()
        try{
            const res = await axios.post(`https://nestjs-now-saif3-osamakamelmohamed6-gmailcom.vercel.app/phone-confirmation/verify`
            , {
                phone: `+2${registerMail}`,
                code: `${firstNum}${secondNum}${thirdNum}${fourdNum}${fiveNum}${sixNum}`
            })
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
            <section className="confirm-code">
                <div className="container">
                    {/* <h1>نسيت كلمة المرور</h1> */}
                    <h2>{`تم إرسال الكود على رقم الموبايل ${registerMail ? registerMail : "unknown"}`}</h2>
                    <section className="auth-form">
                        <form onSubmit={(e)=>handleVerifyCode(e)}>
                            <label>الرمز التأكيدي</label>
                            <div className="code-input">
                                <input
                                type="tel"
                                maxLength={1}
                                required
                                onChange={(e)=>setFirstNum(e.target.value)}
                                value={firstNum}
                                ref={firstRef}
                                />
                                <input
                                type="tel"
                                maxLength={1}
                                required
                                onChange={(e)=>setSecondNum(e.target.value)}
                                value={secondNum}
                                ref={secondRef}
                                />
                                <input
                                type="tel"
                                maxLength={1}
                                required
                                onChange={(e)=>setThirdNum(e.target.value)}
                                value={thirdNum}
                                ref={thirdRef}
                                />
                                <input
                                type="tel"
                                maxLength={1}
                                required
                                onChange={(e)=>setFourdNum(e.target.value)}
                                value={fourdNum}
                                ref={fourdRef}
                                />
                                <input
                                type="tel"
                                maxLength={1}
                                required
                                onChange={(e)=>setFiveNum(e.target.value)}
                                value={fiveNum}
                                ref={fiveRef}
                                />
                                <input
                                type="tel"
                                maxLength={1}
                                required
                                onChange={(e)=>setSixNum(e.target.value)}
                                value={sixNum}
                                ref={sixRef}
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
export default memo(VerifyCode)