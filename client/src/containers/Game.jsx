import React from 'react';
import Board from '../components/Board.jsx';
import QuestionSelector from '../components/QuestionSelector.jsx';
import singleCharacterCheck from '../logic/singleCharacterCheck.jsx';
import multipleCharacterCheck from '../logic/multipleCharacterCheck.jsx';
import isGameFinished from '../logic/isGameFinished.jsx';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectValue: "",
      startGrid: this.props.characters,
      guesses: 0
    };
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.bestScore = JSON.parse(localStorage.getItem('bestScore') || 0);
    this.chosenCharacter = this.props.characters[Math.floor(Math.random()*this.props.characters.length)]
  }

  handleButtonClick(e) {
    console.log(this.chosenCharacter)
    const updatedGrid = this.state.startGrid;
    const chosenCharacter = this.chosenCharacter.id.toString();
    const value = e.target.value;
    let addToGuesses = this.state.guesses;
    addToGuesses ++;

    singleCharacterCheck(this, value, chosenCharacter, updatedGrid, addToGuesses)

    isGameFinished(this, addToGuesses)
  }

  handleSelectChange(e) {
    let addToGuesses = this.state.guesses;
    addToGuesses ++;

    console.log(this)
    console.log(e.target.index)

    multipleCharacterCheck(this, e.target.value);

    this.setState({
      selectValue: e.target.value,
      guesses: addToGuesses
    }); 
  }

  render() {
    return(
      <div>
      <h1>Guess who blud!</h1>
      <Board characters={this.state.startGrid} onButtonClick={this.handleButtonClick}/>
      <QuestionSelector questions={this.props.questions} onChange={this.handleSelectChange}/>
      <p id="guesses">No of guesses: {this.state.guesses}</p>
      <p id="best-score">Best score: {this.bestScore}</p>
      </div>
      )
  }
}

export default Game;