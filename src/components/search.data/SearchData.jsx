import React, { memo, useState } from "react";
import "./SearchData.css"
import PersonsAndRoom from "../persons.and.room.number/PersonsAndRoom";
import Search from "../search/Search";
import SelectPrice from "../select.price/SelectPrice";
import { useNavigate } from "react-router-dom";
import { getAllUnits } from "../../redux/actions/unitsActions";
import { useDispatch, useSelector } from "react-redux";

const SearchData = ()=>{
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {token} = useSelector((state)=>state.authSlice)

    const handleSearch = (e)=>{
        e.preventDefault()
        navigate("/search")
        dispatch(getAllUnits(token))
    }
    return(
        <>
            <section className="search-data">
                <div className="container">
                    <form onSubmit={(e)=>handleSearch(e)}>
                        <div className="top-part">
                            <Search/>
                            <PersonsAndRoom/>
                        </div>
                        <div className="bottom-part">
                            <input
                            type="date"
                            placeholder="تاريخ الوصول"
                            />
                            <input
                            type="date"
                            placeholder="تاريخ المغادرة"
                            />
                            <SelectPrice/>
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