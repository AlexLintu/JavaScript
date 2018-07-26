const person = {
  firstName: "Alex",
  lastName: "Tkachenko",
  
  get fullName() {
    return `${firstName} ${lastName}`;
  },
  
  set fullName(value) {
    const words = value.split(" ");
    this.firstName = words[0];
    this.lastName = words[1];
  }
};

person.fullName = "James Bond";

console.log(person);
