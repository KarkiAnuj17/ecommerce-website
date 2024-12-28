'use client';
import React from 'react';
import { Input, Button, Divider, Select, SelectItem } from "@nextui-org/react";
import { RadioGroup, Radio } from "@nextui-org/react";
import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const Register = () => {
  const validationSchema = Yup.object().shape({
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
      .min(10, 'Too Short!')
      .max(15, 'Too Long!')
      .required('*'),
    email: Yup.string().email('Invalid email').required('*'),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      middleName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
      gender: '',
      role: '',
    },
    validationSchema,
    onSubmit: (values) => {
      handleRegister(values);
    },
  });

  const handleRegister = async (values) => {
    try {
      const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/register`, values);
      if (data) alert("Registered successfully");
    } catch (error) {
      alert("Registration failed");
    }
  };

  return (
    <div className='flex justify-center items-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'>
      <div className='items-center bg-gray-100 border m-36 border-gray-300 p-4 rounded-3xl'>
        <div className='flex gap-3'>
          <img src='/logo.png' width={170} height={30} alt='Hustle Logo' />
          <div className="max-w-md">
            <h1 className="font-serif font-bold text-5xl">REDSTORE</h1>
            <Divider className="my-4" />
            <div className="font-mono text-3xl font-bold">
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
              <h2 className='p-1 font-mono text-base'>First Name</h2>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
                placeholder="Enter your first name"
                className={`${formik.touched.firstName && formik.errors.firstName ? 'border-red-500' : ''}`}
              />
              <div className="text-red-600 text-sm">{formik.touched.firstName && formik.errors.firstName}</div>
            </div>
            <div className='flex-col'>
              <h2 className='p-1 font-mono text-base'>Middle Name</h2>
              <Input
                id="middleName"
                name="middleName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.middleName}
                placeholder="Enter your middle name"
              />
            </div>
          </div>
          <div className='flex-col'>
            <h2 className='p-1 font-mono text-base'>Last Name</h2>
            <Input
              id="lastName"
              name="lastName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
              placeholder="Enter your last name"
            />
            <div className="text-red-600 text-sm">{formik.touched.lastName && formik.errors.lastName}</div>
          </div>
          <div className='flex-col'>
            <h2 className='p-1 font-mono text-base'>Phone Number</h2>
            <Input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phoneNumber}
              placeholder="Enter your phone number"
            />
            <div className="text-red-600 text-sm">{formik.touched.phoneNumber && formik.errors.phoneNumber}</div>
          </div>
          <div className='flex-col'>
            <h2 className='p-1 font-mono text-base'>Gender</h2>
            <RadioGroup
              value={formik.values.gender}
              onChange={(event) => formik.setFieldValue('gender', event.target.value)}
            >
              <Radio value="Male">Male</Radio>
              <Radio value="Female">Female</Radio>
              <Radio value="Other">Other</Radio>
            </RadioGroup>
          </div>
          <div className='flex-col'>
            <h2 className='p-1 font-mono text-base'>Role</h2>
            <Select
              name="role"
              onChange={(value) => formik.setFieldValue('role', value)}
              value={formik.values.role}
            >
              <SelectItem key="Buyer" value="Buyer">Buyer</SelectItem>
              <SelectItem key="Seller" value="Seller">Seller</SelectItem>
            </Select>
          </div>
          <div className='flex-col'>
            <h2 className='p-1 font-mono text-base'>Email</h2>
            <Input
              id="email"
              name="email"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              placeholder="Enter your email"
            />
            <div className="text-red-600 text-sm">{formik.touched.email && formik.errors.email}</div>
          </div>
          <div className='flex-col'>
            <h2 className='p-1 font-mono text-base'>Password</h2>
            <Input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              placeholder="Enter your password"
            />
            <div className="text-red-600 text-sm">{formik.touched.password && formik.errors.password}</div>
          </div>
          <div className='flex-col'>
            <h2 className='p-1 font-mono text-base'>Confirm Password</h2>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
              placeholder="Confirm your password"
            />
            <div className="text-red-600 text-sm">{formik.touched.confirmPassword && formik.errors.confirmPassword}</div>
          </div>
          <Button type="submit" className="bg-black p-2 m-2 text-white">REGISTER</Button>
        </form>
        <h2 className='p-3 font-mono text-base'>
          Already have an account? <Link href='/login' className='m-1 text-blue-300'>Sign In</Link> instead
        </h2>
      </div>
    </div>
  );
}

export default Register;
