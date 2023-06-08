import React, { memo, useState } from "react";
import "./SortSearching.css"
import {useDispatch, useSelector} from "react-redux"
import { getUnitsSearchDescription } from "../../redux/actions/unitsActions";

const SortSearching = ({setToggleSearchSort, pageNumber})=>{
    const dispatch = useDispatch()
    const [popularity, setPopularity] = useState(false)
    const [mostRated, setMostRated] = useState(false)
    const [minmumRated, setMinmumRated] = useState(false)
    const [heighestPrice, setHeighestPrice] = useState(false)
    const [minimumPrice, setMinimumPrice] = useState(false)
    const {token} = useSelector((state)=>state.authSlice)

    const sortSearchByDescription =(e)=>{
        e.preventDefault()
        dispatch(getUnitsSearchDescription({
            popularity: popularity,
            mostRated: mostRated,
            minmumRated: minmumRated,
            heighestPrice: heighestPrice,
            minimumPrice: minimumPrice,
            page: pageNumber,
            token: token
        }))
        setToggleSearchSort(false)
    }

    return(
        <>
            <section className="sort-searching">
                <form>
                    <h4>الترتيب حسب :</h4>
                    <div>
                        <label htmlFor="popular">الشعبية</label>
                        <input
                        type="checkbox"
                        id="popular" 
                        name="search-sort"
                        value= {popularity}
                        onClick={()=>setPopularity(!popularity)}
                        />
                    </div>
                    <div>
                        <label htmlFor="top-star">{`تصنيف النجوم (الاعلى اولا)`}</label>
                        <input 
                        type="checkbox"
                        id="top-star"
                        name="search-sort"
                        value={mostRated}
                        onClick={()=>setMostRated(!mostRated)}
                        />
                    </div>
                    <div>
                        <label htmlFor="lowest-star">{`تصنيف النجوم (الاقل اولا)`}</label>
                        <input 
                        type="checkbox"
                        id="lowest-star"
                        name="search-sort"
                        value={minmumRated}
                        onClick={()=>setMinmumRated(!minmumRated)}
                        />
                    </div>
                    <div>
                        <label htmlFor="top-price">{`السعر (الاعلى اولا)`}</label>
                        <input 
                        type="checkbox"
                        id="top-price"
                        name="search-sort"
                        value={heighestPrice}
                        onClick={()=>setHeighestPrice(!heighestPrice)}
                        />
                    </div>
                    <div>
                        <label htmlFor="lowest-price">{`السعر (الاقل اولا)`}</label>
                        <input 
                        type="checkbox"
                        id="lowest-price"
                        name="search-sort"
                        value={minimumPrice}
                        onClick={()=>setMinimumPrice(!minimumPrice)}
                        />
                    </div>
                    <button className="btn btn-warning"
                    onClick={(e)=>sortSearchByDescription(e)}
                    >تم</button>
                </form>
            </section>
        </>
    )
}
export default memo(SortSearching)