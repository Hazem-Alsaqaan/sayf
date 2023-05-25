import React, { memo, useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import WhiteHeader from "../../components/white.header/WhiteHeader";
import "./ShowUnit.css"
import SpecificationsConditions from "../../components/specifications/SpecificationsConditions";
import Ratings from "../../components/Ratings/Ratings";
import VisitorsOpinions from "../../components/visitors.opinions/VisitorsOpinions";
import Footer from "../../components/footer/Footer";
import NestedNavigate from "../../components/nested.navigate/NestedNavigate";
import { useDispatch, useSelector } from "react-redux";
import { getOneUnit } from "../../redux/actions/unitsActions";

const ShowUnit = ()=>{
    const [render, setRender] = useState(false)
    const {unitId} = useParams()
    const dispatch = useDispatch()
    const {oneUnit} = useSelector((state)=>state.unitsSlice)
    const {token} = useSelector((state)=>state.authSlice)

    useEffect(()=>{
        setRender(true)
        const cleaner = ()=>{
            dispatch(getOneUnit({id:unitId, token: token}))
        }
        return()=> cleaner()
    },[render])
    return(
        <>
            <div className="show-unit">
                <WhiteHeader />
                <div className="container">
                    <NestedNavigate/>
                    <Outlet/>
                    <SpecificationsConditions oneUnit ={oneUnit}/>
                    <Ratings/>
                    <VisitorsOpinions oneUnit ={oneUnit}/>
                </div>
                <Footer/>
            </div>
        </>
    )
}
export default memo(ShowUnit)