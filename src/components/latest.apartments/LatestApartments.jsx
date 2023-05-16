import React, { useEffect, useState } from "react";
import "./LatestApartments.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import axios from "axios";
import { useSelector } from "react-redux";



const LatestApartments = ()=>{
    const [latestUnits, setLatestUnits] = useState([])
    const {token} = useSelector((state)=> state.authSlice)
    useEffect(()=>{
            const getLatestUnits = async()=>{
                const res = await axios.get(`https://saif-production-e995.up.railway.app/houses/newest-houses`, {
                    headers: {
                        Authorization: `baerar ${token}`
                    }
                })
                setLatestUnits(res.data)
            }
            return ()=> getLatestUnits()
    },[])
    return(
        <>
        <section className="latest-apartments">
            <div className="container">
                <h1>أحدث الشقق</h1>
            </div>
            <div className="swiper-image">
                <Swiper
                    slidesPerView={2.5}
                    centeredSlides={true}
                    spaceBetween={30}
                    grabCursor={true}
                    loop={true}
                    pagination={true}
                >
                    {latestUnits.map((item, index)=>{
                        return (<SwiperSlide key={index}>
                                    <p className="title-slide">{`شقة مفروش للايجار اليومي ${item.apartment_area}`}</p>
                                    <img src={item.images[0]} alt=""/>
                                </SwiperSlide>)
                    })}
                </Swiper>
            </div>
        </section>
        </>
    )
}

export default LatestApartments
