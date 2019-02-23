class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }
  get name() {
    return this._name;
  }
  get department() {
    return this._department;
  }
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  takeVacationDays(daysOff) {
    this._remainingVacationDays = this._remainingVacationDays - daysOff;
  }
}

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
console.log(surgeonCurry.name); // Curry
surgeonCurry.takeVacationDays(3);
console.log(surgeonCurry.remainingVacationDays); // 17

const surgeonDurant = new Surgeon('Durant', 'Orthopedics');