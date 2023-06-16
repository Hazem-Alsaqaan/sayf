import React, { useEffect, useState } from "react";
import WhiteHeader from "../../components/white.header/WhiteHeader";
import Footer from "../../components/footer/Footer";
import "./HouseReservations.css"
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getHouseReservations, getOneUnit } from "../../redux/actions/unitsActions";
import ApartmentBox from "../../components/apartment.box/ApartmentBox";

const HouseReservations = ()=>{
    const [houseReservationsRender, setHouseReservationsRender] = useState(false)
    const {unitId} =  useParams()
    const dispatch = useDispatch()
    const {houseReservations} = useSelector((state)=> state.unitsSlice)
    const {oneUnit} = useSelector((state)=> state.unitsSlice)
    const {token} = useSelector((state)=> state.authSlice)

    useEffect(()=>{
        setHouseReservationsRender(true)
        const cleanerHouseReservations = ()=>{
            dispatch(getHouseReservations({id: unitId, token: token}))
            dispatch(getOneUnit({id: unitId, token: token}))
        }
        return()=>cleanerHouseReservations()
    },[houseReservationsRender])

    return(
        <>
            <WhiteHeader/>
            <section className="house-reservations container">
                <h1>الحجوزات</h1>
                <ApartmentBox item={oneUnit}/>
                <>
                {
                    houseReservations.length > 0 ?
                    <div className="users-reservations">
                    {
                        houseReservations.map((item)=>
                            <div className="house-reservations-single-box" key={item._id}>
                                <p>قام <span>{item.user.username} </span>{`  بحجز هذه الشقة من يوم ${new Date(item.start_date).getDate()} - ${new Date(item.start_date).getMonth()+1} - ${new Date(item.start_date).getFullYear()} إلى يوم  ${new Date(item.end_date).getDate()} - ${new Date(item.end_date).getMonth()+1} - ${new Date(item.end_date).getFullYear()}`}</p>
                            </div>
                        )
                    }
                </div>
                :
                <h4>لا توجد حجوزات لهذه الوحدة حتى الآن ...</h4>
                }
                </>
            </section>
            <Footer/>
        </>
    )
}

export default HouseReservations