import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import "./MostBookedApartments.css"
import ApartmentBox from "../apartment.box/ApartmentBox";
import { getMostBookings } from "../../redux/actions/unitsActions";
import {RotatingLines} from "react-loader-spinner"




const MostBookedApartments = ()=>{
    const {token} = useSelector((state)=> state.authSlice)
    const dispatch = useDispatch()
    const {units} = useSelector((state)=>state.unitsSlice)
    const {isLoading} = useSelector((state)=>state.unitsSlice)
    useEffect(()=>{
        const cleaner = ()=>{
            dispatch(getMostBookings(token))
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
                        <>
                        {
                            !units ? <div>لا توجد الأكثر حجزا</div> :
                        <div className="boxes-container">
                            {
                                units.map((item)=>(
                                    item._id.house &&
                                    <ApartmentBox key={item._id.house[0]._id} item={ item._id.house[0]}/>
                                    ))
                            }
                        </div>
                        }
                        </> 
                    }
                </div>
            </section>
            
        </>
    )
}
export default MostBookedApartments