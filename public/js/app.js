//declaring constants from id's
const $minutes = $('#minutes')
const $distance = $('#distance')
const $submitRoad = $('#submitRoad');
const $sessionStrenght = $('#sessionStrenght')
const $sessionCardio = $('#sessionCardio')
const $submitTrain = $('#submitTrain');
let newTime;
let newSession;

//function to create a new object 
function formatTime() {
    //get the values from the forms
    const minutes = $minutes.val().trim();

    //create a string from the entered values 
    newTime = ${ minutes };

    const newRoad = {
        time= newTime,
        distance = distance
    };

    //send newRoad object to the database.
    postRoad(newRoad);
}

//function to post a road log to the mongo database

function postRoad(newRoad) {

    $.post('/api/run', newRun)
        .then((data) => {
            window.location.reload(true);
        })
        .catch((err) => {
            console.log(err);
        });
}

//function to post a train session log into the database
function postRoad(newRoad) {

    $.post('api/road', newRoad)
        .then((data) => {
            window.location.reload(true);
        })
        .catch((err) => {
            console.log(err);
        });
}

// when submits button are clicked run the functions to format time and post it and to post the bench presses.
$submitRoad.on('click', formatTime);
$submitTrain.on('click', postTrain);
