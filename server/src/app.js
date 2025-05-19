import cookieParser from 'cookie-parser'
import express from 'express';
 import morgan  from 'morgan';
 import cors from 'cors';
const app = express();

app.set('view engine', 'ejs');
app.set('views', "./src/views");
app.use(cookieParser())
app.use(cors({origin:"http://localhost:5173" , credentials:true}))
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

 import userAuth from './routes/auth.routes.js'
 app.use('/api/auth' , userAuth)

export default app;