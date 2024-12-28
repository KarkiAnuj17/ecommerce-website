'use client'
import React from "react";
import { Input, Button, Divider, Select, SelectItem } from "@nextui-org/react";
import { RadioGroup, Radio } from "@nextui-org/react";
import { useFormik } from "formik";
import axios from "axios";
import ProductList from "./product-list";
import CustomNavbar from "@/component/navbar/header/page";

const AddProducts = () => {
  const formik = useFormik({
    initialValues: {
      productName: "",
      productPrice: 0,
      productBrand: "",
      stockQuantity: 0,
      discount: 0,
      isFeatured: "",
      colorOption: [],
    },
    onSubmit: (values) => {
      addProducts(values);
    },
  });

  const addProducts = async (values) => {
    const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/products`,values);
    if (data) alert("Product successfully added");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <CustomNavbar />

      <div className="flex justify-center items-center bg-white py-6 shadow-sm">
        <h1 className="text-3xl font-bold text-gray-700">Add a New Product</h1>
      </div>

      <div className="container mx-auto m-3">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
          <form onSubmit={formik.handleSubmit}>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h2 className="text-lg font-medium mb-2">Product Name</h2>
                <Input
                  id="productName"
                  name="productName"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.productName}
                  placeholder="Enter product name"
                  className="w-full"
                />
              </div>

              <div>
                <h2 className="text-lg font-medium mb-2">Product Price</h2>
                <Input
                  id="productPrice"
                  name="productPrice"
                  type="number"
                  onChange={formik.handleChange}
                  value={formik.values.productPrice}
                  placeholder="Enter product price"
                  className="w-full"
                />
              </div>

              <div>
                <h2 className="text-lg font-medium mb-2">Product Brand</h2>
                <Input
                  id="productBrand"
                  name="productBrand"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.productBrand}
                  placeholder="Enter product brand"
                  className="w-full"
                />
              </div>

              <div>
                <h2 className="text-lg font-medium mb-2">Stock Quantity</h2>
                <Input
                  id="stockQuantity"
                  name="stockQuantity"
                  type="number"
                  onChange={formik.handleChange}
                  value={formik.values.stockQuantity}
                  placeholder="Enter stock quantity"
                  className="w-full"
                />
              </div>

              <div className="col-span-2">
                <h2 className="text-lg font-medium mb-2">Is Featured?</h2>
                <RadioGroup
                  orientation="horizontal"
                  onChange={(e) =>
                    formik.setFieldValue("isFeatured", e.target.value === "true")
                  }
                  className="space-x-6"
                >
                  <Radio value="true">Yes</Radio>
                  <Radio value="false">No</Radio>
                </RadioGroup>
              </div>

              <div>
                <h2 className="text-lg font-medium mb-2">Discount Price</h2>
                <Input
                  id="discount"
                  name="discount"
                  type="number"
                  onChange={formik.handleChange}
                  value={formik.values.discount}
                  placeholder="Enter discount price"
                  className="w-full"
                />
              </div>

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
            </div>

            <div className="mt-6">
              <Button type="submit" className="bg-black text-white w-full">
                Add Product
              </Button>
            </div>
          </form>
        </div>
      </div>

      <div className="mt-12">
      
      </div>
    </div>
  );
};

export default AddProducts;
