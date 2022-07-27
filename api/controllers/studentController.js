import bcrypt from 'bcryptjs';
import Student from "../models/Student.js";
import createError from './errorController.js';


/**
 * @access public
 * @route /api/student
 * @method GET
 */

export const getAllStudents = async (req, res, next) => {
    try {
       const students = await Student.findd();
       res.status(200).json(students);
    } catch (error) {
       next(createError( 404, 'ki hobe amar'));
    }
}

/**
 * @access public
 * @route /api/student
 * @method POST
 */

export const createStudent = async (req, res) => {

    const salt = await bcrypt.genSalt(10);
    const hass_pass = await bcrypt.hash(req.body.password, salt);
    try {
        const student = await Student.create({...req.body, password : hass_pass}); 
        res.status(200).json(student);
     } catch (error) {
         console.log(error);
     }
}

/**
 * @access public
 * @route /api/student/:id
 * @method GET
 */

export const getSingleStudent = async (req, res, next) => {
    const {id} = req.params;
    try {
        const single_student = await Student.findById(id);
        if(!single_student){
            return next(createError(404, 'Single Student Not Found'))
           }
        if(single_student){
            res.status(200).json(single_student);
        }
        
    } catch (error) {
        next(error);
    }
}

/**
 * @access public
 * @route /api/student/:id
 * @method PUT/PATCH
 */

export const updateStudent = async (req, res) => {
    const {id} = req.params;
    try {
        const student = await Student.findByIdAndUpdate(id, req.body, { new: true }); 
        res.status(200).json(student);
     } catch (error) {
         console.log(error);
     }
}

/**
 * @access public
 * @route /api/student/:id
 * @method DELETE
 */

export const deleteStudent = async (req, res) => {
    const {id} = req.params;
    try {
        const student = await Student.findByIdAndDelete(id); 
        res.status(200).json(student);
     } catch (error) {
         console.log(error);
     }
}