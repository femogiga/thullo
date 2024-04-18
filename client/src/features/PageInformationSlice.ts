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
        taskId: 0,
        panelId: 0,
        activeBoardId: 1,
        adminState:true

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
        setPanelId: (state, action) => {
            state.panelId = action.payload
        },
        setActiveBoardId: (state, action) => {
            state.activeBoardId = action.payload
        },
        setAdminState: (state, action) => {
            state.adminState = action.payload

         }
    }
})

export const { setPageVisibility, setCardInfoVisible, setDarken, setColorCardVisible, setCoverCardVisible, setMemberCardVisible, setAddMemberVisible, setTaskId, setPanelId, setActiveBoardId, setAdminState } = pageInformationSlice.actions
export default pageInformationSlice.reducer
