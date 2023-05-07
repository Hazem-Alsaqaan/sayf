import React, { useEffect } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./MyBookings.css"
import ApartmentBox from "../../components/apartment.box/ApartmentBox";
import { useDispatch, useSelector } from "react-redux";
import {getMyBooking } from "../../redux/actions/unitsActions";
import {RotatingLines} from "react-loader-spinner"




const MyBookings = ()=>{
    const dispatch = useDispatch()
    const {token} = useSelector((state)=> state.authSlice)
    const {units} = useSelector((state)=>state.unitsSlice)
    const {isLoading} = useSelector((state)=>state.unitsSlice)

    useEffect(()=>{
        const cleaner = ()=>{
            dispatch(getMyBooking(token))
        }
        return()=> cleaner()
    },[])

// console.log(units[0].house)
    return(
        <>
            <div className="booking">
                <section className="booking-page-landing">
                    <Header/>
                    <div className="container landing-content">
                        <h1>حجوزاتي</h1>
                    </div>
                </section>
                {isLoading ? <RotatingLines
                            strokeColor="#5500A1"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="96"
                            visible={true}
                            /> : 
                    <>
                    {!units ? <h1>لم يتم حجز وحدات...</h1> :
                        <div className="boxes-container container">
                            {
                                units.map((item)=>(
                                    item.house &&
                                    <ApartmentBox key={item.house._id} item={ item.house}/>
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