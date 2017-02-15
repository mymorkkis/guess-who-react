import React from 'react';
import Board from '../components/Board.jsx';
import QuestionSelector from '../components/QuestionSelector.jsx';
import singleCharacterCheck from '../functions/singleCharacterCheck.jsx';
import multipleCharacterCheck from '../functions/multipleCharacterCheck.jsx';
import questionDeleter from '../functions/questionDeleter.jsx'
import isGameFinished from '../functions/isGameFinished.jsx';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectValue: "",
      grid: this.props.characters,
      questions: this.props.questions,
      guesses: 0
    };
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleCharacterClick = this.handleCharacterClick.bind(this);
    this.handleRefreshClick = this.handleRefreshClick.bind(this);
    this.bestScore = JSON.parse(localStorage.getItem('GuessWhoC7BestScore') || 0);
    this.chosenCharacter = this.props.characters[Math.floor(Math.random()*this.props.characters.length)];
  }

  handleCharacterClick(event) {
    const newGrid = this.state.grid.slice();
    const chosenCharacterId = this.chosenCharacter.id.toString();
    const value = event.target.value;
    const currentBestScore = this.bestScore
    let addToGuesses = this.state.guesses;

    if (newGrid[value].name !== "Not me!!!" && newGrid[value].name !== "It's me!!!!!") {
      addToGuesses ++;
    };

    const gridAfterCharacterCheck = singleCharacterCheck(newGrid, value, chosenCharacterId)

    const updatedGrid = isGameFinished(gridAfterCharacterCheck, addToGuesses, currentBestScore)

    this.setState({
      grid: updatedGrid,
      guesses: addToGuesses
    })
  }

  handleSelectChange(event) {
    const newGrid = this.state.grid.slice();
    const selectValue = event.target.value;
    const chosenCharacter = this.chosenCharacter;
    const questions = this.state.questions;
    let addToGuesses = this.state.guesses;
    addToGuesses ++;

    const updatedGrid =  multipleCharacterCheck(newGrid, chosenCharacter, selectValue);

    const questionNotDeleted = questionDeleter(questions, addToGuesses, selectValue, updatedGrid)

    this.setState({
      selectValue: selectValue,
      grid: updatedGrid,
      questions: questionNotDeleted,
      guesses: addToGuesses
    }); 
  }

  handleRefreshClick() {
    window.location.reload();
  }

  render() {
    return(
      <div>
      <h1>Guess Who's Top Of Cohort 7!</h1>
      <div id="info">
        <p className="info-component">No Of Guesses: {this.state.guesses}</p>
        <p className="info-component">Best Score: {this.bestScore}</p>
      </div>
      <Board characters={this.props.characters} onButtonClick={this.handleCharacterClick}/>
      <div id="gameplay">
        <QuestionSelector questions={this.props.questions} onChange={this.handleSelectChange}/>
        <button className="gameplay-component" onClick={this.handleRefreshClick}>Play Again?</button>
      </div>
      </div>
      )
  }
}

export default Game;