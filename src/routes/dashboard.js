import express from 'express'

import Auth from '../common/auth.js'
import DashboardController from '../controllers/dashboard.js'

const router = express.Router()
router.get('/',Auth.validate,DashboardController.getAllBlogs)

export default router