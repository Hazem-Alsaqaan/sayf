import React, { memo, useEffect, useMemo, useState } from "react";
import "./EnterUnitLocation.css"
import NumberAndText from "../number.and.text/NumberAndText";
import {Circle, GoogleMap, Marker, useJsApiLoader} from "@react-google-maps/api"
import {RotatingLines} from "react-loader-spinner"
import GooglePlacesAutocomplete  from "react-google-places-autocomplete"
import {geocodeByAddress, getLatLng}  from "react-google-places-autocomplete"

    const containerStyle = {
    width: "300px",
    height: "300px"
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
    const librariesRef = React.useRef(libraries)
    const { isLoaded } = useJsApiLoader({
            googleMapsApiKey: import.meta.env.VITE_SOME_KEY_GOOGLE_MAP_KEY,
            id: 'google-map-script',
            libraries:  librariesRef.current
        })
    
    const handleOnDragEnd = (e)=>{
        setLatitude(e.latLng.lat)
        setLongitude(e.latLng.lng)
    }
    const handleSelectValue = (e)=>{
        e.preventDefault()
        setEnterLocation({...enterLocation, 
            lat: latitude,
            long: longitude
        })
    }
    const [mapZoom, setMapZoom] = useState(10)
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
                    <GooglePlacesAutocomplete
                            selectProps={{
                                placeholder: "ابحث عن المكان", 
                                onChange : (e)=>geocodeByAddress(e.label).then((result)=>getLatLng(result[0])
                                .then(({ lat, lng }) =>{
                                setLatitude(lat)
                                setLongitude(lng)
                            }
                                ))
                            }}
                            apiKey={import.meta.env.VITE_SOME_KEY_GOOGLE_MAP_KEY}
                            />
                    <GoogleMap
                    mapContainerStyle={containerStyle}
                    options={{
                        center: {
                            lat: latitude, 
                            lng: longitude
                        },
                        zoom: mapZoom
                    }}
                    onCenterChanged={()=>setMapZoom(15)}
                    >
                        <Marker
                            key={Math.random(latitude)}
                            position={{
                                lat: latitude || center.lat,
                                lng: longitude || center.lng
                            }}
                            draggable={true}
                            onDragEnd={(e)=>handleOnDragEnd(e)}
                            />
                            <Circle
                            center={{
                                lat:latitude,
                                lng:longitude
                            }}
                            radius={1000}
                            />
                            
                    </GoogleMap>
                    <button
                    className="btn-map-selection"
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