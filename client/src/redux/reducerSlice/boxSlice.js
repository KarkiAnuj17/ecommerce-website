import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  backgroundColor: 'red',
  height: 5,
  width: 90,
  borderRadius: '0%',
  degree: 0,
  left: 0,
  isDefaultColor: true,
  top:0,
}

export const boxSlice = createSlice({
  name: 'box',
  initialState,
  reducers: {
    changeShape: (state, action) => {
      if(state.borderRadius == '50%'){
        state.borderRadius = '0%'
      }else{
        state.borderRadius = '50%'
      }
    },
    changeColor: (state, action) => {
      state.backgroundColor = action.payload
    },
    shiftLeft: (state, action) => {
      state.left = state.left-5
      state.width= state.width+1
      state.degree = 0
    },
    shiftRight: (state, action) => {
      state.left = state.left+5
      state.width= state.width+1
      state.degree = 0
    },
    shiftUp: (state, action) => {
      state.top = state.top-5
      state.width= state.width+4
      state.degree = 90
    },
    shiftDown: (state, action) => {
      state.top = state.top+5
      state.width= state.width+4
      state.degree = 90
    },
    reset: (state, action) => {
      return initialState
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeShape,reset, changeColor, shiftLeft, shiftRight, shiftUp,shiftDown } = boxSlice.actions

export default boxSlice.reducer