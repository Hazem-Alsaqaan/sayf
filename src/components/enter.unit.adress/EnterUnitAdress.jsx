import React, { memo } from "react";
import "./EnterUnitAdress.css"
import NumberAndText from "../number.and.text/NumberAndText";

const EnterUnitAdress = ({enterAdress, setEnterAdress})=>{
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
                    required
                    type="text"
                    placeholder="المدينة"
                    onChange={(e)=> setEnterAdress({...enterAdress, city: e.target.value})}
                    value={enterAdress.city}
                    />
                    <input 
                    required
                    type="text"
                    placeholder="اسم الشارع ورقم البيت"
                    onChange={(e)=> setEnterAdress({...enterAdress, street: e.target.value})}
                    value={enterAdress.street} 
                    />
                    <input
                    required 
                    type="text"
                    placeholder="رقم الشقه او الطابق" 
                    onChange={(e)=> setEnterAdress({...enterAdress, houseNum: e.target.value})}
                    value={enterAdress.houseNum}
                    />
                    <input
                    required 
                    type="text"
                    placeholder="الرمز البريدي" 
                    onChange={(e)=> setEnterAdress({...enterAdress, zibCode: e.target.value})}
                    value={enterAdress.zibCode}
                    />
                    </div>
            </section>
        </>
    )
}

export default memo(EnterUnitAdress)