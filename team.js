const inquirer = require('inquirer');
const Player = require('./player');

// to hold list of players
const listOfPlayers = {
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
            message: 'What is the player\'s offense score (1-10)?'
        },
        {
            type: 'input',
            name: 'defense',
            message: 'What is the player\'s defense score (1-10)?'
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
            listOfPlayers.starters.push(player);
    
            return getPlayer();
        })
        .then(function(player) {
            listOfPlayers.starters.push(player);
    
            return getPlayer();
        })
        .then(function(player){
            listOfPlayers.sub = player;
        })
        .then(function() {
            return listOfPlayers;
        });
}

function buildExperiment() {
    return getPlayer()
        .then(player => {
            listOfPlayers.starters.push(player);
            console.log(`Welcome, ${player.name}!`);
            return getPlayer();
        })
        .then(player => {
            listOfPlayers.starters.push(player);
            console.log(`Welcome, ${player.name}!`);
            return getPlayer();
        })
        .then(player => {
            listOfPlayers.sub = player;
            console.log(`Welcome, ${player.name}!`);
        })
        .then(function() {

            return listOfPlayers;
        });
}



console.log('Build your team!');
module.exports = {
  buildTeam: buildTeam,
  buildExperiment: buildExperiment
};