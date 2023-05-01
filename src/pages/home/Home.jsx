import React, { useState } from "react";
import "./Home.css"
import Header from "../../components/header/Header";
import SearchData from "../../components/search.data/SearchData";
import CitiesLocations from "../../components/cities.loctions/CitiesLocations";
import MostBookedApartments from "../../components/most.booked.apartments/MostBookedApartments";
import LatestApartments from "../../components/latest.apartments/LatestApartments";
import Footer from "../../components/footer/Footer";
import SearchResult from "../../components/search.result/SearchResult";

const Home =()=>{
    const [resultSearch, setResultSearch] = useState(false)

    const getSearchValue = (value)=>{
        setResultSearch(value)
    }
    
    return(
        <>
            <div className="home">
                <section className="home-page-landing">
                    <Header/>
                    <div className="container landing-content">
                        <SearchData getSearchValue = {getSearchValue}/>
                    </div>
                </section>
                {resultSearch ? <SearchResult/> : 
                <>
                    <CitiesLocations/>
                    <MostBookedApartments/>
                    <LatestApartments/>
                </>
                }
                
                <Footer/>
            </div>
        </>
    )
}
export default Home