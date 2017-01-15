import React from 'react';

const multipleCharacterCheck = function(gameGrid, selectValue) {
  
  if (gameGrid.chosenCharacter[selectValue]) {
    chosenValue(selectValue, gameGrid, false)
  } else {
    chosenValue(selectValue, gameGrid, true)
  }
  questionDeleter(gameGrid, selectValue)
}

const chosenValue = function(selectValue, grid, boolean) {
  grid.props.characters.forEach(function(character) {
    if (character[selectValue] === boolean) {
      grid.state.startGrid[character.id].picture = '/guess_who_players/x.png';
      grid.state.startGrid[character.id].name = 'Not me blud!';
    }
  })
}

const questionDeleter = function(grid, value) {
  grid.props.questions.forEach(function(question, index, questions) {
    if (question.value === value) {
      questions.splice(index, 1);
    }
  })

  if (grid.state.guesses === 0) {
    grid.props.questions.splice(0, 1);
  }
}

export default multipleCharacterCheck;