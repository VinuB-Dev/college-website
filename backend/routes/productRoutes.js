import express from 'express'
const router = express.Router()
import {
  getProducts,
  getProductById,
} from '../controllers/productController.js'

// Fetch all products
// GET /api/products
// Public
router.route('/').get(getProducts)

// Fetch sinle products
// GET /api/products/:id
// Public
router.route('/:id').get(getProductById)

export default router
