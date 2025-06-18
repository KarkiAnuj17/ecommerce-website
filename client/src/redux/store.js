import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './reducerSlices/counterSlice'
import productSlice from './reducerSlices/productSlice'
import  userSlice  from './reducerSlices/userSlice'

export default configureStore({
  reducer: {
    counter : counterSlice,
    user : userSlice,
    product : productSlice,
  },
})