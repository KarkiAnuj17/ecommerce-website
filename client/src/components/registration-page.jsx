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
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

const RegistrationPage = () => {
  const router = useRouter()

  const validationSchema = Yup.object({
    fullName: Yup.string().required('Full name is required').min(2, 'Minimum 2 characters'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Minimum 6 characters').required('Password is required'),
    confirmPassword: Yup.string()
      .min(6, 'Minimum 6 characters')
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Confirm your password'),
    role: Yup.string().oneOf(['Buyer', 'Seller'], 'Invalid role').required('Select a role').notOneOf([''], 'Select a role'),
    gender: Yup.string().oneOf(['Male', 'Female', 'Others'], 'Invalid gender').required('Select gender'),
    phoneNumber: Yup.string().matches(/^\d{10}$/, 'Must be 10 digits').optional(),
  })

  const formik = useFormik({
    initialValues: {
      fullName: '',
      role: '',
      gender: '',
      phoneNumber: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: async (values,) => {
      try {
    const { data } = await axios.post("http://localhost:4000/register", values);
    toast(data?.message || "Signup successful");
    
  } catch (err) {
    toast(err?.response?.data?.message || "Signup failed. Please try again.");
  }
    },
  })

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="hidden lg:flex items-center justify-center p-12 text-white relative overflow-hidden">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="z-10 max-w-lg">
          <div className="flex items-center mb-12">
            <Icons.logo className="w-12 h-12 mr-4" />
            <h1 className="text-5xl font-bold">LuxeMarket</h1>
          </div>
          <p className="text-3xl font-semibold mb-4">Premium Shopping<br /><span className="text-white/70">Experience</span></p>
          <p className="text-lg text-white/70 mb-8">Join LuxeMarket, the exclusive marketplace where quality meets style. Create an account and start your luxury journey.</p>
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20">
              <div className="flex items-center space-x-4 mb-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Icons.shield className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Secure Shopping</h3>
              </div>
              <p className="text-white/70 text-sm">All transactions are encrypted with enterprise-grade protection.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20">
              <div className="flex items-center space-x-4 mb-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Icons.verified className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Verified Sellers</h3>
              </div>
              <p className="text-white/70 text-sm">We partner only with trusted and verified sellers for quality assurance.</p>
            </div>
          </div>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-radial opacity-10 pointer-events-none" />
      </div>

      <div className="flex items-center justify-center p-6 lg:p-12 bg-white relative">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="w-full max-w-md bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 space-y-8">
          <div className="text-center">
            <div className="flex justify-center items-center mb-4">
              <Icons.logo className="w-8 h-8 mr-2" />
              <h2 className="text-3xl font-bold text-black">LuxeMarket</h2>
            </div>
            <p className="text-neutral-600">Create your account and start shopping in style.</p>
          </div>

          <form onSubmit={formik.handleSubmit} className="space-y-5">
            <div>
              <Label htmlFor="fullName">Full Name</Label>
              <Input id="fullName" {...formik.getFieldProps('fullName')} className={`mt-1 ${formik.touched.fullName && formik.errors.fullName ? 'border-red-500' : ''}`} />
              {formik.touched.fullName && formik.errors.fullName && <p className="text-sm text-red-500">{formik.errors.fullName}</p>}
            </div>

            <div>
              <Label htmlFor="role">Role</Label>
              <Select value={formik.values.role} onValueChange={(val) => formik.setFieldValue('role', val)}>
                <SelectTrigger className={`mt-1 ${formik.touched.role && formik.errors.role ? 'border-red-500' : ''}`}>
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Buyer">Buyer</SelectItem>
                  <SelectItem value="Seller">Seller</SelectItem>
                </SelectContent>
              </Select>
              {formik.touched.role && formik.errors.role && <p className="text-sm text-red-500">{formik.errors.role}</p>}
            </div>

            <div>
              <Label>Gender</Label>
              <RadioGroup value={formik.values.gender} onValueChange={(val) => formik.setFieldValue('gender', val)} className="flex gap-4 mt-1">
                {['Male', 'Female', 'Others'].map((gender) => (
                  <div key={gender} className="flex items-center space-x-2">
                    <RadioGroupItem value={gender} id={gender.toLowerCase()} />
                    <Label htmlFor={gender.toLowerCase()}>{gender}</Label>
                  </div>
                ))}
              </RadioGroup>
              {formik.touched.gender && formik.errors.gender && <p className="text-sm text-red-500">{formik.errors.gender}</p>}
            </div>

            <div>
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input id="phoneNumber" type="tel" {...formik.getFieldProps('phoneNumber')} className={`mt-1 ${formik.touched.phoneNumber && formik.errors.phoneNumber ? 'border-red-500' : ''}`} />
              {formik.touched.phoneNumber && formik.errors.phoneNumber && <p className="text-sm text-red-500">{formik.errors.phoneNumber}</p>}
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" {...formik.getFieldProps('email')} className={`mt-1 ${formik.touched.email && formik.errors.email ? 'border-red-500' : ''}`} />
              {formik.touched.email && formik.errors.email && <p className="text-sm text-red-500">{formik.errors.email}</p>}
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" {...formik.getFieldProps('password')} className={`mt-1 ${formik.touched.password && formik.errors.password ? 'border-red-500' : ''}`} />
              {formik.touched.password && formik.errors.password && <p className="text-sm text-red-500">{formik.errors.password}</p>}
            </div>

            <div>
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input id="confirmPassword" type="password" {...formik.getFieldProps('confirmPassword')} className={`mt-1 ${formik.touched.confirmPassword && formik.errors.confirmPassword ? 'border-red-500' : ''}`} />
              {formik.touched.confirmPassword && formik.errors.confirmPassword && <p className="text-sm text-red-500">{formik.errors.confirmPassword}</p>}
            </div>

            <Button type="submit" className="w-full bg-black hover:bg-neutral-800 text-white">
              Create Account
            </Button>

            <div className="text-center text-sm">
              Already have an account? <Link href="/login" className="font-semibold text-black hover:underline">Sign in</Link>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  )
}

export default RegistrationPage
