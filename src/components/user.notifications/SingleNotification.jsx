import React, { memo } from "react";
import "./UserNotifications.css"

const SingleNotification = ({item, startingdate, endingdate})=>{

    const startDate = new Date(startingdate)
    const startDateDay = startDate.getDate()
    const StartDateMonth = startDate.getMonth()+1
    const startDateYear = startDate.getFullYear()
    
    const endDate = new Date(endingdate)
    const endDateDay = endDate.getDate()
    const endDateMonth = endDate.getMonth()+1
    const endDateYear = endDate.getFullYear()

return(
        <>
            <div className="box">
                <div className="image">
                    <img src={item.customer ? item.customer.photo : "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1685201428/vectors/user_profile_g0jjum.png"} alt=""/>
                </div>
                <p className="text">{`قام ${item.customer ? item.customer.username : "unknown"} بحجز الشقة الخاصة بك من يوم ${startDateDay} / ${StartDateMonth} / ${startDateYear} ل ${endDateDay} / ${endDateMonth} / ${endDateYear}`}</p>
            </div>
        </>
    )
}

export default memo(SingleNotification)