import express from 'express'
import CouponController from '../controller/Coupons.js'
const router = express.Router()

router.get('/',CouponController.getAllCoupons)
router.get('/:id',CouponController.getCouponsById)
router.post('/',CouponController.createCoupon)
router.put('/:id',CouponController.editCoupon)
router.delete('/:id',CouponController.deleteCoupon)


export default router