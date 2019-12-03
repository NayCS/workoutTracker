//require mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create RoadSchema with weight, repetitions and created date
const RoadSchema = new Schema({
    time: String,
    distance: Number,
    created: { type: Date, default: Date.now },
});

const Road = mongoose.model("Road", RoadSchema);
//export Road 
module.exports = Road;