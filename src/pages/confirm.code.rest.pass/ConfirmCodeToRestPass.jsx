import React, { memo, useEffect, useRef, useState } from "react";
import "./ConfirmCodeToRestPass.css"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {ToastContainer, toast} from "react-toastify"
import { Helmet } from "react-helmet-async";

const ConfirmCodeToRestPass =({email, getCodeFromConfirmCode})=>{
    const {user} = useSelector((state)=> state.authSlice)
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

    const handleConfirmCode = async(e)=>{
        e.preventDefault()
        getCodeFromConfirmCode(`${firstNum}${secondNum}${thirdNum}${fourdNum}${fiveNum}${sixNum}`)
        navigate("/restPassword")
    }

    useEffect(()=>{
        firstRef.current.select()
    },[])
    return(
        <>
        <Helmet>
            <title>صيـف | الرمز التأكيدي </title>
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
            <section className="confirm-code">
                <div className="container">
                    <h1>نسيت كلمة المرور</h1>
                    <h2>{`تم إرسال الكود على رقم الموبايل ${email ? email : "unknown"}`}</h2>
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
export default memo(ConfirmCodeToRestPass)