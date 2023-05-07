import React, { useEffect } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./MyFavourite.css"
import ApartmentBox from "../../components/apartment.box/ApartmentBox";
import { useDispatch, useSelector } from "react-redux";
import { getMyFavourites } from "../../redux/actions/unitsActions";

const MyFavourite = ()=>{
    const dispatch = useDispatch()
    const {token} = useSelector((state)=> state.authSlice)
    const {units} = useSelector((state)=>state.unitsSlice)
    const {isLoading} = useSelector((state)=>state.unitsSlice)

    useEffect(()=>{
        const cleaner = ()=>{
            dispatch(getMyFavourites(token))
        }
        return()=> cleaner()
    },[])

    return(
        <>
            <div className="favourite">
                <section className="favourite-page-landing">
                    <Header/>
                    <div className="container landing-content">
                        <h1>مفضلتي</h1>
                    </div>
                </section>
                {isLoading ? <h1>يتم التحميل...</h1> :
                <>
                    {
                    !units ? <h1>لم يتم العثور على وحدات...</h1> :
                    <div className="boxes-container container">
                            {
                                units.map((item)=>
                                    Object.keys(item).length > 0 && <ApartmentBox key={item._id} item={item}/>
                                )
                                }
                    </div>
                    }
                </> 
                }
                <Footer/>
            </div>
        </>
    )
}
export default MyFavourite