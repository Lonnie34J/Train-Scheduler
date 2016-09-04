  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDuQ4P9xpbrfJ0Ty1F4o3mUJSoi1I7ml3k",
    authDomain: "train-scheduler-ac21f.firebaseapp.com",
    databaseURL: "https://train-scheduler-ac21f.firebaseio.com",
    storageBucket: "train-scheduler-ac21f.appspot.com",
  };
  firebase.initializeApp(config);

var database = firebase.database();

    
$("addTrainBtn").on("click", function(){
    
    //gets user input
    
    var trainName = $("#trainNameInput").val().trim();
    var userDestination = $("#destinationInput").val().trim();
    var userTime = moment($("#timeInput").val().trim(), "hh:mm");
    var userFrequency = $("#frequencyInput").val().trim();
    
    
    var newTrain = {
        name: trainName,
        destination: userDestination,
        time: userTime,
        frequency: userFrequency
    }
    
    database.ref().push(newTrain);
    
    console.log(newTrain.name);
    
    alert("train added");
    
    return false;
});