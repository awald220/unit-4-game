var randomAnswer = 0;
var win = 0;
var loss = 0;
var crystals;
var scoreSoFar = [];

// crystals
$("#pink").on("click", function() {
    var random = Math.floor(Math.random() * 12)
    $("#scoreSoFar").text(random);
    console.log(random)
})

$("#red").on("click", function() {
    var random = Math.floor(Math.random() * 12)
    console.log(random)
})

$("#grey").on("click", function() {
    var random = Math.floor(Math.random() * 12)
    console.log(random)
})

$("#blue").on("click", function() {
    var random = Math.floor(Math.random() * 12)
    console.log(random)
})