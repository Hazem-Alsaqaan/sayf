import React from "react";
import NumberAndText from "../number.and.text/NumberAndText";
import "./EnterUnitDetails.css"

const EnterUnitDetails = ()=>{
    const title = {
        number: "4",
        text: "تفاصيل الشقه"
    }
    return(
        <>
            <section className="enter-unit-details single-section">
                <NumberAndText title={title}/>
                <div className="inputs">
                    <div className="top-side">
                        <input 
                        type="text"
                        placeholder="عدد الغرف"
                        />
                        <input 
                        type="text"
                        placeholder="عدد السراير"
                        />
                    </div>
                    <div className="bottom-side">
                        <input 
                        type="text"
                        placeholder="عدد الحمامات"
                        />
                        <input 
                        type="text"
                        placeholder="مساحه الشقه"
                        />
                        </div>
                </div>
            </section>
        </>
    )
}
export default EnterUnitDetails