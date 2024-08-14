'use client'
import {configureStore} from '@reduxjs/toolkit'
import {createLogger} from 'redux-logger' 
import getUserReducer from './slices/GetUserSlice'
const logger = createLogger()
export const makeStore =()=>{ return configureStore({
    
    reducer: {
       getUserData: getUserReducer
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(logger),
})}
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']