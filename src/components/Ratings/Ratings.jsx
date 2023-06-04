import React from "react";
import "./Ratings.css"
import { useSelector } from "react-redux";

const Ratings = ()=>{
    const {oneUnit} = useSelector((state)=>state.unitsSlice)
    
    return(
        <>
            <section className="ratings">
                <h2>التقييمات</h2>
                <div className="ratings-data">
                    <h5>{oneUnit?.rating ? oneUnit?.ratingClean.toFixed(1) : 0}</h5>
                    <p>نظافة المكان</p>
                </div>
                <div className="ratings-data">
                    <h5>{oneUnit?.rating ? oneUnit?.ratingService.toFixed(1) : 0}</h5>
                    <p>الخدمة والاستقبال</p>
                </div>
                <div className="ratings-data">
                    <h5>{oneUnit?.rating ? oneUnit?.ratingInfo.toFixed(1) : 0}</h5>
                    <p>مطابقه المعلومات المعروضه عن الشقة</p>
                </div>
                <div className="ratings-data">
                    <h5>{oneUnit?.rating ? oneUnit?.ratingCondition.toFixed(1) : 0}</h5>
                    <p>حالة المكان</p>
                </div>
            </section>
        </>
    )
}
export default Ratings