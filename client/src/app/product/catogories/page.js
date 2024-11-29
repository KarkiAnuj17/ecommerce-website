import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const categories = [
  {
    name: "Electronics",
    slug: "electronics",
    image: "/electronics.webp",
  },
  {
    name: "Sports",
    slug: "sports",
    image: "/",
  },
  {
    name: "Fashion",
    slug: "fashion",
    image: "/fashion.webp",
  },
  {
    name: "Books",
    slug: "books",
    image: "/books.webp",
  },
]

const Categories = () => {
  return (
    <div>
      {/* Categories */}
      <div className="max-w-6xl mx-auto py-12">
        <div className="flex justify-center gap-8">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/category/${category.slug}`}
              className="text-center"
            >
              <div className="w-24 h-24 rounded-full bg-gray-100 mb-2 flex items-center justify-center">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={100}
                  height={100}
                  className="object-cover rounded-full"
                />
              </div>
              <div className="text-sm font-medium">{category.name}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Categories