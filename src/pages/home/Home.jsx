import React, { useState } from "react";
import "./Home.css"
import Header from "../../components/header/Header";
import SearchData from "../../components/search.data/SearchData";
import Footer from "../../components/footer/Footer";
import { Outlet } from "react-router-dom";

const Home =()=>{
    return(
        <>
            <div className="home">
                <section className="home-page-landing">
                    <Header/>
                    <div className="container landing-content">
                        <SearchData/>
                    </div>
                </section>
                <Outlet/>
                <Footer/>
            </div>
        </>
    )
}
export default Home