
$(document).ready(function() {








//function to generate 4 random numbers between 1 and 12

function fourRand() {
	var numbers = [];
	for (i = 0; i < 4; i++) {
		numbers.push(Math.floor((Math.random () * 12 + 1)));
	

}	

return numbers;
	
};


//assign 4 crystals to array
var crystalNumbers = fourRand();
var wins = 0, losses = 0, score = 0;
var goal = 19 + Math.floor(Math.random() * 101);

//console.log(crystalNumbers);
//console.log(goal);


//css
$("#wrapper").css({
"background": "black", 
"color": "white",
"margin": "auto",
// "margin-right": "10px",
"padding": "10px",
"width": "960px"
});

$("#rules").css({
"width": "400px",
"background": "blue",
// "display": "inline",
"float": "left"
});

$("#results").css({
"background": "red",
"width": "200px",
"display": "block",
"float": "right"
});

$("#crystals").css({
"width": "600px",
"background": "green",
"margin": "auto",
"margin-top": "5px",
"clear": "both",
// "display": "block"
});

$("#crystal0").hover(function() {
$(this).css("background-color", "yellow"); }, function() {
$(this).css("background-color", "pink");
});

$("#playerScore").css({
"background": "grey",
"width": "200px"
// "margin": "auto"
});
// /css

//initialize game
 function startGame() {
	fourRand();	
	crystalNumbers = fourRand();
	score = 0;
	goal = 19 + Math.floor(Math.random() * 101);
 	showWin();
        showLoss();
        showGoal();
	showScore();
 };


//show goal
function showGoal() { $("#targetScore").html(goal);
};

//show wins
function showWin() {$("#winCount").html(wins);
};

//show losses
function showLoss() {$("#lossCount").html(losses);
};

//show score
function showScore() {$("#yourScore").html(score);
};

//handle clicks
$("#crystal0").on("click", function() {  
	score = score + crystalNumbers[0];
	$("#yourScore").html(score);
	check();
});

$("#crystal1").on("click", function() {  
	score = score + crystalNumbers[1];
	$("#yourScore").html(score);
	check();
});

$("#crystal2").on("click", function() {  
	score = score + crystalNumbers[2];
	$("#yourScore").html(score);
	check();	
});


$("#crystal3").on("click", function() {  
	score = score + crystalNumbers[3];
	$("#yourScore").html(score);
	check();
});

startGame();

// if you're playing
function check() {
if (score < goal) {
} else if (score > goal) { 
//if you lose
	losses++;
	$("#youWinLose").html("You Lose!");
	startGame();	
} else {
 //then you win
	wins++;
	startGame();
	$("#youWinLose").html("You Win!");
};
}
	




});
