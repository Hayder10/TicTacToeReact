import React , { useState } from 'react'
import Restartbutton from './Restartbutton.jsx'
import Square from './Square.jsx'

function Board() {
  const [squares,setSquares] = useState([null,null,null,null,null,null,null,null,null])
  const [isX,setIsX] = useState(true)
  const [turn,setTurn] = useState(0)

  //Symbol Setting on Square
  const handleClick  = (i) => {

    //End turn if there's a winner or click the same place.
    if (winnerCheck(squares) || squares[i]){
        return null
    }

     squares[i] = isX ? "X" : "O";
     setSquares(squares)
     setIsX(!isX)
     setTurn(turn+1)
  }  


  const winnerCheck = (squares) => {
    const winConditions = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    for(let i = 0 ; i < winConditions.length ; i++){
        const [a,b,c] = winConditions[i]
        if(squares[a] && squares[a]===squares[b] && squares[a] === squares[c]){
            return squares[a]
        }
    }

    return null;
  }

  const winner = winnerCheck(squares)
  var status = ""

  if (winner) {
    status = 'Winner: '+winner
  }else if(turn === 9){
    status = 'Tie!';
  }
  else{
    status = `Next player: ${isX ? "X" : "O"}`
  }

  const restarter = () =>{
    setIsX(true)
    setSquares([null,null,null,null,null,null,null,null,null])
    setTurn(0)
  }
  return (
    <>
    <div className="status">{status}</div>
    <div className="board">
        <div className="board-row">
            <Square value={squares[0]} onClick={() => handleClick(0)}/>
            <Square value={squares[1]} onClick={() => handleClick(1)}/>
            <Square value={squares[2]} onClick={() => handleClick(2)}/>
        </div>
        <div className="board-row">
            <Square value={squares[3]} onClick={() => handleClick(3)}/>
            <Square value={squares[4]} onClick={() => handleClick(4)}/>
            <Square value={squares[5]} onClick={() => handleClick(5)}/>
        </div>
        <div className="board-row">
            <Square value={squares[6]} onClick={() => handleClick(6)}/>
            <Square value={squares[7]} onClick={() => handleClick(7)}/>
            <Square value={squares[8]} onClick={() => handleClick(8)}/>
        </div>
    </div>
    <div className="restartbutton">
        <button id='restart'onClick={() => restarter()}>Restart!</button>
    </div>
    </>
    
  )
}

export default Board