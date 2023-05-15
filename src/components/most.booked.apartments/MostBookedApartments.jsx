import React, { memo, useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import "./MostBookedApartments.css"
import ApartmentBox from "../apartment.box/ApartmentBox";
import { getMostBookings } from "../../redux/actions/unitsActions";
import {RotatingLines} from "react-loader-spinner"


const MostBookedApartments = ()=>{
    const dispatch = useDispatch()
    const {mostBookings} = useSelector((state)=>state.unitsSlice)
    const {isLoading} = useSelector((state)=>state.unitsSlice)

    useEffect(()=>{
        const cleaner = ()=>{
            dispatch(getMostBookings())
        }
        return()=> cleaner()
    },[])
    return (
        <>
            <section className="most-booked">
                <div className="container">
                    <h1>أكثر الشقق حجزا لهذا الشهر</h1>
                    { isLoading ? <RotatingLines
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