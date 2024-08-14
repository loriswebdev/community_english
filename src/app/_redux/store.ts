import {configureStore} from '@reduxjs/toolkit'
import {createLogger} from 'redux-logger' 
import { userData, userStatus } from './slices/GetUserSlice'
const logger = createLogger()
export const store = configureStore({
    
    reducer: {
        getUser: userData, 
        userStatus: userStatus
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(logger),
})      