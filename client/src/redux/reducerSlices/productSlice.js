import { createSlice } from '@reduxjs/toolkit'
const initialState= {
  cartItem :[],
}
export const productSlice = createSlice({
  name: 'product',
  initialState : initialState,
  reducers: {
    addToCart: (state,action) => {
      state.cartItem.push(action.payload);
    },
    removeFromCart: (state,action) => {
    },
    
  },
})

export const { addToCart, removeFromCart} = productSlice.actions

export default productSlice.reducer