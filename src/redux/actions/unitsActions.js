import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

//get all units
export const getAllUnits = createAsyncThunk("units/getAllUnits", async(token)=>{
    try{
        const res = await axios.get(`https://saif-production-e995.up.railway.app/houses?page=1&limit=8&allowPagination=true`, {
            headers: {
                Authorization: `bearer ${token}`
            }
        })
        return res.data.docs
    }catch(err){
        console.log(err)
    }
})
// get most units bookings
export const getMostBookings = createAsyncThunk("units/getMostBookings", async(token)=>{
    try{
        const res = await axios.get(`https://saif-production-e995.up.railway.app/reservations/most-reserved`, {
            headers: {
                Authorization: `bearer ${token}`
            }
        })
        return res.data
    }catch(err){
        console.log(err)
    }
})
//get my bookings
export const getMyBooking = createAsyncThunk("units/getMyBooking", async(token)=>{
    try{
        const res = await axios.get(`https://saif-production-e995.up.railway.app/reservations/my-reservations
        `, {
            headers: {
                Authorization: `bearer ${token}`
            }
        })
        return res.data
    }catch(err){
        console.log(err)
    }
})
// get my favourites
export const getMyFavourites = createAsyncThunk("units/getMyFavourites", async(token)=>{
    try{
        const res = await axios.get(`https://saif-production-e995.up.railway.app/houses/myFavourites`, {
            headers: {
                Authorization: `bearer ${token}`
            }
        })
        return res.data
    }catch(err){
        console.log(err)
    }
})





export const getOneUnit = createAsyncThunk("units/getOneUnit", async(item)=>{
    try{
        const res = await axios.get(`https://saif-production-e995.up.railway.app/houses/${item.id}`, {
            headers: {
                Authorization: `bearer ${item.token}`
            }
        })
        return res.data
    }catch(err){
        console.log(err)
    }
})