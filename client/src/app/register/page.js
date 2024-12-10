'use client'
import React from 'react'
import { Input, Button, Divider, Select, SelectItem } from "@nextui-org/react";
import { RadioGroup, Radio } from "@nextui-org/react";
import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const Register = () => {
  const userSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('*'),
    password: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('*'),
      
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password should match')
      .required('*'),

    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('*'),

    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('*'),

    phoneNumber: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('*'),
      
    email: Yup.string().email('Invalid email').required('*'),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      middleName: '',
      lastName: '',
      phoneNumber: '',
      email:'',
      username: '',
      password: '',
      confirmPassword: ''
    },
    
    onSubmit: values => {
      handleRegister(values)
    },
  });
  const handleRegister = async (values)=>{
    const {data}= await  axios.post(`${process.env.NEXT_PUBLIC_API_URL}/register`, values);
    if(data) alert("registered successfully")
    };
  return (
    <div className='flex justify-center items-center  bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 '>
      <div className='items-center bg-gray-100 border m-36 border-gray-300 p-4 rounded-3xl '>
        <div className='flex gap-3'>
          <img src='/logo.png' width={170} height={30} alt='Hustle Logo' />
          <div className="max-w-md">
            <div className="space-y-1">
              <h1 className="font-serif font-bold text-5xl">REDSTORE</h1>
            </div>
            <Divider className="my-4" />
            <div className="font-mono text-3xl font-bold bd-green-500">
              <div>Register</div>
            </div>
          </div>
        </div>
        <br />
        <h2 className='p-1 font-mono text-base'>Please Register your account</h2>
        <br />
        <form onSubmit={formik.handleSubmit}>
          <div className='flex gap-3'>
            <div className='flex-col'>
              <div className="flex flex-row items-center space-x-2">
              <h2 className='p-1 font-mono text-base'>First Name</h2>
              <div className="text-red-600 text-sm">
              {formik.errors.firstName }
              </div>
              </div>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.firstName}
                placeholder={"Enter your firstname"}
              />
            </div>
            <div className='flex-col'>
              <h2 className='p-1 font-mono text-base'>Middle Name</h2>
              <Input
                id="middleName"
                name="middleName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.middleName}
                placeholder={"Enter your middlename"}
              />
            </div>
          </div>
          <div className="flex flex-row items-center space-x-2">
            <h2 className='p-1 font-mono text-base'>Last Name</h2>
            <div className="text-red-600 text-sm">
            {formik.errors.lastName }
            </div>
          </div>
          
          <Input
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName}
            placeholder={"Enter your lastname"}
          />
          <div className="flex flex-row items-center space-x-2">
          <h2 className='p-1 font-mono text-base'>Phone Number</h2>
            <div className="text-red-600 text-sm">
            {formik.errors.phoneNumber}
            </div>
          </div>
          <Input
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            onChange={formik.handleChange}
            value={formik.values.phoneNumber}
            placeholder={"Enter your phone number"}
          />
          <h2 className='p-1 font-mono text-base'>Gender</h2>
    <RadioGroup  onChange={(e)=>formik.setFieldValue('gender', e.target.defaultValue)}>
      <Radio value="Male">Male</Radio>
      <Radio value="Female">Female</Radio>
      <Radio value="Other">Other</Radio>
    </RadioGroup>

    <h2 className='p-1 font-mono text-base'>Role</h2>
          
<Select name="role" onChange={(e)=>formik.setFieldValue('role', e.target.value)}>
    <SelectItem key="Buyer">Buyer</SelectItem>
    <SelectItem key="Seller">Seller</SelectItem>
</Select>
          {/* <h2 className='p-1 font-mono text-base'>Username</h2>
          {formik.errors.username }
          <Input
            id="username"
            name="username"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.username}
            placeholder={"Enter your username"}
          /> */}
          <div className="flex flex-row items-center space-x-2">
        <h2 className="p-1 font-mono text-base">Email</h2>
      <div className="text-red-600 text-sm">
      {formik.errors.email}
    </div>
   </div>
        <Input
          id="email"
          name="email"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder={"Enter your email"}
        />
        <br />
        <div className="flex flex-row items-center space-x-2">
        <h2 className="p-1 font-mono text-base">Password</h2>
      <div className="text-red-600 text-sm">
      {formik.errors.password}
    </div>
   </div>
        <Input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder={"Enter your password"}
        />
        <br />
        {/* <div className="flex flex-row items-center space-x-2">
        <h2 className='p-1 font-mono text-base'>Confirm Password</h2>
          <div className="text-red-600 text-sm">
          {formik.errors.confirmPassword }
          </div>
        </div>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
            placeholder={"Enter your confirm password"}
          /> */}
          <Button type='submit' className='bg-black p-2 m-2 text-white ' >REGISTER </Button>
        </form>
        <br />
        <h2 className='p-3 font-mono text-base'>Already have an Account? <Link href='/login' className='m-1 text-blue-300'>Sign In</Link> Instead</h2>
      </div>
    </div>
  );
}

export default Register;