import {createSlice} from "@reduxjs/toolkit"

const userStorage = JSON.parse(window.sessionStorage.getItem("user"))
const tokenStorage = JSON.parse(window.sessionStorage.getItem("token"))
const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: userStorage ? userStorage : "",
        userRegister: {},
        token: tokenStorage ? tokenStorage : "",
        loginLoading: false,
        registerLoading: false,
        loginError: false,
        registerError: false
    },
    reducers: {
        // login
        loginPending: (state, action)=>{
            state.loginLoading = true
        },
        loginFulfilled: (state, action)=>{
            state.loginLoading = false;
            state.user = action.payload.user || action.payload
            state.token = action.payload.token || action.payload.accessToken
        },
        loginRejected: (state, action)=>{
            state.loginLoading = false
            state.loginError = true
        },
        //logout
        logOut: (state, action)=>{
            window.sessionStorage.removeItem("user")
            window.sessionStorage.removeItem("token")
            state.user = null
            state.token = null
        },
        //register
        registerPending: (state, action)=>{
            state.registerLoading = true
        },
        registerFulfilled: (state, action)=>{
            state.registerLoading = false;
            state.userRegister = action.payload.user
        },
        registerRejected: (state, action)=>{
            state.registerLoading = false
            state.registerError = true

        },
    }
})

export default authSlice.reducer

export const {loginPending, loginFulfilled, loginRejected, logOut,registerPending, registerFulfilled, registerRejected} = authSlice.actions
