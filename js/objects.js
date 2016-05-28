Bartender = function() {
  var question1 = new Question('Do ye like yer drinks strong?', 'Strong', 'A strong one for ye!', 'A little on the light side, eh?');
  var question2 = new Question('Do ye like it with a salty tang?', 'Salty', 'Ye like a bit of ocean water!', 'Afraid of the ocean, eh?');
  var question3 = new Question('Are ye a lubber who likes it bitter?', 'Bitter', 'Bitter in ye heart, bitters in ye drink!', 'Too much for ye, eh?');
  var question4 = new Question('Would ye like a bit of sweetness with yer poison?', 'Sweet', 'Yer one tooth is sweet, me see.', 'No sweetness for ye!');
  var question5 = new Question('Are ye one for a fruity finish?', 'Fruity', 'Ye are no pirate!', 'No fruit? Ye may be a pirate indeed!');

  this.questions = [question1, question2, question3, question4, question5];
  this.questionPosition = 0;

  var rum = new Ingredient('Strong', 'Glug of Rum');
  var whisky = new Ingredient('Strong', 'Slug of Whisky');
  var gin = new Ingredient('Strong', 'Splash of Gin');
  var olive = new Ingredient('Salty', 'Olive on a Stick');
  var salt = new Ingredient('Salty', 'Salt-dusted Rim');
  var bacon = new Ingredient('Salty', 'Rasher of Bacon');
  var bitters =  new Ingredient('Bitter', 'Shake of Bitters');
  var tonic = new Ingredient('Bitter', 'Splash of Tonic');
  var lemon = new Ingredient('Bitter', 'Twist of Lemon Peel');
  var sugar = new Ingredient('Sweet', 'Sugar Cube');
  var honey = new Ingredient('Sweet', 'Spoonful of Honey');
  var cola = new Ingredient('Sweet', 'Splash of Cola');
  var orange = new Ingredient('Fruity', 'Slice of Orange');
  var casis = new Ingredient('Fruity', 'Dash of Casis');
  var cherry = new Ingredient('Fruity', 'Cherry on Top');

  this.pantryItems = [rum, whisky, gin, olive, salt, bacon, bitters, tonic, lemon, sugar, honey, cola, orange, casis, cherry]

  this.bartendersPantry = new Pantry(this.pantryItems);

};

Bartender.prototype = {
  getNextQuestion: function() {
    // if(this.questionPosition >= this.questions.length) {
    //   makeDrink();
    // } else {
    var question = this.questions[this.questionPosition];
    this.questionPosition ++;
    return question;
  },
  userPreferences: [],
  addIngredient: function(ingredient) {
    this.userPreferences.push(ingredient)
  },
  makeDrink: function() {
    var cocktailIngredientHoldingArray = [];  //assign to bartender or to the method?
    var cocktailRecipe = [];
    for (var i = 0; i < this.userPreferences.length; i++) {
      var userPreference = this.userPreferences[i];
      for (var x = 0; x < this.bartendersPantry.stockItems.length; x++) {
        if(this.bartendersPantry.stockItems[x].type == userPreference) {
          cocktailIngredientHoldingArray.push(this.bartendersPantry.stockItems[x].servingSize);
        };
      };
      var randomNumber = 0;
      randomNumber = [Math.floor(Math.random() * cocktailIngredientHoldingArray.length)];
      cocktailRecipe.push(cocktailIngredientHoldingArray[randomNumber]);
      cocktailIngredientHoldingArray = [];
    }
    return cocktailRecipe.join(' with a ');
  }
};

function Question(theQuestion, ingredientCategory, yesBartenderResponse, noBartenderResponse) {
  this.yes = 'Aye';
  this.no = 'Ney';
  this.theQuestion = theQuestion;
  this.ingredientCategory = ingredientCategory;
  this.yesBartenderResponse = yesBartenderResponse;
  this.noBartenderResponse = noBartenderResponse;
};

function Ingredient(type, servingSize) {
  this.type = type;
  this.servingSize = servingSize;
}

function Pantry(stockItems){
  this.stockItems = stockItems;
}