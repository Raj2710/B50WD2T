import express from 'express'
import UserRoutes from './user.js'
import BlogsRoutes from './blogs.js'
import DashboardRoutes from './dashboard.js'
const router = express.Router()

router.get('/',(req,res)=>{
    res.status(200).send(`
    <h1 style="text-align:center">Welcome to Backend of Blog App</h1>`)
})

router.use('/user',UserRoutes)
router.use('/blogs',BlogsRoutes)
router.use('/dashboard',DashboardRoutes)

export default router