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
  }
}

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

console.log(team.players);