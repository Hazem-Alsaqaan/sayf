import React, { memo } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";


const RequireAuth = ({children})=>{
    const {user} = useSelector((state)=> state.authSlice)
    const location = useLocation()

    if(!user){
        return <Navigate to="/login" state={{path: location.pathname}} replace={true}/>
    }
    return children
    
}

export default memo(RequireAuth)