import express from 'express'
import { UserController } from '../controllers/user.controller'


//initiating the router
export const router = express.Router()

//add User route
router.post('/',UserController.addUser)

//get Users
router.get('/', UserController.getAllUsers)

//get single User
router.get('/:id', UserController.getUser)

// //update a User
// router.put('/:id', UserController.updateUser)

// //delete a User
// router.delete('/:id', UserController.deleteUser)