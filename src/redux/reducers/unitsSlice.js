import {createSlice} from "@reduxjs/toolkit"
import { addNewUnit, addTMyFavourites, getAllUnits, getMostBookings, getMyBooking, getMyFavourites, getNotifications, getOneUnit, getUnitsPages, removeFromBookings, removeFromFavourites } from "../actions/unitsActions"


const unitsSlice = createSlice({
    name: "units",
    initialState: {
        units: [],
        mostBookings:[],
        mostBookingsLoading: false,
        myBookings: [],
        myBookingsLoading: false,
        myFavourites:[],
        myFavouritesLoading: false,
        searchUnits: [],
        searchUnitsLoading: false,
        oneUnit: {},
        oneUnitLoading: false,
        notifications: [],
        notificationsLoadng: false,
        error: ``
    },
    extraReducers: (builder)=>{
        // get search units
        builder.addCase(getAllUnits.pending , (state, action)=>{
            state.searchUnitsLoading = true
        })
        builder.addCase(getAllUnits.fulfilled, (state, action)=>{
            state.searchUnitsLoading = false
            state.searchUnits = action.payload
        })
        builder.addCase(getAllUnits.rejected, (state, action)=>{
            state.searchUnitsLoading = false
            state.error = action.error
        })
        // get search units on paginate
        builder.addCase(getUnitsPages.pending , (state, action)=>{
            state.searchUnitsLoading = true
        })
        builder.addCase(getUnitsPages.fulfilled, (state, action)=>{
            state.searchUnitsLoading = false
            state.searchUnits = action.payload
        })
        builder.addCase(getUnitsPages.rejected, (state, action)=>{
            state.searchUnitsLoading = false
            state.error = action.error
        })
        // add new units
        builder.addCase(addNewUnit.pending , (state, action)=>{
            state.searchUnitsLoading = true
        })
        builder.addCase(addNewUnit.fulfilled, (state, action)=>{
            state.searchUnitsLoading = false
            state.searchUnits = [...state.searchUnits, action.payload]
        })
        builder.addCase(addNewUnit.rejected, (state, action)=>{
            state.searchUnitsLoading = false
            state.error = action.error
        })



        // get most bookings
        builder.addCase(getMostBookings.pending , (state, action)=>{
            state.mostBookingsLoading = true
        })
        builder.addCase(getMostBookings.fulfilled, (state, action)=>{
            state.mostBookingsLoading = false
            state.mostBookings = action.payload
        })
        builder.addCase(getMostBookings.rejected, (state, action)=>{
            state.mostBookingsLoading = false
            state.error = action.error
        })


        // get my bookings
        builder.addCase(getMyBooking.pending , (state, action)=>{
            state.myBookingsLoading = true
        })
        builder.addCase(getMyBooking.fulfilled, (state, action)=>{
            state.myBookingsLoading = false
            state.myBookings = action.payload
        })
        builder.addCase(getMyBooking.rejected, (state, action)=>{
            state.myBookingsLoading = false
            state.error = action.error
        })
        // remove from my bookings
        builder.addCase(removeFromBookings.pending , (state, action)=>{
            state.myBookingsLoading = true
        })
        builder.addCase(removeFromBookings.fulfilled, (state, action)=>{
            state.myBookingsLoading = false
            state.myBookings = action.payload
        })
        builder.addCase(removeFromBookings.rejected, (state, action)=>{
            state.myBookingsLoading = false
            state.error = action.error
        })



        // get my favourites
        builder.addCase(getMyFavourites.pending , (state, action)=>{
            state.myFavouritesLoading = true
        })
        builder.addCase(getMyFavourites.fulfilled, (state, action)=>{
            state.myFavouritesLoading = false
            state.myFavourites = action.payload
        })
        builder.addCase(getMyFavourites.rejected, (state, action)=>{
            state.myFavouritesLoading = false
            state.error = action.error
        })
        // add to my favourites
        builder.addCase(addTMyFavourites.pending , (state, action)=>{
            state.myFavouritesLoading = true
        })
        builder.addCase(addTMyFavourites.fulfilled, (state, action)=>{
            state.myFavouritesLoading = false
            state.myFavourites = action.payload
        })
        builder.addCase(addTMyFavourites.rejected, (state, action)=>{
            state.myFavouritesLoading = false
            state.error = action.error
        })
        // remove from my favourites
        builder.addCase(removeFromFavourites.pending , (state, action)=>{
            state.myFavouritesLoading = true
        })
        builder.addCase(removeFromFavourites.fulfilled, (state, action)=>{
            state.myFavouritesLoading = false
            state.myFavourites = action.payload
        })
        builder.addCase(removeFromFavourites.rejected, (state, action)=>{
            state.myFavouritesLoading = false
            state.error = action.error
        })

        // get one unit
        builder.addCase(getOneUnit.pending , (state, action)=>{
            state.oneUnitLoading = true
        })
        builder.addCase(getOneUnit.fulfilled, (state, action)=>{
            state.oneUnitLoading = false
            state.oneUnit = action.payload
        })
        builder.addCase(getOneUnit.rejected, (state, action)=>{
            state.oneUnitLoading = false
            state.error = action.error
        })
        // get notifications
        builder.addCase(getNotifications.pending, (state, action)=>{
            state.notificationsLoadng = true
        })
        builder.addCase(getNotifications.fulfilled, (state, action)=>{
            state.notificationsLoadng = false;
            state.notifications =  action.payload
        })
        builder.addCase(getNotifications.rejected, (state, action)=>{
            state.notificationsLoadng = false;
        })
    }
})

export default unitsSlice.reducer