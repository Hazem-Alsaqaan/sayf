import React, { memo, useState } from "react";
import "./SearchData.css"
import PersonsAndRoom from "../persons.and.room.number/PersonsAndRoom";
import Search from "../search/Search";
import SelectPrice from "../select.price/SelectPrice";

const SearchData = ({getSearchValue})=>{
    
    let resultSearchData = true
    
    const handleSearchSubmit = (e)=>{
        e.preventDefault()
        getSearchValue(resultSearchData)
    }
    return(
        <>
            <section className="search-data">
                <div className="container">
                    <form onSubmit={(e)=>handleSearchSubmit(e)}>
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