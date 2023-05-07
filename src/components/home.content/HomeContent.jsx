import React from "react";
import CitiesLocations from "../cities.loctions/CitiesLocations";
import MostBookedApartments from "../most.booked.apartments/MostBookedApartments";
import LatestApartments from "../latest.apartments/LatestApartments";

const HomeContent = ()=>{
    return(
        <>
            <CitiesLocations/>
            <MostBookedApartments/>
            <LatestApartments/>
        </>
    )
}

export default HomeContent