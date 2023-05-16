import React, { memo } from "react";
import NumberAndText from "../number.and.text/NumberAndText";

const EnterPersonsChildren = ({enterPersons, setEnterPersons})=>{
    const title = {
        number: "9",
        text: "عدد الاشخاص والاطفال"
    }

    return(
        <>
            <section className="single-section">
                <NumberAndText title = {title}/>
                <div>
                    <input 
                    type="text"
                    className="mx-1"
                    placeholder="ادخل عدد الاشخاص"
                    onChange={(e)=>setEnterPersons({...enterPersons, personNum: e.target.value})}
                    value={enterPersons.personNum}
                    />
                    <input 
                    type="text"
                    className="mx-1"
                    placeholder="ادخل عدد الاطفال"
                    onChange={(e)=>setEnterPersons({...enterPersons, childrenNum: e.target.value})}
                    value={enterPersons.childrenNum}
                    />
                </div>
            </section>
        </>
    )
}
export default memo(EnterPersonsChildren)