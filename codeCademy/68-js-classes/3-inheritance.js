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

  // This method won't be available to class instances:
  static generatePassword() {
    const randomNumber = Math.floor(Math.random() * 10000);
    return randomNumber;
  }
}

// Creating a Nurse sub-class:
class Nurse extends HospitalEmployee {
  // Unique to this sub-class properties:
  constructor(name, certifications) {
    // Properties that are the same with the parent super class:
    super(name);
    this._certifications = certifications;
  }

  get certifications() {
    return this._certifications;
  }

  addCertification(newCertification) {
    this.certifications.push(newCertification);
  }
}

// Creating an instance of Nurse:
const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays); // 15

// Adding new certificate:
nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications); // [ 'Trauma', 'Pediatrics', 'Genetics' ]