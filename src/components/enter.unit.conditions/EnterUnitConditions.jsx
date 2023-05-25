import React, { memo } from "react";
import "./EnterUnitConditions.css"
import NumberAndText from "../number.and.text/NumberAndText";

const EnterUnitConditions = ({enterConditions, setEnterConditions})=>{
    const title = {
        number: "5",
        text: "الشروط"
    }
    return(
        <>
            <section className="enter-unit-conditions single-section">
                <NumberAndText title={title}/>
                <div className="inputs">
                    <textarea
                    required
                    placeholder="ادخل اشروط للحجز"
                    onChange={(e)=>setEnterConditions(e.target.value)}
                    value={enterConditions}
                    ></textarea>
                </div>
            </section>
        </>
    )
}
export default memo(EnterUnitConditions)