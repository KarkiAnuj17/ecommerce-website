"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Pencil, Trash2 } from "lucide-react"
import { toast } from "sonner"

export function AdminProductCard({ product, onDelete }) {
  const router = useRouter()

  const handleEdit = () => {
    router.push(`/product/${product._id}`)
  }

  const handleDelete = async () => {
  const confirmDelete = confirm("Are you sure you want to delete this product?")
  if (!confirmDelete) return

  try {
    await onDelete(product._id)
    toast.success("Product deleted successfully!")
  } catch (error) {
    toast.error("Failed to delete the product.")
  }
}


  const discountPrice = (product.productPrice - (product.productPrice * product.discount) / 100).toFixed(2)

  return (
    <Card className="w-[320px] rounded-2xl border border-transparent bg-gradient-to-br from-purple-800 to-indigo-900 text-white shadow-lg transition-transform hover:scale-[1.02]">
      <CardContent className="p-4">
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-[#5033a2] to-[#3d348b]">
          <Image
            src={`http://localhost:4000/uploads/${product.productImage}`}
            alt={product.productName}
            layout="fill"
            objectFit="cover"
            className="cursor-pointer opacity-80 hover:opacity-100 transition-opacity duration-300"
          />

          {product.discount > 0 && (
            <div className="absolute top-3 left-3 bg-red-500 text-xs font-semibold px-3 py-1 rounded-full shadow">
              -{product.discount}%
            </div>
          )}
        </div>

        <div className="mt-4 space-y-1">
          <p className="text-sm text-gray-300">{product.productBrand || "Unknown Brand"}</p>
          <h3 className="text-lg font-semibold text-white">{product.productName}</h3>
          <div className="flex items-center text-sm gap-2">
  <div className="flex items-center gap-1 text-yellow-400">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < Math.floor(product.ratings) ? "text-yellow-400" : "text-gray-500"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
    <span className="text-gray-300">({product.ratings.toFixed(1)})</span>
  </div>

  <div
    className={`ml-auto px-3 py-1 rounded-full text-xs font-medium ${
      product.stockQuantity === 0
        ? "bg-red-500 text-white"
        : product.stockQuantity < 5
        ? "bg-yellow-400 text-black"
        : "bg-green-500 text-white"
    }`}
  >
    {product.stockQuantity === 0
      ? "Out of Stock"
      : `${product.stockQuantity} in stock`}
  </div>
     </div>

          <div className="flex items-center space-x-3 mt-1">
            <span className="text-xl font-bold text-white">Rs {discountPrice}</span>
            {product.discount > 0 && (
              <span className="text-sm line-through text-gray-400">Rs {product.productPrice}</span>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between gap-2">
        <Button
          onClick={handleEdit}
          variant="outline"
          className="w-1/2 flex items-center justify-center text-black gap-1"
        >
          <Pencil className="w-4 h-4 text-black"/> Edit
        </Button>
        <Button
          onClick={handleDelete}
          variant="destructive"
          className="w-1/2 flex items-center justify-center gap-1"
        >
          <Trash2 className="w-4 h-4" /> Delete
        </Button>
      </CardFooter>
    </Card>
  )
}
