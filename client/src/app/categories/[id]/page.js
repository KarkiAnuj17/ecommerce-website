"use client"

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
  }, [params.id]) // Added params.id as a dependency

  if (error) {
    return (
      <div className="p-4 bg-gray-50 rounded-lg shadow-lg">
        <p className="text-red-500 text-center">{error}</p>
      </div>
    )
  }

  return (
    <div className="p-4 bg-gray-50 rounded-lg shadow-lg">
      {categoryDetail && (
        <div className="flex items-center space-x-4 mb-6">
          <Image
            src={`http://localhost:4000/uploads/${categoryDetail.categoryImage}`}
            alt={categoryDetail.categoryName}
            width={70}
            height={70}
            className="object-cover rounded-full border border-gray-300"
          />
          <h1 className="text-3xl font-semibold text-gray-800">{categoryDetail.categoryName}</h1>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product._id} className="bg-white p-4 rounded-lg shadow">
            <Image
              src={`http://localhost:4000/uploads/${product.productImage}`}
              alt={product.productName}
              width={200}
              height={200}
              className="object-cover w-full h-48 mb-4 rounded"
            />
            <h2 className="text-xl font-semibold mb-2">{product.productName}</h2>
            <p className="text-gray-600">{product.productDescription}</p>
            <p className="text-lg font-bold mt-2">${product.productPrice}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategoryPage

