"use client"
import React from "react"
import { Input, Button, Textarea, File } from "@nextui-org/react"
import { useFormik } from "formik"
import * as Yup from "yup"
import axios from "axios"

const AddCategory = () => {
  const formik = useFormik({
    initialValues: {
      categoryName: "",
      categoryDescription: "",
      categoryImage: null,
    },
    validationSchema: Yup.object({
      categoryName: Yup.string().required("Category name is required"),
      categoryDescription: Yup.string().max(500, "Description must be 500 characters or less"),
      categoryImage: Yup.mixed().required("Category image is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      addCategory(values)
      resetForm()
    },
  })

  const addCategory = async (values) => {
    const formData = new FormData()
    formData.append("categoryName", values.categoryName)
    formData.append("categoryDescription", values.categoryDescription)
    if (values.categoryImage) {
      formData.append("categoryImage", values.categoryImage)
    }

    try {
      const { data } = await axios.post(`http://localhost:4000/categories`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      alert("Category added successfully")
    } catch (error) {
      console.error("Error adding category:", error)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex justify-center items-center bg-white py-6 shadow-sm">
        <h1 className="text-3xl font-bold text-gray-700">Add a New Category</h1>
      </div>

      <div className="container mx-auto p-6">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
          <form onSubmit={formik.handleSubmit}>
            <div className="space-y-6">
              <div>
                <label className="text-lg font-medium block mb-2">Category Name</label>
                <Input
                  id="categoryName"
                  name="categoryName"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.categoryName}
                  placeholder="Enter category name"
                  className="w-full"
                />
                {formik.touched.categoryName && formik.errors.categoryName && (
                  <p className="text-red-500 text-sm">{formik.errors.categoryName}</p>
                )}
              </div>

              <div>
                <label className="text-lg font-medium block mb-2">Category Description</label>
                <Textarea
                  id="categoryDescription"
                  name="categoryDescription"
                  onChange={formik.handleChange}
                  value={formik.values.categoryDescription}
                  placeholder="Enter category description"
                  rows={4}
                  className="w-full"
                />
                {formik.touched.categoryDescription && formik.errors.categoryDescription && (
                  <p className="text-red-500 text-sm">{formik.errors.categoryDescription}</p>
                )}
              </div>

              <div>
                <label className="text-lg font-medium block mb-2">Category Image</label>
                <Input
                  id="categoryImage"
                  name="categoryImage"
                  type="file"
                  onChange={(event) => formik.setFieldValue("categoryImage", event.currentTarget.files[0])}
                  className="w-full"
                />
                {formik.touched.categoryImage && formik.errors.categoryImage && (
                  <p className="text-red-500 text-sm">{formik.errors.categoryImage}</p>
                )}
              </div>
            </div>

            <div className="mt-6">
              <Button type="submit" className="bg-black text-white w-full" disabled={formik.isSubmitting}>
                {formik.isSubmitting ? "Adding Category..." : "Add Category"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddCategory
