import {createSlice} from "@reduxjs/toolkit"

const userStorage = JSON.parse(window.localStorage.getItem("user"))
const tokenStorage = JSON.parse(window.localStorage.getItem("token"))
const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: userStorage ? userStorage : "",
        token: tokenStorage ? tokenStorage : "",
        isLoading: false
    },
    reducers: {
        // login
        loginPending: (state, action)=>{
            state.isLoading = true
        },
        loginFulfilled: (state, action)=>{
            state.isLoading = false;
            state.user = action.payload.user
            state.user.token = action.payload.token
        },
        loginRejected: (state, action)=>{
            state.isLoading = false

        }
    }
})

export default authSlice.reducer

export const {loginPending, loginFulfilled, loginRejected} = authSlice.actions