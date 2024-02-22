import { createSlice } from "@reduxjs/toolkit";




const pageInformationSlice = createSlice({
    name: 'pageInformationSlice',
    initialState: {
        visible: false
    },
    reducers: {
        setPageVisibility: (state, action) => {
            state.visible = action.payload
        }
    }
})

export const { setPageVisibility } = pageInformationSlice.actions
export default pageInformationSlice.reducer
