"use client"
import React from 'react'
import { Input, Button, Divider , Select, SelectItem } from "@nextui-org/react";
import { RadioGroup, Radio } from "@nextui-org/react";
import { useFormik } from 'formik';
import axios from 'axios';
import ProductList from './product-list';


const addProducts = () => {
  const formik = useFormik({
    initialValues: {
      "productName":'', 
      "productPrice": 0,
      "productBrand":'',
      "stockQuantity":0,
      "discount":0,
      "isFeatured":'',
      "colorOption":[] ,
    },
    onSubmit: values => {
      addProducts(values)
    },
  });
  const addProducts = async (values)=>{
    const {data}= await  axios.post(`${process.env.NEXT_PUBLIC_API_URL}/products`, values)
    if(data) alert("products successfully added")
    }
  return (
  <div>
  <ProductList/>
 <div className='flex justify-center items-center m-18'>
      <div className='items-center bg-gray-100 border border-gray-300 m-10 p-4 rounded-3xl'>
        <div className='flex gap-3'>

          <img src='/logo.png' width={180} height={50} alt='Hustle Logo' />
          <div className="max-w-md">
            <div className="space-y-1">
              <h1 className="font-serif font-bold text-5xl">RedStore</h1>
            </div>
            <Divider className="my-4" />
            <div className="font-mono text-3xl font-bold bd-green-500">
              <div>Add produts</div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <form onSubmit={formik.handleSubmit}>
          <div >
            <div className='flex-col'>
              <h2 className='p-1 font-mono text-base'>Product Name</h2>
              {formik.errors.productName }
              <Input
                id="productName"
                name="productName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.productName}
                placeholder={"Enter your Product Name"}
              />
            </div>
            <div className='flex-col'>
              <h2 className='p-1 font-mono text-base'>Product Price</h2>
              <Input
                id="productPrice"
                name="productPrice"
                type="Number"
                onChange={formik.handleChange}
                value={formik.values.productPrice}
                placeholder={"Enter your Product Price"}
              />
            </div>
          </div>
          <h2 className='p-1 font-mono text-base'>Product Brand</h2>
          {formik.errors.productBrand }
          <Input
            id="productBrand"
            name="productBrand"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.productBrand}
            placeholder={"Enter your Product Brand"}
          />
          <h2 className='p-1 font-mono text-base'>Stock Quantity</h2>
          {formik.errors.stockQuantity}
          <Input
            id="stockQuantity"
            name="stockQuantity"
            type="Number"
            onChange={formik.handleChange}
            value={formik.values.stockQuantity}
            placeholder={"Enter your Stock Quantity"}
          />
      <h2 className='p-1 font-mono text-base'>Is Featured?</h2>
<RadioGroup onChange={(e) => formik.setFieldValue('isFeatured', e.target.value === 'true')}>
  <Radio value="true">Yes</Radio>  
  <Radio value="false">No</Radio> 
</RadioGroup>

          <h2 className='p-1 font-mono text-base'>Discount price</h2>
          {formik.errors.discount }
          <Input
            id="discount"
            name="discount"
            type="Number"
            onChange={formik.handleChange}
            value={formik.values.discount}
            placeholder={"Enter your discount price"}
          />
            {formik.errors.discount }
<br/>
<h2 className='p-1 font-mono text-base'>Select Colour</h2>
    <div>
    <Select selectionMode="multiple" name="colorOption"  placeholder="Select color"
 onChange={(e)=>formik.setFieldValue('colorOption', e.target.value.split(","))}>
    <SelectItem key="Black">Black</SelectItem>
    <SelectItem key="Red">Red</SelectItem>
    <SelectItem key="Blue">Blue</SelectItem>
    <SelectItem key="Green">Green</SelectItem>
</Select>
    </div>
    <br/>
          
          <Button type='submit' className='bg-black p-2 m-2 text-white ' >Add product </Button>
        </form>
      </div>
    </div>
  </div>
   
  );
}

export default addProducts;