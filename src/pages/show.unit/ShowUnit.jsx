import React from "react";
import { useParams } from "react-router-dom";
import WhiteHeader from "../../components/white.header/WhiteHeader";
import "./ShowUnit.css"
import SpecificationsConditions from "../../components/specifications/SpecificationsConditions";
import Ratings from "../../components/Ratings/Ratings";
import VisitorsOpinions from "../../components/visitors.opinions/VisitorsOpinions";
import Footer from "../../components/footer/Footer";

const ShowUnit = ()=>{
    const {unitId} = useParams()
    return(
        <>
            <div className="show-unit">
                <WhiteHeader />
                    <h6>{`unit ${unitId}`}</h6>
                <div className="container">
                    <SpecificationsConditions/>
                    <Ratings/>
                    <VisitorsOpinions/>
                </div>
                <Footer/>
            </div>
        </>
    )
}
export default ShowUnit