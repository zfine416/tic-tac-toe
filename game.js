function Game(player1, player2) {
	this.player1 = player1;
	this.player2 = player2;
	this.board = new Array(9);
	this.currentPlayer = 0;
}

Game.prototype.play = function(){
	debugger;
	currentPlayer=this.currentPlayer;
	if(currentPlayer===0){
		randomOrder[0].placeMarker(this);
		currentPlayer=currentPlayer+1;
	}
	else{
		randomOrder[1].placeMarker(this);
		currentPlayer=currentPlayer-1;
	}
}
//Human Object
function HumanPlayer(){
	// Javascript equivalent to `def initialize`
}
//Computer Object
function ComputerPlayer(){
	// Javascript equivalent to `def initialize`
}
//Human select position
HumanPlayer.prototype.placeMarker = function(board) {
	var select = prompt("Select your position (1-9)");
	// Validate number is between 1 and 9
	if((select>=1)&&(select<=9)){
		debugger;
		console.log('valid input');
		//Set the marker here by filling array
	}
	else
	{
		console.log("invalid input");
		selectPosition();
	}
};
//computer select position
ComputerPlayer.prototype.placeMarker = function(board){
	// AI logic for placing markers goes here.
	// 
}

//check to see if board is full
Game.prototype.fullBoard = function(){
//board array has no undefines
}


//Check to see if user/cpu has won game
Game.prototype.checkWinner = function(combo){
	//array of winning combinations
	var winCombos = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];	
}


//shuffle order
var players = [new HumanPlayer(), new ComputerPlayer()];
function shuffle(o){
	for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
		return o;
};
var randomOrder = shuffle(players);

var game1 = new Game(randomOrder);
game1.play();

