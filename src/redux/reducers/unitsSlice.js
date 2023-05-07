import {createSlice} from "@reduxjs/toolkit"
import { getAllUnits, getMostBookings, getMyBooking, getMyFavourites, getOneUnit } from "../actions/unitsActions"


const unitsSlice = createSlice({
    name: "units",
    initialState: {
        units: [],
        oneUnit: {},
        isLoading: false
    },
    extraReducers: (builder)=>{
        // get all units
        builder.addCase(getAllUnits.pending , (state, action)=>{
            state.isLoading = true
        })
        builder.addCase(getAllUnits.fulfilled, (state, action)=>{
            state.isLoading = false
            state.units = action.payload
        })
        builder.addCase(getAllUnits.rejected, (state, action)=>{
            state.isLoading = false
            console.log("err")
        })
        // get most bookings
        builder.addCase(getMostBookings.pending , (state, action)=>{
            state.isLoading = true
        })
        builder.addCase(getMostBookings.fulfilled, (state, action)=>{
            state.isLoading = false
            state.units = action.payload
        })
        builder.addCase(getMostBookings.rejected, (state, action)=>{
            state.isLoading = false
            console.log("err")
        })
        // get my bookings
        builder.addCase(getMyBooking.pending , (state, action)=>{
            state.isLoading = true
        })
        builder.addCase(getMyBooking.fulfilled, (state, action)=>{
            state.isLoading = false
            state.units = action.payload
        })
        builder.addCase(getMyBooking.rejected, (state, action)=>{
            state.isLoading = false
            console.log("err")
        })
        // get my favourites
        builder.addCase(getMyFavourites.pending , (state, action)=>{
            state.isLoading = true
        })
        builder.addCase(getMyFavourites.fulfilled, (state, action)=>{
            state.isLoading = false
            state.units = action.payload
        })
        builder.addCase(getMyFavourites.rejected, (state, action)=>{
            state.isLoading = false
            console.log("err")
        })

        
        // get one unit
        builder.addCase(getOneUnit.pending , (state, action)=>{
            state.isLoading = true
        })
        builder.addCase(getOneUnit.fulfilled, (state, action)=>{
            state.isLoading = false
            state.oneUnit = action.payload
        })
        builder.addCase(getOneUnit.rejected, (state, action)=>{
            state.isLoading = false
            console.log("err")
        })
    }
})

export default unitsSlice.reducer