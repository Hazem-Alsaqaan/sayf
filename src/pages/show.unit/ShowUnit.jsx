import React, { memo, useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import WhiteHeader from "../../components/white.header/WhiteHeader";
import "./ShowUnit.css"
import SpecificationsConditions from "../../components/specifications/SpecificationsConditions";
import Ratings from "../../components/Ratings/Ratings";
import VisitorsOpinions from "../../components/visitors.opinions/VisitorsOpinions";
import Footer from "../../components/footer/Footer";
import NestedNavigate from "../../components/nested.navigate/NestedNavigate";
import { useDispatch, useSelector } from "react-redux";
import { getOneUnit } from "../../redux/actions/unitsActions";
import { Helmet } from "react-helmet-async";

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
        <Helmet>
            <title>صيـف | عرض الشقة </title>
            <meta name="description" content=" شقة للإيجار. توافر جيد وأسعار رائعة لإيجار الشقق. احجز الشقة المناسبة ،اعرض شقتك للايجار ، حدد موقعك ، احجز اونلاين واختر أفضل العروض لإقامتك."/>
            <meta name="keywords" content="سكن، إقامة, فندق, الفنادق, عروض خاصة، شقق مصيفية ، أسعار مغرية، عطل نهاية الأسبوع، قضاء العطل في المدينة، صفقات, اقتصادي، رخيص، حسم، توفير"/>
        </Helmet>
            <div className="show-unit">
                <WhiteHeader />
                <div className="container show-unit-body">
                    <NestedNavigate/>
                    <Outlet/>
                    <SpecificationsConditions oneUnit ={oneUnit}/>
                    <Ratings/>
                    <VisitorsOpinions oneUnit ={oneUnit}/>
                    <div className="btn-link-purple">
                        <Link to={`/showUnit/${oneUnit._id}/addRating`}>تقييم الشقة</Link>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    )
}
export default memo(ShowUnit)