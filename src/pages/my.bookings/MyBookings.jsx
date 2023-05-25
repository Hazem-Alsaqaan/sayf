import React, { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./MyBookings.css"
import ApartmentBox from "../../components/apartment.box/ApartmentBox";
import { useDispatch, useSelector } from "react-redux";
import {getMyBooking } from "../../redux/actions/unitsActions";
import {RotatingLines} from "react-loader-spinner"




const MyBookings = ()=>{
    const [render, setRender] = useState(false)
    const dispatch = useDispatch()
    const {token} = useSelector((state)=> state.authSlice)
    const {myBookings} = useSelector((state)=>state.unitsSlice)
    const {myBookingsLoading} = useSelector((state)=>state.unitsSlice)
    const [starting, setStarting] = useState(null)
    const [ending, setEnding] = useState(null)


    useEffect(()=>{
        setRender(true)
        myBookings.map((item)=>{
            setStarting(item.start_date)
            setEnding(item.end_date)
        })
         //start date loop
        for(let i =0; i < months.length; i++){
            if(i === startDate.getMonth()){
                setStartDateMonth(months[i])
            }
        }
        // end date loop
        for(let j =0; j < months.length; j++){
            if(j === endDate.getMonth()){
                setEndDateMonth(months[j])
            }
        }
        const cleaner = ()=>{
            dispatch(getMyBooking(token))
        }
        return()=> cleaner()
    },[render])

//start config date
const months = [
    "يناير",
    "فبراير",
    "مارس",
    "ابريل",
    "مايو",
    "يونيو",
    "يوليو",
    "اغسطس",
    "سبتمبر",
    "اكتوبر",
    "نوفمبر",
    "ديسمبر",
];

const startDate = new Date(starting)
const [StartDateMonth, setStartDateMonth] = useState("")
const startDateDay = startDate.getDate()
const startDateYear = startDate.getFullYear()

const endDate = new Date(ending)
const [endDateMonth, setEndDateMonth] = useState("")
const endDateDay = endDate.getDate()
const endDateYear = endDate.getFullYear()

    return(
        <>
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
                                    key={item.house._id} 
                                    item={ item.house} 
                                    render ={render} 
                                    setRender ={setRender} 
                                    startDateDay = {startDateDay}
                                    StartDateMonth = {StartDateMonth}
                                    startDateYear = {startDateYear}
                                    endDateDay = {endDateDay}
                                    endDateMonth = {endDateMonth}
                                    endDateYear = {endDateYear}
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