import express from "express";
import { createExercise,getExercises,getExerciseById, deleteExercise, updateExercise } from "../controllers/exerciseControllers.js";

const exerciseRouter = express.Router();

exerciseRouter.route("/").post(createExercise).get(getExercises);
exerciseRouter.route("/:id").delete(deleteExercise).put(updateExercise).get(getExerciseById);

export default exerciseRouter;