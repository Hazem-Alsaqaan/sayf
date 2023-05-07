import React, { memo } from "react";
import "./NumberAndText.css"

const NumberAndText = ({title})=>{
    return(
        <>
            <section className="number-and-text">
                <h4 className="number">{title.number}</h4>
                <h4 className="text">{title.text}</h4>
            </section>
        </>
    )
}
export default memo(NumberAndText)