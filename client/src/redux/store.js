import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './reducerSlice/counterSlice'
import boxSlice from './reducerSlice/boxSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    box : boxSlice
  }
})