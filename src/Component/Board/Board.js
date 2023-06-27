import React from "react";
import Square from "../Square/Square";
import Winner from "../Winner/Winner";
import {RotateCw} from "react-feather";
import "./Board.css"
class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext:false,
        }
    }
    renderSquare(i) {
        return <Square name={this.state.squares[i]}
                       onClick={() => this.handleClick(i)}
        />;
    }
    handleClick(i) {
        const squares = [...this.state.squares];
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i]=this.state.xIsNext ? "X": "O";
        this.setState({squares: squares,xIsNext:!this.state.xIsNext});
    }

    render() {
        const winner = calculateWinner(this.state.squares);
        const resetHandler=()=>{
            this.setState({squares: Array(9).fill(null)})
        }
        let status;
        let backDrop;
        if (winner) {
            backDrop = <Winner resetHandler={resetHandler} winner={winner} />
            status="Winner: " + winner
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }
        return (
            <div className={"container"}>
                <div className="status">
                    {status}
                    <RotateCw id={"Rotate"} onClick={resetHandler} />
                </div>
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
                {backDrop}
            </div>
        );
    }
}

export default Board;
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