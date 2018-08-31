function Bird() {
  let weight = 15; // private property
  
  this.getWeight = function() { // publicly available method that a bird object can use
    return weight;
  };
}
