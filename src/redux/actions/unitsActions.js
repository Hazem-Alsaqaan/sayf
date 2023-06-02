import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"
import {toast} from "react-toastify"

//get all units page 1
export const getAllUnits = createAsyncThunk("units/getAllUnits", async(token)=>{
    try{
        const res = await axios.get(`https://nestjs-now-saif3-e59v8g2z9-osamakamelmohamed6-gmailcom.vercel.app/houses?page=1&limit=8&allowPagination=true`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return res.data.docs
    }catch(err){
        if(err.message === "Network Error"){
            toast.error("تأكد من اتصالك بالانترنت")
        }else if(err.response.data.errorMessage){
            toast.error(err.response.data.errorMessage)
        }
        throw(err.response.data.errorMessage)
    }
})

//get all units on other pages
export const getUnitsPages = createAsyncThunk("units/getUnitsPages", async(item)=>{
    try{
        const res = await axios.get(`https://nestjs-now-saif3-e59v8g2z9-osamakamelmohamed6-gmailcom.vercel.app/houses?page=${item.page}&limit=8&allowPagination=true`,
            {
                headers:{
                    Authorization: `Bearer ${item.token}`
                }
            }
        )
        return res.data.docs
    }catch(err){
        if(err.message === "Network Error"){
            toast.error("تأكد من اتصالك بالانترنت")
        }else if(err.response.data.errorMessage){
            toast.error(err.response.data.errorMessage)
        }
        throw(err.response.data.errorMessage)
    }
})




// get most units bookings
export const getMostBookings = createAsyncThunk("units/getMostBookings", async()=>{
    try{
        const res = await axios.get(`https://nestjs-now-saif3-e59v8g2z9-osamakamelmohamed6-gmailcom.vercel.app/reservations/most-reserved`)
        const mapData =  res.data.map((item)=> item._id.house).map((item)=> item) 
        const finalResult = mapData.filter((item)=> item.length > 0)
        return finalResult
    }catch(err){
        throw(err.response.data.errorMessage)
    }
})










// get my favourites
export const getMyFavourites = createAsyncThunk("units/getMyFavourites", async(token)=>{
    try{
        const res = await axios.get(`https://nestjs-now-saif3-e59v8g2z9-osamakamelmohamed6-gmailcom.vercel.app/houses/myFavourites`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return res.data
    }catch(err){
        throw(err.response.data.errorMessage)
    }
})
// add to my favourites
export const addTMyFavourites = createAsyncThunk("units/addTMyFavourites", async(item)=>{
    try{
        const res = await axios.post(`https://nestjs-now-saif3-e59v8g2z9-osamakamelmohamed6-gmailcom.vercel.app/houses/make-favourite/${item.id}`, 
        {id: item.id},
        {
            headers: {
                Authorization: `Bearer ${item.token}`
            }
        }
        )
        toast.success("تم الاضافة الى المفضلة")
        return res.data
    }catch(err){
        if(err.message === "Network Error"){
            toast.error("تأكد من اتصالك بالانترنت")
        }else if(err.response.data.errorMessage){
            toast.error(err.response.data.errorMessage)
        }
        throw(err.response.data.errorMessage)
    }
})
// remove from my favourites
export const removeFromFavourites = createAsyncThunk("units/removeFromFavourites", async(item)=>{
    try{
        const res = await axios.post(`https://nestjs-now-saif3-e59v8g2z9-osamakamelmohamed6-gmailcom.vercel.app/houses/remove-favourite/${item.id}`,
        {id: item.id},
        {
            headers: {
                Authorization: `Bearer ${item.token}`
            }
        })
        toast.success("تم الحذف من المفضلة بنجاح")
        return res.data
    }catch(err){
        if(err.message === "Network Error"){
            toast.error("تأكد من اتصالك بالانترنت")
        }else if(err.response.data.errorMessage){
            toast.error(err.response.data.errorMessage)
        }
        throw(err.response.data.errorMessage)
    }
})











//get my bookings
export const getMyBooking = createAsyncThunk("units/getMyBooking", async(token)=>{
    try{
        const res = await axios.get(`https://nestjs-now-saif3-e59v8g2z9-osamakamelmohamed6-gmailcom.vercel.app/reservations/my-reservations`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return res.data
    }catch(err){
        throw(err.response.data.errorMessage)
    }
})
// add to my bookings
export const addToMyBookings = createAsyncThunk("units/addToMyBookings", async(item)=>{
    try{
        const res = await axios.post(`https://nestjs-now-saif3-e59v8g2z9-osamakamelmohamed6-gmailcom.vercel.app/reservations`,
        {
            payment_method : item.payment_method,
            price: item.price,
            house: item.house,
            start_date: item.start_date,
            end_date: item.end_date,
            paymentMethodId: item.paymentMethodId
        }
        ,{
            headers: {
                Authorization: `Bearer ${item.token}`
            }
        })
        toast.success("تم الحجز بنجاح")
        return res.data
    }catch(err){
        if(err.message === "Network Error"){
            toast.error("تأكد من اتصالك بالانترنت")
        }else if(err.response.data.errorMessage){
            toast.error(err.response.data.errorMessage)
        }
        throw(err.response.data.errorMessage)
    }
})
// remove from my bookings 
export const removeFromBookings = createAsyncThunk("units/removeFromBookings", async(item)=>{
    try{
        const res = await axios.delete(`https://nestjs-now-saif3-e59v8g2z9-osamakamelmohamed6-gmailcom.vercel.app/reservations/${item.id}`,
        {
            headers: {
                Authorization: `Bearer ${item.token}`,
                "Content-Type": "application/json"
            }
        })
        console.log(res.data)
        toast.success("تم الحذف بنجاح")
        return res.data
    }catch(err){
        console.log(err)
        if(err.message === "Network Error"){
            toast.error("تأكد من اتصالك بالانترنت")
        }else if(err.response.data.errorMessage){
            toast.error(err.response.data.errorMessage)
        }
        throw(err.response.data.errorMessage)
    }
})



// get one unit
export const getOneUnit = createAsyncThunk("units/getOneUnit", async(item)=>{
    try{
        const res = await axios.get(`https://nestjs-now-saif3-e59v8g2z9-osamakamelmohamed6-gmailcom.vercel.app/houses/${item.id}`, {
            headers: {
                Authorization: `Bearer ${item.token}`
            }
        })
        return res.data
    }catch(err){
        throw(err.response.data.errorMessage)
    }
})





export const addNewUnit = createAsyncThunk("units/addNewUnit", async(unitInfo)=>{
    try{
        const formData = new FormData()
        for(let i = 0; i < unitInfo.images.length; i++){
            formData.append("images", unitInfo.images[i])
        }
        formData.append("contractImage", unitInfo.contractImage)
        formData.append("name", unitInfo.name)
        formData.append("city", unitInfo.city)
        formData.append("street", unitInfo.street)
        formData.append("house_num", unitInfo.house_num)
        formData.append("code", unitInfo.code)
        formData.append("conditions", unitInfo.conditions)
        formData.append("rooms", unitInfo.rooms)
        formData.append("persons", unitInfo.persons)
        formData.append("children", unitInfo.children)
        formData.append("beds", unitInfo.beds)
        formData.append("bathrooms", unitInfo.bathrooms)
        formData.append("apartment_area", unitInfo.apartment_area)
        formData.append("description", unitInfo.description)
        formData.append("price", unitInfo.price)
        formData.append("about", unitInfo.about)
        formData.append("lat", unitInfo.lat)
        formData.append("long", unitInfo.long)
        const res = await axios.post(`https://nestjs-now-saif3-e59v8g2z9-osamakamelmohamed6-gmailcom.vercel.app/houses`, formData,
        {
            headers: {
                "Authorization": `Bearer ${unitInfo.token}`,
                "Content-Type": "multipart/form-data;",
            }
        })
        toast.success("تم بنجاح")
        return res.data
    }catch(err){
        if(err.message === "Network Error"){
            toast.error("تأكد من اتصالك بالانترنت")
        }else if(err.response.data.errorMessage){
            toast.error(err.response.data.errorMessage)
        }
        throw(err.response.data.errorMessage)
    }
})

// get notifications data 
export const getNotifications = createAsyncThunk("units/getNotifications", async(token)=>{
    try{
        const res = await axios.get(`https://nestjs-now-saif3-e59v8g2z9-osamakamelmohamed6-gmailcom.vercel.app/reservations/my-notifications`,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        return res.data
    }catch(err){
        if(err.message === "Network Error"){
            toast.error("تأكد من اتصالك بالانترنت")
        }else if(err.response.data.errorMessage){
            toast.error(err.response.data.errorMessage)
        }
        throw(err.response.data.errorMessage)
    }
})