import React, { useEffect, useState } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowDownLong, faArrowUpLong} from "@fortawesome/free-solid-svg-icons"
import "./SearchResult.css"
import SortSearching from "../sort.searching/SortSearching";
import { useDispatch, useSelector } from "react-redux";
import { getAllUnits } from "../../redux/actions/unitsActions";
import SingleSearchBox from "../single.search.box/SingleSearchBox";

const SearchResult = ()=>{
    const [toggleSearchSort, setToggleSearchSort] = useState(false)
    const dispatch = useDispatch()
    const {units} = useSelector((state)=>state.unitsSlice)
    
    useEffect(()=>{
        const cleaner = ()=>{
            dispatch(getAllUnits())
        }
        return()=> cleaner()
    },[])
    return(
        <>
            <section className="search-result">
                <div className="container">
                    <div className="top-side">
                        <h1>عثرنا على 100 شقة نتيجة بحثك</h1>
                        <div className = "sort-searching-container">
                            <div 
                            className="sort-by-icon"
                            onClick={()=>setToggleSearchSort(!toggleSearchSort)}
                            >
                                <FontAwesomeIcon icon={faArrowDownLong}/>
                                <FontAwesomeIcon icon={faArrowUpLong}/>
                            </div>
                            {
                                toggleSearchSort && <SortSearching/> 
                            }
                        </div>
                    </div>
                    <div className="result-search-boxes">
                        {
                            units.map((item)=>(
                                <SingleSearchBox key={item._id} item = {item}/>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
export default SearchResult