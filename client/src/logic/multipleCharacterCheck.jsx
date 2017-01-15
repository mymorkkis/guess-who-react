import React from 'react';

const multipleCharacterCheck = function(gameGrid, selectValue) {
  
  if (gameGrid.chosenCharacter[selectValue]) {
    chosenValue(selectValue, gameGrid, false)
  } else {
    chosenValue(selectValue, gameGrid, true)
  }
}

const chosenValue = function(selectValue, grid, boolean) {
  grid.props.characters.forEach(function(character) {
    if (character[selectValue] === boolean) {
      grid.state.startGrid[character.id].picture = '/guess_who_players/x.png';
      grid.state.startGrid[character.id].name = 'Not me blud!';
    }
  })
};

export default multipleCharacterCheck;