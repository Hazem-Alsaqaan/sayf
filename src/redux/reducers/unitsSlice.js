import {createSlice} from "@reduxjs/toolkit"
import { addNewUnit, addTMyFavourites, addToMyBookings, getAllUnits, getHouseReservations, getMostBookings, getMyBooking, getMyFavourites, getNotifications, getOneUnit, getUnitsOwnedByUser, getUnitsSearchDescription, getUserProfileData, getUsersOpinion, removeFromBookings, removeFromFavourites } from "../actions/unitsActions"


const unitsSlice = createSlice({
    name: "units",
    initialState: {
        units: [],
        mostBookings:[],
        mostBookingsLoading: false,
        myBookings: [],
        myBookingsLoading: false,
        errorMyBookings: ``,
        myFavourites:[],
        myFavouritesLoading: false,
        errorMyFavourite: ``,
        searchUnits: [],
        searchUnitsLoading: false,
        oneUnit: {},
        oneUnitLoading: false,
        notifications: [],
        notificationsLoadng: false,
        unitsOwnedByUser: [],
        unitsOwnedByUserLoading: false,
        houseReservations: [],
        houseReservationsLoading: false,
        usersOpinion: [],
        usersOpinionLoading: false,
        userProfile: {},
        userProfileLoading: false,
        error: ``,
        errorAddNew: ``
    },
    extraReducers: (builder)=>{
        // get search units || all units
        builder.addCase(getAllUnits.pending , (state, action)=>{
            state.searchUnitsLoading = true
        })
        builder.addCase(getAllUnits.fulfilled, (state, action)=>{
            state.searchUnitsLoading = false
            state.searchUnits = action.payload
            state.units = action.payload
        })
        builder.addCase(getAllUnits.rejected, (state, action)=>{
            state.searchUnitsLoading = false
            state.error = action.error
        })

        // get search units on description (sorting)
        builder.addCase(getUnitsSearchDescription.pending , (state, action)=>{
            state.searchUnitsLoading = true
        })
        builder.addCase(getUnitsSearchDescription.fulfilled, (state, action)=>{
            state.searchUnitsLoading = false
            state.searchUnits = action.payload
        })
        builder.addCase(getUnitsSearchDescription.rejected, (state, action)=>{
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
            state.errorAddNew = action.error
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
            state.errorMyBookings = action.error
        })
        // add to my bookings
        builder.addCase(addToMyBookings.pending , (state, action)=>{
            state.myBookingsLoading = true
        })
        builder.addCase(addToMyBookings.fulfilled, (state, action)=>{
            state.myBookingsLoading = false
            state.myBookings = action.payload
        })
        builder.addCase(addToMyBookings.rejected, (state, action)=>{
            state.myBookingsLoading = false
            state.errorMyBookings = action.error
        })
        // remove from my bookings
        builder.addCase(removeFromBookings.pending , (state, action)=>{
            state.myBookingsLoading = true
        })
        builder.addCase(removeFromBookings.fulfilled, (state, action)=>{
            state.myBookingsLoading = false
        })
        builder.addCase(removeFromBookings.rejected, (state, action)=>{
            state.myBookingsLoading = false
            state.errorMyBookings = action.error
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
            state.errorMyFavourite = action.error
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
            state.errorMyFavourite = action.error
        })
        // remove from my favourites
        builder.addCase(removeFromFavourites.pending , (state, action)=>{
            state.myFavouritesLoading = true
        })
        builder.addCase(removeFromFavourites.fulfilled, (state, action)=>{
            state.myFavouritesLoading = false
        })
        builder.addCase(removeFromFavourites.rejected, (state, action)=>{
            state.myFavouritesLoading = false
            state.errorMyFavourite = action.error
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
        // get units owned by user
        builder.addCase(getUnitsOwnedByUser.pending, (state, action)=>{
            state.unitsOwnedByUserLoading = true
        })
        builder.addCase(getUnitsOwnedByUser.fulfilled, (state, action)=>{
            state.unitsOwnedByUserLoading = false;
            state.unitsOwnedByUser =  action.payload
        })
        builder.addCase(getUnitsOwnedByUser.rejected, (state, action)=>{
            state.unitsOwnedByUserLoading = false;
        })
        // get house reservations
        builder.addCase(getHouseReservations.pending, (state, action)=>{
            state.houseReservationsLoading = true
        })
        builder.addCase(getHouseReservations.fulfilled, (state, action)=>{
            state.houseReservationsLoading = false;
            state.houseReservations =  action.payload
        })
        builder.addCase(getHouseReservations.rejected, (state, action)=>{
            state.houseReservationsLoading = false;
        })
        // get users opinion
        builder.addCase(getUsersOpinion.pending, (state, action)=>{
            state.usersOpinionLoading = true
        })
        builder.addCase(getUsersOpinion.fulfilled, (state, action)=>{
            state.usersOpinionLoading = false;
            state.usersOpinion =  action.payload
        })
        builder.addCase(getUsersOpinion.rejected, (state, action)=>{
            state.usersOpinionLoading = false;
        })
        // get user profile data
        builder.addCase(getUserProfileData.pending, (state, action)=>{
            state.userProfileLoading = true
        })
        builder.addCase(getUserProfileData.fulfilled, (state, action)=>{
            state.usersOpinionLoading = false;
            state.userProfile =  action.payload
        })
        builder.addCase(getUserProfileData.rejected, (state, action)=>{
            state.userProfileLoading = false;
        })
    }
})

export default unitsSlice.reducer