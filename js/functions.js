var jackSparrow = new Bartender();
var currentQuestion = jackSparrow.getNextQuestion();

var checkResponse = function() {
  $("#yes-button").click( function() {
    clearBartenderFeedback();
    bartenderYesFeedback();
    jackSparrow.addIngredient(currentQuestion.ingredientCategory);
    if(jackSparrow.questionPosition === jackSparrow.questions.length) {
      clearQuestion();
      makeDrinkAnimation();
      answerFadeOut('#answer', 2000);
      displayDrink();
    } else {
      currentQuestion = jackSparrow.getNextQuestion();
      nextQuestion();
    };
  })

  $('#no-button').click( function() {
    clearBartenderFeedback();
    bartenderNoFeedback();
    if(jackSparrow.questionPosition === jackSparrow.questions.length) {
      clearQuestion();
      makeDrinkAnimation();
      answerFadeOut('#answer', 2000);
      displayDrink();
    } else {
      currentQuestion = jackSparrow.getNextQuestion();
      nextQuestion();
    };
  }) 
}

var askQuestion = function() {
  var html = $('#question-template').html()
                                    .replace(/{{question}}/, currentQuestion.theQuestion)
                                    .replace(/{{yesButton}}/, currentQuestion.yes)
                                    .replace(/{{noButton}}/, currentQuestion.no);
  $('.drink-question').append(html);
}

var clearQuestion = function() {
  $('#question').remove();
  $('#yes-button').remove();
  $('#no-button').remove();
}

// var bartenderFeedback = function (parameter) {
//   var html = $('#answer-template').html()
//                                   .replace(/{{answer}}/, currentQuestion.parameter); //need this to be yes or no. would like to pass argument from function.
//     $('.the-answer-output').append(html).hide().fadeIn(1000);
// }

var bartenderYesFeedback = function () {
  var html = $('#answer-template').html()
                                  .replace(/{{answer}}/, currentQuestion.yesBartenderResponse); //need this to be yes or no. would like to pass argument from function.
    $('.the-answer-output').append(html).hide().fadeIn(1000);
}

var bartenderNoFeedback = function () {
  var html = $('#answer-template').html()
                                  .replace(/{{answer}}/, currentQuestion.noBartenderResponse); //need this to be yes or no. would like to pass argument from function.
    $('.the-answer-output').append(html).hide().fadeIn(1000);
}

var clearBartenderFeedback = function() {
  $('#answer').remove();
}

var nextQuestion = function() {
  clearQuestion();
  askQuestion();
  checkResponse();
}

var answerFadeOut = function(element, speed) {
  $(element).fadeOut(speed);
}

var makeDrinkAnimation = function() {
    $('.drink-being-made').fadeIn(1000).delay(2500).fadeOut(1000);
    $('#question-template').hide();
}

var displayDrink = function() {
  var drink = jackSparrow.makeDrink();;
  var html = $('#drink-template').html()
                                  .replace(/{{drink}}/, drink );
    $('.drink-output').append(html).hide().delay(3000).fadeIn(1000);
    $('.drink-output-background').delay(3000).fadeIn(1000);
}

var noDrink = function() {
  $('.no-drink-being-made').fadeIn(1000);
  $('#question-template').hide();
}

var hideStackedElements = function() {
  $('.drink-being-made').hide();
  $('.no-drink-being-made').hide();
  $('.thirsty-yet').hide();
  $('.the-drink').hide();
  $('.drink-output').hide();
  $('.drink-output-background').hide();
}

var orderAnother = function(element) {
  $(element).click( function() {
    location.reload();
  });
}




