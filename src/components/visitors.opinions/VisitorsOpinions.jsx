import React, { memo, useEffect, useState } from "react";
import "./VisitorsOpinions.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {RotatingLines} from "react-loader-spinner"


const VisitorsOpinions = ({oneUnit})=>{
    const {unitId} = useParams()
    const {token} = useSelector((state)=> state.authSlice)
    const [usersOpinion, setUsersOpinion] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(()=>{
        setIsLoading(true)
        const cleaner = async()=>{
            try{
                const res = await axios.get(`https://nestjs-now-saif3-osamakamelmohamed6-gmailcom.vercel.app/houses/rates/${unitId}?page=1&limit=8&allowPagination=true`,
                {
                    headers: {
                        Authorization: `bearer ${token}`
                    }
                })
                setIsLoading(false)
                setUsersOpinion(res.data.docs)
            }catch(err){
                setIsLoading(false)
                console.log(err)
            }
        }
        return()=> cleaner()
    },[])
    return(
        <>
        {isLoading ? <RotatingLines
                            strokeColor="#5500A1"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="96"
                            visible={true}
                            />:
            <section className="visitors-opinions">
                <div className="top-side">
                    <h2>آراء الزوار</h2>
                    <span>
                        <FontAwesomeIcon icon={faStar}/>
                        <p>{`${oneUnit.rating ? oneUnit.rating.toFixed(1) : 0} (${usersOpinion.length} تقييم)`}</p>
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
