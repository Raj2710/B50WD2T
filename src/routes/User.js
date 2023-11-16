import express from 'express'
import UserController from '../controller/User.js'
import Auth from '../common/auth.js'
const router = express.Router()

router.get('/',Auth.validate,Auth.adminGaurd,UserController.getUsers)
router.get('/:id',UserController.getUserById)
router.post('/',UserController.create)
router.put('/:id',UserController.editUserById)
router.delete('/:id',UserController.deleteUserById)
router.post('/login',UserController.login)
router.post('/forget-password',UserController.forgotPassword)
router.post('/reset-password',Auth.validate,UserController.resetPassword)


export default router