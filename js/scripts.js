var player1="";
var player2="";

var throwdice = function () {
    return Math.floor(6 * Math.random())+1;
}
function Player(turn) {
    this.roll = 0;
    this.rollscore = 0;
    this.totalscore = 0;
    this.turn = turn;
    this.playerName;
}
Player.prototype.rollone = function() {
    if (this.roll === 1) {
    this.rollscore = 0;
    alert("Turn over " + this.playerName + ", you rolled a 1! Try your luck next time!")
    } else {
    this.rollscore += this.roll;
    }
}
Player.prototype.hold = function () {
    this.totalscore += this.rollscore;
    this.rollscore = 0;
    alert(this.playerName + " your turn is over");
}