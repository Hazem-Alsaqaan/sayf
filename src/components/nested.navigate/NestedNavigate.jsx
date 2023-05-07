import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleCheck} from "@fortawesome/free-regular-svg-icons"
import "./NestedNavigate.css"
import { faCameraRetro, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const NestedNavigate = ()=>{

    return(
        <>
            <section className="nested-navigate">
                <div className="btn-section">
                    <NavLink to="images"  className={`btn-navigate`} end >
                        <FontAwesomeIcon icon={faCameraRetro}/>
                        <span>الصور</span>
                    </NavLink>
                    <NavLink to="location" className="btn-navigate">
                        <FontAwesomeIcon icon={faLocationDot}/>
                        <span>الموقع</span>
                    </NavLink>
                </div>
                <div className="checked-info">
                    <FontAwesomeIcon icon={faCircleCheck}/>
                    <span>نضمن لك صحة المعلومات ونظافة المكان</span>
                </div>
                
            </section>
        </>
    )
}
export default NestedNavigate