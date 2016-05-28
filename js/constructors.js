// Create Constructor Functions for questions, ingredients, and the pantry 
//(which will contain all of the available ingredients)

var Ingredient = function Ingredient(type, ingredients) {
  this.type = type;
  this.ingredients = ingredients;
}

// var Ingredient = function Ingredient(type, servingSize) {
//   this.type = type;
//   this.servingSize = servingSize;
// }

var Pantry = function Pantry(stockItems) {
  this.stockItems = stockItems;
}

var Question = function Question(question, ingredients, yesResponse, noResponse) {
  this.question = question;
  this.ingredients = ingredients;
  this.yes = 'Aye';
  this.no = 'No';
  this.yesResponse = yesResponse;
  this.noResponse = noResponse;
}

var Bartender = function Bartender() {
  this.createDrink = function(){ 
    console.log('Making a drink')
  };
}