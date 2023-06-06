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
        },
        {
            id: 7,
            title: "اسيوط",
            image_url: "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1686064149/sayf/%D8%AE%D8%B2%D8%A7%D9%86_%D8%A3%D8%B3%D9%8A%D9%88%D8%B7_-_%D9%85%D8%B5%D8%B1_-_Assiut_Dam_-_Egypt_itzxbg.jpg",
            // apartments_count: 35
        },
        {
            id: 8,
            title: "الغردقة",
            image_url: "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1686064142/sayf/%D9%85%D8%AF%D9%8A%D9%86%D8%A9-%D8%A7%D9%84%D8%BA%D8%B1%D8%AF%D9%82%D8%A9_InPixio-1_skahx5.jpg",
            // apartments_count: 35
        },
        {
            id: 9,
            title: "دمنهور",
            image_url: "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1686064128/sayf/%D8%AF%D8%A7%D8%B1_%D8%A3%D9%88%D8%A8%D8%B1%D8%A7_%D8%AF%D9%85%D9%86%D9%87%D9%88%D8%B1_z2hb9v.jpg",
            // apartments_count: 35
        },
        {
            id: 10,
            title: "بني سويف",
            image_url: "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1686064119/sayf/Beni-Suef_University_main_bldg_xyuy0o.jpg",
            // apartments_count: 35
        },
        {
            id: 11,
            title: "شرم الشيخ",
            image_url: "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1686064114/sayf/%D8%B4%D8%B1%D9%85_%D8%A7%D9%84%D8%B4%D9%8A%D8%AE_gvrxxp.jpg",
            // apartments_count: 35
        },
        {
            id: 12,
            title: "الجيزة",
            image_url: "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1686064105/sayf/%D9%85%D8%AD%D8%A7%D9%81%D8%B8%D8%A9-%D8%A7%D9%84%D8%AC%D9%8A%D8%B2%D8%A9-%D9%83%D9%84-%D9%85%D8%A7-%D9%8A%D9%87%D9%85%D9%83_kouruz.jpg",
            // apartments_count: 35
        },
        {
            id: 13,
            title: "دمياط",
            image_url: "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1686064094/sayf/%D8%AF%D9%85%D9%8A%D8%A7%D8%B7_lhrbyd.jpg",
            // apartments_count: 35
        },
        {
            id: 14,
            title: "سوهاج",
            image_url: "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1686064079/sayf/%D8%B3%D9%88%D9%87%D8%A7%D8%AC_knmp4v.jpg",
            // apartments_count: 35
        },
        {
            id: 15,
            title: "السويس",
            image_url: "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1686064071/sayf/%D8%A7%D9%84%D8%B3%D9%88%D9%8A%D8%B3_qshiql.jpg",
            // apartments_count: 35
        },
        {
            id: 16,
            title: "الشرقية",
            image_url: "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1686064064/sayf/%D8%A7%D9%84%D8%B4%D8%B1%D9%82%D9%8A%D8%A9_n1qrzu.jpg",
            // apartments_count: 35
        },
        {
            id: 17,
            title: "العريش",
            image_url: "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1686064053/sayf/54012-%D8%B5%D8%AD%D8%B1%D8%A7%D8%A1-%D8%A7%D9%84%D8%B9%D8%B1%D9%8A%D8%B4-%D8%A7%D9%84%D9%86%D8%A7%D8%B9%D9%85%D8%A9_dj0rcx.jpg",
            // apartments_count: 35
        },
        {
            id: 18,
            title: "المنيا",
            image_url: "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1686063951/sayf/%D8%A7%D9%84%D9%85%D9%86%D9%8A%D8%A7_fwzlow.jpg",
            // apartments_count: 35
        },
        {
            id: 19,
            title: "مرسى مطروح",
            image_url: "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1686063934/sayf/%D9%85%D8%B7%D8%B1%D9%88%D8%AD_pxobzk.jpg",
            // apartments_count: 35
        },
        {
            id: 20,
            title: "الوادي الجديد",
            image_url: "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1686063942/sayf/-%D9%85%D8%AD%D8%A7%D9%81%D8%B8%D8%A9-%D9%81%D9%8A-%D9%85%D8%B5%D8%B1-%D8%A7%D9%84%D9%88%D8%A7%D8%AF%D9%8A-%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF-1-e1560843260177_ryxywd.jpg",
            // apartments_count: 35
        },
        {
            id: 21,
            title: "طنطا",
            image_url: "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1686064047/sayf/%D8%B7%D9%86%D8%B7%D8%A7_vjgvnf.jpg",
            // apartments_count: 35
        },
        {
            id: 22,
            title: "الفيوم",
            image_url: "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1686064037/sayf/%D8%A7%D9%84%D9%81%D9%8A%D9%88%D9%85_xve8oh.jpg",
            // apartments_count: 35
        },
        {
            id: 23,
            title: "بنها",
            image_url: "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1686064030/sayf/%D8%A7%D9%84%D8%B3%D9%83%D9%86-%D9%81%D9%8A-%D8%A8%D9%86%D9%87%D8%A7_v8pcpd.jpg",
            // apartments_count: 35
        },
        {
            id: 24,
            title: "كفر الشيخ",
            image_url: "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1686064026/sayf/958648-%D9%85%D8%AD%D8%A7%D9%81%D8%B8%D8%A9-%D9%83%D9%81%D8%B1-%D8%A7%D9%84%D8%B4%D9%8A%D8%AE-_2_gjdeam.jpg",
            // apartments_count: 35
        },
        {
            id: 25,
            title: "المنوفية",
            image_url: "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1686063956/sayf/%D8%A7%D9%84%D9%85%D9%86%D9%88%D9%81%D9%8A%D8%A9_kiyvjp.jpg",
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
                                    <div className="box-cities-img">
                                        <img src={item.image_url} alt="" width={350} height={350}/>
                                    </div>
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