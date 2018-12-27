const menu = {
  courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    let dish = {
      name: dishName,
      price: dishPrice
    }
    this.courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this.courses[courseName];
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

menu.addDishToCourse('appetizers', 'Salad', 5);
menu.addDishToCourse('appetizers', 'Soup', 10);
menu.addDishToCourse('appetizers', 'Chips', 20);
menu.addDishToCourse('mains', 'Stake', 30);
menu.addDishToCourse('mains', 'Pasta', 40);
menu.addDishToCourse('mains', 'Sushi', 50);
menu.addDishToCourse('desserts', 'Cake', 60);
menu.addDishToCourse('desserts', 'Pie', 70);
menu.addDishToCourse('desserts', 'Cookies', 80);

console.log(menu.courses);

/*
{ appetizers: 
   [ { name: 'Salad', price: 5 },
     { name: 'Soup', price: 10 },
     { name: 'Chips', price: 20 } ],
  mains: 
   [ { name: 'Stake', price: 30 },
     { name: 'Pasta', price: 40 },
     { name: 'Sushi', price: 50 } ],
  desserts: 
   [ { name: 'Cake', price: 60 },
     { name: 'Pie', price: 70 },
     { name: 'Cookies', price: 80 } ] }
*/

const meal = menu.generateRandomMeal();
console.log(meal);

// Your meal is Soup, Stake, Cake and the total cost is 100