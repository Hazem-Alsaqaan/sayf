import React, {memo} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faLocationDot, faStar} from "@fortawesome/free-solid-svg-icons"
import {faHeart} from "@fortawesome/free-solid-svg-icons"
import "./ApartmentBox.css"

const ApartmentBox = ({item})=>{
    let location = useLocation();
    const navigate = useNavigate()
    return(
        <>
            <div  
            className="single-box"
            // onClick={()=>navigate(`/showUnit/${item.id}`)}
            >
                {location.pathname === "/myBookings" && 
                <h4 className="date-booking-title">تم الحجز من يوم 13 يناير 2002 إلى يوم16 يناير 2022</h4>}
                <div className="image-box">
                    <FontAwesomeIcon icon={faHeart} style={location.pathname === "/myFavourite" && {color: "#E20D0D"}}/>
                    <img src={item?.images && item?.images[0]} alt=""/>
                    <span className="star-icon">
                        5.0
                        <FontAwesomeIcon icon={faStar}/>
                    </span>
                </div>
                <h4>{`${item?.street} ${item?.apartment_area} شقة مفروش للإيجار`}</h4>
                {location.pathname === "/myFavourite" && 
                <p>{`حمام ${item?.bathrooms}شقة تحتوي على `}</p>}
                <p className="rate"><span>600 \ اليوم</span>({item?.about}تقييم)</p>
                <p className="location">
                    <FontAwesomeIcon icon={faLocationDot}/>
                    {item?.city}
                </p>
                {location.pathname !== "/myBookings" && 
                <Link 
                className="btn btn-primary"
                to={`/showUnit/${item?._id}`}
                >احجز الأن</Link>
                }
            </div>
        </>
    )
}
export default memo(ApartmentBox)