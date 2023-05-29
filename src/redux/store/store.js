import {configureStore} from "@reduxjs/toolkit"
import unitsSlice from "../reducers/unitsSlice"
import authSlice from "../reducers/authSlice"


const store = configureStore({
    reducer:{
        unitsSlice: unitsSlice,
        authSlice: authSlice,
    }
})

export default store
