var winCounter = 0;
var lossCounter = 0;
var targetNumber = Math.floor(Math.random() * 101) + 19;
$("#targetNumber").text(targetNumber);


var pink = Math.floor(Math.random() * 11) + 1;
var red = Math.floor(Math.random() * 11) + 1;
var grey = Math.floor(Math.random() * 11) + 1;
var blue = Math.floor(Math.random() * 11) + 1;

$("#winCounter").html(winCounter);
$("#lossCounter").html(lossCounter);

var counter = 0;
$("#curScore").text(counter);

function restartGame() {
    targetNumber = Math.floor(Math.random() * 101) +19;
    $("#targetNumber").text(targetNumber);
    pink = Math.floor(Math.random() * 11) + 1;
    red = Math.floor(Math.random() * 11) + 1;
    grey = Math.floor(Math.random() * 11) + 1;
    blue = Math.floor(Math.random() * 11) + 1;
    counter = 0;
    $("#curScore").text(counter);
}

function win() {
    alert("You Win!");
    winCounter ++;
    $("#winCounter").text(winCounter);
    restartGame();
}

function loose() {
    alert("You Losse!")
    lossCounter ++;
    $("#lossCounter").text(lossCounter);
    restartGame();
}


$("#pink").on ("click", function(){
    counter = counter + pink;

    $("curScore").text(counter);

        if (counter == targetNumber){
            win();
        }
        else if (counter > targetNumber){
            loose();
        }
});

$("#red").on ("click", function(){
    counter = counter + red;

    $("curScore").text(counter);

        if (counter == targetNumber){
            win();
        }
        else if (counter > targetNumber){
            loose();
        }
});

$("#grey").on ("click", function(){
    counter = counter + grey;

    $("curScore").text(counter);

        if (counter == targetNumber){
            win();
        }
        else if (counter > targetNumber){
            loose();
        }
});

$("#blue").on ("click", function(){
    counter = counter + blue;

    $("curScore").text(counter);

        if (counter == targetNumber){
            win();
        }
        else if (counter > targetNumber){
            loose();
        }
});

console.log(blue, red, pink, grey);
console.log(targetNumber);
console.log(counter);