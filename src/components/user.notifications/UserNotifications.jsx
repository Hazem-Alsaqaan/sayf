import React from "react";
import "./UserNotifications.css"


const UserNotifications = ()=>{
    return(
        <>
            <section className="notifications">
                <div className="notifications-boxes">
                    <div className="box">
                        <div className="image">
                            <img src="https://res.cloudinary.com/dkhu7rt8n/image/upload/v1683453987/sayf/user.notifications_kf746x.png" alt=""/>
                        </div>
                        <p className="text">قام محمد احمد بحجز الشقه الخاصه بك من يوم الاحد 12 ل 17 يناير </p>
                    </div>
                    <div className="box">
                        <div className="image">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlwj2YK4IT8kJKQS7a57mwtW1tDedIj4lobQ&usqp=CAU" alt=""/>
                        </div>
                        <p className="text">قام محمد احمد بحجز الشقه الخاصه بك من يوم الاحد 12 ل 17 يناير </p>
                    </div>
                    <div className="box">
                        <div className="image">
                            <img src="https://res.cloudinary.com/dkhu7rt8n/image/upload/v1683453987/sayf/user.notifications_kf746x.png" alt=""/>
                        </div>
                        <p className="text">قام محمد احمد بحجز الشقه الخاصه بك من يوم الاحد 12 ل 17 يناير </p>
                    </div>
                </div>
            </section>
        </>
    )
}
export default UserNotifications