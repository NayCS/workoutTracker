//used packages
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
//require model for mongo database
const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", { useNewUrlParser: true });

//API ROUTE for going on the road
app.post("/api/road", ({ body }, res) => {
    //create a new Road in mongo db
    db.Road.create(body)
        .then(dbRoad => {
            res.json(dbRoad);
        })
        .catch(err => {
            res.json(err);
        });
});
//API ROUTE create a new Train in mongo db
app.post("/api/train", ({ body }, res) => {
    db.Train.create(body)
        .then(dbTrain => {
            res.json(dbTrain);
        })
        .catch(err => {
            res.json(err);
        });
});

// HTML HOME ROUTE open index.html
app.get('/', (req, res) => {
    res.render('index');
});

//HTML RUN ROUTE find all running data in db.
app.get('/road', (req, res) => {
    db.Road.find({})
        .then((dbRoad) => {
            res.render('road', { runs: dbRoad });
        })
        .catch((err) => {
            res.json(err);
        });
});

//HTML BENCH ROUTE find all train press data in db.
app.get('/train', (req, res) => {
    db.Train.find({})
        .then((dbTrain) => {
            res.render('train', { pbench: dbTrain });
        })
        .catch((err) => {
            res.json(err);
        });
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});