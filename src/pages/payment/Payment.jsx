import React, { useEffect } from "react";
import WhiteHeader from "../../components/white.header/WhiteHeader";
import Footer from "../../components/footer/Footer";
import SingleSearchBox from "../../components/single.search.box/SingleSearchBox";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneUnit } from "../../redux/actions/unitsActions";
import "./Payment.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleDot} from "@fortawesome/free-regular-svg-icons"

const Payment =()=>{
    const {unitId} = useParams()
    const {oneUnit} = useSelector((state)=>state.unitsSlice)
    const dispatch = useDispatch()
    useEffect(()=>{
        const cleaner = ()=>{
            dispatch(getOneUnit(unitId))
        }
        return()=> cleaner()
    },[])
    return(
        <>
            <section className="payment">
                <WhiteHeader/>
                <div className="container">
                    <SingleSearchBox item = {oneUnit}/>
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