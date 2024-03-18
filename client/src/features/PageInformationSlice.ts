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
        addMemberVisible: false,
        taskId : 0
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
        setAddMemberVisible: (state, action) => {
            state.addMemberVisible = action.payload
        },
        setTaskId: (state, action) => {
            state.taskId = action.payload
        },
    }
})

export const { setPageVisibility, setCardInfoVisible, setDarken, setColorCardVisible, setCoverCardVisible, setMemberCardVisible, setAddMemberVisible, setTaskId } = pageInformationSlice.actions
export default pageInformationSlice.reducer
