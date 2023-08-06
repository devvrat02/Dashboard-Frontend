import { createSlice } from '@reduxjs/toolkit'
type contact={
      balance?:number,
      transaction?:[],
    } 
// Setting type of Userstate.

const initialState:contact={
      balance:0,
      transaction:[],
}

export const financeSlice = createSlice({
  name: 'finance',
  initialState,
  reducers: {
    changedetail(state, action){

    }
  
  },
})

export const {changedetail } = financeSlice.actions

export default financeSlice.reducer