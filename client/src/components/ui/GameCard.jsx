'use client'
import { setComputerSelection, setUserSelection } from '@/redux/reducerSlices/gameSlice';
import React from 'react'
import { useDispatch } from 'react-redux'

const GameCard = ({icon,item}) => {
    const dispatch = useDispatch();
    const handleUserSelection=()=>{
        dispatch(setUserSelection(item)),
        dispatch(setComputerSelection())
    }
  return (
    <div onClick={handleUserSelection} className="p-4 rounded-lg m-2 w-28 h-28 bg-red-100 flex items-center justify-center cursor-pointer">{item}</div>
  )
}

export default GameCard