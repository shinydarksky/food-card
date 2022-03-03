import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { initLayout } from './data'
const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const layout = createSlice({
    name: 'layout',
    initialState: initLayout,
    reducers: {
        setOpenLoginForm:(state,action)=>{
            return {...state,openFormLogin:true}
        },
        setCloseLoginForm:(state,action)=>{
            return {...state,openFormLogin:false}
        }      
    },
    extraReducers: {

    }
})




const { reducer, actions } = layout

export const { setOpenLoginForm,setCloseLoginForm } = actions

export default reducer
