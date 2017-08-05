import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p className="App-intro">
            <Menu />
          To get started, edit <code>src/App.js</code> and save to reload.
            <Board  />
        </p>
      </div>
    );
  }
}

class Board extends React.Component {
    constructor() {
        super();
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        };
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares : squares,
            xIsNext: !this.state.xIsNext
        });
    }

    resetGame() {
        console.log('fvfvffv');
    }

    render() {
        const winner = calculateWinner(this.state.squares);
        let status;

        if (winner) {
            status = 'Winner ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        let squares = [];
        for (let i = 0; i < 9 ; i++) {
            const val = this.state.squares[i];
            squares.push(<Square name={i} value={val} onClick={() => this.handleClick(i)} />);
        }
        return (
            <div className="board">
                <Menu board={this} />
                <div className="status">{status}</div>
                {squares}
            </div>
        );
    }
}

//next chapter : declaring a winner

function Square(props) {
    return (
        <div className="square" data-value={props.name} onClick={() => props.onClick()}>
            {props.value}
        </div>
    );
}


class Menu extends React.Component {

    render() {
        return (
            <div>
                <MenuElement label="home" />
                <MenuElement label="new game"  />
            </div>
    );
    }
}

class MenuElement extends React.Component {
    render() {
        return <div onClick={() => console.log('frfffr')}>{this.props.label}</div>
    }


}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

export default App;
