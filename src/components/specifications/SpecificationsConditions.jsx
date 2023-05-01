import React from "react";
import "./SpecificationsConditions.css"
import unitSizeIcon from "../../assets/809090_architecture_family_home_house_residential_icon 1.svg"
import houseIcon from "../../assets/6714576_family_home_house_insurance_investment_icon 1.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const SpecificationsConditions = ()=>{
    return(
        <>
        <div className="specifications-conditions">
            <section className="specifications">
                <h2 className="title">المواصفات</h2>
                <div className="specifications-data">
                    <div>
                        <FontAwesomeIcon icon={faLocationDot}/>
                        <span>القاهرة - مصر</span>
                    </div>
                    <div>
                        <img src={unitSizeIcon} alt=""/>
                        <span>مساحه الشقه 6200 متر</span>
                    </div>
                    <div>
                        <img src={houseIcon} alt=""/>
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
export default SpecificationsConditions