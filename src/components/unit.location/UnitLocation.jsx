import React, { useEffect, useMemo } from "react";
import "./UintLocation.css"
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneUnit } from "../../redux/actions/unitsActions";
import {GoogleMap, Marker, useJsApiLoader} from "@react-google-maps/api"
import {RotatingLines} from "react-loader-spinner"


const libraries = ["places"]
const containerStyle = {
    width: "100%",
    height: '400px'
    };

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

    const center = useMemo(()=>({
        lat: 30.033333,
        lng: 31.233334
    }),[])
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: import.meta.env.VITE_SOME_KEY_GOOGLE_MAP_KEY,
        libraries: libraries
        })
    return(
        <>
            <div className="map-container">
            {!isLoaded ? 
                    <RotatingLines
                    strokeColor="#5500A1"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="96"
                    visible={true}
                    />
            :
                <GoogleMap
                center={{
                    lat: oneUnit?.location ? oneUnit?.location?.coordinates[0] : center?.lat,
                    lng: oneUnit?.location ? oneUnit?.location?.coordinates[1] : center?.lng
                }}
                zoom={10}
                mapContainerStyle={containerStyle}
                >
                    <Marker
                    position={{
                        lat: oneUnit?.location ? oneUnit.location.coordinates[0] : center.lat,
                        lng: oneUnit?.location ? oneUnit.location.coordinates[1] : center.lng,
                    }}
                    />
                </GoogleMap>
            }
            </div>
        </>
    )
}

export default UnitLocation