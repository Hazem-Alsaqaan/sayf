import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./MyFavourite.css"
import ApartmentBox from "../../components/apartment.box/ApartmentBox";
import { useDispatch, useSelector } from "react-redux";
import { getMyFavourites } from "../../redux/actions/unitsActions";
import {RotatingLines} from "react-loader-spinner"
import { Helmet } from "react-helmet-async";



const MyFavourite = ()=>{
    const [render, setRender] = useState(false)
    const dispatch = useDispatch()
    const {token} = useSelector((state)=> state.authSlice)
    const {myFavourites} = useSelector((state)=>state.unitsSlice)
    const {myFavouritesLoading} = useSelector((state)=>state.unitsSlice)

    useEffect(()=>{
        setRender(true)
        const cleanerGetFavourites = ()=>{
            dispatch(getMyFavourites(token))
        }
        return()=> cleanerGetFavourites()
    },[render])

    

    return(
        <>
        <Helmet>
            <title>صيـف | مفضلتي </title>
            <meta name="description" content=" شقة للإيجار. توافر جيد وأسعار رائعة لإيجار الشقق. احجز الشقة المناسبة ،اعرض شقتك للايجار ، حدد موقعك ، احجز اونلاين واختر أفضل العروض لإقامتك."/>
            <meta name="keywords" content="سكن، إقامة, فندق, الفنادق, عروض خاصة، شقق مصيفية ، أسعار مغرية، عطل نهاية الأسبوع، قضاء العطل في المدينة، صفقات, اقتصادي، رخيص، حسم، توفير"/>
        </Helmet>
            <div className="favourite">
                <section className="favourite-page-landing">
                    <Header/>
                    <div className="container landing-content">
                        <h1>مفضلتي</h1>
                    </div>
                </section>
                {myFavouritesLoading ? <div className="loading">
                                <RotatingLines
                                strokeColor="#5500A1"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="96"
                                visible={true}
                                /> 
                            </div>
                            : <>
                            {!myFavourites.length > 0 ? <h1 className="container not-found-units">لم يتم العثور على وحدات...</h1> :
                            <div className="boxes-container container">
                                {myFavourites.map((item)=><ApartmentBox key={item._id} item={item} favRender ={render} setFavRender ={setRender} />)}
                            </div>}
                        </> 
                }
                
                <Footer/>
            </div>
        </>
    )
}
export default MyFavourite