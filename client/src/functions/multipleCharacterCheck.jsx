import React from 'react';

const multipleCharacterCheck = function(grid, chosenCharacter, selectValue) {


  if (chosenCharacter[selectValue]) {
    return chosenValue(selectValue, grid, false)
  } else {
    return chosenValue(selectValue, grid, true)
  }
}


const chosenValue = function(selectValue, grid, boolean) {
  
  grid.forEach(function(character) {
    if (character[selectValue] === boolean) {
      grid[character.id].picture = '/guess_who_players/x.jpg';
      grid[character.id].name = 'Not me!!!';
    }
  })

  return grid;
}

export default multipleCharacterCheck;