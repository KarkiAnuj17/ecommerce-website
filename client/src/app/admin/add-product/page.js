"use client"

import { useState, useEffect } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import axios from "axios"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Loader2, Upload } from "lucide-react"

const AddProducts = () => {
  const [categories, setCategories] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()
  const [colorDropdownOpen, setColorDropdownOpen] = useState(false)

  const colorOptions = [
    { id: "black", label: "Black" },
    { id: "red", label: "Red" },
    { id: "blue", label: "Blue" },
    { id: "green", label: "Green" },
    { id: "white", label: "White" },
    { id: "yellow", label: "Yellow" },
  ]

  const formik = useFormik({
    initialValues: {
      productName: "",
      productPrice: "",
      productBrand: "",
      stockQuantity: "",
      discount: "",
      isFeatured: "false",
      colorOption: [],
      productImage: null,
      categories: "",
      productDescription: "",
    },
    validationSchema: Yup.object({
      productName: Yup.string().required("Product name is required"),
      productPrice: Yup.number().required("Price is required").positive("Price must be greater than 0"),
      productBrand: Yup.string().required("Brand is required"),
      stockQuantity: Yup.number().required("Stock quantity is required").min(0, "Stock quantity cannot be negative"),
      discount: Yup.number().min(0, "Discount cannot be negative").max(100, "Discount cannot exceed 100%"),
      colorOption: Yup.array()
        .of(Yup.string())
        .min(1, "At least one color is required")
        .required("Color selection is required"),
      productImage: Yup.mixed().required("Product image is required"),
      categories: Yup.string().required("Category selection is required"),
      productDescription: Yup.string()
        .required("Product description is required")
        .max(500, "Description must be 500 characters or less"),
    }),
    onSubmit: async (values, { resetForm }) => {
      setIsLoading(true)
      try {
        await addProduct(values)
        resetForm()
      } finally {
        setIsLoading(false)
      }
    },
  })

  const fetchCategories = async () => {
    try {
      const { data } = await axios.get("http://localhost:4000/categories")
      setCategories(data)
      if (data.length > 0) {
        formik.setFieldValue("categories", data[0]._id)
      }
    } catch (error) {
      console.error("Error fetching categories:", error)
      toast({
        variant: "destructive",
        title: "Failed to fetch categories",
        description: "Please try again later",
      })
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (colorDropdownOpen && !event.target.closest(".relative")) {
        setColorDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [colorDropdownOpen])

  const addProduct = async (values) => {
    const formData = new FormData()
    formData.append("productName", values.productName)
    formData.append("productPrice", values.productPrice)
    formData.append("productBrand", values.productBrand)
    formData.append("stockQuantity", values.stockQuantity)
    formData.append("discount", values.discount)
    formData.append("isFeatured", values.isFeatured)
    formData.append("colorOption", JSON.stringify(values.colorOption))
    if (values.productImage) {
      formData.append("productImage", values.productImage)
    }
    formData.append("categories", values.categories)
    formData.append("productDescription", values.productDescription)

    try {
      const { data } = await axios.post(`http://localhost:4000/products`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })

      toast({
        title: "Product added successfully",
        description: data,
      })

      return data
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Failed to add product",
        description: error?.response?.data || "An error occurred",
      })
      throw error
    }
  }

  const handleColorChange = (color) => {
    const currentColors = [...formik.values.colorOption]

    if (currentColors.includes(color)) {
      formik.setFieldValue(
        "colorOption",
        currentColors.filter((c) => c !== color),
      )
    } else {
      formik.setFieldValue("colorOption", [...currentColors, color])
    }
  }

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white pt-11">
        <Card className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md shadow-xl rounded-xl">
          <CardHeader className="border-b border-white/20">
            <CardTitle className="text-3xl font-semibold text-white">Add New Product</CardTitle>
            <CardDescription className="text-gray-300">
              Fill in the details to add a new product to your inventory
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={formik.handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="productName"
                    className={`text-sm font-medium ${formik.touched.productName && formik.errors.productName ? "text-red-400" : "text-gray-200"}`}
                  >
                    Product Name
                  </Label>
                  <Input
                    id="productName"
                    name="productName"
                    placeholder="Enter product name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.productName}
                    className={`bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-purple-500 ${formik.touched.productName && formik.errors.productName ? "border-red-400" : ""}`}
                  />
                  {formik.touched.productName && formik.errors.productName && (
                    <p className="text-sm text-red-400">{formik.errors.productName}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="productPrice"
                    className={`text-sm font-medium ${formik.touched.productPrice && formik.errors.productPrice ? "text-red-400" : "text-gray-200"}`}
                  >
                    Price
                  </Label>
                  <Input
                    id="productPrice"
                    name="productPrice"
                    type="number"
                    placeholder="Enter product price"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.productPrice}
                    className={`bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-purple-500 ${formik.touched.productPrice && formik.errors.productPrice ? "border-red-400" : ""}`}
                  />
                  {formik.touched.productPrice && formik.errors.productPrice && (
                    <p className="text-sm text-red-400">{formik.errors.productPrice}</p>
                  )}
                </div>

                {/* Product Brand */}
                <div className="space-y-2">
                  <Label
                    htmlFor="productBrand"
                    className={`text-sm font-medium ${formik.touched.productBrand && formik.errors.productBrand ? "text-red-400" : "text-gray-200"}`}
                  >
                    Brand
                  </Label>
                  <Input
                    id="productBrand"
                    name="productBrand"
                    placeholder="Enter product brand"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.productBrand}
                    className={`bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-purple-500 ${formik.touched.productBrand && formik.errors.productBrand ? "border-red-400" : ""}`}
                  />
                  {formik.touched.productBrand && formik.errors.productBrand && (
                    <p className="text-sm text-red-400">{formik.errors.productBrand}</p>
                  )}
                </div>

                {/* Stock Quantity */}
                <div className="space-y-2">
                  <Label
                    htmlFor="stockQuantity"
                    className={`text-sm font-medium ${formik.touched.stockQuantity && formik.errors.stockQuantity ? "text-red-400" : "text-gray-200"}`}
                  >
                    Stock Quantity
                  </Label>
                  <Input
                    id="stockQuantity"
                    name="stockQuantity"
                    type="number"
                    placeholder="Enter stock quantity"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.stockQuantity}
                    className={`bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-purple-500 ${formik.touched.stockQuantity && formik.errors.stockQuantity ? "border-red-400" : ""}`}
                  />
                  {formik.touched.stockQuantity && formik.errors.stockQuantity && (
                    <p className="text-sm text-red-400">{formik.errors.stockQuantity}</p>
                  )}
                </div>

                {/* Discount */}
                <div className="space-y-2">
                  <Label
                    htmlFor="discount"
                    className={`text-sm font-medium ${formik.touched.discount && formik.errors.discount ? "text-red-400" : "text-gray-200"}`}
                  >
                    Discount (%)
                  </Label>
                  <Input
                    id="discount"
                    name="discount"
                    type="number"
                    placeholder="Enter discount percentage"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.discount}
                    className={`bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-purple-500 ${formik.touched.discount && formik.errors.discount ? "border-red-400" : ""}`}
                  />
                  {formik.touched.discount && formik.errors.discount && (
                    <p className="text-sm text-red-400">{formik.errors.discount}</p>
                  )}
                </div>

                {/* Category */}
                <div className="space-y-2">
                  <Label
                    htmlFor="categories"
                    className={`text-sm font-medium ${formik.touched.categories && formik.errors.categories ? "text-red-400" : "text-gray-200"}`}
                  >
                    Category
                  </Label>
                  <Select
                    name="categories"
                    value={formik.values.categories}
                    onValueChange={(value) => formik.setFieldValue("categories", value)}
                  >
                    <SelectTrigger
                      className={`bg-white border-gray-300 text-gray-900 focus:ring-2 focus:ring-purple-500 ${formik.touched.categories && formik.errors.categories ? "border-red-400" : ""}`}
                    >
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 text-white border-white/20">
                      {categories.map((category) => (
                        <SelectItem key={category._id} value={category._id}>
                          {category.categoryName}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {formik.touched.categories && formik.errors.categories && (
                    <p className="text-sm text-red-400">{formik.errors.categories}</p>
                  )}
                </div>
              </div>

              {/* Featured Product */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-200">Featured Product</Label>
                <RadioGroup
                  name="isFeatured"
                  value={formik.values.isFeatured}
                  onValueChange={(value) => formik.setFieldValue("isFeatured", value)}
                  className="flex space-x-6"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="true" id="featured-yes" className="text-white border-white/50" />
                    <Label htmlFor="featured-yes" className="text-white">
                      Yes
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="false" id="featured-no" className="text-white border-white/50" />
                    <Label htmlFor="featured-no" className="text-white">
                      No
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Color Options */}
              <div className="space-y-2">
                <Label
                  className={`text-sm font-medium ${formik.touched.colorOption && formik.errors.colorOption ? "text-red-400" : "text-gray-200"}`}
                >
                  Available Colors
                </Label>
                <div className="relative">
                  <div
                    className={`flex min-h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer ${formik.touched.colorOption && formik.errors.colorOption ? "border-red-400" : ""}`}
                    onClick={() => setColorDropdownOpen(!colorDropdownOpen)}
                  >
                    <div className="flex flex-wrap gap-2 flex-1">
                      {formik.values.colorOption.length === 0 ? (
                        <span className="text-gray-500">Select colors</span>
                      ) : (
                        formik.values.colorOption.map((colorId) => {
                          const color = colorOptions.find((c) => c.id === colorId)
                          return (
                            <div
                              key={colorId}
                              className="flex items-center space-x-1 bg-purple-900/50 px-2 py-1 rounded-sm text-xs text-white"
                            >
                              <div
                                className="w-3 h-3 rounded-full border border-white/30"
                                style={{
                                  backgroundColor:
                                    colorId === "black"
                                      ? "#000000"
                                      : colorId === "red"
                                        ? "#ef4444"
                                        : colorId === "blue"
                                          ? "#3b82f6"
                                          : colorId === "green"
                                            ? "#10b981"
                                            : colorId === "white"
                                              ? "#ffffff"
                                              : colorId === "yellow"
                                                ? "#f59e0b"
                                                : "#6b7280",
                                }}
                              />
                              <span>{color?.label}</span>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  const updatedColors = formik.values.colorOption.filter((c) => c !== colorId)
                                  formik.setFieldValue("colorOption", updatedColors)
                                }}
                                className="ml-1 text-gray-300 hover:text-white"
                              >
                                ×
                              </button>
                            </div>
                          )
                        })
                      )}
                    </div>
                    <div className="flex items-center">
                      <svg
                        className={`h-4 w-4 text-white transition-transform ${colorDropdownOpen ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {colorDropdownOpen && (
                    <div className="absolute z-50 w-full mt-1 bg-slate-800/95 backdrop-blur-md border border-white/20 rounded-md shadow-lg">
                      <div className="p-2">
                        {colorOptions.map((color) => {
                          const isSelected = formik.values.colorOption.includes(color.id)
                          return (
                            <div
                              key={color.id}
                              className="flex items-center space-x-2 px-3 py-2 text-sm cursor-pointer hover:bg-purple-900/50 text-white rounded-sm"
                              onClick={() => {
                                const currentColors = [...formik.values.colorOption]
                                if (isSelected) {
                                  formik.setFieldValue(
                                    "colorOption",
                                    currentColors.filter((c) => c !== color.id),
                                  )
                                } else {
                                  formik.setFieldValue("colorOption", [...currentColors, color.id])
                                }
                              }}
                            >
                              <div
                                className="w-4 h-4 rounded-full border border-white/30"
                                style={{
                                  backgroundColor:
                                    color.id === "black"
                                      ? "#000000"
                                      : color.id === "red"
                                        ? "#ef4444"
                                        : color.id === "blue"
                                          ? "#3b82f6"
                                          : color.id === "green"
                                            ? "#10b981"
                                            : color.id === "white"
                                              ? "#ffffff"
                                              : color.id === "yellow"
                                                ? "#f59e0b"
                                                : "#6b7280",
                                }}
                              />
                              <span className="flex-1">{color.label}</span>
                              {isSelected && (
                                <div className="w-4 h-4 flex items-center justify-center">
                                  <svg className="w-3 h-3 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                      fillRule="evenodd"
                                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </div>
                              )}
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </div>
                {formik.touched.colorOption && formik.errors.colorOption && (
                  <p className="text-sm text-red-400">{formik.errors.colorOption}</p>
                )}
              </div>

              {/* Product Description */}
              <div className="space-y-2">
                <Label
                  htmlFor="productDescription"
                  className={`text-sm font-medium ${formik.touched.productDescription && formik.errors.productDescription ? "text-red-400" : "text-gray-200"}`}
                >
                  Product Description
                </Label>
                <Textarea
                  id="productDescription"
                  name="productDescription"
                  placeholder="Enter product description"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.productDescription}
                  className={`min-h-[120px] bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-purple-500 ${formik.touched.productDescription && formik.errors.productDescription ? "border-red-400" : ""}`}
                />
                {formik.touched.productDescription && formik.errors.productDescription && (
                  <p className="text-sm text-red-400">{formik.errors.productDescription}</p>
                )}
                <p className="text-xs text-gray-400">{formik.values.productDescription.length}/500 characters</p>
              </div>

              {/* Product Image */}
              <div className="space-y-2">
                <Label
                  htmlFor="productImage"
                  className={`text-sm font-medium ${formik.touched.productImage && formik.errors.productImage ? "text-red-400" : "text-gray-200"}`}
                >
                  Product Image
                </Label>
                <div className="flex items-center gap-4">
                  <Label
                    htmlFor="productImage"
                    className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-md cursor-pointer bg-white hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Upload className="w-8 h-8 mb-2 text-gray-500" />
                      <p className="text-sm text-gray-600">
                        {formik.values.productImage
                          ? formik.values.productImage.name
                          : "Click to upload or drag and drop"}
                      </p>
                    </div>
                    <Input
                      id="productImage"
                      name="productImage"
                      type="file"
                      className="hidden"
                      onChange={(event) => {
                        formik.setFieldValue("productImage", event.currentTarget.files[0])
                      }}
                    />
                  </Label>
                </div>
                {formik.touched.productImage && formik.errors.productImage && (
                  <p className="text-sm text-red-400">{formik.errors.productImage}</p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full bg-white text-gray-900 hover:bg-gray-200 transition-colors"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Adding Product...
                  </>
                ) : (
                  "Add Product"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default AddProducts
