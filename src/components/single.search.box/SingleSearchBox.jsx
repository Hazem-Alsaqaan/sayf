import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import {faLocationDot, faStar} from "@fortawesome/free-solid-svg-icons"
import {faHeart} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SingleSearchBox.css"


const SingleSearchBox = ({item}) => {
    const navigate = useNavigate()
    return (
        <>
            <div className="result-search-box">
                <div className="image-container">
                    <img src={item?.images[0]} alt="" />
                    <FontAwesomeIcon icon={faHeart} />
                </div>
                <div className="text-container">
                    <div className="text-top-side">
                        <h4>شقة مفروش للايجار</h4>
                        <div className="star-icon">
                            5.0
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                    </div>
                    <p>غرفتين غرفة تحتوي على سرير والأخرى سريرين مناسبة ل 3-4 افراد</p>
                    <p className="rate"><span>600 \ اليوم</span>({item?.rating}تقييم)</p>
                    <p className="location">
                        <FontAwesomeIcon icon={faLocationDot} />
                        {`${item?.city} ${item?.street}`}
                    </p>
                </div>
            </div>
        </>
    )
}
export default memo(SingleSearchBox)
