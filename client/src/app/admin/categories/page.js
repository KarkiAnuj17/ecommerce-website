"use client"
import React from "react"
import { Input, Button, Textarea } from "@nextui-org/react"
import { useFormik } from "formik"
import * as Yup from "yup"
import axios from "axios"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"

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
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      await addCategory(values)
      resetForm()
      setSubmitting(false)
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white pt-12">
        <Card className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md shadow-xl rounded-xl w-full">
          <CardHeader className="border-b border-white/20">
            <CardTitle className="text-3xl font-semibold text-white">Add New Category</CardTitle>
            <CardDescription className="text-gray-300">
              Fill in the details to add a new category to your inventory
            </CardDescription>
          </CardHeader>

          <CardContent className="pt-6">
            <form onSubmit={formik.handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <label
                  htmlFor="categoryName"
                  className={`text-sm font-medium ${formik.touched.categoryName && formik.errors.categoryName ? "text-red-400" : "text-gray-200"}`}
                >
                  Category Name
                </label>
                <Input
                  id="categoryName"
                  name="categoryName"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.categoryName}
                  placeholder="Enter category name"
                  className={`bg-white/5 border-white/20 text-white placeholder:text-gray-400 ${formik.touched.categoryName && formik.errors.categoryName ? "border-red-400" : ""}`}
                />
                {formik.touched.categoryName && formik.errors.categoryName && (
                  <p className="text-sm text-red-400">{formik.errors.categoryName}</p>
                )}
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="categoryDescription"
                  className={`text-sm font-medium ${formik.touched.categoryDescription && formik.errors.categoryDescription ? "text-red-400" : "text-gray-200"}`}
                >
                  Category Description
                </label>
                <Textarea
                  id="categoryDescription"
                  name="categoryDescription"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.categoryDescription}
                  placeholder="Enter category description"
                  rows={4}
                  className={`bg-white/5 border-white/20 text-white placeholder:text-gray-400 ${formik.touched.categoryDescription && formik.errors.categoryDescription ? "border-red-400" : ""}`}
                />
                {formik.touched.categoryDescription && formik.errors.categoryDescription && (
                  <p className="text-sm text-red-400">{formik.errors.categoryDescription}</p>
                )}
                <p className="text-xs text-gray-400">{formik.values.categoryDescription.length}/500 characters</p>
              </div>

              {/* Image Upload */}
              <div className="space-y-2">
                <label
                  htmlFor="categoryImage"
                  className={`text-sm font-medium ${formik.touched.categoryImage && formik.errors.categoryImage ? "text-red-400" : "text-gray-200"}`}
                >
                  Category Image
                </label>
                <label
                  htmlFor="categoryImage"
                  className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-white/20 rounded-md cursor-pointer hover:bg-white/10 transition-colors"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg className="w-8 h-8 mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                    <p className="text-sm text-gray-400">
                      {formik.values.categoryImage ? formik.values.categoryImage.name : "Click to upload or drag and drop"}
                    </p>
                  </div>
                  <Input
                    id="categoryImage"
                    name="categoryImage"
                    type="file"
                    className="hidden"
                    onChange={(event) =>
                      formik.setFieldValue("categoryImage", event.currentTarget.files[0])
                    }
                  />
                </label>
                {formik.touched.categoryImage && formik.errors.categoryImage && (
                  <p className="text-sm text-red-400">{formik.errors.categoryImage}</p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full bg-white text-gray-900 hover:bg-gray-200 transition-colors"
                disabled={formik.isSubmitting}
              >
                {formik.isSubmitting ? "Adding Category..." : "Add Category"}
              </Button>
            </form>
          </CardContent>
        </Card>
    </div>
  )
}

export default AddCategory
