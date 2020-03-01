const inquirer = require('inquirer');
const Player = require('./player');

// to hold list of players
const players = {
    starters: [],
    sub: null
};

function getPlayer () {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the player\'s name?'
        },
        {
            type: 'input',
            name: 'position',
            message: 'What is the player\'s position?'
        },
        {
            type: 'input',
            name: 'offense',
            message: 'What is the player\'s offense score?'
        },
        {
            type: 'input',
            name: 'defense',
            message: 'What is the player\'s defense score?'
        }
    ])
    .then(function(answers) {
        return new Player(
            answers.name,
            answers.position,
            answers.offense,
            answers.defense
        )
    });
}

function buildTeam() {
return getPlayer()
        .then(function(player) {
            players.starters.push(player);
    
            return getPlayer();
        })
        .then(function(player) {
            players.starters.push(player);
    
            return getPlayer();
        })
        .then(function(player){
            players.sub = player;
        })
        .then(function() {
            return players;
        })
}

console.log('Build your team!');


module.exports = {
  buildTeam: buildTeam
};