const menu = {
  _courses: {
    _appetizers: [],
    _mains: [],
    _desserts: []
  },
  get appetizers() {
    return this._courses._appetizers;
  },
  get mains() {
    return this._courses._mains;
  },
  get desserts() {
    return this._courses._desserts;
  },
  get courses() {
    return this._courses;
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    let dish = {
      name: dishName,
      price: dishPrice
    }
    this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name} and the total cost is ${totalPrice}`;
  }
}

menu.addDishToCourse('_appetizers', 'Salad', 5);
menu.addDishToCourse('_appetizers', 'Soup', 10);
menu.addDishToCourse('_appetizers', 'Chips', 20);
menu.addDishToCourse('_mains', 'Stake', 30);
menu.addDishToCourse('_mains', 'Pasta', 40);
menu.addDishToCourse('_mains', 'Sushi', 50);
menu.addDishToCourse('_desserts', 'Cake', 60);
menu.addDishToCourse('_desserts', 'Pie', 70);
menu.addDishToCourse('_desserts', 'Cookies', 80);

console.log(menu._courses);

const meal = menu.generateRandomMeal();
console.log(meal);