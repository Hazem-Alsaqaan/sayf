import React from "react";
import "./SearchData.css"
import PersonsAndRoom from "../persons.and.room.number/PersonsAndRoom";
import Search from "../search/Search";
import SelectPrice from "../select.price/SelectPrice";

const SearchData = ()=>{
    return(
        <>
            <section className="search-data">
                <div className="container">
                    <form>
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
export default SearchData