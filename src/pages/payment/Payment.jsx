import React, { useEffect, useState } from "react";
import WhiteHeader from "../../components/white.header/WhiteHeader";
import Footer from "../../components/footer/Footer";
import SingleSearchBox from "../../components/single.search.box/SingleSearchBox";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToMyBookings, getOneUnit } from "../../redux/actions/unitsActions";
import "./Payment.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleDot} from "@fortawesome/free-regular-svg-icons"
import {RotatingLines} from "react-loader-spinner"
import axios from "axios";
import {useStripe, useElements, CardElement} from "@stripe/react-stripe-js"


const Payment =()=>{
    const [arrivelDate, setArrivelDate] = useState("")
    const [leavingDate, setLeavingDate] = useState("")
    const stripe = useStripe()
    const element = useElements()
    const [render, setRender] = useState(false)
    const {unitId} = useParams()
    const {oneUnit} = useSelector((state)=>state.unitsSlice)
    const {isLoading} = useSelector((state)=>state.unitsSlice)
    const {token} = useSelector((state)=>state.authSlice)
    const [isProcess, setIsProcess] = useState(false)
    const dispatch = useDispatch()
    useEffect(()=>{
        setRender(true)
        const cleaner =()=>{
            dispatch(getOneUnit({id:unitId, token: token}))
        }
        return()=> cleaner()
    },[render])

    // handle payment and add to my bookings
    const submitPayment = async(e)=>{
        e.preventDefault()
        setIsProcess(true)
        ///////////////////////////////////////////////////////////////////////////////////
        const cardElement = element.getElement("card")
        const billingInfo = {
            phone: "+201017997927",
        }
        ///////////////////////////////////////////////////////////////////////////////////
        const paymentMethodObj = await stripe.createPaymentMethod({
            type: "card",
            card: cardElement,
            billing_details: billingInfo,
        })
        ///////////////////////////////////////////////////////////////////////////////////
        try{
            const paymentData = await axios.post(`https://nestjs-now-saif3-e59v8g2z9-osamakamelmohamed6-gmailcom.vercel.app/stripe/create-payment-intent`, 
            "",
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            const confirmedPayment = await stripe.confirmCardPayment(
                paymentData.data.client_secret , {payment_method: paymentMethodObj.paymentMethod.id}
            )
            if(confirmedPayment.error){
                console.log(confirmedPayment.error.message)
            }
            if(paymentData.status === "200"){
                setIsProcess(false)
                console.log(paymentData.status)
            }
            // add to my boockings
            dispatch(addToMyBookings({
                payment_method : "CASH",
                price: paymentData.data.amount,
                house: unitId,
                start_date: arrivelDate,
                end_date: leavingDate,
                paymentMethodId: paymentMethodObj.paymentMethod.id,
                token: token
            }))
        }catch(err){
            console.log(err)
            setIsProcess(false)
        }
        ///////////////////////////////////////////////////////////////////////////////////
        // try{
        //     const res = await axios.post(`https://nestjs-now-saif3-e59v8g2z9-osamakamelmohamed6-gmailcom.vercel.app/stripe`,
        //     {
        //         paymentMethodId: paymentMethodObj.paymentMethod.id,
        //         amount: paymentData.data.amount
        //     },
        //     {
        //         headers:{
        //             Authorization: `Bearer ${token}`
        //         }
        //     })
            
            // console.log(res.data)
        // }catch(err){
        //     console.log(err)
        //     setIsProcess(false)
        // }
        // console.log( payment_method,start_date,end_date,price,house)
        
    }
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
                                    <input
                                    type="date"
                                    placeholder="تاريخ الوصول"
                                    required
                                    onChange={(e)=>setArrivelDate(e.target.value)}
                                    value={arrivelDate}
                                    />
                                    <input
                                    type="date"
                                    placeholder="تاريخ المغادرة"
                                    required
                                    onChange={(e)=>setLeavingDate(e.target.value)}
                                    value={leavingDate}
                                    />
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
                    <CardElement 
                    className="stripe-card-element"
                    options={{
                        hidePostalCode: true,
                        style:{
                            base: {
                                fontSize: "20px",
                            },
                            invalid:{
                                color: "red"
                            }
                        }
                    }}
                    />
                    <div className="btn-purple">
                        <button 
                        className="btn"
                        onClick={(e)=>submitPayment(e)}
                        disabled={isProcess}
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