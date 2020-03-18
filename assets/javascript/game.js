

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

// This function will reset the game when the player wins/looses. It sets it to the original set.
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

// If the player wins the code will run this function. It adds a point to win, and activtes the restartGame function.
function win() {
    winCounter ++;
    $("#winCounter").html(winCounter);
    restartGame();
}

// If the player looses the code will run this functon. It adds a point to loss, and activates the restartGame function.
function loose() {
    lossCounter ++;
    $("#lossCounter").html(lossCounter);
    restartGame();
}

// Sets a random value to the pink crystal and sends the value the scoreSoFar div.
$("#pink").on ("click", function(){
    counter = counter + pink;

    $("#curScore").html(counter);

        if (counter == targetNumber){
            win();
        }
        else if (counter > targetNumber){
            loose();
        }

        console.log(counter + pink);
});

// Sets a random value to the red crystal and sends the value the scoreSoFar div.
$("#red").on ("click", function(){
    counter = counter + red;

    $("#curScore").html(counter);

        if (counter == targetNumber){
            win();
        }
        else if (counter > targetNumber){
            loose();
        }
    
        console.log(counter + red);
});

// Sets a random value to the grey crystal and sends the value the scoreSoFar div.
$("#grey").on ("click", function(){
    counter = counter + grey;

    $("#curScore").html(counter);

        if (counter == targetNumber){
            win();
        }
        else if (counter > targetNumber){
            loose();
        }
        console.log(counter + grey);
});

// Sets a random value to the blue crystal and sends the value the scoreSoFar div.
$("#blue").on ("click", function(){
    counter = counter + blue;

    $("#curScore").html(counter);

        if (counter == targetNumber){
            win();
        }
        else if (counter > targetNumber){
            loose();
        }
        console.log(counter + blue);
});

