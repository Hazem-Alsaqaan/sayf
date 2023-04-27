import React from "react";
import {Link} from "react-router-dom"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faLocationDot, faStar} from "@fortawesome/free-solid-svg-icons"
import {faHeart} from "@fortawesome/free-regular-svg-icons"
import "./MostBookedApartments.css"


const MostBookedApartments = ()=>{
    const mostBooked = [
        {
            id: 1,
            image_url: "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1682450453/sayf/Rectangle_39409_scjfyo.png",
            description: "شقة مفروش للايجار شارع احمد عرابي بالمهندسين",
            rate: 12,
            location: "القاهرة/ مصر"
        },
        {
            id: 2,
            image_url: "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1682450478/sayf/Rectangle_39409_1_owdyhj.png",
            description: "شقة مفروش للايجار شارع احمد عرابي بالمهندسين",
            rate: 12,
            location: "القاهرة/ مصر"
        },
        {
            id: 3,
            image_url: "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1682450501/sayf/Rectangle_39409_2_wyo34p.png",
            description: "شقة مفروش للايجار شارع احمد عرابي بالمهندسين",
            rate: 12,
            location: "القاهرة/ مصر"
        },
        {
            id: 4,
            image_url: "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1682450551/sayf/Rectangle_39409_3_y7udqo.png",
            description: "شقة مفروش للايجار شارع احمد عرابي بالمهندسين",
            rate: 12,
            location: "القاهرة/ مصر"
        },
    ]
    return (
        <>
            <section className="most-booked">
                <div className="container">
                    <h1>أكثر الشقق حجزا لهذا الشهر</h1>
                    <div className="boxes-container">
                        {
                            mostBooked.map((item)=>(
                                <div key={item.id} className="most-booked-box">
                                    <div className="image-box">
                                        <FontAwesomeIcon icon={faHeart}/>
                                        <img src={item.image_url} alt=""/>
                                        <span className="star-icon">
                                            5.0
                                            <FontAwesomeIcon icon={faStar}/>
                                        </span>
                                    </div>
                                    <h4>{item.description}</h4>
                                    <p><span>600 \ اليوم</span>({item.rate}تقييم)</p>
                                    <p>
                                        <FontAwesomeIcon icon={faLocationDot}/>
                                        {item.location}
                                    </p>
                                    <Link className="btn btn-primary">احجز الأن</Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
export default MostBookedApartments