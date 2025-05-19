import cookieParser from 'cookie-parser'
import express from 'express';
 import morgan  from 'morgan'
const app = express();

app.set('view engine', 'ejs');
app.set('views', "./src/views");
app.use(cookieParser())
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

 import userAuth from './routes/auth.routes.js'
 app.use('/api/auth' , userAuth)

export default app;