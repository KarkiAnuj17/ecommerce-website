"use client"
import { Input, Button, SelectItem, Select, Textarea } from "@nextui-org/react"
import { RadioGroup, Radio } from "@nextui-org/react"
import { useFormik } from "formik"
import * as Yup from "yup"
import axios from "axios"
import { useToast } from "@/hooks/use-toast"
import { ToastAction } from "@radix-ui/react-toast"

const AddProducts = () => {
  const { toast } = useToast()
  const formik = useFormik({
    initialValues: {
      productName: "",
      productPrice: "",
      productBrand: "",
      stockQuantity: "",
      discount: "",
      isFeatured: false,
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
      // categories: Yup.string().required("Category selection is required"),
      productDescription: Yup.string()
        .required("Product description is required")
        .max(500, "Description must be 500 characters or less"),
    }),
    onSubmit: (values, { resetForm }) => {
      addProduct(values)
      resetForm()
    },
  })

  const addProduct = async (values) => {
    const formData = new FormData()
    formData.append("productName", values.productName)
    formData.append("productPrice", values.productPrice)
    formData.append("productBrand", values.productBrand)
    formData.append("stockQuantity", values.stockQuantity)
    formData.append("discount", values.discount)
    formData.append("isFeatured", values.isFeatured.toString())
    formData.append("colorOption", JSON.stringify(values.colorOption))
    if (values.productImage) {
      formData.append("productImage", values.productImage)
    }
    // formData.append("categories", values.categories)
    formData.append("productDescription", values.productDescription)

    try {
      const { data } = await axios.post(`http://localhost:4000/products`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })

      if (data)
        toast({
          title: data,
          action: <ToastAction altText="Try again">View product</ToastAction>,
        })
    } catch (error) {
      toast({
        variant: "destructive",
        title: error?.response?.data,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      })
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex justify-center items-center bg-white py-6 shadow-sm">
        <h1 className="text-3xl font-bold text-gray-700">Add a New Product</h1>
      </div>

      <div className="container mx-auto p-6">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
          <form onSubmit={formik.handleSubmit}>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="text-lg font-medium block mb-2">Product Name</label>
                <Input
                  id="productName"
                  name="productName"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.productName}
                  placeholder="Enter product name"
                  className="w-full"
                />
                {formik.touched.productName && formik.errors.productName && (
                  <p className="text-red-500 text-sm">{formik.errors.productName}</p>
                )}
              </div>

              <div>
                <label className="text-lg font-medium block mb-2">Product Price</label>
                <Input
                  id="productPrice"
                  name="productPrice"
                  type="number"
                  onChange={formik.handleChange}
                  value={formik.values.productPrice}
                  placeholder="Enter product price"
                  className="w-full"
                />
                {formik.touched.productPrice && formik.errors.productPrice && (
                  <p className="text-red-500 text-sm">{formik.errors.productPrice}</p>
                )}
              </div>

              <div>
                <label className="text-lg font-medium block mb-2">Product Brand</label>
                <Input
                  id="productBrand"
                  name="productBrand"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.productBrand}
                  placeholder="Enter product brand"
                  className="w-full"
                />
                {formik.touched.productBrand && formik.errors.productBrand && (
                  <p className="text-red-500 text-sm">{formik.errors.productBrand}</p>
                )}
              </div>

              <div>
                <label className="text-lg font-medium block mb-2">Stock Quantity</label>
                <Input
                  id="stockQuantity"
                  name="stockQuantity"
                  type="number"
                  onChange={formik.handleChange}
                  value={formik.values.stockQuantity}
                  placeholder="Enter stock quantity"
                  className="w-full"
                />
                {formik.touched.stockQuantity && formik.errors.stockQuantity && (
                  <p className="text-red-500 text-sm">{formik.errors.stockQuantity}</p>
                )}
              </div>

              <div className="col-span-2">
                <label className="text-lg font-medium block mb-2">Is Featured?</label>
                <RadioGroup
                  orientation="horizontal"
                  value={formik.values.isFeatured.toString()}
                  onValueChange={(value) => formik.setFieldValue("isFeatured", value === "true")}
                  className="space-x-6"
                >
                  <Radio value="true">Yes</Radio>
                  <Radio value="false">No</Radio>
                </RadioGroup>
              </div>

              <div>
                <label className="text-lg font-medium block mb-2">Discount (%)</label>
                <Input
                  id="discount"
                  name="discount"
                  type="number"
                  onChange={formik.handleChange}
                  value={formik.values.discount}
                  placeholder="Enter discount"
                  className="w-full"
                />
                {formik.touched.discount && formik.errors.discount && (
                  <p className="text-red-500 text-sm">{formik.errors.discount}</p>
                )}
              </div>

              <div>
                <label className="text-lg font-medium block mb-2">Select Colors</label>
                <Select
                  selectionMode="multiple"
                  name="colorOption"
                  placeholder="Select color(s)"
                  selectedKeys={formik.values.colorOption}
                  onSelectionChange={(keys) => formik.setFieldValue("colorOption", Array.from(keys))}
                  className="w-full"
                >
                  <SelectItem key="Black">Black</SelectItem>
                  <SelectItem key="Red">Red</SelectItem>
                  <SelectItem key="Blue">Blue</SelectItem>
                  <SelectItem key="Green">Green</SelectItem>
                </Select>
                {formik.touched.colorOption && formik.errors.colorOption && (
                  <p className="text-red-500 text-sm">{formik.errors.colorOption}</p>
                )}
              </div>
              {/* <div>
                <label className="text-lg font-medium block mb-2">Select Categories</label>
                <Select
                  selectionMode="single"
                  name="categories"
                  placeholder="Select category"
                  onChange={(e) => formik.setFieldValue("categories", e.target.value)}
                  className="w-full"
                >
                  <SelectItem key="Electronics">Electronics</SelectItem>
                  <SelectItem key="Clothing">Clothing</SelectItem>
                  <SelectItem key="Home">Home</SelectItem>
                  <SelectItem key="Books">Books</SelectItem>
                </Select>
                {formik.touched.categories && formik.errors.categories && (
                  <p className="text-red-500 text-sm">{formik.errors.categories}</p>
                )}
              </div> */}

              <div className="col-span-2">
                <label className="text-lg font-medium block mb-2">Product Description</label>
                <Textarea
                  id="productDescription"
                  name="productDescription"
                  type="textarea"
                  onChange={formik.handleChange}
                  value={formik.values.productDescription}
                  placeholder="Enter product description"
                  className="w-full"
                />
                {formik.touched.productDescription && formik.errors.productDescription && (
                  <p className="text-red-500 text-sm">{formik.errors.productDescription}</p>
                )}
              </div>

              <div className="col-span-2">
                <label className="text-lg font-medium block mb-2">Product Image</label>
                <Input
                  id="productImage"
                  name="productImage"
                  type="file"
                  onChange={(event) => formik.setFieldValue("productImage", event.currentTarget.files[0])}
                  className="w-full"
                />
                {formik.touched.productImage && formik.errors.productImage && (
                  <p className="text-red-500 text-sm">{formik.errors.productImage}</p>
                )}
              </div>
            </div>

            <div className="mt-6">
              <Button type="submit" className="bg-black text-white w-full" disabled={formik.isSubmitting}>
                {formik.isSubmitting ? "Adding Product..." : "Add Product"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddProducts

