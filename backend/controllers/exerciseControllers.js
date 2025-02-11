import Exercise from '../models/exerciseModel.js';
import exerciseValidator from '../validations/exerciseValidator.js';

const createExercise = async (req, res) => {
    const { name, muscle_group, equipment, instructions, video_url } = req.body;

    try {
        exerciseValidator.parse({ name, muscle_group, equipment, instructions, video_url });
      } catch (validationError) {
        return res.status(400).json({
          success: false,
          message: 'Validation failed',
          errors: validationError.errors.map((error) => error.message),
        });
      }

    const newExercise = new Exercise({ name, muscle_group, equipment, instructions, video_url });

    try {
        const savedExercise = await newExercise.save();
        if(savedExercise){
            res.status(201).json({
                success: true,
                message: "Exercise created successfully",
                data: savedExercise,
            });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getExercises = async (req, res) => {
    try {
      const exercises = await Exercise.find();
      if(!exercises){
        return res.status(404).json({
          success: false,
          message: "No exercises found",
        });
      }
      return res.status(201).json({
        success: true,
        message: "All exercise fetch successfully",
        data: exercises,
    });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

const getExerciseById = async (req, res) => {
    try {
      const exercise = await Exercise.findById(req.params.id);
      if(!exercise){
        return res.status(404).json({
          success: false,
          message: "No exercises found",
        });
      }
      return res.status(201).json({
        success: true,
        message: "Exercise fetch successfully",
        data: exercise,
    });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  

const updateExercise = async (req, res) => {
    try {
      const { name, muscle_group, equipment, instructions, video_url } = req.body;

      try {
        exerciseValidator.parse({ name, muscle_group, equipment, instructions, video_url });
      } catch (validationError) {
        return res.status(400).json({
          success: false,
          message: 'Validation failed',
          errors: validationError.errors.map((error) => error.message),
        });
      }
      const exercise = await Exercise.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if(!exercise){
        return res.status(404).json({
          success: false,
          message: "No exercises found",
        });
      }
      return res.status(201).json({
        success: true,
        message: "Exercise Updated successfully",
        data: exercise,
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
const deleteExercise = async (req, res) => {
    try {
      const deletedExercise = await Exercise.findByIdAndDelete(req.params.id);
      if(!deletedExercise){
        return res.status(404).json({
          success: false,
          message: "No exercises found",
        });
      }
      return res.status(201).json({
        success: true,
        message: "Exercise Deleted successfully",
        data: deletedExercise,
      });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  };

export { createExercise,getExercises,getExerciseById,updateExercise,deleteExercise };