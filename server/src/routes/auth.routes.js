import {Router} from 'express'
import { logout, profile, signin, signup } from '../controllers/user.controller.js';
import {body} from 'express-validator'
import { protect } from '../middlewares/user.middleware.js';
 const route = Router();

//  /api/auth/signup ----> register
  route.post('/signup',
   body('email').isEmail().withMessage("Email sahi se DAAL 😾"),
   body('password').isLength({min:6}).withMessage("Password must be 6 digits  😾")
   ,signup)

//  /api/auth/signin ----> login
 route.post('/signin',
   body('email').isEmail().withMessage("Email sahi se DAAL 😾"),
   body('password').isLength({min:6}).withMessage("Password must be 6 digits  😾")
   ,signin)

  route.get('/logout' , protect, logout)
// api/auth/profile  --> profile
route.get('/profile' ,protect,profile) 

  export default route;