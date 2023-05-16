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
        throw(err.response.data.errorMessage)
    }
})







// get most units bookings
export const getMostBookings = createAsyncThunk("units/getMostBookings", async()=>{
    try{
        const res = await axios.get(`https://saif-production-e995.up.railway.app/reservations/most-reserved`)
        const mapData =  res.data.map((item)=> item._id.house).map((item)=> item) 
        const finalResult = mapData.filter((item)=> item.length > 0)
        return finalResult
    }catch(err){
        throw(err.response.data.errorMessage)
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
        throw(err.response.data.errorMessage)
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
        // console.log(err)
        throw(err.response.data.errorMessage)
    }
})
// add to my favourites
export const addTMyFavourites = createAsyncThunk("units/addTMyFavourites", async(item)=>{
    try{
        const res = await axios.post(`https://saif-production-e995.up.railway.app/houses/make-favourite/${item.id}`, 
        {id: item.id},
        {
            headers: {
                Authorization: `bearer ${item.token}`
            }
        }
        )
        return res.data
    }catch(err){
        console.log(err)
        throw(err.response.data.errorMessage)
    }
})
// remove from my favourites
export const removeFromFavourites = createAsyncThunk("units/removeFromFavourites", async(item)=>{
    try{
        const res = await axios.post(`https://saif-production-e995.up.railway.app/houses/remove-favourite/${item.id}`,
        {id: item.id},
        {
            headers: {
                Authorization: `bearer ${item.token}`
            }
        })
        return res.data
    }catch(err){
        console.log(err)
        throw(err.response.data.errorMessage)
    }
})






// get one unit
export const getOneUnit = createAsyncThunk("units/getOneUnit", async(item)=>{
    try{
        const res = await axios.get(`https://saif-production-e995.up.railway.app/houses/${item.id}`, {
            headers: {
                Authorization: `bearer ${item.token}`
            }
        })
        return res.data
    }catch(err){
        throw(err.response.data.errorMessage)
    }
})
export const enterUnitData = createAsyncThunk("units/enterUnitData", async()=>{
    try{
        const res = await axios.post(``,
        {})
    }catch(err){
        console.log(err)
    }
})