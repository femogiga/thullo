import { configureStore } from '@reduxjs/toolkit'
import PageInformationReducer from './features/PageInformationSlice'
import VisibilityReducer from './features/visibilitySlice'
import authReducer from './features/authSlice'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
    key: "root",
    version: 1,
    storage,
};

const rootReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
    reducer: {
        pageInformation: PageInformationReducer,
        visibility: VisibilityReducer,
        auth:rootReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})
export let persistor = persistStore(store);
