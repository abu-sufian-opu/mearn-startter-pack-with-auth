import mongoose from 'mongoose';


//create a mongoDB connection

const mongoDBConnect = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_STRING);
        console.log(`Mongo DB Connected Successfully`.bgBlue.black);
    } catch (error) {
        console.log(error);
    }
}


//export MongoDB Connection
export default mongoDBConnect;