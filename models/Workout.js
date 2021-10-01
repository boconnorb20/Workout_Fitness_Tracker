const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    // SCHEMA GOES HERE
    day: { type: Date, default: () => new Date()},
    exercises: [
      { 
        type: {
          type: String,
        },
        name: {
          type: String,
        },
        duration: {
          type: Number,
        },
        weight: Number,
        reps: Number,
        sets: Number,
        distance: Number,
      },
    ],
    totalDuration: {
      type: Number,
      default: 0
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
});

const Workout = mongoose.model('Workout', WorkoutSchema);
module.exports = Workout;