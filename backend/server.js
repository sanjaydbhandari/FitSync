import { config } from "dotenv";
config();
import dbConnection from "./config/dbConnection.js";
import express from "express";

const app = express();

app.get("/",(req,res)=>{
    res.send("Hello World");
})


app.listen(process.env.PORT,()=>{
    dbConnection();
    console.log(`Server is running on port ${process.env.PORT}`);
});
