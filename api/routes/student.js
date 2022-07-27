import express from 'express';
import { createStudent, deleteStudent, getAllStudents, getSingleStudent, updateStudent } from '../controllers/studentController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';


//init router
const router = express.Router();

//routes
router.route('/').get(authMiddleware, getAllStudents).post(authMiddleware, createStudent);
router.route('/:id').get(authMiddleware, getSingleStudent).put(authMiddleware, updateStudent).patch(authMiddleware, updateStudent).delete(authMiddleware, deleteStudent);

//export default router
export default router;