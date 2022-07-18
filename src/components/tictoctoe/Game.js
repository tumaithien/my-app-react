import "./style.css";
import React, { useReducer, useState } from "react";
import Board from "./Board";
import { calculateWinner } from "../../helper";

const initialState = {
  board: Array(9).fill(null),
  xIsNext: true,
};
// immutable
// [...arr] {...obj}
// deep copy JSON.parse(JSON.stringtify(obj)) dùng để copy các giá trị khởi tạo phức tạp
const gameReducer = (state, action) => {
  switch (action.type) {
    case "CLICK": {
      const { board, xIsNext } = state;
      const { index, winner } = action.payload;
      if (winner || board[index]) return state;
      const nextState = JSON.parse(JSON.stringify(state));
      nextState.board[index] = xIsNext ? "X" : "O";
      nextState.xIsNext = !xIsNext;
      return nextState;
    }
    case "RESET": {
      const nextState = JSON.parse(JSON.stringify(state));
      nextState.board = Array(9).fill(null);
      nextState.xIsNext = true;
      return nextState;
    }
    default:
      console.log("Error");
      break;
  }
  return state;
};

const Game = () => {
  // const [board, setBoard] = useState(Array(9).fill(null))
  // const [xIsNext, setXIsNext] = useState(true);
  // useReducer
  const [state, dispatch] = useReducer(gameReducer, initialState);
  // const [state, setState] = useState({
  //     board: Array(9).fill(null),
  //     xIsNext: true,
  // });
  const winner = calculateWinner(state.board);
  const handleClick = (index) => {
    // const boardCopy = [...state.board];
    // if(winner || boardCopy[index]) return;
    // boardCopy[index] = state.xIsNext ? 'X' : 'O';
    dispatch({
      type: "CLICK",
      payload: {
        index,
        winner,
      },
    });
    // setBoard(boardCopy);
    // setXIsNext((xIsNext) => !xIsNext)
    // setState({
    //     ...state,
    //     board: boardCopy,
    //     xIsNext: !state.xIsNext
    // })
  };
  const handleResetGame = () => {
    // setBoard(Array(9).fill(null))
    // setXIsNext(true)
    dispatch({
      type: "RESET",
    });
  };
  return (
    <div>
      <Board cells={state.board} onClick={handleClick}></Board>
      <div className="game-winner">{winner ? `Winner is ${winner}` : ""}</div>
      <button className="game-reset" onClick={handleResetGame}>
        Reset Game
      </button>
    </div>
  );
};

export default Game;
