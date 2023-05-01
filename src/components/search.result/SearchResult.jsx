import React, { useState } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowDownLong, faArrowUpLong} from "@fortawesome/free-solid-svg-icons"
import "./SearchResult.css"
import SortSearching from "../sort.searching/SortSearching";
import ResultSearchBoxes from "../result.search.boxes/ResultSearchBoxes";

const SearchResult = ()=>{
    const [toggleSearchSort, setToggleSearchSort] = useState(false)
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
                    <ResultSearchBoxes/>
                </div>
            </section>
        </>
    )
}
export default SearchResult