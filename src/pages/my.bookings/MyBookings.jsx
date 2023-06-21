import React, { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./MyBookings.css"
import ApartmentBox from "../../components/apartment.box/ApartmentBox";
import { useDispatch, useSelector } from "react-redux";
import {getMyBooking } from "../../redux/actions/unitsActions";
import {RotatingLines} from "react-loader-spinner"
import { Helmet } from "react-helmet-async";




const MyBookings = ()=>{
    const [render, setRender] = useState(false)
    const dispatch = useDispatch()
    const {token} = useSelector((state)=> state.authSlice)
    const {myBookings} = useSelector((state)=>state.unitsSlice)
    const {myBookingsLoading} = useSelector((state)=>state.unitsSlice)


    useEffect(()=>{
        setRender(true)
        const cleaner = ()=>{
            dispatch(getMyBooking(token))
        }
        return()=> cleaner()
    },[render])


    return(
        <>
        <Helmet>
            <title>صيـف | حجوزاتي </title>
            <meta name="description" content=" شقة للإيجار. توافر جيد وأسعار رائعة لإيجار الشقق. احجز الشقة المناسبة ،اعرض شقتك للايجار ، حدد موقعك ، احجز اونلاين واختر أفضل العروض لإقامتك."/>
            <meta name="keywords" content="سكن، إقامة, فندق, الفنادق, عروض خاصة، شقق مصيفية ، أسعار مغرية، عطل نهاية الأسبوع، قضاء العطل في المدينة، صفقات, اقتصادي، رخيص، حسم، توفير"/>
        </Helmet>
            <div className="booking">
                <section className="booking-page-landing">
                    <Header/>
                    <div className="container landing-content">
                        <h1>حجوزاتي</h1>
                    </div>
                </section>
                {myBookingsLoading ? 
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
                    {!myBookings.length > 0 ? <h1 className="container not-found-units">لم يتم حجز وحدات...</h1> :
                        <div className="boxes-container container">
                            {
                                myBookings.map((item)=>(
                                    item.house && 
                                    <ApartmentBox 
                                    key={item._id} 
                                    item={ item.house} 
                                    renderMyBookings ={render} 
                                    setRenderMyBookings ={setRender} 
                                    starting = {item.start_date}
                                    ending = {item.end_date}
                                    bookingItem = {item}
                                    />
                                ))
                            }
                        </div>
                        }
                    </>
                    }                
                <Footer/>
            </div>
        </>
    )
}
export default MyBookings