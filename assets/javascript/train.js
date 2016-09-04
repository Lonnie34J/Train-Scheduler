  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDuQ4P9xpbrfJ0Ty1F4o3mUJSoi1I7ml3k",
    authDomain: "train-scheduler-ac21f.firebaseapp.com",
    databaseURL: "https://train-scheduler-ac21f.firebaseio.com",
    storageBucket: "train-scheduler-ac21f.appspot.com",
  };
  firebase.initializeApp(config);

var database = firebase.database();

    
$("#addTrainBtn").on("click", function(){
    event.preventDefault();
    //gets user input
    
    var trainName = $("#trainNameInput").val().trim();
    var userDestination = $("#destinationInput").val().trim();
    var userTime = $("#timeInput").val().trim();
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
    
    //clear boxes
    
    $("#trainNameInput").val("");
    $("#destinationInput").val("");
    $("#timeInput").val("");
    $("#frequencyInput").val("");
    
});

database.ref().on("child_added", function(childSnapshot, prevChildKey){
    
    console.log(childSnapshot.val());
    
    var trainName = childSnapshot.val().name;
    var userDestination = childSnapshot.val().destination;
    var userTime = childSnapshot.val().time;
    var userFrequency = childSnapshot.val().frequency;
    
    $("#trainTable > tbody").append("<tr><td>" + trainName + "</td><td>" + userDestination + "</td><td>" + userFrequency + "</td><td>" + userTime + "</td></tr>");

});
