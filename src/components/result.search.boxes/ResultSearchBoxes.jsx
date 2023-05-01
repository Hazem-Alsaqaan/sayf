import React from "react";
import {faLocationDot, faStar} from "@fortawesome/free-solid-svg-icons"
import {faHeart} from "@fortawesome/free-solid-svg-icons"
import "./ResultSearchBoxes.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const ResultSearchBoxes = ()=>{
    const results = [
        {
            id: 1,
            image_url: "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1682450453/sayf/Rectangle_39409_scjfyo.png",
            description: "شقة مفروش للايجار",
            rate: 12,
            location: "القاهرة/ مصر"
        },
        {
            id: 2,
            image_url: "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1682450478/sayf/Rectangle_39409_1_owdyhj.png",
            description: "شقة مفروش للايجار",
            rate: 12,
            location: "القاهرة/ مصر"
        },
        {
            id: 3,
            image_url: "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1682450501/sayf/Rectangle_39409_2_wyo34p.png",
            description: "شقة مفروش للايجار",
            rate: 12,
            location: "القاهرة/ مصر"
        },
        {
            id: 4,
            image_url: "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1682450551/sayf/Rectangle_39409_3_y7udqo.png",
            description: "شقة مفروش للايجار",
            rate: 12,
            location: "القاهرة/ مصر"
        },
    ]
const navigate = useNavigate()
    return(
        <>
            <div className="result-search-boxes">
                {
                    results.map((item)=>(
                        <div 
                        key={item.id} 
                        className="result-search-box"
                        onClick={()=> navigate(`/showUnit/${item.id}`)}
                        >
                            <div className="image-container">
                                <img src={item.image_url} alt=""/>
                                <FontAwesomeIcon icon={faHeart}/>
                            </div>
                            <div className="text-container">
                                <div className="text-top-side">
                                    <h4>شقة مفروش للايجار</h4>
                                    <div className="star-icon">
                                        5.0
                                        <FontAwesomeIcon icon={faStar}/>
                                    </div>
                                </div>
                                <p>غرفتين غرفة تحتوي على سرير والأخرى سريرين مناسبة ل 3-4 افراد</p>
                                <p className="rate"><span>600 \ اليوم</span>({item.rate}تقييم)</p>
                                <p className="location">
                                    <FontAwesomeIcon icon={faLocationDot}/>
                                    {item.location}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
export default ResultSearchBoxes