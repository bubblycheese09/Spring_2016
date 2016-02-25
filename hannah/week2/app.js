console.log('yo js works');

//put your code here
var userScore = 0;
var computerScore = 0;

var playing = confirm("do you want to play rock, paper, scissors?");
if (playing == true){
	var userMove = prompt("choose rock, paper, or scissors");
}else{
	confirm("bye");
}


	var computerChoice = ["rock", "paper", "scissors"];
	var computerMove = computerChoice[Math.floor(Math.random()*3)];
	console.log(computerMove);
	
while (playing){
		if (userMove == computerMove){
		confirm("It's a tie!!!");
	}else if (userMove == "rock" && computerMove=="scissors"){
		confirm("Winner!!!!!");
		userScore++;
	}else if (userMove == "rock" && computerMove=="paper"){
		confirm("Loser :(")
		computerScore++;
	}else if (userMove == "scissors" && computerMove == "rock"){
		confirm("Loser :(");
		computerScore++;
	}else if (userMove=="scissors" && computerMove == "paper"){
		confirm("Winner!!!!!!");
		userScore++;
	}else if (userMove == "paper" && computerMove == "scissors"){
		confirm("Loser :(");
		computerScore++;
	}else if (userMove == "paper" && computerMove == "rock"){
		confirm("Winner!!!!!!");
		userScore++;
	}
	if (userScore > 0 || computerScore > 0){
		confirm("Your score: " + userScore + "\n" + "Computer score: " + computerScore);
	}
	var playing = confirm("do u want to keep playing");
}




if (userScore > 0 || computerScore > 0){
	confirm("Your score: " + userScore + "\n" + "Computer score: " + computerScore);
}









