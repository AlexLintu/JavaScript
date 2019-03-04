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
    console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.numberOfStudents} school level.`);
  }

  static pickSubstituteTeacher(substituteTeachers) {
    let substituteTeachers = [];
    let randomIndex = Math.floor(Math.random() * (substituteTeachers.length - 1));
    let substituteTeacher = substituteTeachers[randomIndex];
    return substituteTeacher;
  }
}

// -- 2. SUBCLASSES --:
class Primary extends School {
  constructor(name, pickupPolicy) {
    super(name);
    this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

class Middle extends School {
  constructor(name) {
    super(name);
  }
}

class High extends School {
  constructor(name, sportsTeams) {
    super(name);
    this._sportsTeams = [];
  }

  get sportsTeams() {
    return this._sportsTeams;
  }
}