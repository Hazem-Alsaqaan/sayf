import React, { memo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {faLocationDot, faStar} from "@fortawesome/free-solid-svg-icons"
import {faHeart} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SingleSearchBox.css"
import { useDispatch, useSelector } from "react-redux";
import { addTMyFavourites, getMyFavourites, removeFromFavourites } from "../../redux/actions/unitsActions";


const SingleSearchBox = ({item}) => {
    const navigate = useNavigate()
    const {token} = useSelector((state)=> state.authSlice)
    const dispatch = useDispatch()
    let location = useLocation();

    const handleAddToMyFavourites= (id)=>{
        dispatch(addTMyFavourites({id: id, token: token}))
        dispatch(getMyFavourites(token))
    }
    const handleRemoveFromMyFavourites= (id)=>{
        dispatch(removeFromFavourites({id: id, token: token}))
        dispatch(getMyFavourites(token))
    }
    return (
        <>
            <div className="result-search-box">
                <div className="image-container">
                    <img src={item?.images[0]} alt="" />
                    <FontAwesomeIcon 
                    onClick={location.pathname === "/myFavourite" ? ()=>handleRemoveFromMyFavourites(item?._id) : ()=>handleAddToMyFavourites(item?._id)}
                    icon={faHeart} />
                </div>
                <div className="text-container">
                    <div className="text-top-side">
                        <h4>شقة مفروش للايجار</h4>
                        <div className="star-icon">
                            {item?.rating}
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                    </div>
                    <p>{`مكونة من ${item?.rooms} غرفة تحتوي على ${item?.beds} سرير مناسبة ل ${item?.persons + item?.children - 1} - ${item?.persons + item?.children} أفراد`}</p>
                    <p className="rate"><span>600 \ اليوم</span>({item?.raters} تقييم)</p>
                    <p className="location">
                        <FontAwesomeIcon icon={faLocationDot} />
                        {`${item?.city} - مصر`}
                    </p>
                    <Link 
                    className="btn btn-primary"
                    to={`/showUnit/${item?._id}`}
                    >احجز الأن</Link>
                </div>
            </div>
        </>
    )
}
export default memo(SingleSearchBox)
