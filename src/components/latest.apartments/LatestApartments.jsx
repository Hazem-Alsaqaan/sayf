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
    const [latestRender, setLatestRender] = useState(false)
    const [latestUnits, setLatestUnits] = useState([])
    useEffect(()=>{
        setLatestRender(true)
            const getLatestUnits = async()=>{
                const res = await axios.get(`https://nestjs-now-saif3-osamakamelmohamed6-gmailcom.vercel.app/houses/newest-houses`)
                setLatestUnits(res.data)
            }
            return ()=> getLatestUnits()
    },[latestRender])
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
