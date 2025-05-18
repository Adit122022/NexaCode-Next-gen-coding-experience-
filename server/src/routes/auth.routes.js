import {Router} from 'express'
import { signup } from '../controllers/user.controller.js';
import {body} from 'express-validator'
 const route = Router();

 route.post('/signup',
   body('email').isEmail().withMessage("Email sahi se DAAL 😾"),
   body('password').isLength({min:6}).withMessage("Password must be 6 digits  😾")
   ,signup)

  export default route;