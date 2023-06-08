import React, { memo } from "react";
import "./Home.css"
import Header from "../../components/header/Header";
import SearchData from "../../components/search.data/SearchData";
import Footer from "../../components/footer/Footer";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";


const Home =({pageNumber, setPageNumber})=>{
    return(
        <>
        <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                />
            <div className="home">
                <section className="home-page-landing">
                    <Header/>
                    <div className="container landing-content">
                        <SearchData pageNumber = {pageNumber} setPageNumber = {setPageNumber}/>
                    </div>
                </section>
                <Outlet/>
                <Footer/>
            </div>
        </>
    )
}
export default memo(Home)