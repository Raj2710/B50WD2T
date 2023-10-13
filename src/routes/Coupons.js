const express = require('express')
const CouponController = require('../controller/Coupons')
const router = express.Router()

router.get('/',CouponController.getAllCoupons)
router.get('/:id',CouponController.getCouponsById)
router.post('/',CouponController.createCoupon)
router.put('/:id',CouponController.editCoupon)
router.delete('/:id',CouponController.deleteCoupon)


module.exports = router