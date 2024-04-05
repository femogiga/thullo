import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from 'redux-persist'

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isFetching: false,
        user: null,
        isAuthenticated: false,

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
        },
        // setToken: (state, action) => {
        //     state.token = action.payload
        // }
    },
    extraReducers: (builder) => {
        builder.addCase(PURGE, (initialState) => {
            localStorage.removeItem('persist:root');
            return initialState;
        });
    },

})


export const { setIsFetching, setUser, setIsAuthenticated } = authSlice.actions
export default authSlice.reducer
