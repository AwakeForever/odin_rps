const btn = document.querySelector('#btn')
var display = document.querySelector('#display')
var computerHandDisplay = document.querySelector('#computerhand');
var playerHandDisplay = document.querySelector('#playerhand');
btn.addEventListener('click', playRound)
btn.round = 5;
/*do{
	game(round)
	round--;
} while (round != 0);*/


/*for(i = 1; i != 5; ++i){
	alert(`round ${i}`);
	var playerText = prompt();
	playRound(playerText);
	
}*/

/*function game(x){
	console.log(`round is ${x}`)
	if(x == 0){
		alert("game over!")
		return;
	} else {
		playRound()
		return;
	}

}*/

function test(){
	console.log("yes");
}

function playRound(evt) {
	var computerHand = computerPlay()
	var playerHand = document.getElementById("playerchoice").value 
	console.log(`player's hand is ${playerHand}`)
	//console.log(`player's hand is ${text}`)
	console.log(`computer hand is ${computerHand}`)
	//const playerHandDisplay = document.createElement('div');
	//const computerHandDisplay = document.createElement('div');
	playerHandDisplay.textContent = `player hand was :${playerHand}`;
	computerHandDisplay.textContent = `computer hand was :${computerHand}`;
	

	if(playerHand === 'paper' && computerHand === 'rock'
		|| playerHand === 'rock' && computerHand === 'scissors'
		|| playerHand === 'scissors' && computerHand === 'paper'){
			display.textContent = 'WIN';	
		}	else  if(playerHand === computerHand){
			display.textContent = "DRAW";	
		} 	else {
			display.textContent = "LOSE";
		}

	console.log(`round is ${evt.currentTarget.round}`)										
	if(evt.currentTarget.round == 0){
		alert("game over!")												
	}
	evt.currentTarget.round--;

}
function computerPlay(){
	var compArray = ["rock","paper","scissors"]
	var compSelect = getRndInteger(0, 3)
	return compArray[compSelect]
	
}
function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min) ) + min;
}





