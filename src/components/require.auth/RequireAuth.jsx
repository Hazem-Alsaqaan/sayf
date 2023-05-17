import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";


const RequireAuth = ({children})=>{
    const {user} = useSelector((state)=> state.authSlice)
    const location = useLocation()

    if(!user){
        return <Navigate to="/login" state={{path: location.pathname}}/>
    }
    return(
        <>
        {children}
        </>
    )
}

export default RequireAuth