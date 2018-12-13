console.log("inside of models/task.js");
const mongoose = require("mongoose");

const RatingSchema = new mongoose.Schema({
    name: {type: String},
    score: {type: Number},
   },{timestamps:true});

const CakeSchema = new mongoose.Schema({
    name: {type: String},
    image: {type: String},
    rating: [RatingSchema],
    avgrating: {type: Number}
   },{timestamps:true});

mongoose.model('Cake', CakeSchema);
mongoose.model('Rating', RatingSchema);