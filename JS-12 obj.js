const team = {
  _players: [
    {
      firstName: 'babby',
      lastName: 'shark',
      age: 5
    }, {
      firstName: 'child',
      lastName: 'ren',
      age: 11
    }, {
      firstName: 'adult',
      lastName: 'go',
      age: 35
    }, 
  ],
  _games: [
    {
      opponent: 'MK',
      teamPoints: 1,
      opponentPoints: 2
    }, {
      opponent: 'CSW',
      teamPoints: 5,
      opponentPoints: 3
    }, {
      opponent: 'TST',
      teamPoints: 12,
      opponentPoints: 7
    },
  ],
    get games() {
      return this._games;
    },
    get players() {
      return this.playerse;
    },
    addPlayer(firstName, lastName, age) {
      const newPlayer = {
        fisrtName: firstName,
        lastName: lastName,
        age: age
      };
      this._players.push(newPlayer)
    },
    addGame(opponName, myTeampoints, opponentpoints) {
      const newinfo = {
        opponent: opponName,
        TeamPoints: myTeampoints,
        opponentsPoint: opponentpoints
      };
      this._games.push(newinfo)
    }
  }

team.addPlayer('Steph', 'Curry', 28)
team.addPlayer('Lisa', 'Leslie', 44)
team.addPlayer('Bugs', 'Bunny', 76)

team.addGame('china', 5, 2)
team.addGame('japen', 8, 1)
team.addGame('thailand', 9, 10)


console.log(team._players)
console.log(team._games)
