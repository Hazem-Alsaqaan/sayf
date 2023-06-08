import React, { memo } from "react";
import "./Search.css"
import { useDispatch, useSelector } from "react-redux";
import { setCityInSearch } from "../../redux/reducers/searchDataSlice";

const Search = ()=>{
    const dispatch = useDispatch()
    const {cityInSearch} = useSelector((state)=>state.searchDataSlice)
    return(
        <>
            <input
                className="search-form"
                type="search"
                placeholder="ادخل البلد التي تريد الحجز بها"
                onChange={(e)=>dispatch(setCityInSearch(e.target.value))}
                value={cityInSearch}
            />
        </>
    )
}
export default memo(Search)