import React, {memo, useState} from "react";
import {Link, useLocation, useParams} from "react-router-dom"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faLocationDot, faStar} from "@fortawesome/free-solid-svg-icons"
import {faHeart} from "@fortawesome/free-solid-svg-icons"
import "./ApartmentBox.css"
import { addTMyFavourites, removeFromBookings, removeFromFavourites } from "../../redux/actions/unitsActions";
import { useDispatch, useSelector } from "react-redux";
import {ToastContainer} from "react-toastify"


const ApartmentBox = ({item, renderMyBookings, setRenderMyBookings, starting, ending, bookingItem, favRender, setFavRender})=>{
    const {unitId} =  useParams()
    const {user} = useSelector((state)=> state.authSlice)
    const {token} = useSelector((state)=> state.authSlice)
    const dispatch = useDispatch()
    let location = useLocation();
    const [favHeart, setFavHeart] = useState(false)

    // add and remove of my favourites
    const handleAddToMyFavourites= (id)=>{
        setFavHeart(true)
        dispatch(addTMyFavourites({id: id, token: token}))
        if(location.pathname === "/myFavourite"){
            setFavRender(!favRender)
        }
    }
    // remove from favourites
    const handleRemoveFromMyFavourites= (id)=>{
        setFavHeart(false)
        dispatch(removeFromFavourites({id: id, token: token}))
        if(location.pathname === "/myFavourite"){
            setFavRender(!favRender)
        }
    }


    // add and remove from my bookings
    const handleRemoveFromMyBookings= (id)=>{
        dispatch(removeFromBookings({id: id, token: token}))
        if(location.pathname === "/myBookings"){
            setRenderMyBookings(!renderMyBookings)
        }
    }
    //start config date
    // const months = [
    //     "يناير",
    //     "فبراير",
    //     "مارس",
    //     "ابريل",
    //     "مايو",
    //     "يونيو",
    //     "يوليو",
    //     "اغسطس",
    //     "سبتمبر",
    //     "اكتوبر",
    //     "نوفمبر",
    //     "ديسمبر",
    // ];

    // some confige to arrivel date and leaving date
    // useEffect(()=>{
    //     const unSubscripe = ()=>{
    //          //start date loop
    //         for(let i =0; i < months.length; i++){
    //             if(i === startDate.getMonth()){
    //                 setStartDateMonth(months[i])
    //             }
    //         }
    //         // end date loop
    //         for(let j =0; j < months.length; j++){
    //             if(j === endDate.getMonth()){
    //                 setEndDateMonth(months[j])
    //             }
    //         }
    //     }
    //     return()=> unSubscripe()
    // },[])
// location.pathname === "/myFavourite"


const startDate = new Date(starting)
const [StartDateMonth, setStartDateMonth] = useState("")
const startDateDay = startDate.getDate()
const startDateYear = startDate.getFullYear()

const endDate = new Date(ending)
const [endDateMonth, setEndDateMonth] = useState("")
const endDateDay = endDate.getDate()
const endDateYear = endDate.getFullYear()


    return(
        <>
            <div  
            className="single-box">
                {location.pathname === "/myBookings" &&
                <h4 className="date-booking-title">{`تم الحجز من يوم ${startDateDay} / ${startDate.getMonth() + 1} / ${startDateYear} إلى يوم ${endDateDay} / ${endDate.getMonth() + 1} / ${endDateYear}`}</h4>}
                <div className="image-box">
                    {location.pathname !== `/myUnits/${unitId}`?
                        <FontAwesomeIcon 
                        onClick={favHeart || item.favourites.includes(user.id) ? ()=>handleRemoveFromMyFavourites(item?._id) : ()=>handleAddToMyFavourites(item?._id)}
                        icon={faHeart} style={favHeart || item.favourites.includes(user.id) ? {color: "#E20D0D"} : {color: "fff"}}/>
                        :""}
                    <div className="apartmentBox-image-box">
                        <img src={item?.images && item?.images[0]} alt=""/>
                    </div>
                    <span className="star-icon">
                        {item.rating ? item.rating.toFixed(1) : 0}
                        <FontAwesomeIcon icon={faStar}/>
                    </span>
                </div>
                <div className="apartmentBox-text-content">
                    <h4>{`شقة مفروش للإيجار شارع ${item?.street}`}</h4>
                    {location.pathname === "/myFavourite" && 
                    <p>{`شقة تحتوي على ${item?.bathrooms} حمام`}</p>}
                    <p className="rate"><span>{`${item.price} /\ اليوم`}</span>({item?.raters ? item?.raters : 0} تقييم)</p>
                    <p className="location">
                        <FontAwesomeIcon icon={faLocationDot}/>
                        {`${item?.city} - مصر`}
                    </p>
                    {location.pathname === "/myBookings" ?
                    <Link 
                        className="btn btn-primary"
                        onClick={()=>handleRemoveFromMyBookings(bookingItem?._id)}
                    >إلغاء الحجز</Link>
                    : location.pathname === "/myUnits" ?
                    <Link 
                    className="btn btn-primary"
                    to={`/myUnits/${item?._id}`}
                    >الحجوزات</Link>
                    : location.pathname === `/myUnits/${item?._id}` ?
                    ""
                    :
                    <Link 
                    className="btn btn-primary"
                    to={`/showUnit/${item?._id}`}
                    >احجز الأن</Link>
                    }
                </div>
                <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                />
            </div>
        </>
    )
}
export default memo(ApartmentBox)