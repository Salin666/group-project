class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  get name () {
    return this._name;
  }
  get level () {
    return this._level;
  }
  get numberOfStudents () {
    return this._numberOfStudents;
  }
  set numberOfStudents (numberOfStudents) {
    if (typeof newNumberOfStudents === 'number') {
    this.numberOfStudents = numberOfStudents
    } else {
      console.log('Invalid input: numberOfStudents must be set to a Number.')
    }

  }
  quickFacts() {
    console.log(`SCHOOL ${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`)
  }
  static pickSubstituteTeacher (substituteTeachers) {
    return substituteTeachers[Math.floor(Math.random()*substituteTeachers.length)]
  }
}
// end of School class

//start of PrimarySchool class
class PrimarySchool extends School {
  constructor (name, numberOfStudents, pickupPolicy) {
    super(name, 'primary', numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy() {
    return this._pickupPolicy;
  }
}
// end of Primary class

//start of Middle class
class MiddleSchool extends School {
  constructor (name, numberOfStudents, pickupPolicy) {
    super(name, 'middle', numberOfStudents);
  }
}
// end of Middle class

//start of High class
class HighSchool extends School {
  constructor (name, numberOfStudents, sportsTeams) {
    super(name, 'High', numberOfStudents);
    this._sportsTeams = sportsTeams;
  }
  get sportsTeams () {
    return this._sportsTeams
  }
}
// end of High class

//Q14
const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.')

// Q15
lorraineHansbury.quickFacts()

// Q16
console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']))

// Q17
const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'])
console.log(alSmith.sportsTeams)
