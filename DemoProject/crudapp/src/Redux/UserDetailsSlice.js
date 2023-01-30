import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userData: [],
    EditData:[],
    updateData:[]
}

export const userSlice = createSlice({
    name: 'UserDetail',
    initialState,
    reducers: {
        AddData: (state, actions) => {
            state.userData = [...state.userData, actions.payload]
        },
        ClearData:(state,actions)=>{
            state.userData=[...actions.payload]
        },
        EditData:(state,actions)=>{
            state.userData =actions.payload
        },
  
    },
})

export const { AddData,ClearData,EditData ,UpdateData,ClearEditData} = userSlice.actions

export default userSlice.reducer