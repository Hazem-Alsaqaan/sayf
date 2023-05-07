import React from "react";
import "./EnterUnitAdress.css"
import NumberAndText from "../number.and.text/NumberAndText";

const EnterUnitAdress = ()=>{
    const title = {
        number: "2",
        text: "العنوان"
    }

    return(
        <>
            <section className="enter-unit-adress single-section">
                <NumberAndText title = {title}/>
                <div className="inputs">
                    <input 
                    type="text"
                    placeholder="المدينة"
                    />
                    <input 
                    type="text"
                    placeholder="اسم الشارع ورقم البيت" 
                    />
                    <input 
                    type="text"
                    placeholder="رقم الشقه او الطابق" 
                    />
                    <input 
                    type="text"
                    placeholder="الرمز البريدي" 
                    />
                    </div>
            </section>
        </>
    )
}

export default EnterUnitAdress