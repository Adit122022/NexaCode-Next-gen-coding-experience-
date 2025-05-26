import {Router} from 'express'
import { authenticateUser, logout, profile } from '../controllers/user.controller.js';
import {body} from 'express-validator'
import { protect } from '../middlewares/user.middleware.js';
 const route = Router();

//  /api/auth/ ----> register and login
  route.post('/',
   body('email').isEmail().withMessage("Email sahi se DAAL 😾"),
   body('password').isLength({min:6}).withMessage("Password must be 6 digits  😾")
   ,authenticateUser)

  route.get('/logout' , protect, logout)
// api/auth/profile  --> profile
route.get('/profile' ,protect,profile) 

  export default route;