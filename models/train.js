//require mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//create TrainSchema with weight, repetitions and created date.
const TrainSchema = new Schema({
    trainCardio: Number,
    trainStrenght: Number,
    time: String,
    created: { type: Date, default: Date.now },
});

const Train = mongoose.model("Train", TrainSchema);
//export Train 
module.exports = Train;