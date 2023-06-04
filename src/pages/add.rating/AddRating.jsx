import React, { useEffect, useState } from "react";
import SingleSearchBox from "../../components/single.search.box/SingleSearchBox";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneUnit } from "../../redux/actions/unitsActions";
import WhiteHeader from "../../components/white.header/WhiteHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./AddRating.css"
import axios from "axios";
import { RotatingLines } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import Footer from "../../components/footer/Footer"

const AddRating = ()=>{
    const [cleanPlace, setCleanPlace] = useState(0)
    const [servicePlace, setServicePlace] = useState(0)
    const [matchingInformation, setMatchingInformation] = useState(0)
    const [statusPlace, setStatusPlace] = useState(0)
    const [writeRating, setWriteRating] = useState("")

    const [render, setRender] = useState(false)
    const {unitId} = useParams()
    const dispatch = useDispatch()
    const {oneUnit} = useSelector((state)=>state.unitsSlice)
    const {oneUnitLoading} = useSelector((state)=>state.unitsSlice)
    const {token} = useSelector((state)=>state.authSlice)

    useEffect(()=>{
        setRender(true)
        const cleaner = ()=>{
            dispatch(getOneUnit({id:unitId, token: token}))
        }
        return()=> cleaner()
    },[render])

    // calculate total rating
    const collectionResult = matchingInformation + cleanPlace + servicePlace + statusPlace
    const resultInPercentage = collectionResult / 20 * 100
    const totalRating = resultInPercentage / 20
//  handle add rating
const handleSubmitRating = async()=>{
    try{
        const res = await axios.post(`https://nestjs-now-saif3-osamakamelmohamed6-gmailcom.vercel.app/houses/rate/${unitId}`,
        {
            rating: totalRating,
            ratingInfo: matchingInformation,
            ratingClean: cleanPlace,
            ratingService: servicePlace,
            ratingCondition: statusPlace,
            feedback: writeRating
        },
        {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        toast.success("تم إضافة تقييمك")
    }catch(err){
        if(err.message === "Network Error"){
            toast.error("تأكد من اتصالك بالانترنت")
        }else if(err.response.data.errorMessage){
            toast.error(err.response.data.errorMessage)
        }
        throw(err.response.data.errorMessage)
    }
}

    return(
        <>
        <div className="add-rating">
            <WhiteHeader/>
            <div className="add-rating-body container">
                {
                    oneUnitLoading ? 
                    <RotatingLines
                    strokeColor="#5500A1"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="96"
                    visible={true}
                    />
                :
                <SingleSearchBox item={oneUnit}/>
                }
                <section className="user-add-rating">
                    <div className="user-rate-content">
                        <p>نظافة المكان</p>
                        <span>
                            <FontAwesomeIcon icon={faStar} onClick={()=>setCleanPlace(1)} style={cleanPlace > 0 ? {color: "#5500A1"} : {color: "#ccc"}}/>
                            <FontAwesomeIcon icon={faStar} onClick={()=>setCleanPlace(2)} style={cleanPlace > 1 ? {color: "#5500A1"} : {color: "#ccc"}}/>
                            <FontAwesomeIcon icon={faStar} onClick={()=>setCleanPlace(3)} style={cleanPlace > 2 ? {color: "#5500A1"} : {color: "#ccc"}}/>
                            <FontAwesomeIcon icon={faStar} onClick={()=>setCleanPlace(4)} style={cleanPlace > 3 ? {color: "#5500A1"} : {color: "#ccc"}}/>
                            <FontAwesomeIcon icon={faStar} onClick={()=>setCleanPlace(5)} style={cleanPlace > 4 ? {color: "#5500A1"} : {color: "#ccc"}}/>
                        </span>
                    </div>
                    <div className="user-rate-content">
                        <p>الخدمة والاستقبال</p>
                        <span>
                            <FontAwesomeIcon icon={faStar} onClick={()=>setServicePlace(1)} style={servicePlace > 0 ? {color: "#5500A1"} : {color: "#ccc"}} />
                            <FontAwesomeIcon icon={faStar} onClick={()=>setServicePlace(2)} style={servicePlace > 1 ? {color: "#5500A1"} : {color: "#ccc"}}/>
                            <FontAwesomeIcon icon={faStar} onClick={()=>setServicePlace(3)} style={servicePlace > 2 ? {color: "#5500A1"} : {color: "#ccc"}}/>
                            <FontAwesomeIcon icon={faStar} onClick={()=>setServicePlace(4)} style={servicePlace > 3 ? {color: "#5500A1"} : {color: "#ccc"}}/>
                            <FontAwesomeIcon icon={faStar} onClick={()=>setServicePlace(5)} style={servicePlace > 4 ? {color: "#5500A1"} : {color: "#ccc"}}/>
                        </span>
                    </div>
                    <div className="user-rate-content">
                        <p>مطابقة المعلومات</p>
                        <span>
                            <FontAwesomeIcon icon={faStar} onClick={()=>setMatchingInformation(1)} style={matchingInformation > 0 ? {color: "#5500A1"} : {color: "#ccc"}}/>
                            <FontAwesomeIcon icon={faStar} onClick={()=>setMatchingInformation(2)} style={matchingInformation > 1 ? {color: "#5500A1"} : {color: "#ccc"}}/>
                            <FontAwesomeIcon icon={faStar} onClick={()=>setMatchingInformation(3)} style={matchingInformation > 2 ? {color: "#5500A1"} : {color: "#ccc"}}/>
                            <FontAwesomeIcon icon={faStar} onClick={()=>setMatchingInformation(4)} style={matchingInformation > 3 ? {color: "#5500A1"} : {color: "#ccc"}}/>
                            <FontAwesomeIcon icon={faStar} onClick={()=>setMatchingInformation(5)} style={matchingInformation > 4 ? {color: "#5500A1"} : {color: "#ccc"}}/>
                        </span>
                    </div>
                    <div className="user-rate-content">
                        <p>حالة المكان</p>
                        <span>
                            <FontAwesomeIcon icon={faStar} onClick={()=>setStatusPlace(1)} style={statusPlace > 0 ? {color: "#5500A1"} : {color: "#ccc"}}/>
                            <FontAwesomeIcon icon={faStar} onClick={()=>setStatusPlace(2)} style={statusPlace > 1 ? {color: "#5500A1"} : {color: "#ccc"}}/>
                            <FontAwesomeIcon icon={faStar} onClick={()=>setStatusPlace(3)} style={statusPlace > 2 ? {color: "#5500A1"} : {color: "#ccc"}}/>
                            <FontAwesomeIcon icon={faStar} onClick={()=>setStatusPlace(4)} style={statusPlace > 3 ? {color: "#5500A1"} : {color: "#ccc"}}/>
                            <FontAwesomeIcon icon={faStar} onClick={()=>setStatusPlace(5)} style={statusPlace > 4 ? {color: "#5500A1"} : {color: "#ccc"}}/>
                        </span>
                    </div>
                    <div className="write-rating">
                        <p>قم بكتابة تقييمك</p>
                        <textarea
                        placeholder="قم بكتابة تقييمك"
                        onChange={(e)=>setWriteRating(e.target.value)}
                        value={writeRating}
                        />
                    </div>
                    <div  className="btn btn-purple">
                        <button onClick={handleSubmitRating} >تـــــم</button>
                    </div>
                </section>
            </div>
            <Footer/>
        </div>
        <ToastContainer
                        position="top-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                        />
        </>
        )
    }
    
    export default AddRating