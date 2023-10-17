import express from 'express'
import CouponsRoutes from './Coupons.js'
import UserRoutes from './User.js'
const router = express.Router()

router.use('/coupons',CouponsRoutes)
router.use('/user',UserRoutes)

export default router