import React, { memo, useEffect, useState } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowDownLong, faArrowUpLong} from "@fortawesome/free-solid-svg-icons"
import "./SearchResult.css"
import SortSearching from "../sort.searching/SortSearching";
import SingleSearchBox from "../single.search.box/SingleSearchBox";
import {RotatingLines} from "react-loader-spinner"
import { useSelector } from "react-redux";


const SearchResult = ()=>{
    const [toggleSearchSort, setToggleSearchSort] = useState(false)
    const {searchUnits} = useSelector((state)=>state.unitsSlice)
    const {isLoading} = useSelector((state)=>state.unitsSlice)
    

    
    return(
        <>
            <section className="search-result">
                <div className="container">
                    {isLoading ? 
                        <div className="loading">
                            <RotatingLines
                            strokeColor="#5500A1"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="96"
                            visible={true}
                            /> 
                        </div> 
                    :
                    <div> 
                    {!searchUnits.length > 0 ? <h1 className="not-found-units">لم يتم العثور على نتائج...</h1>
                    :    <div>
                            <div className="top-side">
                                <h1>عثرنا على {searchUnits.length} شقة نتيجة بحثك</h1>
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
                                {searchUnits.map((item)=>(
                                    <SingleSearchBox key={item?._id} item = {item}/>
                                    ))}
                            </div>
                        </div>
                    }
                    </div>
                    }
                </div>
            </section>
        </>
    )
}
export default memo(SearchResult)