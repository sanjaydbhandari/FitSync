import { config } from "dotenv";
config();
import dbConnection from "./config/dbConnection.js";
import app from "./app.js";


app.listen(process.env.PORT || 3000,()=>{
    dbConnection();
    console.log(`Server is running on port ${process.env.PORT}`);
});
