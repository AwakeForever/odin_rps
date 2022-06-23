//const playerChoice = document.querySelector('#btn')
var display = document.querySelector('#display')
var round = 5;
//btn.addEventListener('click', game())


for(i = 1; i != 5; ++i){
	alert(`round ${i}`);
	var playerText = prompt();
	playRound(playerText);
	
}

function game(round){
	--round;
	console.log(`round is ${round}`)
	if(round == 0){
		alert("game over!")
		return;
	} else {
		playRound()
		return;
	}

}


function playRound(text) {
	var computerHand = computerPlay()
	//var playerHand = document.getElementById("playerchoice").value 
	//console.log(`player's hand is ${playerHand}`)
	console.log(`player's hand is ${text}`)
	console.log(`computer hand is ${computerHand}`)
	if (/*playerHand*/ text === computerHand) {
		display.innerHTML = 'WIN'
	} else {
		display.innerHTML = "LOSE"
	}

}
function computerPlay(){
	var compArray = ["rock","paper","scissors"]
	var compSelect = getRndInteger(0, 3)
	return compArray[compSelect]
	
}
function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min) ) + min;
}





