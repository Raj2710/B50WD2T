import express from 'express'
import Controller from '../controller/index.js'
import UserRouter from './users.js'
import DashboardRouter from './dashboard.js'
const router = express.Router()

router.get('/',Controller.readWriteFile)


router.use('/user',UserRouter)
router.use('/dashboard',DashboardRouter)

export default router;