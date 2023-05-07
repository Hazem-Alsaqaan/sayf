import React from "react";
import "./EnterUnitPrice.css"
import NumberAndText from "../number.and.text/NumberAndText";

const EnterUnitPrice = ()=>{
    const title = {
        number: "6",
        text: "السعر"
    }
    return(
        <>
            <section className="enter-unit-price single-section">
                <NumberAndText title={title}/>
                <div className="inputs">
                    <input 
                    type="text"
                    placeholder="حدد السعر المطلوب لليوم الواحد"
                    />
                </div>
            </section>
        </>
    )
}

export default EnterUnitPrice