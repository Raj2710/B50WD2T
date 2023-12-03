import { Router } from "express";
import UserRouter from './user.js'
import DashboardRouter from './dashboard.js'
const router = Router()

router.get('/',(req,res)=>res.status(200).send(`<h1>Express</h1><div>Application Health is Good</div>`))

router.use('/user',UserRouter)
router.use('/dashboard',DashboardRouter)

export default router