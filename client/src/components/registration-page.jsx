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
              <Button
                variant="outline"
                type="button"
                className="border-neutral-200 hover:bg-neutral-50 transition-colors">
                <Icons.google className="mr-2 h-4 w-4" />
                Google
              </Button>
              <Button
                variant="outline"
                type="button"
                className="border-neutral-200 hover:bg-neutral-50 transition-colors">
                <Icons.apple className="mr-2 h-4 w-4" />
                Apple
              </Button>
            </div>
            <div className="text-center text-sm">
              Already have an account?{' '}
              <Link href="/signin" className="font-semibold text-black hover:underline">
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