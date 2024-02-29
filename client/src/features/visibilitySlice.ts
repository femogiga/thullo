import { createSlice } from "@reduxjs/toolkit";




const visibilitySlice = createSlice({
    name: 'visibility',
    initialState: {
        visible: false
    },
    reducers: {
        setVisibleModalVisibility: (state, action) => {
            state.visible = action.payload
        }
    }
})


export const { setVisibleModalVisibility } = visibilitySlice.actions
export default visibilitySlice.reducer
