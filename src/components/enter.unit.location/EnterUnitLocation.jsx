import React from "react";
import "./EnterUnitLocation.css"
import NumberAndText from "../number.and.text/NumberAndText";

const EnterUnitLocation = ()=>{
    const title = {
        number: "3",
        text: "حدد موقع شقتك"
    }
    return(
        <>
            <section className="enter-unit-location single-section">
                <NumberAndText title = {title}/>
                <div className="select-location">
                    <img src="https://res.cloudinary.com/dkhu7rt8n/image/upload/v1683028719/sayf/GoogleMap_bxdqvk.svg" alt=""/>
                </div>
            </section>
        </>
    )
}
export default EnterUnitLocation