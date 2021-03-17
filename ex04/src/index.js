var players = {
    7: "Muhamed Besic",
    10: "Miralem Pjanic",
    11: "Edin Dzeko"
};

function myFunction(myObj) {
    var playNumber = 10;
    var player = players[playNumber];
    return player;
}

console.log(myFunction(players));
module.exports = { players, myFunction };
