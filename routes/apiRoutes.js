const mongoose = require('mongoose');
const express = require('express');

const router = require("express").Router();
const WorkoutPlan = require("../models/Workout.js");

router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
})

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
    Workout.findOneAndUpdate({
      _id: req.params.id
    },
    {
      $push: { exercises: req.body }
    }, 
    { new: true 
    }
    ).then(dbWorkout =>{
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err)
    });
  });
  

// will get ALL
router.get("/api/workoutplan", (req, res) => {
  WorkoutPlan.find({})
    .sort({ date: -1 })
    .then(dbWorkoutPlan => {
      res.json(dbWorkoutPlan);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// will get limited number of exercises

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
    router.get("/api/workouts/range", (req, res) => {
      Workout.find({})
      .limit(7)
      .then(dbWorkout => {
        res.json(dbWorkout)
      })
      .catch(err => {
        res.status(400).json(err)
      });
});



module.exports = router;
