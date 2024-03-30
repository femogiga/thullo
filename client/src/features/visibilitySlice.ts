import { createSlice } from "@reduxjs/toolkit";




const visibilitySlice = createSlice({
    name: 'visibility',
    initialState: {
        visible: false,
        editOpen: false,
        descriptionTextVisible: true,
        cardInfoEditOpen: false,
        createBoardOpen: false,
        addBoardCoverOpen: false,
        addPanelModalOpen: false,
        renameInputVisible:false
    },
    reducers: {
        setVisibleModalVisibility: (state, action) => {
            state.visible = action.payload
        },
        setEditOpen: (state, action) => {
            state.editOpen = action.payload
        },
        setDescriptionTextVisible: (state, action) => {
            state.descriptionTextVisible = action.payload
        },
        setCardInfoEditOpen: (state, action) => {
            state.cardInfoEditOpen = action.payload
        },
        setCreateBoardOpen: (state, action) => {
            state.createBoardOpen = action.payload
        },
        setAddBoardCoverOpen: (state, action) => {
            state.addBoardCoverOpen = action.payload
        },

        setAddPanelModalOpen: (state, action) => {
            state.addPanelModalOpen = action.payload

        },
        setRenameInputVisible: (state, action) => {
            state.renameInputVisible = action.payload

        }


    }
})


export const { setVisibleModalVisibility, setEditOpen, setDescriptionTextVisible, setCardInfoEditOpen, setCreateBoardOpen, setAddBoardCoverOpen, setAddPanelModalOpen, setRenameInputVisible } = visibilitySlice.actions
export default visibilitySlice.reducer
