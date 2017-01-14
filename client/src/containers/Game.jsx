import React from 'react';
import Board from '../components/Board.jsx'

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: this.props.characters
      // player: 1st player here?
    }
    // this.handleCellClick = this.handleCellClick.bind(this)
  }
  // handleCellClick(e) {
  //   // could be to click on character etc
  //   const index = e.target.value
  //   const copyOfGrid = this.state.grid.slice()
  //   copyOfGrid[index] = ""
  //   this.setState({grid: copyOfGrid})
  //   //RANDOM SHIT NEEDS CHANGING
  // }
  render() {
    return(
      <div>
        <h1>Guess who blud!</h1>
        <Board characters={this.props.characters}/>
      </div>
    )
  }
}

export default Game;