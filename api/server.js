import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import studentRoute from './routes/student.js'
import userRoute from './routes/user.js'
import mongoDBConnect from './config/db.js';
import errorhandler from './middlewares/errorHandler.js';
import cookieParser from 'cookie-parser';




//init express
const app = express();
dotenv.config();


//init env variables
const PORT = process.env.SERVER_PORT || 5000;

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended : false }));
app.use(cookieParser());

//routes reswt api
app.use('/api/student', studentRoute);

//routes auth api
app.use('/api/user', userRoute);

//express error handler
app.use(errorhandler);

//listen server
app.listen(PORT, () => {
    mongoDBConnect();
    console.log(`server running on port ${PORT}`.bgGreen.black);
})