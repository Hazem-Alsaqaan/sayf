import React, { memo } from "react";
import "./SpecificationsConditions.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";

const SpecificationsConditions = ({oneUnit})=>{
    const {unitId} = useParams()
    return(
        <>
        <div className="static-specifications">
            <div>
                <h1>شقة مفروشة للايجار</h1>
                <p>600 \ اليوم</p>
            </div>
            <Link to= {`/showUnit/${unitId}/payment`} className="btn">احجز الأن</Link>
        </div>
        <div className="specifications-conditions">
            <section className="specifications">
                <h2 className="title">المواصفات</h2>
                <div className="specifications-data">
                    <div>
                        <FontAwesomeIcon icon={faLocationDot}/>
                        <span>{`${oneUnit.city} - مصر`}</span>
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/dkhu7rt8n/image/upload/v1682941496/sayf/809090_architecture_family_home_house_residential_icon_1_ahokpe.svg" alt=""/>
                        <span>مساحه الشقه 6200 متر</span>
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/dkhu7rt8n/image/upload/v1682941534/sayf/6714576_family_home_house_insurance_investment_icon_1_fe6wn5.svg" alt=""/>
                        <span>مناسب للعائلات والعزاب</span>
                    </div>
                </div>
                <section className="description">
                    <h3>الوصف :</h3>
                    <p>شقة مفروشة مميزة كمباوند ذا ادريس مدينة الشيخ زايد
                        ثلاثة غرف نوم وحمامين
                        اطلالة مميزة على حديقه
                        جميع الغرف مكيفة
                        فرش جديد راقي
                        للايجار اليومي والاسبوعي والشهري
                    </p>
                </section>
            </section>
            <section className="conditions">
                <h2 className="title">الشروط</h2>
                <div className="conditions-data">
                    <h4>شروط عامة  :</h4>
                    <p>. دفع مبلغ 50 جنيه عند الحجز بشكل اساسي</p>
                    <p>. عدم دفع مبلغ 50 جنيه عند الحجز علي قوائم الانتظار</p>
                </div>
                <div className="conditions-data">
                    <h4>شروط خاصه للمؤجر  :</h4>
                    <p>. المحافظه علي ممتلكات المكان والنظافه</p>
                </div>
                <div className="conditions-data">
                    <h4>سياسه الإلغاء والتأجيل :</h4>
                    <p>. عند الإلغاء تدفع ال 50  للمؤجر</p>
                    <p>. يوجد امكانيه التأجيل مره واحده فقط وإلا سيتم خصم مبلغ ال 50 لمؤجر</p>
                </div>
            </section>
        </div>
        </>
    )
}
export default memo(SpecificationsConditions)