const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get appetizers () {
    return this._courses.appetizers;
  },
  set appetizers (appetizers) {
    this._courses.appetizers = appetizers
  },
  get mains () {
    return this._courses.mains
  },
  set mains (mains) {
    this._courses.mains = mains
  },
  get desserts () {
    return this._courses.desserts
  },
  set desserts (desserts) {
    this._courses.desserts = desserts
  },
  get courses () {
    return {
      appetizers: this.appetizers,
      mains: this.mians,
      desserts: this.desserts
    }
  },
    addDishToCourse (courseName, dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice
      };
      this._courses[courseName].push(dish);
    },
  getRandomDishFromCourse (courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex]
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
  
    return `appetizer: ${appetizer.name}, main: ${main.name}, dessert: ${dessert.name}, total price: ${totalPrice}`;
  }
};

menu.addDishToCourse('appetizers', 'orange', 10)
menu.addDishToCourse('appetizers', 'apple', 5)
menu.addDishToCourse('appetizers', 'banana', 7)

menu.addDishToCourse('mains', 'chicken', 24)
menu.addDishToCourse('mains', 'pig', 22)
menu.addDishToCourse('mains', 'cow', 27)

menu.addDishToCourse('desserts', 'cake', 17)
menu.addDishToCourse('desserts', 'ice-cream', 15)
menu.addDishToCourse('desserts', 'chocolate', 11)


let meal = menu.generateRandomMeal()
console.log(meal)