import { createSlice } from '@reduxjs/toolkit'
const initialState= {
  userDetails:{}
}
export const userSlice = createSlice({
  name: 'user',
  initialState:  initialState,
  reducers: {
    loginUser: (state,action) => {
     state.userDetails = action.payload;
    },
    logoutUser: (state,action) => {
      return initialState;
    },
    
  },
})


export const { loginUser, logoutUser} = userSlice.actions

export default userSlice.reducer