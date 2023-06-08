import React, { memo, useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import "./MostBookedApartments.css"
import ApartmentBox from "../apartment.box/ApartmentBox";
import { getMostBookings } from "../../redux/actions/unitsActions";
import {RotatingLines} from "react-loader-spinner"


const MostBookedApartments = ()=>{
    const dispatch = useDispatch()
    const [mostRender, setMostRender] = useState(false)
    const {mostBookings} = useSelector((state)=>state.unitsSlice)
    const {mostBookingsLoading} = useSelector((state)=>state.unitsSlice)

    useEffect(()=>{
        setMostRender(true)
        const cleaner = ()=>{
            dispatch(getMostBookings())
        }
        return()=> cleaner()
    },[mostRender])
    return (
        <>
            <section className="most-booked">
                <div className="container">
                    <h1>أكثر الشقق حجزا لهذا الشهر</h1>
                    { mostBookingsLoading ? <RotatingLines
                            strokeColor="#5500A1"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="96"
                            visible={true}
                            /> :
                        <div className="boxes-container">
                            {!mostBookings.length > 0 ?  <h1>لا توجد وحدات ...</h1>
                                :mostBookings.map((item)=>
                                        <ApartmentBox key={item[0]?._id} item ={item[0]}/>)
                                    }
                        </div>
                    }
                </div>
            </section>
            
        </>
    )
}
export default memo(MostBookedApartments)