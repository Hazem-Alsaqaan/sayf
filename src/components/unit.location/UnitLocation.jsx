import React, { useEffect } from "react";
import "./UintLocation.css"
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneUnit } from "../../redux/actions/unitsActions";

const UnitLocation = ()=>{
    const {unitId} = useParams()
    const {oneUnit} = useSelector((state)=>state.unitsSlice)
    const dispatch = useDispatch()
    const {token} = useSelector((state)=>state.authSlice)

    useEffect(()=>{
        const cleaner = ()=>{
            dispatch(getOneUnit({id:unitId, token: token}))
        }
        return()=> cleaner()
    },[])

    return(
        <>
            <div className="map-container">
                {/* <img src={oneUnit.image_url} alt=""/> */}
                <img src="https://res.cloudinary.com/dkhu7rt8n/image/upload/v1683028719/sayf/GoogleMap_bxdqvk.svg" alt=""/>
            </div>
        </>
    )
}

export default UnitLocation