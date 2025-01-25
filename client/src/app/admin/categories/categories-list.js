'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

async function fetchCategories() {
  const res = await fetch("http://localhost:4000/categories", { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }
  return res.json();
}

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    async function loadCategories() {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (err) {
        setError(err.message);
      }
    }

    loadCategories();
  }, []);

  const handleClick = (categoryName) => {
    router.push(`/categories/${categoryName}`);
  };

  if (error) {
    return (
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">Categories</h1>
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <div>
      <div className="max-w-6xl mx-auto py-12">
        <div className="flex justify-center gap-8">
          {categories.map((category) => (
            <div
              key={category._id || category.name}
              className="text-center cursor-pointer"
              onClick={() => handleClick(category.categoryName)}
            >
              <div className="w-24 h-24 rounded-full bg-gray-100 mb-2 flex items-center justify-center">
                <Image
                  src={`http://localhost:4000/uploads/${category.categoryImage}`}
                  alt={category.categoryName}
                  width={100}
                  height={100}
                  className="object-cover rounded-full"
                />
              </div>
              <div className="text-sm font-medium">{category.categoryName}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
