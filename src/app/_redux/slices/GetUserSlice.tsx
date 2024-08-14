import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState= {
        user: {},
        status: '',

    }


      const getUserSlice = createSlice({
        name: 'getUserData',
        initialState,
        
        reducers:{
            userData(state, action){
                state.user = action.payload
            },
            userStatus(state, action){
                state.status = action.payload
            }
        }
      })
        export default getUserSlice.reducer
        export const {userData, userStatus} = getUserSlice.actions