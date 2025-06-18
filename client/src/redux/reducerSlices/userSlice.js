import { createSlice } from '@reduxjs/toolkit'

const initialState ={
    _id:'',
    email :'',
    token:'',
    fullName:'',
    isLoggedIn: false,
    role:'',
    phoneNumber:Number,
}
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logoutUser :state =>{
     return initialState
    },
    addLoginDetails:(state,action)=>{
      const {token,isLoggedIn}=action.payload
      const {email,fullName,role,_id,phoneNumber}=action.payload.user

      return{
        ...state,
        email:email,
        token:token,
        fullName:fullName,
        isLoggedIn:isLoggedIn,
        role:role,
        _id :_id,
        phoneNumber:phoneNumber,
      }
    }
  }
})
export const { logoutUser,addLoginDetails } = userSlice.actions

export default userSlice.reducer