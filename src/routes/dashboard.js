import express from 'express'
import DashboardController from '../controller/dashboard.js'
const router = express.Router()

router.get('/',DashboardController.getDashboard)

export default router