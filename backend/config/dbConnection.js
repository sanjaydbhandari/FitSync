import mongoose from 'mongoose'
import {config} from 'dotenv'
config()

const dbConnection = async () => {
    try{
        const {connection} = await mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/ems")
    if(connection){
        console.log(`connected to database ${connection.host}`)
    }
    }catch(error){
        console.log(error);
        process.exit(1);
    }
}

export default dbConnection;