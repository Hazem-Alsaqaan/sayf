import React, { memo, useCallback, useState } from "react";
import "./EnterUnitImages.css"
import NumberAndText from "../number.and.text/NumberAndText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faImage} from "@fortawesome/free-regular-svg-icons"

const EnterUnitImages = ({enterImages, setEnterImages})=>{
    const title = {
        number: "8",
        text: "الصور"
    }


    // handle upload contract img
    const handleUploadContract = useCallback((e)=>{
        const contractFile = e.target.files[0]
        const contractReader = new FileReader();
        contractReader.addEventListener("load", ()=>{
            setEnterImages({...enterImages, contractImage: contractReader.result})
        })
        contractReader.readAsDataURL(contractFile)
    },[])


    // const handleUploadUnitsImgs = useCallback((e)=>{
    //     const unitsFile = e.target.files[0]
    //     const unitsReader = new FileReader();
    //     unitsReader.addEventListener("load", ()=>{
    //         setEnterImages({...enterImages, unitImages: [...enterImages.unitImages, unitsReader.result]})
    //     })
    //     unitsReader.readAsDataURL(unitsFile)
    // },[])
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
                            onChange={(e)=>setUnitsFile(e.target.files)}
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
                            onChange={(e)=>handleUploadContract(e)}
                            />
                        </div>
                    </section>
                </div>
            </section>
        </>
    )
}
export default memo(EnterUnitImages)