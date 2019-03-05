// -- 1. SUPER CLASS `School`--:
class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  get name() {
    return this._name;
  }

  get level() {
    return this._level;
  }

  get numberOfStudents() {
    return this._numberOfStudents;
  }

  set numberOfStudents(value) {
    if (typeof value === 'Number') {
      this._numberOfStudents = value;
    } else {
      console.log('Invalid input: numberOfStudents must be set to a Number.');
    }
  }

  quickFacts() {
    console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`);
  }

  static pickSubstituteTeacher(substituteTeachers) {
    let randomIndex = Math.floor(Math.random() * (substituteTeachers.length - 1));
    let substituteTeacher = substituteTeachers[randomIndex];
    // return substituteTeacher;
    console.log('Substitute teacher: ' + substituteTeacher);
  }
}

// -- 2. SUBCLASSES --:
class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    // Arguments in super() are the same as the ones in super class constructor:
    super(name, 'primary', numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

class MiddleSchool extends School {
  constructor(name, numberOfStudents) {
    super(name, 'middle', numberOfStudents);
  }
}

class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, 'high', numberOfStudents);
    this._sportsTeams = sportsTeams;
  }

  get sportsTeams() {
    console.log(this._sportsTeams);
  }
}

// -- 3. INSTANCES / OBJECTS --:

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 415, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansbury.quickFacts();
School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);

const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
alSmith.sportsTeams; // [ 'Baseball', 'Basketball', 'Volleyball', 'Track and Field' ]