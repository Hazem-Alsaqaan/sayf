import React from "react";
import "./UserNotifications.css"
import { useSelector } from "react-redux";
import { RotatingLines } from "react-loader-spinner"
import SingleNotification from "./SingleNotification";

const UserNotifications = ()=>{
    const {notifications} = useSelector((state)=> state.unitsSlice)
    const {notificationsLoadng} = useSelector((state)=> state.unitsSlice)

    

    return(
        <>
            <section className="notifications">
                {
                    notificationsLoadng ? 
                    <div className="loading">
                        <RotatingLines
                        strokeColor="#5500A1"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="96"
                        visible={true}
                        /> 
                    </div> 
                    :
                    <div className="notifications-boxes">
                        {
                            notifications.map((item)=>
                                <SingleNotification
                                key={item._id}
                                item = {item}
                                startingdate = {item.start_date}
                                endingdate = {item.end_date}
                                />
                                )
                        }
                    </div>
                    }
            </section>
        </>
    )
}
export default UserNotifications