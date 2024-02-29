import { configureStore } from '@reduxjs/toolkit'
import PageInformationReducer from './features/PageInformationSlice'
import VisibilityReducer from './features/visibilitySlice'

export const store = configureStore({
    reducer: {
        pageInformation: PageInformationReducer,
        visibility: VisibilityReducer
    },
})
