import React, { memo, useCallback, useEffect, useState } from "react";
import "./EnterUnitLocation.css"
import NumberAndText from "../number.and.text/NumberAndText";
import {GoogleMap, Marker, useJsApiLoader} from "@react-google-maps/api"
import {RotatingLines} from "react-loader-spinner"


    const containerStyle = {
    width: '400px',
    height: '400px'
    };
    
    const center = {
        lat: 30.033333,
        lng: 31.233334
    };
    const libraries = ["places"]
    
// component 
const EnterUnitLocation = ({enterLocation, setEnterLocation})=>{
    const title = {
        number: "3",
        text: "حدد موقع شقتك"
    }
    const [latitude, setLatitude] = useState(center.lat)
    const [longitude, setLongitude] = useState(center.lng)
    
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: import.meta.env.VITE_SOME_KEY_GOOGLE_MAP_KEY,
        libraries: libraries
    })
    const setLatAndLng = (e)=>{
        setLatitude(e.latLng.lat())
        setLongitude( e.latLng.lng())
    }

    const handleSelectValue = (e)=>{
        e.preventDefault()
        setEnterLocation({...enterLocation, 
            lat: latitude,
            long: longitude
        })
        console.log(enterLocation)
    }
    return(
        <>
            <section className="enter-unit-location single-section">
                <NumberAndText title = {title}/>
                <div className="select-location">
                {!isLoaded ? 
                    <RotatingLines
                    strokeColor="#5500A1"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="96"
                    visible={true}
                    />
                :  
                <>
                    
                    <GoogleMap
                    mapContainerStyle={containerStyle}
                    options={{
                        center: center,
                        zoom: 10
                    }}
                    onClick={(e)=>setLatAndLng(e)}
                    >
                        <Marker
                            position={{
                                lat: latitude ? latitude : center.lat,
                                lng: longitude ? longitude : center.lng
                            }}
                            />
                    </GoogleMap>
                    <button
                    className="btn btn-primary"
                    onClick={(e)=>handleSelectValue(e)}
                    >تحديد</button>
                </>
                }
                </div>
            </section>
            </>
    )
}
export default memo(EnterUnitLocation)