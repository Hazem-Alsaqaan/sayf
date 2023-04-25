import React, { useState } from "react";
import "./SelectPrice.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const SelectPrice =()=>{
    const [selectPriceToggle, setSelectPriceToggle] = useState(false)
    const [minRang, setMinRang] = useState(0);
    const [maxRang, setMaxRang] = useState(0)

    return(
        <>
            <section className="select-price">
                    <div className="selection">
                        <span>السعر</span>
                        <FontAwesomeIcon 
                        icon={faChevronDown}
                        onClick={()=>setSelectPriceToggle(!selectPriceToggle)}
                        />
                    </div>
                    {
                        selectPriceToggle &&
                        <div className="select-rang">
                            <div>
                                <label>الحد الادنى</label>
                                <input
                                type="text"
                                onChange={(e)=> setMinRang(e.target.value)}
                                value={minRang}
                                />
                            </div>
                            <div>
                                <label>الحد الاقصى</label>
                                <input
                                type="text"
                                onChange={(e)=>setMaxRang(e.target.value)}
                                value={maxRang}
                                />
                            </div>
                            <div 
                            className="btn btn-primary"
                            onClick={()=>setSelectPriceToggle(false)}
                            >تم</div>
                    </div>
                    }
            </section>
        </>
    )
}
export default SelectPrice