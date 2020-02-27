import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//This is a function component
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
      
    };
  }

  handleClick(i){
    //Get a copy of the state of the board and put it in a constant variable "squares"
    const squares = this.state.squares.slice();
    //Mutate the copy of the array squares based on the ternary operator (if This.state.xIsNext is true then do  whats on the left of the ":" else what is on the right)
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    //Set the state of the board to be the new state (the mutated copy of the original state)
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  renderSquare(i) {
    return (
      <Square 
        value={this.state.squares[i]} 
        onClick={() => this.handleClick(i)}
      />);
  }

  render() {
    const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
