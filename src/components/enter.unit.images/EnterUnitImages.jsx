import React from "react";
import "./EnterUnitImages.css"
import NumberAndText from "../number.and.text/NumberAndText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faImage} from "@fortawesome/free-regular-svg-icons"

const EnterUnitImages = ()=>{
    const title = {
        number: "8",
        text: "الصور"
    }
    return(
        <>
            <section className="enter-unit-images-contract single-section">
                <NumberAndText title={title}/>
                <div className="inputs">
                    <section className="unit-images">
                        <h5>1- ادخل 5 صور علي الاقل للمكان</h5>
                        <div className="upload-container">
                            <FontAwesomeIcon icon={faImage}/>
                            <p>تحميل الصور</p>
                            <input
                            type="file"
                            multiple
                            />
                        </div>
                    </section>
                    <section className="unit-contract-image">
                        <h5>2- ادخل صورة لعقد الشقه</h5>
                        <div className="upload-container">
                            <FontAwesomeIcon icon={faImage}/>
                            <p>تحميل الصور</p>
                            <input
                            type="file"
                            multiple
                            />
                        </div>
                    </section>
                </div>
            </section>
        </>
    )
}
export default EnterUnitImages