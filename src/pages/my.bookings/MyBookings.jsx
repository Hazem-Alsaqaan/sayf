import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./MyBookings.css"
import ApartmentBox from "../../components/apartment.box/ApartmentBox";

const MyBookings = ()=>{
    const mostBooked = [
        {
            id: 1,
            image_url: "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1682450453/sayf/Rectangle_39409_scjfyo.png",
            description: "شقة مفروش للايجار شارع احمد عرابي بالمهندسين",
            rate: 12,
            location: "القاهرة/ مصر"
        },
        {
            id: 2,
            image_url: "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1682450478/sayf/Rectangle_39409_1_owdyhj.png",
            description: "شقة مفروش للايجار شارع احمد عرابي بالمهندسين",
            rate: 12,
            location: "القاهرة/ مصر"
        },
        {
            id: 3,
            image_url: "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1682450501/sayf/Rectangle_39409_2_wyo34p.png",
            description: "شقة مفروش للايجار شارع احمد عرابي بالمهندسين",
            rate: 12,
            location: "القاهرة/ مصر"
        },
        {
            id: 4,
            image_url: "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1682450551/sayf/Rectangle_39409_3_y7udqo.png",
            description: "شقة مفروش للايجار شارع احمد عرابي بالمهندسين",
            rate: 12,
            location: "القاهرة/ مصر"
        },
    ]
    return(
        <>
            <div className="booking">
                <section className="booking-page-landing">
                    <Header/>
                    <div className="container landing-content">
                        <h1>حجوزاتي</h1>
                    </div>
                </section>
                <div className="boxes-container container">
                        {
                            mostBooked.map((item)=>(
                                <ApartmentBox key={item.id} item={ item}/>
                            ))
                        }
                </div>
                <Footer/>
            </div>
        </>
    )
}
export default MyBookings