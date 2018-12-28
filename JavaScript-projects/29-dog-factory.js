const dogFactory = (name, breed, weight) => {
  return {
    _name: name,
    _breed: breed,
    _weight: weight,
    get name() {
      return this._name;
    },
    set name(newName) {
      if (typeof newName === 'string') {
        return this._name = newName;
      } else {
        return 'Name has to be a string!'
      }
    },
    get breed() {
      return this._breed;
    },
    set breed(newBreed) {
      if (typeof newBreed === 'string') {
        return this._breed = newBreed;
      } else {
        return 'Breed has to be a string!'
      }
    },
    get weight() {
      return this._weight;
    },
    set weight(newWeight) {
      if (typeof newWeight === 'number') {
        return this.weight = newWeight;
      } else {
        return 'Weight has to be a number!'
      }
    },
    bark() {
      return 'ruff ruff!';
    },
    eatTooManyTreats() {
      this._weight++;
    }
  }
}

const pug = dogFactory('Joe', 'Pug', 27);
console.log(pug);
console.log(pug.breed);
console.log(pug.bark());
console.log(pug.eatTooManyTreats());
console.log(pug.weight);