import React, { useEffect, useState } from "react";
import "./LatestApartments.css"
import { register } from 'swiper/element/bundle';
import axios from "axios";
import { useSelector } from "react-redux";

register();


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
                <swiper-container
                    slides-per-view={2.5}
                    centered-slides={true}
                    space-between={30}
                    grab-cursor={true}
                    loop={true}
                    pagination="true"
                >
                    <swiper-slide>
                        <p className="title-slide">شقة مفروشة للايجار اليومي بالشيخ زايد</p>
                        <img src="https://res.cloudinary.com/dkhu7rt8n/image/upload/v1682490596/sayf/Rectangle_39411_ijqg8r.png" alt=""/>
                    </swiper-slide>
                    <swiper-slide>
                        <p className="title-slide">شقة مفروشة للايجار اليومي بالشيخ زايد</p>
                        <img src="https://res.cloudinary.com/dkhu7rt8n/image/upload/v1682450501/sayf/Rectangle_39409_2_wyo34p.png" alt=""/>
                    </swiper-slide>
                    <swiper-slide>
                        <p className="title-slide">شقة مفروشة للايجار اليومي بالشيخ زايد</p>
                        <img src="https://res.cloudinary.com/dkhu7rt8n/image/upload/v1682450551/sayf/Rectangle_39409_3_y7udqo.png" alt=""/>
                    </swiper-slide>
                    <swiper-slide>
                        <p className="title-slide">شقة مفروشة للايجار اليومي بالشيخ زايد</p>
                        <img src="https://res.cloudinary.com/dkhu7rt8n/image/upload/v1682450478/sayf/Rectangle_39409_1_owdyhj.png" alt=""/>
                    </swiper-slide>
                    
                </swiper-container>
            </div>
        </section>
        </>
    )
}

export default LatestApartments