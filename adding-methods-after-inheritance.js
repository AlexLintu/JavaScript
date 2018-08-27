function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }
// inheriting prototype(properties) from Animal object
Dog.prototype = Object.create(Animal.prototype);
// resetting constructor 
Dog.prototype.constructor = Dog;
// adding new method
Dog.prototype.bark = function() {
    console.log("Woof!")
};

let beagle = new Dog();

beagle.eat(); // "nom nom nom"
beagle.bark(); // "Woof!"
