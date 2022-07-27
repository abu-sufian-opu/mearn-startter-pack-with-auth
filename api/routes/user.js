import express from 'express';
import { createUser, deleteUser, getAllUsers, getSingleUser, updateUser, userLogin, userRegister } from '../controllers/userController.js';
import { adminMiddleware } from '../middlewares/adminMiddleware.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import { userMiddleware } from '../middlewares/userMiddleware.js';



//init router
const router = express.Router();

//routes Rest API
router.route('/').get(adminMiddleware, getAllUsers).post(adminMiddleware, createUser);
router.route('/:id').get(userMiddleware, getSingleUser).put(userMiddleware, updateUser).patch(userMiddleware, updateUser).delete(userMiddleware, deleteUser);

//User Auth routes
router.post('/login', userLogin);
router.post('/register', userRegister);

//export default router
export default router;