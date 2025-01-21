'use client'
import React from "react";
import { Input, Button, SelectItem, Select } from "@nextui-org/react";
import { RadioGroup, Radio } from "@nextui-org/react";
import { useFormik } from "formik";
import axios from "axios";
import ProductList from "./product-list";

const AddProducts = () => {
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
    },
    validate: (values) => {
      const errors = {};
      if (!values.productName) errors.productName = "Product name is required";
      if (!values.productPrice || values.productPrice <= 0)
        errors.productPrice = "Price must be greater than 0";
      if (!values.productBrand) errors.productBrand = "Brand is required";
      if (!values.stockQuantity || values.stockQuantity < 0)
        errors.stockQuantity = "Stock quantity cannot be negative";
      if (values.discount < 0 || values.discount > 100)
        errors.discount = "Discount must be between 0 and 100";
      if (values.colorOption.length === 0)
        errors.colorOption = "At least one color is required";
      return errors;
    },
    onSubmit: (values, { resetForm }) => {
      addProduct(values);
      resetForm();
    },
  });

  const addProduct = async (values) => {
    const formData = new FormData();
    formData.append("productName", values.productName);
    formData.append("productPrice", values.productPrice);
    formData.append("productBrand", values.productBrand);
    formData.append("stockQuantity", values.stockQuantity);
    formData.append("discount", values.discount);
    formData.append("isFeatured", values.isFeatured);
    formData.append("colorOption", JSON.stringify(values.colorOption));
    if (values.productImage) {
      formData.append("productImage", values.productImage);
    }

    try {
      const { data } = await axios.post(`http://localhost:4000/products`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Product added successfully");
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const handleColorChange = (color) => {
    const colors = [...formik.values.colorOption];
    if (colors.includes(color)) {
      formik.setFieldValue(
        "colorOption",
        colors.filter((c) => c !== color)
      );
    } else {
      formik.setFieldValue("colorOption", [...colors, color]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex justify-center items-center bg-white py-6 shadow-sm">
        <h1 className="text-3xl font-bold text-gray-700">Add a New Product</h1>
      </div>

      <div className="container mx-auto m-3">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
          <form onSubmit={formik.handleSubmit}>
            <div className="grid grid-cols-2 gap-6">
              {/* Product Name */}
              <div>
                <label className="text-lg font-medium mb-2 block">Product Name</label>
                <Input
                  id="productName"
                  name="productName"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.productName}
                  placeholder="Enter product name"
                  className="w-full"
                />
                {formik.errors.productName && (
                  <p className="text-red-500 text-sm">{formik.errors.productName}</p>
                )}
              </div>

              {/* Product Price */}
              <div>
                <label className="text-lg font-medium mb-2 block">Product Price</label>
                <Input
                  id="productPrice"
                  name="productPrice"
                  type="number"
                  onChange={formik.handleChange}
                  value={formik.values.productPrice}
                  placeholder="Enter product price"
                  className="w-full"
                />
                {formik.errors.productPrice && (
                  <p className="text-red-500 text-sm">{formik.errors.productPrice}</p>
                )}
              </div>

              {/* Product Brand */}
              <div>
                <label className="text-lg font-medium mb-2 block">Product Brand</label>
                <Input
                  id="productBrand"
                  name="productBrand"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.productBrand}
                  placeholder="Enter product brand"
                  className="w-full"
                />
                {formik.errors.productBrand && (
                  <p className="text-red-500 text-sm">{formik.errors.productBrand}</p>
                )}
              </div>

              {/* Stock Quantity */}
              <div>
                <label className="text-lg font-medium mb-2 block">Stock Quantity</label>
                <Input
                  id="stockQuantity"
                  name="stockQuantity"
                  type="number"
                  onChange={formik.handleChange}
                  value={formik.values.stockQuantity}
                  placeholder="Enter stock quantity"
                  className="w-full"
                />
                {formik.errors.stockQuantity && (
                  <p className="text-red-500 text-sm">{formik.errors.stockQuantity}</p>
                )}
              </div>

              {/* Is Featured */}
              <div className="col-span-2">
                <label className="text-lg font-medium mb-2 block">Is Featured?</label>
                <RadioGroup
                  orientation="horizontal"
                  onChange={(value) =>
                    formik.setFieldValue("isFeatured", value === "true")
                  }
                  className="space-x-6"
                >
                  <Radio value="true">Yes</Radio>
                  <Radio value="false">No</Radio>
                </RadioGroup>
              </div>

              {/* Discount */}
              <div>
                <label className="text-lg font-medium mb-2 block">Discount (%)</label>
                <Input
                  id="discount"
                  name="discount"
                  type="number"
                  onChange={formik.handleChange}
                  value={formik.values.discount}
                  placeholder="Enter discount"
                  className="w-full"
                />
                {formik.errors.discount && (
                  <p className="text-red-500 text-sm">{formik.errors.discount}</p>
                )}
              </div>

              {/* Color Options */}
              <div>
                <h2 className="text-lg font-medium mb-2">Select Colors</h2>
                <Select
                  selectionMode="multiple"
                  name="colorOption"
                  placeholder="Select color(s)"
                  onChange={(e) =>
                    formik.setFieldValue("colorOption", e.target.value.split(","))
                  }
                  className="w-full"
                >
                  <SelectItem key="Black">Black</SelectItem>
                  <SelectItem key="Red">Red</SelectItem>
                  <SelectItem key="Blue">Blue</SelectItem>
                  <SelectItem key="Green">Green</SelectItem>
                </Select>
              </div>

              {/* Product Image */}
              <div className="col-span-2">
                <label className="text-lg font-medium mb-2 block">Product Image</label>
                <Input
                  id="productImage"
                  name="productImage"
                  type="file"
                  onChange={(event) =>
                    formik.setFieldValue("productImage", event.currentTarget.files[0])
                  }
                  className="w-full"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-6">
              <Button
                type="submit"
                className="bg-black text-white w-full"
                disabled={formik.isSubmitting}
              >
                {formik.isSubmitting ? "Adding Product..." : "Add Product"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
