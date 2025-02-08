import { createSlice } from '@reduxjs/toolkit'

const initialState=  {
  cartItems: [],
}
export const productSlice = createSlice({
  name: 'product',
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const currentCartItems = JSON.parse(JSON.stringify(state.cartItems))
      // Find if item already exists in the cart
      const item = currentCartItems.find((item) => item._id === action.payload._id);
      if(item){
        //get the item that exists by looping, and update the quantity by 1
            const updatedCart = currentCartItems.map((item)=>{
              if(item._id == action.payload._id){
                  item.quantity= item.quantity+ 1                           
              }
              return item
          })
          state.cartItems = updatedCart
      }else{
        // add quantity 1 initially when item doesnt pre exist
        state.cartItems= [...state.cartItems, { ...action.payload, quantity: 1 }]
      }
    },
    
    removeFromCart: (state, action) => {
      const currentCartItems = JSON.parse(JSON.stringify(state.cartItems))
      const updatedCart = currentCartItems.filter((item) => item._id !== action.payload);
      state.cartItems = updatedCart;
      },

    clearAllCartItems: (state, action) => {
      state.cartItems = []
    },
    
    
  },
})
export const { addToCart, removeFromCart,clearAllCartItems} = productSlice.actions
export default productSlice.reducer