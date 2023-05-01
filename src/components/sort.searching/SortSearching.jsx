import React from "react";
import "./SortSearching.css"

const SortSearching = ()=>{
    return(
        <>
            <section className="sort-searching">
                <form>
                    <h4>الترتيب حسب :</h4>
                    <div>
                        <label htmlFor="popular">الشعبية</label>
                        <input
                        type="radio"
                        id="popular" 
                        name="search-sort"
                        value="الشعبية"
                        />
                    </div>
                    <div>
                        <label htmlFor="top-star">{`تصنيف النجوم (الاعلى اولا)`}</label>
                        <input 
                        type="radio"
                        id="top-star"
                        name="search-sort"
                        value="تصنيف النجوم (الاعلى اولا)"
                        />
                    </div>
                    <div>
                        <label htmlFor="lowest-star">{`تصنيف النجوم (الاقل اولا)`}</label>
                        <input 
                        type="radio"
                        id="lowest-star"
                        name="search-sort"
                        value="تصنيف النجوم (الاقل اولا)"
                        />
                    </div>
                    <div>
                        <label htmlFor="top-price">{`السعر (الاعلى اولا)`}</label>
                        <input 
                        type="radio"
                        id="top-price"
                        name="search-sort"
                        value="السعر (الاعلى اولا)"
                        />
                    </div>
                    <div>
                        <label htmlFor="lowest-price">{`السعر (الاقل اولا)`}</label>
                        <input 
                        type="radio"
                        id="lowest-price"
                        name="search-sort"
                        value="السعر (الاقل اولا)"
                        />
                    </div>
                </form>
            </section>
        </>
    )
}
export default SortSearching