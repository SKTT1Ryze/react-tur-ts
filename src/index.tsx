import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Square<P> extends React.Component<P, { value: number | string }> {
  constructor(props: Readonly<P> | P) {
    super(props);
    this.state = {
      value: "",
    };
  }
  render() {
    return (
      <button className="square" onClick={() => this.setState({ value: "X" })}>
        {this.state.value}
      </button>
    );
  }
}

class Board<P> extends React.Component<P, { squares: Array<Square<P>> }> {
  constructor(props: Readonly<P> | P) {
    super(props);
    this.state = {
      squares: Array(9).fill(new Square(props)),
    };
  }

  renderSquare(i: number) {
    return <Square value={this.state.squares[i]} />;
  }

  render() {
    const status = "Next player: X";

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

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Game />);

ReactDOM.render(<Game />, document.getElementById("root"));
