import React, { memo, useEffect, useState } from "react";
import "./UserNotifications.css"

const SingleNotification = ({item, startingdate, endingdate})=>{
    //start config date
    const months = [
        "يناير",
        "فبراير",
        "مارس",
        "ابريل",
        "مايو",
        "يونيو",
        "يوليو",
        "اغسطس",
        "سبتمبر",
        "اكتوبر",
        "نوفمبر",
        "ديسمبر",
    ];
    const unSubscripe = ()=>{
        //start date loop
            for(let i =0; i < months.length; i++){
                if(i === startDate.getMonth()){
                    setStartDateMonth(months[i])
                }
            }
            // end date loop
            for(let j =0; j < months.length; j++){
                if(j === endDate.getMonth()){
                    setEndDateMonth(months[j])
                }
            }
        }
    useEffect(()=>{
        return()=>unSubscripe()
    },[])

    const startDate = new Date(startingdate)
    const [StartDateMonth, setStartDateMonth] = useState("")
    const startDateDay = startDate.getDate()

    const endDate = new Date(endingdate)
    const [endDateMonth, setEndDateMonth] = useState("")
    const endDateDay = endDate.getDate()

return(
        <>
            <div className="box">
                <div className="image">
                    <img src={item.customer ? item.customer.photo : "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1685201428/vectors/user_profile_g0jjum.png"} alt=""/>
                </div>
                <p className="text">{`قام ${item.customer ? item.customer.username : "unknown"} بحجز الشقة الخاصة بك من يوم ${startDateDay} ${StartDateMonth} ل ${endDateDay} ${endDateMonth}`}</p>
            </div>
        </>
    )
}

export default memo(SingleNotification)