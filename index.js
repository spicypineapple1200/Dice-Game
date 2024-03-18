var p1score = 0
var p2score = 0
var totalrolls = 0

function diceRoll(){
    // Determine the numbers for the dice role outcome
    var randomNumber1 = Math.floor((Math.random()*6)+1);
    var randomNumber2 = Math.floor((Math.random()*6)+1);

    // Change dice images to match the dice roll
    document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
    document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

    // Change H1 to display which player has won the current dice roll
    if(randomNumber1 > randomNumber2){document.querySelector("h1").textContent = "🚩Player 1 Wins The Roll!";}
    if(randomNumber1 < randomNumber2){document.querySelector("h1").textContent = "Player 2 Wins The Roll!🚩";}
    if(randomNumber1 == randomNumber2){document.querySelector("h1").textContent = "🚩This Roll is a Draw!🚩";}

    // Increases player score and total roll score with every dice roll
    if (randomNumber1 > randomNumber2) {
        p1score += 1;
    }
    if (randomNumber1 < randomNumber2) {
        p2score += 1;
    }

    totalrolls+=1;

    // Puts the player score on the screen, dynamically increasing the player and total roll score with every button press
    if(randomNumber1 > randomNumber2){document.querySelector(".p1score").textContent = "P1 Score: " + p1score + ""};
    if(randomNumber1 < randomNumber2){document.querySelector(".p2score").textContent = "P2 Score: " + p2score + ""};
    document.querySelector(".totalrolls").textContent = "Total Rolls: " + totalrolls + "";

    if(p1score > p2score){document.querySelector(".lead").textContent = "🚩Player 1 is in the lead!"};
    if(p1score < p2score){document.querySelector(".lead").textContent = "Player 2 is in the lead!🚩"};
    document.querySelector(".lead").style.visibility = 'visible';
}