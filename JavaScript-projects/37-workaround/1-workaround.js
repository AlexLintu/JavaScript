import Employee from './1-employee';

function getEmployeeInformation(inputSalary) {
  Employee.salary = inputSalary;
  console.log('Cadre: ' + Employee.getCadre());
  console.log('Tax: ' + Employee.calculateTax());
  console.log('Benefits: ' + Employee.getBenefits());
  console.log('Bonus: ' + Employee.calculateBonus());
  console.log('Reimbursement Eligibility: ' + Employee.reimbursementEligibility() + '\n');
}

getEmployeeInformation(10000);
// Cadre: entryLevel
// Tax: 500
// Benefits: health
// Bonus: 200
// Reimbursement Eligibility: 5000

getEmployeeInformation(50000);
// Cadre: midLevel
// Tax: 5000
// Benefits: health, housing
// Bonus: 1000
// Reimbursement Eligibility: 13000

getEmployeeInformation(100000);
// Cadre: seniorLevel
// Tax: 20000
// Benefits: health, housing, wellness, gym
// Bonus: 2000
// Reimbursement Eligibility: 31000