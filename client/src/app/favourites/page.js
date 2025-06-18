'use client'
import React from 'react'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { Heart, ShoppingBag } from 'lucide-react'
import { ProductCard } from '@/components/ProductCard'
import CustomNavbar from '@/components/navbar/header/page'

const FavoritesPage = () => {
  const favoritesItem = useSelector(state => state.product.favoritesItem)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <CustomNavbar />

      <div className="container mx-auto px-4 pt-24">
        {favoritesItem.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-20"
          >
            <div className="w-32 h-32 rounded-full bg-white/10 backdrop-blur-lg flex items-center justify-center mx-auto mb-8 shadow-lg">
              <ShoppingBag className="w-16 h-16 text-white/60" />
            </div>
            <h2 className="text-3xl font-semibold text-white mb-4">No favorites yet</h2>
            <p className="text-white/70 text-lg mb-8 max-w-md mx-auto">
              Start exploring our premium collection and add products to your favorites
            </p>
            <motion.a
              href="/"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-300"
            >
              Start Shopping
            </motion.a>
          </motion.div>
        ) : (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              {favoritesItem.map((item, index) => (
                <motion.div
                  key={item._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <ProductCard product={item} />
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
      </div>
    </div>
  )
}

export default FavoritesPage
