import React, { memo, useEffect, useState } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowDownLong, faArrowUpLong} from "@fortawesome/free-solid-svg-icons"
import "./SearchResult.css"
import SortSearching from "../sort.searching/SortSearching";
import SingleSearchBox from "../single.search.box/SingleSearchBox";
import {RotatingLines} from "react-loader-spinner"
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate"
import { getAllUnits } from "../../redux/actions/unitsActions";


const SearchResult = ({setPageNumber, pageNumber})=>{
    const dispatch = useDispatch()
    const {cityInSearch} = useSelector((state)=>state.searchDataSlice)
    const {personsInSearch} = useSelector((state)=>state.searchDataSlice)
    const {childInSearch} = useSelector((state)=>state.searchDataSlice)
    const {roomsInSearch} = useSelector((state)=>state.searchDataSlice)
    const {minRang} = useSelector((state)=>state.searchDataSlice)
    const {maxRang} = useSelector((state)=>state.searchDataSlice)

    const [toggleSearchSort, setToggleSearchSort] = useState(false)
    const {searchUnits} = useSelector((state)=>state.unitsSlice)
    const {searchUnitsLoading} = useSelector((state)=>state.unitsSlice)
    const {token} = useSelector((state)=>state.authSlice)
    const {user} = useSelector((state)=>state.authSlice)


    let pageCount = 500;
    
    let handlePageClick = (data)=>{
        setPageNumber(data.selected + 1)
        dispatch(getAllUnits({
            token: token,
            city: cityInSearch,
            persons: personsInSearch,
            rooms: roomsInSearch,
            children: childInSearch,
            minimum_price: minRang,
            highest_price: maxRang,
            page: data.selected + 1
        }))
    }
    if(!user){
        return(
            <section className="search-result">
                <div className="container">
                <h1 className="not-found-units">من فضلك سجل دخول اولا حتى تعثر على نتائج ...</h1>
                </div>
            </section>
        )
    }
    return(
        <>
            <section className="search-result">
                <div className="container">
                    {searchUnitsLoading ? 
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
                                        toggleSearchSort && <SortSearching setToggleSearchSort = {setToggleSearchSort} pageNumber = {pageNumber}/> 
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
                    <div className="container-paginate">
                        <ReactPaginate
                            breakLabel="..."
                            nextLabel="next >"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={2}
                            pageCount={pageCount}
                            previousLabel="< previous"
                            renderOnZeroPageCount={null}
                            containerClassName = "pagination"
                            pageClassName="page-item"
                            pageLinkClassName="page-link"
                            previousClassName="page-item"
                            previousLinkClassName="page-link"
                            nextClassName="page-item"
                            nextLinkClassName="page-link"
                            breakClassName="page-item"
                            breakLinkClassName="page-link"
                            activeLinkClassName="active"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}
export default memo(SearchResult)