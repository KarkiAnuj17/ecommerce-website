'use client'
import React from 'react'
import { Badge, Avatar, Input, Button, Divider } from "@nextui-org/react";
import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const Login = () => {
  const loginSchema = Yup.object().shape({
    // username: Yup.string()
    //   .min(2, 'Too Short!')
    //   .max(50, 'Too Long!')
    //   .required('*'),
    email: Yup.string().email('Invalid email').required('*'),
    password: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('*'),
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      email: ''
    },
    validationSchema: loginSchema,
    onSubmit: values => {
      handleLogin(values)
    },
  });
  const handleLogin = async (values)=>{
    const {data}= await  axios.post(`${process.env.NEXT_PUBLIC_API_URL}/login`, values);
    if(data) alert("login successfully")
    };
  return (
  <div>  
    <form onSubmit={formik.handleSubmit} className='flex justify-center items-center m-18'>
      <div className='items-center bg-gray-100 border border-gray-300 m-10 p-4 rounded-3xl'>
        <div className='flex gap-3'>
        
        <img src='/logo.png' width={170} height={30} alt='Hustle Logo' />
        <div className="max-w-md">
            <div className="space-y-1">
              <h1 className="font-serif font-bold text-5xl">REDSTORE</h1>
            </div>
            <Divider className="my-4" />
            <div className="font-mono text-3xl font-bold bd-green-500">
              <div>Login</div>
            </div>
          </div>
        </div>
        <br />
        <h2 className='font-bold font-mono text-2xl'>Hi, Welcome back!</h2>
        <h2 className='p-1 font-mono text-base'>Please login to your account</h2>
        <br />
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
        <Button type='submit' className='bg-black p-2 m-2 text-white'>LOGIN</Button>
        
        <h2 className='p-3 font-mono text-base'>Not registered yet? <Link href='/register' className='m-1 text-blue-300'>Create an account</Link></h2>
      </div>
    </form>
    </div>
  );
}

export default Login;
