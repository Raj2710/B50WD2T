import express from 'express'
import UserController from '../controllers/users.js'
const router = express.Router()

router.post('/signup',UserController.create)

router.post('/login',UserController.login)

export default router