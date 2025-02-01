"use client";

import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const CategoryPage = () => {
  const params = useParams(); 
  const [categoryDetail, setCategoryDetail] = useState(null);
  const [error, setError] = useState(null);

  const fetchCategoryDetails = async () => {
    try {
      const { data } = await axios.get(`http://localhost:4000/categories/${params.id}`); 
      setCategoryDetail(data);
    } catch (error) {
      console.error("Error fetching category details:", error);
      setError("Failed to load category details.");
    }
  };

  useEffect(() => {
    fetchCategoryDetails();
  }, [params.id]); 

  if (error) {
    return (
      <div className="p-4 bg-gray-50 rounded-lg shadow-lg">
        <p className="text-red-500 text-center">{error}</p>
      </div>
    );
  }

  return (
    <div className="p-4 bg-gray-50 rounded-lg shadow-lg">
      {categoryDetail ? (
        <div className="flex  items-center space-y-4">
          <Image
            src={`http://localhost:4000/uploads/${categoryDetail.categoryImage}`}
            alt={categoryDetail.categoryName}
            width={70}
            height={70}
            className="object-cover rounded-full border border-gray-300"
          />
          <h1 className="text-3xl font-semibold text-gray-800 p-2">
            {categoryDetail.categoryName}
          </h1>
        </div>
      ) : (
        <p className="text-gray-500 text-center">Loading category details...</p>
      )}
    </div>
  );
};

export default CategoryPage;
