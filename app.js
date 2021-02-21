/* As a frequent diner, you love trying out new restaurants and experimenting with different foods. 
However, having to figure out what you want to order can be a time-consuming ordeal if the menu is big, and you want an easier way to be able to figure out what you are going to eat.
In this project, you’ll use JavaScript to randomly create a three-course meal based on what is available on a menu. We’ll keep running it until we’re satisfied with the generated meal!

In this project I reinforce my skills on setter and getter methods, as well as advanced objects. */


const menu = {
_courses: {
  appetizers: [],
  mains: [],
  desserts: [],
},
get courses() {
return this._courses
},
get appetizers(){
return this._courses.appetizers
},
get mains(){
return this._courses.mains
},
get desserts(){
return this._courses.desserts
},
set appetizers(appInput){
  return this._courses.appetizers = appInput
},
set mains(mainInput){
  return this._courses.appetizers = mainInput
},
set desserts(dessertInput){
  return this._courses.appetizers = dessertInput
},


addDishToCourse(courseName, dishName, dishPrice){
    
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    return this._courses[courseName].push(dish);
    
    },
getRandomDishFromCourse(courseName) {
const dishes =  this._courses[courseName];
  const randomIndex = Math.floor(Math.random() * dishes.length);
  return dishes[randomIndex];
},
generateRandomMeal(){
  const appetizer = this.getRandomDishFromCourse('appetizers');
  const main = this.getRandomDishFromCourse('mains');
  const dessert = this.getRandomDishFromCourse('desserts');
  const totalPrice = `Your three course meal is: ${appetizer.name} as an appetizer, and following that, ${main.name}. Finally, for dessert, ${dessert.name}. \nThe total price is ${appetizer.price + main.price + dessert.price}.`;
  return totalPrice;
}
}

menu.addDishToCourse('appetizers', 'Fries', 5.00);
menu.addDishToCourse('appetizers', 'Salad', 6.00);
menu.addDishToCourse('appetizers', 'Onion Rings', 8.30);
menu.addDishToCourse('mains', 'Steak', 15.00);
menu.addDishToCourse('mains', 'Pizza', 13.00);
menu.addDishToCourse('mains', 'Cheeseburger', 8.00);
menu.addDishToCourse('desserts', 'Lava Cake', 8.00);
menu.addDishToCourse('desserts', 'Apple Pie', 7.00);
menu.addDishToCourse('desserts', 'Ice Cream Sunday', 11.00);

const meal = menu.generateRandomMeal();

console.log(meal); 

/* Expected Output: 
Your three course meal is: Onion Rings as an appetizer, and following that, Steak. Finally, for dessert, Apple Pie. 
The total price is 30.3.*/