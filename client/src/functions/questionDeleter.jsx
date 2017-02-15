import React from 'react';

const questionDeleter = function(questions, noOfGuesses, value, grid) {
  
  const currentQuestions = [];
  const redundantQuestions = [];
  const uncheckedCharacters = [];

  questions.forEach(function(question, index, questions) {
    if (question.value === value) {
      questions.splice(index, 1);
    } 
  });

  questions.forEach(function(question) {
    currentQuestions.push(question.value);
  })
  
  currentQuestions.splice(0, 1);

  grid.forEach(function(character) {
  	if (character.name !== 'Not me!!!') {
  		uncheckedCharacters.push(character)
  	}
  });
  
  currentQuestions.forEach(function(questionValue) {
  	let counter = 0;
    
  	uncheckedCharacters.forEach(function(character) {
  		if (character[questionValue] === true) {
  			counter++;
  		}
  	})

  	if (counter === 0 || counter === uncheckedCharacters.length) {
  		redundantQuestions.push(questionValue)
  	}
  });
  
  redundantQuestions.forEach(function(questionValue) {
    questions.forEach(function(question, index, questions) {
      if (questionValue === question.value) {
        questions.splice(index, 1);
      }
    })
  });
  
  return questions;
}

export default questionDeleter;