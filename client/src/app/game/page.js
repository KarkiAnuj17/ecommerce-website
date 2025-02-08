"use client"
import GameCard from '@/components/ui/GameCard'
import Winner from '@/components/ui/Winner'
import React from 'react'
import { useSelector } from 'react-redux'

const Game = () => {
    const {userSelection,selectionOption,computerSelection} = useSelector(state=>state.game)
  return (
    <div className='m-6'>
      Your selection is {userSelection}
    <div className='flex'>
        <div>
        {selectionOption.map((item)=>{
          return <GameCard key={item} item={item}/>
        })}
        </div>
        <div className="flex p-4 items-center">
          <div className='p-3 m-3'>vs</div>
          <div className="p-4 rounded-lg m-2 w-28 h-28 bg-red-100 flex items-center justify-center cursor-pointer">{computerSelection}</div>
        </div>
    </div>
    <Winner/>
    </div>
  )
}

export default Game