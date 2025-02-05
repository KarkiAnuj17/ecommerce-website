import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './reducerSlices/counterSlice'
import userSlice  from './reducerSlices/userSlice'
import productSlice from './reducerSlices/productSlice'

export default configureStore({
  reducer: {
    counter : counterSlice,
    user : userSlice,
    product : productSlice,
  },
})