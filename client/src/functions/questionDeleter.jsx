import React from 'react';

const questionDeleter = function(questions, noOfGuesses, value, grid) {
  
  const redundantQuestions = [];
  const uncheckedCharacters = [];


  questions.forEach(function(question, index, questions) {
    if (question.value === value) {
      questions.splice(index, 1);
    } 
  });


  grid.forEach(function(character) {
  	if (character.name !== 'Not me!!!') {
  		uncheckedCharacters.push(character)
  	}
  });

  
  questions.forEach(function(question) {
  	let counter = 0;
    
    if (question.value !== 'initialSelector') {
    
    	uncheckedCharacters.forEach(function(character) {
    		if (character[question.value] === true) {
    			counter++;
    		}
    	})
      
    	if (counter === 0 || counter === uncheckedCharacters.length) {
        redundantQuestions.push(question.value)
    	}
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