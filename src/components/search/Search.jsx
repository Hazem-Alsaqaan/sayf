import React, { memo } from "react";
import "./Search.css"

const Search = ({cityInSearch, setCityInSearch})=>{
    return(
        <>
            <input
                className="search-form"
                type="search"
                placeholder="ادخل البلد التي تريد الحجز بها"
                onChange={(e)=>setCityInSearch(e.target.value)}
                value={cityInSearch}
            />
        </>
    )
}
export default memo(Search)