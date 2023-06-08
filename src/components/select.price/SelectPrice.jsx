import React, { useState } from "react";
import "./SelectPrice.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { setMaxRang, setMinRang } from "../../redux/reducers/searchDataSlice";

const SelectPrice =()=>{
    const dispatch = useDispatch()
    const [selectPriceToggle, setSelectPriceToggle] = useState(false)
    const {minRang} = useSelector((state)=>state.searchDataSlice)
    const {maxRang} = useSelector((state)=>state.searchDataSlice)
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
                                type="number"
                                onChange={(e)=> dispatch(setMinRang(e.target.value))}
                                value={minRang}
                                />
                            </div>
                            <div>
                                <label>الحد الاقصى</label>
                                <input
                                type="number"
                                onChange={(e)=> dispatch(setMaxRang(e.target.value))}
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

// {minRang, setMinRang, maxRang, setMaxRang}