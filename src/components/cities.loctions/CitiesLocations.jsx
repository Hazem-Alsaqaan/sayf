import React, { useEffect, useRef, useState } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import "./CitiesLocations.css"


const CitiesLocations = ()=>{
    const citiesPicture = [
        {
            id: 1,
            title: "القاهرة",
            image_url: "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1681155666/sayf/Cairo_kc31mx.png",
            // apartments_count: 920
        },
        {
            id: 2,
            title: "الاسكندرية",
            image_url: "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1681155584/sayf/alex_qf7hym.png",
            // apartments_count: 216
        },
        {
            id: 3,
            title: "الاسماعيلية",
            image_url: "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1681155737/sayf/Ismailia_mcgyaq.png",
            // apartments_count: 102
        },
        {
            id: 4,
            title: "الدقهلية",
            image_url: "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1681155691/sayf/Dakahlia_amgljl.png",
            // apartments_count: 92
        },
        {
            id: 5,
            title: "اسوان",
            image_url: "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1681155621/sayf/Aswan_ua75md.png",
            // apartments_count: 20
        },
        {
            id: 6,
            title: "الاقصر",
            image_url: "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1681155519/sayf/luxor_kk3p0e.png",
            // apartments_count: 35
        }
    ]
    const [sliderWidth, setSliderWidth] = useState(0)
    const sliderContainerWidth = useRef()


    const handleIncreas = ()=>{
        setSliderWidth(sliderWidth >= sliderContainerWidth.current.scrollWidth - sliderContainerWidth.current.offsetWidth ? 0 : sliderWidth + 320)
        }
    return(
        <>
            <section className="cities-locations">
                    <div className="text container">
                        <h1>اماكن تواجد الشقق</h1>
                        <div className="indicator">
                            <FontAwesomeIcon icon={faChevronRight}
                            className="active"
                            onClick={handleIncreas}
                            />
                            <FontAwesomeIcon 
                            icon={faChevronLeft}
                            onClick={()=> setSliderWidth( sliderWidth > 0 ? sliderWidth - 320 : sliderWidth)}
                            />
                        </div>
                    </div>
                    <div className="cities-slider" ref={sliderContainerWidth}>
                        {
                            citiesPicture.map((item)=>
                                <div className="box-city" key={item.id} style={{transform: `translateX(${sliderWidth}px)`}}>
                                    <img src={item.image_url} alt=""/>
                                    <div className="box-text">
                                        <h2>{item.title}</h2>
                                        {/* <p>{item.apartments_count} شقة</p> */}
                                    </div>
                                </div>
                            )
                        }
                    </div>
            </section>
        </>
    )
}
export default CitiesLocations