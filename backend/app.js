import morgan from "morgan";
import exerciseRouter from "./routes/exerciseRoutes.js";
import express from "express";

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use('/api/v1/exercise',exerciseRouter);
app.all('*',(req,res)=>{
    res.status(404).send("OOPS!! 404 Page not Found")
})

export default app;