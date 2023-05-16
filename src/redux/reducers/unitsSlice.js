import {createSlice} from "@reduxjs/toolkit"
import { addNewUnit, addTMyFavourites, getAllUnits, getMostBookings, getMyBooking, getMyFavourites, getOneUnit, removeFromFavourites } from "../actions/unitsActions"


const unitsSlice = createSlice({
    name: "units",
    initialState: {
        units: [],
        mostBookings:[],
        myBookings: [],
        myFavourites:[],
        searchUnits: [],
        oneUnit: {},
        isLoading: false,
        error: ``
    },
    extraReducers: (builder)=>{
        // get search units
        builder.addCase(getAllUnits.pending , (state, action)=>{
            state.isLoading = true
        })
        builder.addCase(getAllUnits.fulfilled, (state, action)=>{
            state.isLoading = false
            state.searchUnits = action.payload
        })
        builder.addCase(getAllUnits.rejected, (state, action)=>{
            state.isLoading = false
            state.error = action.error
        })
        // add new units
        builder.addCase(addNewUnit.pending , (state, action)=>{
            state.isLoading = true
        })
        builder.addCase(addNewUnit.fulfilled, (state, action)=>{
            state.isLoading = false
            state.units = [...state.units, action.payload]
        })
        builder.addCase(addNewUnit.rejected, (state, action)=>{
            state.isLoading = false
            state.error = action.error
        })



        // get most bookings
        builder.addCase(getMostBookings.pending , (state, action)=>{
            state.isLoading = true
        })
        builder.addCase(getMostBookings.fulfilled, (state, action)=>{
            state.isLoading = false
            state.mostBookings = action.payload
        })
        builder.addCase(getMostBookings.rejected, (state, action)=>{
            state.isLoading = false
            state.error = action.error
        })


        // get my bookings
        builder.addCase(getMyBooking.pending , (state, action)=>{
            state.isLoading = true
        })
        builder.addCase(getMyBooking.fulfilled, (state, action)=>{
            state.isLoading = false
            state.myBookings = action.payload
        })
        builder.addCase(getMyBooking.rejected, (state, action)=>{
            state.isLoading = false
            state.error = action.error
        })



        // get my favourites
        builder.addCase(getMyFavourites.pending , (state, action)=>{
            state.isLoading = true
        })
        builder.addCase(getMyFavourites.fulfilled, (state, action)=>{
            state.isLoading = false
            state.myFavourites = action.payload
        })
        builder.addCase(getMyFavourites.rejected, (state, action)=>{
            state.isLoading = false
            state.error = action.error
        })
        // add to my favourites
        builder.addCase(addTMyFavourites.pending , (state, action)=>{
            state.isLoading = true
        })
        builder.addCase(addTMyFavourites.fulfilled, (state, action)=>{
            state.isLoading = false
            state.myFavourites = action.payload
        })
        builder.addCase(addTMyFavourites.rejected, (state, action)=>{
            state.isLoading = false
            state.error = action.error
        })
        // remove from my favourites
        builder.addCase(removeFromFavourites.pending , (state, action)=>{
            state.isLoading = true
        })
        builder.addCase(removeFromFavourites.fulfilled, (state, action)=>{
            state.isLoading = false
            state.myFavourites = action.payload
        })
        builder.addCase(removeFromFavourites.rejected, (state, action)=>{
            state.isLoading = false
            state.error = action.error
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
            state.error = action.error
        })
    }
})

export default unitsSlice.reducer