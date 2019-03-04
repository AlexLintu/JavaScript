// -- 1. SUPER CLASS `School`--:
class School {
  constructor(name, numberOfStudents) {
    this._name = name;
    this._level = ['primary', 'middle', 'high'];
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
    this._numberOfStudents = value;
  }

  quickFacts() {

  }

  static pickSubstituteTeacher() {

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