// --SUPER CLASS `School`--
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

