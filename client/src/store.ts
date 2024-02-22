import { configureStore } from '@reduxjs/toolkit'
import PageInformationReducer from './features/PageInformationSlice'

export const store = configureStore({
    reducer: {
        pageInformation: PageInformationReducer
    },
})
