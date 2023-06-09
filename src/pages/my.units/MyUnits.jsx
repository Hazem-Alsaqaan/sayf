import React, { useEffect, useState } from "react";
import WhiteHeader from "../../components/white.header/WhiteHeader";
import Footer from "../../components/footer/Footer";
import "./MyUnits.css"
import { useDispatch, useSelector } from "react-redux";
import { getUnitsOwnedByUser } from "../../redux/actions/unitsActions";
import ApartmentBox from "../../components/apartment.box/ApartmentBox";
import {RotatingLines} from "react-loader-spinner"

const MyUnits = ()=>{
    const dispatch = useDispatch()
    const[myUnitsRender, setMyUnitsRender] = useState(false)
    const {unitsOwnedByUser} = useSelector((state)=> state.unitsSlice)
    const {unitsOwnedByUserLoading} = useSelector((state)=> state.unitsSlice)
    const {token} = useSelector((state)=> state.authSlice)

    useEffect(()=>{
        setMyUnitsRender(true)
        const cleanerUnits = ()=>{
            dispatch(getUnitsOwnedByUser(token))
        }
        return()=>cleanerUnits()
    },[myUnitsRender])

    return(
        <>
        <WhiteHeader/>
        <section className="my-units container">
            <h1>الشقق المعروضه</h1>
            {unitsOwnedByUserLoading ? 
                        <div className="loading">
                            <RotatingLines
                            strokeColor="#5500A1"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="96"
                            visible={true}
                            /> 
                        </div>:
            <div className="my-units-body">
                {unitsOwnedByUser.length > 0 ? 
                    unitsOwnedByUser.map((item)=><ApartmentBox key={item._id} item={item}/>)
                    :<h2>لا يوجد شيء لعرضه...</h2>
                }
            </div>}
        </section>
        <Footer/>
        </>
    )
}
export default MyUnits