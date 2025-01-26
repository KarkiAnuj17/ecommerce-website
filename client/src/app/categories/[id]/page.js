"use client"

import axios from "axios"
import { useParams } from "next/navigation"
import React, { useEffect, useState } from "react"
import Image from "next/image"
import { Folder } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const CategoryPage = () => {
  const params = useParams()
  const [categoryDetail, setCategoryDetail] = useState(null)

  const fetchCategoryDetails = async () => {
    try {
      const { data } = await axios.get(`http://localhost:4000/categories/${params.categoryName}`)
      setCategoryDetail(data)
    } catch (error) {
      console.error("Error fetching category details:", error)
    }
  }

  useEffect(() => {
    fetchCategoryDetails()
  }, [params.categoryName]) 

  
  return (
   
      <div>
        {categoryDetail ? (
          <h1>{categoryDetail.categoryName}</h1>
        ) : (
          <p>Loading category details...</p>
        )}
      </div>
    )
    

}

export default CategoryPage
