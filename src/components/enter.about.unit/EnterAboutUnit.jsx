import React, { memo } from "react";
import NumberAndText from "../number.and.text/NumberAndText";
import "./EnterAboutUnit.css"

const EnterAboutUnit = ({enterAboutUnit, setEnterAboutUnit})=>{
    const title = {
        number: "7",
        text: "عن الشقة"
    }
    return(
        <>
            <section className="enter-about-unit single-section">
                <NumberAndText title={title}/>
                <div className="inputs">
                    <textarea
                    required
                    placeholder="تفاصيل عن الشقة والمكان"
                    onChange={(e)=>setEnterAboutUnit(e.target.value)}
                    value={enterAboutUnit}
                    ></textarea>
                </div>
            </section>
        </>
    )
}
export default memo(EnterAboutUnit)