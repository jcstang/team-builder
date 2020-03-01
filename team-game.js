const team = require('./team');

team.buildTeam()
    .then(function (players) {
        players.starters[0].printStats();
        players.starters[1].printStats();
        players.sub.printStats();
    });
