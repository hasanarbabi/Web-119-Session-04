var html = "";
var ms = 0;
function Game() {
    var rand = Math.floor(Math.random() * 3);
    
    var arr = ["rock","paper","scissors"];

    if (ms == 0){
        var answer = prompt("Rock, Paper or Scissors?");
    }
    else {
        var answer = prompt("Rock, Paper or Scissors? \n       You Gotta PLAY");
        ms = 0;
    }

    if (answer === null){
        ms = 1;
        Game();
    }
    var arrans = answer;

    if (answer.toLowerCase() == "rock") {
        answer = 0;
        if (rand == 1){
            html = "<h1 class='loose'>You LooOOoose.</h1>";
        } else if (rand == 2) {
            html = "<h1 class='win'>You Win!</h1>";
        } else {
            html = "<h1 class='tie'>It's a Tie.</h1>";
        }
    } else if (answer.toLowerCase() == "paper") {
        answer = 1;
        if (rand == 2){
            html = "<h1 class='loose'>You LooOOoose.</h1>";
        } else if (rand == 0) {
            html = "<h1 class='win'>You Win!</h1>";
        } else {
            html = "<h1 class='tie'>It's a Tie.</h1>";
        }
    } else if (answer.toLowerCase() == "scissors") {
        answer = 2;
        if (rand == 0){
            html = "<h1 class='loose'>You LooOOoose.</h1>";
        } else if (rand == 1) {
            html = "<h1 class='win'>You Win!</h1>";
        } else {
            html = "<h1 class='tie'>It's a Tie.</h1>";
        }
    } else {
        Game();
    }

    document.getElementById("output").innerHTML = "<span class='ans'>computer choosed </span>" + "<span class='ans'>" + arr[rand] + "</span>" + "<br>" + "<span class='ans'>you choosed </span>" + "<span class='ans'>" + arrans + html;
}
Game();

