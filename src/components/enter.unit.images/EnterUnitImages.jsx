import React, { memo } from "react";
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
    const handleUploadContract = (e)=>{
        setEnterImages({...enterImages, contractImage: e.target.files[0]})
        // const contractFile = e.target.files[0]
        // const contractReader = new FileReader();
        // contractReader.addEventListener("load", ()=>{
        //     setEnterImages({...enterImages, contractImage: contractReader.result})
        // })
        // contractReader.readAsDataURL(contractFile)
    }

    
    const handleUploadUnitsImgs = (e)=>{
        setEnterImages({...enterImages, unitImages: e.target.files})
        // const unitsFile = e.target.files[0]
        // const unitsReader = new FileReader();
        // unitsReader.addEventListener("load", ()=>{
        //     setEnterImages({...enterImages, unitImages: [...enterImages.unitImages, unitsReader.result]})
        // })
        // unitsReader.readAsDataURL(unitsFile)
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
                            onChange={(e)=>handleUploadUnitsImgs(e)}
                            />
                        </div>
                        {/* <div className="mt-3">
                        {enterImages.unitImages[0] && <img className="m-1" src={enterImages.unitImages[0]?enterImages.unitImages[0]:"failed"} alt="not found" width={100} height={60}/>}
                        {enterImages.unitImages[1] && <img className="m-1" src={enterImages.unitImages[1]?enterImages.unitImages[1]:"failed"} alt="not found" width={100} height={60}/>}
                        {enterImages.unitImages[2] && <img className="m-1" src={enterImages.unitImages[2]?enterImages.unitImages[2]:"failed"} alt="not found" width={100} height={60}/>}
                        {enterImages.unitImages[3] && <img className="m-1" src={enterImages.unitImages[3]?enterImages.unitImages[3]:"failed"} alt="not found" width={100} height={60}/>}
                        </div> */}
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
                        {/* <>
                        {enterImages.contractImage && <img className="mt-3" src={enterImages.contractImage?enterImages.contractImage:"failed"} alt="not found" width={80} height={120}/>}
                        </> */}
                    </section>
                </div>
            </section>
        </>
    )
}
export default memo(EnterUnitImages)