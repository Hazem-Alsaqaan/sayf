import React from "react";
import "./Home.css"
import Header from "../../components/header/Header";
import SearchData from "../../components/search.data/SearchData";
import CitiesLocations from "../../components/cities.loctions/CitiesLocations";
import MostBookedApartments from "../../components/most.booked.apartments/MostBookedApartments";
import LatestApartments from "../../components/latest.apartments/LatestApartments";
import Footer from "../../components/footer/Footer";

const Home =()=>{
    return(
        <>
            <div className="home">
                <section className="home home-page-landing">
                    <Header/>
                    <div className="container landing-content">
                        <SearchData/>
                    </div>
                </section>
                <CitiesLocations/>
                <MostBookedApartments/>
                <LatestApartments/>
                <Footer/>
            </div>
        </>
    )
}
export default Home