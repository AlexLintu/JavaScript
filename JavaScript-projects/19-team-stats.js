const team = {
  _players: [
    {
      firstName: 'Lionel',
      lastName: 'Messi',
      age: 31
    },
    {
      firstName: 'David',
      lastName: 'Beckham',
      age: 43
    },
    {
      firstName: 'Zinedine',
      lastName: 'Zidane',
      age: 46
    }
  ],
  _games: [
    {
      opponent: 'Opponent1',
      teamPoints: 10,
      opponentPoints: 20
    },
    {
      opponent: 'Opponent2',
      teamPoints: 30,
      opponentPoints: 40
    },
    {
      opponent: 'Opponent3',
      teamPoints: 50,
      opponentPoints: 60
    }
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName,
      lastName,
      age
    }
    this.players.push(player);
  },
  addGame(opponent, teamPoints, opponentPoints) {
    let game = {
      opponent,
      teamPoints,
      opponentPoints
    }
    this.games.push(game);
  }
}

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

console.log(team.players);
/* Output:
[ { firstName: 'Lionel', lastName: 'Messi', age: 31 },
  { firstName: 'David', lastName: 'Beckham', age: 43 },
  { firstName: 'Zinedine', lastName: 'Zidane', age: 46 },
  { firstName: 'Steph', lastName: 'Curry', age: 28 },
  { firstName: 'Lisa', lastName: 'Leslie', age: 44 },
  { firstName: 'Bugs', lastName: 'Bunny', age: 76 } ]
*/

team.addGame('opponent4', 70, 80);
team.addGame('opponent5', 90, 100);
team.addGame('opponent6', 110, 120);

console.log(team.games);
/* Output:
[ { opponent: 'Opponent1', teamPoints: 10, opponentPoints: 20 },
  { opponent: 'Opponent2', teamPoints: 30, opponentPoints: 40 },
  { opponent: 'Opponent3', teamPoints: 50, opponentPoints: 60 },
  { opponent: 'opponent4', teamPoints: 70, opponentPoints: 80 },
  { opponent: 'opponent5', teamPoints: 90, opponentPoints: 100 },
  { opponent: 'opponent6', teamPoints: 110, opponentPoints: 120 } ]
*/