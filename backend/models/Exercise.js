import mongoose from "mongoose";

const ExerciseSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true,
        minLength: 3,
        maxLength: 50,
        trim : true
    },
    muscle_group: { 
        type: String, 
        required: true,
        minLength: 3,
        maxLength: 50,
        trim : true
    },
    equipment: { 
        type: String,
        required: true,
        minLength: 3,
        maxLength: 50,  
        trim : true
    },
    instructions: { 
        type: String,
        required: true,
        minLength: 3,
        maxLength: 50,  
        trim : true
     },
    video_url: { 
        type: String,
        required: true,
        minLength: 3,
        maxLength: 50,  
        trim : true
     },
});

module.exports = mongoose.model("Exercise", ExerciseSchema);