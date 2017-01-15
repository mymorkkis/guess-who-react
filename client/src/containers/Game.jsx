import React from 'react';
import Board from '../components/Board.jsx';
import QuestionSelector from '../components/QuestionSelector.jsx';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectValue: "",
      startGrid: this.props.characters,
      guesses: 0
      // player: 1st player here?
    };
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.chosenCharacter = this.props.characters[Math.floor(Math.random()*this.props.characters.length)]
    console.log(this.chosenCharacter)
    console.log(this.state.guesses)
  }

  handleButtonClick(e) {
    const updatedGrid = this.state.startGrid;
    let addToGuesses = this.state.guesses;
    addToGuesses ++;

    if (e.target.value === this.chosenCharacter.id.toString()) {
      updatedGrid[e.target.value].picture = '/guess_who_players/me.png';
      updatedGrid[e.target.value].name = "It's me blud!!!!!";
    } else {
      updatedGrid[e.target.value].picture = '/guess_who_players/x.png';
      updatedGrid[e.target.value].name = 'Not me blud!';
    }

    this.setState({
      startGrid: updatedGrid,
      guesses: addToGuesses
    })
  }

  handleSelectChange(e) {
    this.setState({selectValue: e.target.value});
    this.characterCheck(e.target.value); 
  }

  characterCheck(selectValue) {
    let gameGrid = this;

    if (this.chosenCharacter[selectValue]) {
      this.chosenValue(selectValue, gameGrid, false)
    } else {
      this.chosenValue(selectValue, gameGrid, true)
    }
  }

  chosenValue(selectValue, grid, boolean) {
    this.props.characters.forEach(function(character) {
      if (character[selectValue] === boolean) {
        grid.state.startGrid[character.id].picture = '/guess_who_players/x.png';
        grid.state.startGrid[character.id].name = 'Not me blud!';
      }
    })
  }

  render() {
    return(
      <div>
      <h1>Guess who blud!</h1>
      <Board characters={this.state.startGrid} onButtonClick={this.handleButtonClick}/>
      <QuestionSelector questions={this.props.questions} onChange={this.handleSelectChange}/>
      <p id="guesses">No of guesses: {this.state.guesses}</p>
      </div>
      )
  }
}

export default Game;