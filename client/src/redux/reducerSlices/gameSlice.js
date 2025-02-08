import { createSlice } from '@reduxjs/toolkit'

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    userSelection: '',
    computerSelection:'',
    gameConfig:{
      userWinningConditions: [
        {
        user: 'rock',
        computer: 'scissors'
        },
        {
          user: 'paper',
          computer: 'rock'
        },
        {
          user: 'scissors',
          computer: 'paper'
        },
    ]
    },
    selectionOption:['paper','rock','scissors']
  },
  reducers: {
    setUserSelection: (state, action) => {
      state.userSelection = action.payload
    },
    setComputerSelection:(state,action)=>{
      const randomIndex = Math.floor(Math.random() * state.selectionOption.length);
      state.computerSelection = state.selectionOption[randomIndex];   
    }
  },
})
export const { setUserSelection,setComputerSelection} = gameSlice.actions
export default gameSlice.reducer