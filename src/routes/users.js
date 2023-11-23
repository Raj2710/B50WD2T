import express from 'express'
import UserController from '../controller/users.js'
const router = express.Router()

router.get('/',UserController.getUsers)

export default router;