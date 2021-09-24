const router = require("express").Router();
const WorkoutPlan = require("../models/workoutPlan.js");

// will create new workoutPlan
router.post("/api/workoutPlan", ({ body }, res) => {
  WorkoutPlan.create(body)
    .then(dbWorkoutPlan => {
      res.json(dbWorkoutPlan);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// will update existing workoutPlan
router.put("/api/workoutPlan/:id", ({ body }, res) => {
    //findByIdAndUpdate
  WorkoutPlan.insertMany(body)
    .then(dbWorkoutPlan => {
      res.json(dbWorkoutPlan);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// will get ALL
// router.get("/api/workoutplan", (req, res) => {
//   WorkoutPlan.find({})
//     .sort({ date: -1 })
//     .then(dbWorkoutPlan => {
//       res.json(dbWorkoutPlan);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

// will get limited number of exercises
router.get("/api/exercises/limited", (req, res) => {
    /**
    Look into using a MongoDB aggregate function to dynamically 
    add up and return the total duration for each workout. Check out 
    the [MongoDB documentation on the $addFields]
    (https://docs.mongodb.com/manual/reference/operator/aggregation/addFields/),
     the [MongoDB documentation on the $sum operator]
     (https://docs.mongodb.com/manual/reference/operator/aggregation/sum/), 
     and the [Mongoose documentation on aggregate functions]
     (https://mongoosejs.com/docs/api.html#aggregate_Aggregate) 
     to learn how it can be accomplished.
     */
    // AGGREGATE and LIMIT (ReadMe says 7)
  WorkoutPlan.find({})
    .sort({ date: -1 })
    .then(dbWorkoutPlan => {
      res.json(dbWorkoutPlan);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});



module.exports = router;
