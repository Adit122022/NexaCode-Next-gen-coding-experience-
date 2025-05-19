import {Router} from 'express'
import { signin, signup } from '../controllers/user.controller.js';
import {body} from 'express-validator'
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

  export default route;