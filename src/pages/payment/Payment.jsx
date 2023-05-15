import React, { useEffect, useState } from "react";
import WhiteHeader from "../../components/white.header/WhiteHeader";
import Footer from "../../components/footer/Footer";
import SingleSearchBox from "../../components/single.search.box/SingleSearchBox";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneUnit } from "../../redux/actions/unitsActions";
import "./Payment.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleDot} from "@fortawesome/free-regular-svg-icons"
import {RotatingLines} from "react-loader-spinner"


const Payment =()=>{
    const [render, setRender] = useState(false)
    const {unitId} = useParams()
    const {oneUnit} = useSelector((state)=>state.unitsSlice)
    const {isLoading} = useSelector((state)=>state.unitsSlice)
    const {token} = useSelector((state)=>state.authSlice)
    const dispatch = useDispatch()
    useEffect(()=>{
        setRender(true)
        const cleaner = ()=>{
            dispatch(getOneUnit({id:unitId, token: token}))
        }
        return()=> cleaner()
    },[render])
    return(
        <>
            <section className="payment">
                <WhiteHeader/>
                <div className="container">
                    {isLoading ? 
                            <div className="loading">
                                <RotatingLines
                                strokeColor="#5500A1"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="96"
                                visible={true}
                                /> 
                            </div>
                    : 
                    <>
                    {Object.keys(oneUnit).length > 0 ? <SingleSearchBox item = {oneUnit}/> : <h1 className="container not-found-units">لم يتم العثور على وحدات...</h1>}
                    </>
                    }
                    <div className="center">
                        <section className="booking-details">
                            <h3>تفاصيل الحجز</h3>
                            <div className="details-content">
                                <div>
                                    <p>تاريخ الوصول</p>
                                    <p>تاريخ المغادرة</p>
                                    <p>رسوم الحجز</p>
                                </div>
                                <div>
                                    <p>الاحد 12 يناير 2022</p>
                                    <p>الاربعاء 15 يناير 2022</p>
                                    <p>50 جنيه</p>
                                </div>
                            </div>
                        </section>
                        <section className="payment-methods">
                            <h3>طريقة الدفع</h3>
                            <div className="methods-content">
                                <div className="top-side">
                                    <FontAwesomeIcon icon={faCircleDot}/>
                                    <img src="https://res.cloudinary.com/dkhu7rt8n/image/upload/v1683109494/sayf/Master_Card_cjfbti.png" alt=""/>
                                    <img src="https://res.cloudinary.com/dkhu7rt8n/image/upload/v1683109480/sayf/VISA_gji22j.png" alt=""/>
                                </div>
                                <div className="center-side">
                                    <p>رقم البطاقه</p>
                                    <input type="text"/>
                                </div>
                                <div className="bottom-side">
                                    <div>
                                        <p>تاريخ الإنتهاء</p>
                                        <input type="date"/>
                                    </div>
                                    <div>
                                        <p>CVV</p>
                                        <input className="cvv" type="text"/>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="btn-purple">
                        <button 
                        className="btn"
                        >احجز الآن
                        </button>
                    </div>
                </div>
                <Footer/>
            </section>
        </>
    )
}
export default Payment