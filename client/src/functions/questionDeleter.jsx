import React from 'react';

const questionDeleter = function(questions, noOfGuesses, value) {

  questions.forEach(function(question, index, questions) {
    if (question.value === value) {
      questions.splice(index, 1);
    }
  })
  
  return questions;
}

export default questionDeleter;