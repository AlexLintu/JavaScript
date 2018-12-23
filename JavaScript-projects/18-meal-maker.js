const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get courses() {
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts
    }
  },
  get getAppetizers() {
  },
  set setAppetizers(appetizersIn) {
  },
  get getMain() {
  },
  set setMain(mainsIn) {
  },
  get getDesserts() {
  },
  set setDesserts(dessertsIn) {
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: this.dishName,
      price: this.dishPrice
    };
    this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = 
  }
}