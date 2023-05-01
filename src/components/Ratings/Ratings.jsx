import React from "react";
import "./Ratings.css"

const Ratings = ()=>{
    return(
        <>
            <section className="ratings">
                <h2>التقييمات</h2>
                <div className="ratings-data">
                    <h5>5.0</h5>
                    <p>نظافة المكان</p>
                </div>
                <div className="ratings-data">
                    <h5>5.0</h5>
                    <p>الخدمة والاستقبال</p>
                </div>
                <div className="ratings-data">
                    <h5>5.0</h5>
                    <p>مطابقه المعلومات المعروضه عن الشقة</p>
                </div>
                <div className="ratings-data">
                    <h5>5.0</h5>
                    <p>حالة المكان</p>
                </div>
            </section>
        </>
    )
}
export default Ratings