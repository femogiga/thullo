import { createSlice } from "@reduxjs/toolkit";




const visibilitySlice = createSlice({
    name: 'visibility',
    initialState: {
        visible: false,
        editOpen: false,
        descriptionTextVisible: true
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
        }
    }
})


export const { setVisibleModalVisibility, setEditOpen, setDescriptionTextVisible } = visibilitySlice.actions
export default visibilitySlice.reducer
