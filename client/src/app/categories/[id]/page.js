"use client"
import CustomNavbar from "@/components/navbar/header/page"
import { ProductCard } from "@/components/ProductCard"
import axios from "axios"
import Image from "next/image"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

const CategoryPage = () => {
  const params = useParams()
  const [products, setProducts] = useState([])
  const [categoryDetail, setCategoryDetail] = useState(null)
  const [error, setError] = useState(null)

  const fetchCategoryDetails = async () => {
    try {
      const { data } = await axios.get(`http://localhost:4000/categories/${params.id}`)
      setCategoryDetail(data)
    } catch (error) {
      console.error("Error fetching category details:", error)
      setError("Failed to load category details.")
    }
  }

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(`http://localhost:4000/products`)
      const filteredProducts = data.filter((product) => product.categories === params.id)
      setProducts(filteredProducts)
    } catch (error) {
      console.error("Error fetching product details:", error)
      setError("Failed to load products.")
    }
  }

  useEffect(() => {
    fetchCategoryDetails()
    fetchProducts()
  }, [params.id]) 

  if (error) {
    return (
      <div className="p-4 bg-gray-50 rounded-lg shadow-lg">
        <p className="text-red-500 text-center">{error}</p>
      </div>
    )
  }

  return (
    <div>
    <CustomNavbar />
    <div className="p-4 bg-gray-50 rounded-lg shadow-lg">
      {categoryDetail && (
        <div className="flex items-center space-x-4 mb-6">
          <h1 className="text-2xl font-semibold text-gray-800"> {categoryDetail.categoryName}</h1>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
    </div>
  )
}

export default CategoryPage

