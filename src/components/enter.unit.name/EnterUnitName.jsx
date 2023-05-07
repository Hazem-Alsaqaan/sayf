import React from "react";
import "./EnterUnitName.css"
import NumberAndText from "../number.and.text/NumberAndText";

const EnterUnitName = ()=>{
    const title = {
        number: "1",
        text: "الاسم"
    }

    return(
        <>
            <section className="enter-unit-name single-section">
                <NumberAndText title = {title}/>
                <div>
                    <input 
                    type="text"
                    placeholder="ادخل اسم مكان الشقة الخاصه بك"
                    />
                </div>
            </section>
        </>
    )
}
export default EnterUnitName