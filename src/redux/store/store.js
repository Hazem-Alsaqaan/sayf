import {configureStore} from "@reduxjs/toolkit"
import unitsSlice from "../reducers/unitsSlice"
import authSlice from "../reducers/authSlice"
import searchDataSlice from "../reducers/searchDataSlice"


const store = configureStore({
    reducer:{
        unitsSlice: unitsSlice,
        authSlice: authSlice,
        searchDataSlice: searchDataSlice
    }
})

export default store
