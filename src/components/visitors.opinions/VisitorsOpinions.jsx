import React, { memo, useEffect, useState } from "react";
import "./VisitorsOpinions.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {RotatingLines} from "react-loader-spinner"
import { getUsersOpinion } from "../../redux/actions/unitsActions";


const VisitorsOpinions = ({oneUnit})=>{
    const dispatch = useDispatch()
    const {unitId} = useParams()
    const {token} = useSelector((state)=> state.authSlice)
    const [renderOpinion, setRenderOpinion] = useState(false)
    const {usersOpinionLoading} = useSelector((state)=>state.unitsSlice)
    const {usersOpinion} = useSelector((state)=>state.unitsSlice)
    useEffect(()=>{
        setRenderOpinion(true)
        const cleanerUsersOpinion = ()=>{
            dispatch(getUsersOpinion({id: unitId, token: token}))
        }
        return()=> cleanerUsersOpinion()
    },[renderOpinion])

    return(
        <>
        {usersOpinionLoading ? 
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
            <section className="visitors-opinions">
                <div className="top-side">
                    <h2>آراء الزوار</h2>
                    <span>
                        <FontAwesomeIcon icon={faStar}/>
                        <p>{`${oneUnit.raters ? oneUnit.rating.toFixed(1) : 0} (${usersOpinion.length} تقييم)`}</p>
                    </span>
                </div>
                <div className="bottom-side">
                    {
                        usersOpinion.map((item)=>
                            <div key={item._id} className="opinion-single-box">
                                <div className="up-side">
                                    <h6>{item.user.username}</h6>
                                    <h5>{item.rating.toFixed(1)}</h5>
                                </div>
                                <p className="date">{item.createdAt}</p>
                                {/* <p className="date">{`${new Date(item.createdAt).getDate()} - ${new Date(usersOpinion[0].createdAt).getMonth()+1} - ${new Date(usersOpinion[0].createdAt).getFullYear()}`}</p> */}
                                <p className="description">{item.feedback}</p>
                            </div>
                        )
                    }
                </div>
            </section>
            }
        </>
    )
}
export default memo(VisitorsOpinions)
