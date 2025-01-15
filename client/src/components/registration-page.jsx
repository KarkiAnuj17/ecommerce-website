'use client'

import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Icons } from "@/components/icons"
import { motion } from "framer-motion"
import axios from 'axios'
import Link from 'next/link'
import { useToast } from '@/hooks/use-toast'
import { ToastAction } from '@radix-ui/react-toast'

const RegistrationPage = () => {
  const { toast } = useToast()
const validationSchema = Yup.object({
  fullName: Yup.string().required('Full name is required'),
  phoneNumber: Yup.number()
    .typeError('Phone number must be a number')
    .required('Phone number is required'),
  gender: Yup.string().oneOf(['Male', 'Female', 'Others']).required('Gender is required'),
  role: Yup.string().oneOf(['Buyer', 'Seller']).required('Role is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
})
    const formik = useFormik({
    initialValues: {
      fullName: '',
      phoneNumber: '',
      gender: '',
      role: 'Buyer',
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      handleRegister(values);
    },
    },
  )
  const handleRegister = async (values) => {
    try {
      const { data } = await axios.post(`http://localhost:4000/register`, values);
      if (data)   toast({
        title: data,
        action: <ToastAction altText="Try again">Proceed to Login</ToastAction>,
      })
    } catch (error) {
      toast({
        variant: "destructive",
        title: error?.response?.data,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      })
      // alert(error?.response?.data);
    }
  };

  return (
    (<div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
      {/* Left side - Hero Section */}
      <div
        className="hidden lg:block relative bg-black p-12 text-white overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10">
          <div className="flex items-center mb-12">
            <Icons.logo className="w-12 h-12 mr-4" />
            <h1 className="text-5xl font-bold tracking-tight">
              LuxeMarket
            </h1>
          </div>
          <div className="mb-12">
            <p className="text-3xl font-semibold mb-6">
              Premium Shopping
              <br />
              <span className="text-neutral-400">Experience</span>
            </p>
            <p className="text-lg text-neutral-300 max-w-md">
              Join LuxeMarket, our exclusive marketplace where quality meets style. Create an account
              and discover a world of premium products.
            </p>
          </div>

          <div className="grid gap-8">
            <div
              className="border border-neutral-800 p-6 rounded-xl hover:border-neutral-700 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center">
                  <Icons.shield className="w-6 h-6 text-neutral-400" />
                </div>
                <h3 className="text-xl font-semibold">Secure Shopping</h3>
              </div>
              <p className="text-neutral-400">
                Every transaction is protected with enterprise-grade security
              </p>
            </div>

            <div
              className="border border-neutral-800 p-6 rounded-xl hover:border-neutral-700 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center">
                  <Icons.verified className="w-6 h-6 text-neutral-400" />
                </div>
                <h3 className="text-xl font-semibold">Verified Sellers</h3>
              </div>
              <p className="text-neutral-400">
                Shop with confidence from our curated list of trusted vendors
              </p>
            </div>
          </div>
        </motion.div>

        {/* Abstract Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent)]" />
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.1),transparent)]" />
        </div>
      </div>
      {/* Right side - Registration Form */}
      <div className="flex items-center justify-center p-6 lg:p-12 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-md space-y-8">
          <div className="text-center">
            <div className="flex justify-center items-center mb-4">
              <Icons.logo className="w-8 h-8 mr-2" />
              <h2 className="text-3xl font-bold tracking-tight text-black">LuxeMarket</h2>
            </div>
            <p className="mt-2 text-neutral-600">
              Create your account and start shopping with distinction
            </p>
          </div>

          <form onSubmit={formik.handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-neutral-800">Full Name</Label>
              <Input
                id="fullName"
                {...formik.getFieldProps('fullName')}
                className={`bg-neutral-50 border-neutral-200 focus:border-black focus:ring-black transition-colors
                  ${formik.errors.fullName && formik.touched.fullName ? 'border-red-500' : ''}`} />
              {formik.touched.fullName && formik.errors.fullName && (
                <p className="text-sm text-red-500">{formik.errors.fullName}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phoneNumber" className="text-neutral-800">Phone Number</Label>
              <Input
                id="phoneNumber"
                type="tel"
                {...formik.getFieldProps('phoneNumber')}
                className={`bg-neutral-50 border-neutral-200 focus:border-black focus:ring-black transition-colors
                  ${formik.errors.phoneNumber && formik.touched.phoneNumber ? 'border-red-500' : ''}`} />
              {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                <p className="text-sm text-red-500">{formik.errors.phoneNumber}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label className="text-neutral-800">Gender</Label>
              <RadioGroup
                onValueChange={(value) => formik.setFieldValue('gender', value)}
                className="flex space-x-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Male" id="male" />
                  <Label htmlFor="male">Male</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Female" id="female" />
                  <Label htmlFor="female">Female</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Others" id="others" />
                  <Label htmlFor="others">Others</Label>
                </div>
              </RadioGroup>
              {formik.touched.gender && formik.errors.gender && (
                <p className="text-sm text-red-500">{formik.errors.gender}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="role" className="text-neutral-800">Role</Label>
              <Select
                value={formik.values.role}
                onValueChange={(value) => formik.setFieldValue('role', value)}>
                <SelectTrigger
                  className="bg-neutral-50 border-neutral-200 focus:border-black focus:ring-black transition-colors">
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Buyer">Buyer</SelectItem>
                  <SelectItem value="Seller">Seller</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-neutral-800">Email</Label>
              <Input
                id="email"
                type="email"
                {...formik.getFieldProps('email')}
                className={`bg-neutral-50 border-neutral-200 focus:border-black focus:ring-black transition-colors
                  ${formik.errors.email && formik.touched.email ? 'border-red-500' : ''}`} />
              {formik.touched.email && formik.errors.email && (
                <p className="text-sm text-red-500">{formik.errors.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-neutral-800">Password</Label>
              <Input
                id="password"
                type="password"
                {...formik.getFieldProps('password')}
                className={`bg-neutral-50 border-neutral-200 focus:border-black focus:ring-black transition-colors
                  ${formik.errors.password && formik.touched.password ? 'border-red-500' : ''}`} />
              {formik.touched.password && formik.errors.password && (
                <p className="text-sm text-red-500">{formik.errors.password}</p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full bg-black hover:bg-neutral-800 text-white transition-colors"
              size="lg">
              Create Account
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-neutral-200" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-neutral-500">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="w-full">
                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4" />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853" />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05" />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335" />
                </svg>
                Google
              </Button>
              <Button variant="outline" className="w-full">
                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                  <path
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"
                    fill="#1877F2" />
                </svg>
                Facebook
              </Button>
            </div>
            <div className="text-center text-sm">
              Already have an account?{' '}
              <Link href="/login" className="font-semibold text-black hover:underline">
                Sign in
              </Link>
            </div>
          </form>
        </motion.div>
      </div>
    </div>)
  );
}

export default RegistrationPage;