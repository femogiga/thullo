import { createSlice } from "@reduxjs/toolkit";




const pageInformationSlice = createSlice({
    name: 'pageInformationSlice',
    initialState: {
        visible: false,
        cardInfoVisible: false,
        darken: false,
        colorCardVisible: false,
        coverCardVisible: false,
        memberCardVisible: false,
    },
    reducers: {
        setPageVisibility: (state, action) => {
            state.visible = action.payload
        },
        setCardInfoVisible: (state, action) => {
            state.cardInfoVisible = action.payload
        },
        setDarken: (state, action) => {
            state.darken = action.payload
        },
        setColorCardVisible: (state, action) => {
            state.colorCardVisible = action.payload
        },
        setCoverCardVisible: (state, action) => {
            state.coverCardVisible = action.payload
        },
        setMemberCardVisible: (state, action) => {
            state.memberCardVisible = action.payload
        },
    }
})

export const { setPageVisibility, setCardInfoVisible, setDarken, setColorCardVisible, setCoverCardVisible, setMemberCardVisible } = pageInformationSlice.actions
export default pageInformationSlice.reducer
