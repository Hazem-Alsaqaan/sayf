import React, {memo, useEffect, useState} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faLocationDot, faStar} from "@fortawesome/free-solid-svg-icons"
import {faHeart} from "@fortawesome/free-solid-svg-icons"
import "./ApartmentBox.css"
import { addTMyFavourites, getMyBooking, getMyFavourites, removeFromBookings, removeFromFavourites } from "../../redux/actions/unitsActions";
import { useDispatch, useSelector } from "react-redux";


const ApartmentBox = ({item, render, setRender, startDateDay,StartDateMonth, startDateYear,endDateDay,endDateMonth, endDateYear})=>{
    const {token} = useSelector((state)=> state.authSlice)
    const dispatch = useDispatch()
    let location = useLocation();
    const navigate = useNavigate()

    // add and remove of my favourites
    const handleAddToMyFavourites= (id)=>{
        dispatch(addTMyFavourites({id: id, token: token}))
        dispatch(getMyFavourites(token))
    }
    const handleRemoveFromMyFavourites= (id)=>{
        dispatch(removeFromFavourites({id: id, token: token}))
        setRender(!render)
        dispatch(getMyFavourites(token))
    }

    // add and remove from my bookings
    const handleRemoveFromMyBookings= (id)=>{
        dispatch(removeFromBookings({id: id, token: token}))
        setRender(!render)
        dispatch(getMyBooking(token))
    }

    

    return(
        <>
            <div  
            className="single-box"
            // onClick={()=>navigate(`/showUnit/${item.id}`)}
            >
                {location.pathname === "/myBookings" &&
                <h4 className="date-booking-title">{`تم الحجز من يوم ${startDateDay} ${StartDateMonth} ${startDateYear} إلى يوم ${endDateDay} ${endDateMonth} ${endDateYear}`}</h4>}
                <div className="image-box">
                    <FontAwesomeIcon 
                    onClick={location.pathname === "/myFavourite" ? ()=>handleRemoveFromMyFavourites(item?._id) : ()=>handleAddToMyFavourites(item?._id)}
                    icon={faHeart} style={location.pathname === "/myFavourite" && {color: "#E20D0D"}}/>
                    <img src={item?.images && item?.images[0]} alt=""/>
                    <span className="star-icon">
                        {item.rating ? item.rating : 0}
                        <FontAwesomeIcon icon={faStar}/>
                    </span>
                </div>
                <div>
                    <h4>{`شقة مفروش للإيجار شارع ${item?.street}`}</h4>
                    {location.pathname === "/myFavourite" && 
                    <p>{`شقة تحتوي على ${item?.bathrooms} حمام`}</p>}
                    <p className="rate"><span>600 \ اليوم</span>({item?.raters ? item?.raters : 0} تقييم)</p>
                    <p className="location">
                        <FontAwesomeIcon icon={faLocationDot}/>
                        {`${item?.city} - مصر`}
                    </p>
                    {location.pathname !== "/myBookings" ?
                    <Link 
                    className="btn btn-primary"
                    to={`/showUnit/${item?._id}`}
                    >احجز الأن</Link>
                    :
                    <Link 
                    className="btn btn-primary"
                    onClick={()=>handleRemoveFromMyBookings(item?._id)}
                    >إلغاء الحجز</Link>
                    }
                </div>
            </div>
        </>
    )
}
export default memo(ApartmentBox)