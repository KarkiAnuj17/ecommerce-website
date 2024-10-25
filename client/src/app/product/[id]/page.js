'use client'
import React, { useState } from 'react'
import { FaHeart } from "react-icons/fa";

const Reaction = () => {
  const [isLiked,setIsLiked]=useState(false)
  return (
    <div className="m-10 p-6 flex justify-center text-2xl">
    <button onClick={()=>setIsLiked(!isLiked)}><FaHeart color={isLiked?"red":"grey"}/></button>
    </div>
    )
}

export default Reaction