'use client'
import { decrement, increment } from '@/redux/reducerSlices/counterSlice'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const Counter = () => {
    const dispatch = useDispatch()
    const {value} = useSelector(state=>state.counter)
  return (
  <div>
    <button onClick={()=>dispatch(decrement())}>-</button>
    {value}
    <button onClick={()=>dispatch(increment())}>+</button>
  </div>
  )
}

export default Counter