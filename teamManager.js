var inquirer = require("inquirer"); 

function player (name, position, offense, defense, goodGame, badGame) {
    this.name = name; 
    this.position = position;
    this.offense = offense;
    this.defense = defense; 
    this.goodGame = goodGame;
    this.badGame = badGame; 
    this.printStats = function () {
        console.log("Name :" + this.name + "\nPosition :" + this.position + "\nOffence : " + this.offense + "\nDefence :" + this.defence + "\nGood Game:" + this.goodGame + "\nBad Game :" + this.badGame)
    };
} 
var count = 0;
function createTeam () {
if (count>5) {
    inquirer.prompt([
    { name : "name",
      message : "Player's name" 
    },
    { name : "position",
      message : "Player's position" 

    },
    { name : "offense",
      message : "Player's offence" 

    },
    { name : "defence",
      message : "Player's defence" 
    },
]).then(function(answers){
    var newPlayer = new player (
        answers.name,
        answers.position,
        answers.offense,
        answers.defence,
        newPlayer.printStats(),
        count++,
        createTeam(),
    )
})
}  else {console.log("All question asked!")} 

}; 
createTeam(); 
