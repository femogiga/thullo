import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isFetching: false,
        user: null,
        isAuthenticated: false

    },
    reducers: {
        setIsFetching: (state, action) => {
            state.isFetching = action.payload
        },
        setUser: (state, action) => {
            state.user = action.payload
        },
        setIsAuthenticated: (state, action) => {
            state.isAuthenticated = action.payload
        }
    }
})


export const { setIsFetching, setUser, setIsAuthenticated } = authSlice.actions
export default authSlice.reducer
