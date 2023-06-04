import React, { memo, useEffect, useMemo } from "react";
import "./UintLocation.css"
import {GoogleMap, Marker, useJsApiLoader} from "@react-google-maps/api"
import {RotatingLines} from "react-loader-spinner"
import { useDispatch, useSelector } from "react-redux";
import { getOneUnit } from "../../redux/actions/unitsActions";
import { useParams } from "react-router-dom";


const libraries = ["places"]
const containerStyle = {
    width: "100%",
    height: '400px'
    };

const UnitLocation = ()=>{
    const {oneUnit} = useSelector((state)=>state.unitsSlice)
    const {token} = useSelector((state)=>state.authSlice)
    const {unitId} = useParams()
    const dispatch = useDispatch()
    const librariesRef = React.useRef(libraries)

    const center = useMemo(()=>({
        lat: oneUnit?.location?.coordinates[0],
        lng: oneUnit?.location?.coordinates[1]
    }),[])
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: import.meta.env.VITE_SOME_KEY_GOOGLE_MAP_KEY,
        id: 'google-map-script',
        libraries: librariesRef.current
        })


    useEffect(()=>{
        const cleaner = ()=>{
            dispatch(getOneUnit({id:unitId, token: token}))
        }
        return()=> cleaner()
    },[])
        // console.log(center)
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
                options={{
                    center: {
                        lat: center.lat, 
                        lng: center.lng
                    },
                    zoom: 8
                }}
                mapContainerStyle={containerStyle}
                >
                    <Marker
                    key={Math.random(center.lat)}
                    position={{
                        lat: center.lat,
                        lng: center.lng 
                    }}
                    />
                </GoogleMap>
            }
            </div>
        </>
    )
}

export default UnitLocation