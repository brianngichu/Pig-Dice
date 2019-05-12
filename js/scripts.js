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
Player.prototype.winner = function () {
    if (this.totalscore >= 100) {
      alert("Congratulations " + this.playerName + " You won the game!");
    }
}
Player.prototype.newGame = function () {
    this.roll = 0;
    this.rollscore = 0;
    this.totalscore = 0;
    this.playerName ="";
}
var clearValues = function(){
    $(".player1Name").val("");
    $(".player2Name").val("");
}
$(document).ready(function() {
    $("button#start").click(function(event){
        player1 = new Player(true);
        player2 =  new Player(false);
        $(".gaming").show();
        $(".landing").slideToggle();
    
        var player1Name = $(".player1Name").val();
        $("#player1Name").text(player1Name);
    
        var player2Name = $(".player2Name").val();
        $("#player2Name").text(player2Name);
    
        player1.playerName=player1Name;
        player2.playerName=player2Name;
    
    });
    $("button#new-game").click(function(event){
        $(".landing").slideToggle();
        $(".player-console").slideToggle();
        clearValues();
        player1.newGame();
        player2.newGame();
        $("#total1").empty();
        $("#score1").empty();
        $("#roll-1").empty();
        $("#total2").empty();
        $("#score2").empty();
        $("#roll-2").empty();
    });
    $("button#player1-roll").click(function(event){
        player1.roll = throwdice();
        $("#roll-1").text(player1.roll);
        player1.rollone();
        $("#total1").text(player1.rollscore);
    });
  
});