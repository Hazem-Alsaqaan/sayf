import React, { memo, useState } from "react";
import "./SearchData.css"
import PersonsAndRoom from "../persons.and.room.number/PersonsAndRoom";
import Search from "../search/Search";
import SelectPrice from "../select.price/SelectPrice";
import { useNavigate } from "react-router-dom";
import { getAllUnits } from "../../redux/actions/unitsActions";
import { useDispatch, useSelector } from "react-redux";

const SearchData = ()=>{
    const[cityInSearch, setCityInSearch] = useState("")
    const [personsInSearch, setPersonsInSearch] = useState(0)
    const [childInSearch, setChildInSearch] = useState(0)
    const [roomsInSearch, setRoomsInSearch] = useState(0)
    const [minRang, setMinRang] = useState(0)
    const [maxRang, setMaxRang] = useState(0)

// const[startDate, setStartDate] = useState("")
// const[endDate, setEndDate] = useState("")

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {token} = useSelector((state)=>state.authSlice)

    const handleSearch = (e)=>{
        e.preventDefault()
        navigate("/search")
        dispatch(getAllUnits({
            token: token,
            city: cityInSearch,
            persons: personsInSearch,
            rooms: roomsInSearch,
            children: childInSearch,
            minimum_price: minRang,
            highest_price: maxRang,
        }))
        setCityInSearch("")
        setPersonsInSearch(0)
        setChildInSearch(0)
        setRoomsInSearch(0)
        setMinRang(0)
        setMaxRang(0)
    }
    return(
        <>
            <section className="search-data">
                <div className="container">
                    <form onSubmit={(e)=>handleSearch(e)}>
                        <div className="top-part">
                            <Search setCityInSearch = {setCityInSearch} cityInSearch = {cityInSearch}/>
                            <PersonsAndRoom
                            personsInSearch = {personsInSearch}
                            setPersonsInSearch = {setPersonsInSearch}
                            childInSearch = {childInSearch}
                            setChildInSearch = {setChildInSearch}
                            roomsInSearch = {roomsInSearch}
                            setRoomsInSearch = {setRoomsInSearch}
                            />
                        </div>
                        <div className="bottom-part">
                            <input
                            type="date"
                            placeholder="تاريخ الوصول"
                            // onChange={(e)=>setStartDate(e.target.value)}
                            />
                            <input
                            type="date"
                            placeholder="تاريخ المغادرة"
                            // onChange={(e)=>setEndDate(e.target.value)}
                            />
                            <SelectPrice
                            minRang={minRang}
                            setMinRang={setMinRang}
                            maxRang={maxRang}
                            setMaxRang={setMaxRang}
                            />
                            <button 
                            type="submit"
                            className="btn btn-primary"
                            >بحث</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}
export default memo(SearchData)