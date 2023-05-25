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
import { useDispatch, useSelector } from "react-redux";
import EnterPersonsChildren from "../../components/enter.persons.children/EnterPersonsChildren";
import { addNewUnit } from "../../redux/actions/unitsActions";
import {ToastContainer } from "react-toastify"


const ShowYourApartment = ()=>{
    const dispatch = useDispatch()
    const {token} = useSelector((state)=>state.authSlice)
    const {errorAddNew} = useSelector((state)=>state.unitsSlice)
    const [enterName, setEnterName] = useState("")
    const [enterAdress, setEnterAdress] = useState({
        city: "",
        street: "",
        houseNum: "",
        zibCode: ""
    })
    const [enterLocation, setEnterLocation] = useState({
        lat: "",
        long: ""
    })
    const [enterDetails, setEnterDetails] = useState({
        rooms: "",
        beds: "",
        bathrooms : "",
        apartment_area: ""
    })
    const [enterConditions, setEnterConditions] = useState("")
    const [enterAboutUnit, setEnterAboutUnit] = useState("")
    const [enterPrice, setEnterPrice] = useState("")
    const [enterPersons, setEnterPersons] = useState({
        personNum: "",
        childrenNum: ""
    })
    const [enterImages, setEnterImages] = useState({
        unitImages: [],
        contractImage: null
    })

    const unitInfo = {
        images: enterImages.unitImages,
        contractImage: enterImages.contractImage,
        name: enterName,
        city: enterAdress.city,
        street: enterAdress.street,
        house_num: enterAdress.houseNum,
        code: enterAdress.zibCode,
        conditions: enterConditions,
        rooms: Number(enterDetails.rooms),
        persons: Number(enterPersons.personNum),
        children: Number(enterPersons.childrenNum),
        beds: enterDetails.beds,
        bathrooms: enterDetails.bathrooms,
        apartment_area: enterDetails.apartment_area,
        description: enterAboutUnit,
        price: Number(enterPrice),
        about: enterAboutUnit,
        lat: Number(enterLocation.lat),
        long: Number(enterLocation.long),
        token: token
    }
    
//handle submit unit data and information function 
    const handleSubmitUnitData = (e)=>{
        e.preventDefault()

        // // dispatch add new units
        dispatch(addNewUnit(unitInfo))
        // rest all inputs values
        setEnterName("")
        setEnterAdress({...enterAdress, 
            city: "",
            street: "",
            houseNum: "",
            zibCode: ""
        })
        setEnterDetails({...enterDetails,
            rooms: "",
            beds: "",
            bathrooms : "",
            apartment_area: ""
        })
        setEnterConditions("")
        setEnterAboutUnit("")
        setEnterPrice("")
        setEnterPersons({
            personNum: "",
            childrenNum: ""
        })
    }
    return(
        <>
        { errorAddNew ? 
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
                        /> : ""}
        <section className="show-your-apartment single-section">
            <WhiteHeader/>
            <div className="container">
                <h1 className="main-title">اعرض شقتك عندنا</h1>
                <section className="enter-unit-information">
                    <form onSubmit={(e)=>handleSubmitUnitData(e)}>
                        <EnterUnitName enterName={enterName} setEnterName={setEnterName}/>
                        <EnterUnitAdress enterAdress={enterAdress} setEnterAdress={setEnterAdress}/>
                        <EnterUnitLocation enterLocation={enterLocation} setEnterLocation={setEnterLocation}/>
                        <EnterUnitDetails enterDetails ={enterDetails} setEnterDetails ={setEnterDetails}/>
                        <EnterUnitConditions enterConditions={enterConditions} setEnterConditions={setEnterConditions}/>
                        <EnterUnitPrice enterPrice ={enterPrice} setEnterPrice ={setEnterPrice}/>
                        <EnterAboutUnit enterAboutUnit={enterAboutUnit} setEnterAboutUnit={setEnterAboutUnit}/>
                        <EnterUnitImages enterImages ={enterImages} setEnterImages ={setEnterImages}/>
                        <EnterPersonsChildren enterPersons ={enterPersons} setEnterPersons ={setEnterPersons}/>
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


