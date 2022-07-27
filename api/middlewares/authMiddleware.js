import createError from "../controllers/errorController.js";
import jwt from 'jsonwebtoken';

//check user is authenticated or not
export const authMiddleware = (req, res, next) => {

 try {
    const token = req.cookies.access_token;

    //check token
    if(!token){
        return next(createError(401, 'You are not authenticated'))
    }
    
    //if loged in user
    const login_user = jwt.verify( token, process.env.JWT_SECRET);

    if(!login_user){
      return next(createError(401, 'Invalid Token'));
    }

    if(login_user){
      req.user = login_user;
      next();
    }
 } catch (error) {
    return next(error);
 }

}