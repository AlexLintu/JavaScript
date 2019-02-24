// HospitalEmployee is a super class that contains shared properties of sub-classes Doctor & Nurse
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

// Creating a Nurse sub-class:
class Nurse extends HospitalEmployee {
  // Unique to this sub-class properties:
  constructor(name, certifications) {
    // Properties that are the same with the parent super class:
    super(name, remainingVacationDays);
    this._certifications = certifications;
  }
}

// Creating an instance of Nurse:
const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);