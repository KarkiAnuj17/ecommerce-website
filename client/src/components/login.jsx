"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useFormik } from "formik"
import * as Yup from "yup"
import axios from "axios"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useDispatch } from "react-redux"
import { loginUser } from "@/redux/reducerSlices/userSlice"

export default function LoginPage() {
  const router = useRouter()
  const dispatch = useDispatch()

  const loginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  })

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      try {
        const { data } = await axios.post(`http://localhost:4000/login`, values)
        if (data) {
          const userData = {
            email: values.email, 
            ...data.user, 
            fullName: data.user?.fullName || data.fullName,
            id: data.user?.id || data.id,
          }

          if (data.token) {
            localStorage.setItem("token", data.token)
          }

          localStorage.setItem("user", JSON.stringify(userData))

          // Dispatch to Redux with complete user data
          dispatch(loginUser(userData))

          router.push("/landing-page")
        }
      } catch (error) {
        console.error("Login error:", error)
      }
    },
  })

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-12 py-10 gap-8">
        <div className="flex items-center text-white gap-3 text-3xl font-bold tracking-tight">
          <svg className="h-7 w-7 " fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          LuxeMarket
        </div>

        <div className="space-y-4 text-white">
          <h1 className="text-4xl font-bold">Premium Shopping Experience</h1>
          <p className="text-purple-300 text-sm">
            Discover the finest deals in style. LuxeMarket brings you quality, security, and elegance—all in one place.
          </p>
        </div>

        <div className="space-y-4">
          {[
            {
              icon: (
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              ),
              title: "Secure Shopping",
              desc: "Every transaction is protected with enterprise-grade security",
            },
            {
              icon: (
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              ),
              title: "Verified Sellers",
              desc: "Shop confidently from our curated list of trusted vendors",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="flex items-start gap-4 border text-white border-purple-500/30 rounded-xl p-4 backdrop-blur-sm bg-white/5 hover:bg-white/10 transition"
            >
              <div className="p-2 border border-purple-500/30 rounded-full">{feature.icon}</div>
              <div>
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="text-sm text-purple-300">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center p-6 bg-white dark:bg-slate-900">
        <div className="w-full max-w-md space-y-6 bg-white/10 dark:bg-white/5 border border-white/20 backdrop-blur-md rounded-xl p-8 shadow-xl">
          <div className="text-center">
            <div className="lg:hidden flex items-center justify-center gap-2 text-2xl font-semibold mb-4 text-purple-700 dark:text-purple-300">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              LuxeMarket
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Welcome back</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Sign in to your account</p>
          </div>

          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                Password
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              {formik.touched.password && formik.errors.password && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.password}</p>
              )}
            </div>

            <Button type="submit" className="w-full bg-purple-700 hover:bg-purple-800 text-white">
              Sign In
            </Button>
          </form>

          <p className="text-center text-sm text-slate-500 dark:text-slate-400">
            Don't have an account?{" "}
            <Link href="/register" className="text-purple-600 dark:text-purple-400 font-medium hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
