import React from "react";
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
const EnterUnitLocation = ()=>{
    const title = {
        number: "3",
        text: "حدد موقع شقتك"
    }
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: import.meta.env.VITE_SOME_KEY_GOOGLE_MAP_KEY,
        libraries: libraries
        })
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
                    <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                    >
                        <Marker
                        position={center}
                        />
                    </GoogleMap>
                }
                    {/* <img src="https://res.cloudinary.com/dkhu7rt8n/image/upload/v1683028719/sayf/GoogleMap_bxdqvk.svg" alt=""/> */}
                </div>
            </section>
        </>
    )
}
export default EnterUnitLocation