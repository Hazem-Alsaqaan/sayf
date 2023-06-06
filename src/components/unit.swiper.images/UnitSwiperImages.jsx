import React, { useEffect, useRef, useState } from "react";
// import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./UnitSwiperImage.css"
import { FreeMode, Navigation, Thumbs } from "swiper";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneUnit } from "../../redux/actions/unitsActions";
import {RotatingLines} from "react-loader-spinner"


// register();


const UnitSwiperImages = ()=>{
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const {unitId} = useParams()
    const {oneUnit} = useSelector((state)=>state.unitsSlice)
    const {oneUnitLoading} = useSelector((state)=>state.unitsSlice)
    const {token} = useSelector((state)=>state.authSlice)



    const dispatch = useDispatch()
    useEffect(()=>{
        const cleaner = ()=>{
            dispatch(getOneUnit({id:unitId, token: token}))
        }
        return()=> cleaner()
    },[])
    
    return(
        <>
        {oneUnitLoading ? 
                    <RotatingLines
                    strokeColor="#5500A1"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="96"
                    visible={true}
                    />
        :
        <div className="unit-swiper-images">
        {!oneUnit.images ? <h1>لا يوجد شيء</h1> :
            <>
            <Swiper
                    style={{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff",
                    }}
                    spaceBetween={10}
                    navigation={true}
                    // thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                    >
                        {oneUnit.images.map((item, index)=>{
                            return (<SwiperSlide key={index}>
                                        <img src={item} alt=""/>
                                    </SwiperSlide>
                                    )
                        })}
                        
                </Swiper>
                <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper"
                        >
                            {oneUnit.images.map((item, index)=>{
                                return (<SwiperSlide key={index}>
                                            <img src={item} alt=""/>
                                        </SwiperSlide>)
                            })}
                </Swiper>
                </>
                }
            </div>
        }
        </>
    )
}

export default UnitSwiperImages