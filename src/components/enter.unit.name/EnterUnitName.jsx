import React, { memo } from "react";
import "./EnterUnitName.css"
import NumberAndText from "../number.and.text/NumberAndText";

const EnterUnitName = ({enterName, setEnterName})=>{
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
                    onChange={(e)=>setEnterName(e.target.value)}
                    value={enterName}
                    />
                </div>
            </section>
        </>
    )
}
export default memo(EnterUnitName)