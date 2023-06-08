import {createSlice} from "@reduxjs/toolkit"


const searchDataSlice = createSlice({
    name: "searchData",
    initialState: {
        cityInSearch: "",
        personsInSearch: 0,
        childInSearch: 0,
        roomsInSearch: 0,
        minRang: 0,
        maxRang: 0
    },
    reducers: {
        setCityInSearch: (state, action)=>{
            state.cityInSearch = action.payload
        },
        setPersonsInSearch: (state, action)=>{
            state.personsInSearch = action.payload
        },
        setChildInSearch: (state, action)=>{
            state.childInSearch = action.payload
        },
        setRoomsInSearch: (state, action)=>{
            state.roomsInSearch = action.payload
        },
        setMinRang: (state, action)=>{
            state.minRang = action.payload
        },
        setMaxRang: (state, action)=>{
            state.maxRang = action.payload
        }
    }
})

export const {setCityInSearch, setPersonsInSearch, setChildInSearch, setRoomsInSearch, setMinRang, setMaxRang} = searchDataSlice.actions
export default searchDataSlice.reducer