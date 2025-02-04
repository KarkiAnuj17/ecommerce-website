'use client'
import { decrement, increment } from '@/redux/reducerSlices/counterSlice'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const page = () => {
    const dispatch = useDispatch()
    const {value} = useSelector(state=>state.counter)
  return (
      <div>
    <button onClick={()=>dispatch(increment())}>+</button>
    {value}
    <button onClick={()=>dispatch(decrement())}>-</button>
    </div>
  )
}

export default page