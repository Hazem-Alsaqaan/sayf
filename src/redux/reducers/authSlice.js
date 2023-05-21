import {createSlice} from "@reduxjs/toolkit"

const userStorage = JSON.parse(window.sessionStorage.getItem("user"))
const tokenStorage = JSON.parse(window.sessionStorage.getItem("token"))
const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: userStorage ? userStorage : "",
        userRegister: {},
        token: tokenStorage ? tokenStorage : "",
        isLoading: false,
        error: false
    },
    reducers: {
        // login
        loginPending: (state, action)=>{
            state.isLoading = true
        },
        loginFulfilled: (state, action)=>{
            state.isLoading = false;
            state.user = action.payload.user || action.payload
            state.token = action.payload.token || action.payload.accessToken
        },
        loginRejected: (state, action)=>{
            state.isLoading = false
            state.error = true
        },
        //logout
        logOut: (state, action)=>{
            state.user = null
            state.token = null
        },
        //register
        registerPending: (state, action)=>{
            state.isLoading = true
        },
        registerFulfilled: (state, action)=>{
            state.isLoading = false;
            state.userRegister = action.payload.user
        },
        registerRejected: (state, action)=>{
            state.isLoading = false
            state.error = true

        },
    }
})

export default authSlice.reducer

export const {loginPending, loginFulfilled, loginRejected, logOut,registerPending, registerFulfilled, registerRejected} = authSlice.actions
