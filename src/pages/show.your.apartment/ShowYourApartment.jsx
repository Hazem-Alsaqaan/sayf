import React, { useState } from "react";
import WhiteHeader from "../../components/white.header/WhiteHeader";
import Footer from "../../components/footer/Footer";
import EnterUnitName from "../../components/enter.unit.name/EnterUnitName";
import "./ShowYourApartment.css"
import EnterUnitAdress from "../../components/enter.unit.adress/EnterUnitAdress";
import EnterUnitLocation from "../../components/enter.unit.location/EnterUnitLocation";
import EnterUnitDetails from "../../components/enter.unit.details/EnterUnitDetails";
import EnterUnitConditions from "../../components/enter.unit.conditions/EnterUnitConditions";
import EnterUnitPrice from "../../components/enter.unit.price/EnterUnitPrice";
import EnterAboutUnit from "../../components/enter.about.unit/EnterAboutUnit";
import EnterUnitImages from "../../components/enter.unit.images/EnterUnitImages";

const ShowYourApartment = ()=>{
    const [enterConditions, setEnterConditions] = useState("")
    const [enterAboutUnit, setEnterAboutUnit] = useState("")

    return(
        <>
        <section className="show-your-apartment single-section">
            <WhiteHeader/>
            <div className="container">
                <h1 className="main-title">اعرض شقتك عندنا</h1>
                <section className="enter-unit-information">
                    <form>
                        <EnterUnitName/>
                        <EnterUnitAdress/>
                        <EnterUnitLocation/>
                        <EnterUnitDetails/>
                        <EnterUnitConditions enterConditions={enterConditions} setEnterConditions={setEnterConditions}/>
                        <EnterUnitPrice/>
                        <EnterAboutUnit enterAboutUnit={enterAboutUnit} setEnterAboutUnit={setEnterAboutUnit}/>
                        <EnterUnitImages/>
                        <div className="btn-purple">
                            <button 
                            className="btn"
                            >اعرض شقتك
                            </button>
                    </div>
                    </form>
                </section>
            </div>
            <Footer/>
        </section>
        </>
    )
}
export default ShowYourApartment