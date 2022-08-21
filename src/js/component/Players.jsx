import React,{ useState }from 'react'
import Board from "./Board.jsx"

function Players() {
  const [showBoard,setShowBoard] = useState(false)
  const [nameX,setNameX] = useState(null)
  const [nameO,setNameO] = useState(null)
  const handleChangeX = (e) => {
      e.preventDefault()
      setNameX(e.target.value)
  }  

  const handleChangeO = (e) => {
    e.preventDefault()
    setNameO(e.target.value)
  }

  const handleClick = () => {
    if(nameX && nameO){
        console.log({ nameX , nameO})
        setShowBoard(true)
    }
  }

  if(!showBoard){
    return (
        <div className="bodyPlayers">
            <div className="playersbox">
                <div className="boxtitle">
                    Choose your weapon!
                </div>
                <div className="boxfooter">
                    <div className="box">
                    <input type="text" onChange={(e) => handleChangeX(e)} placeholder="Player 1 name"></input>
                    <button onClick={() => handleClick()} className="square">
                    X
                    </button>
                    </div>
                    <div className="box">
                    <input type="text" onChange={(e) => handleChangeO(e)} placeholder="Player 2 name"></input>
                    <button onClick={() => handleClick()} className="square">
                    O
                    </button>
                    </div>
                </div>
            </div>
        </div>
      )
  }else{
    return(
        <div className="root">
            <Board Xname={nameX} Oname={nameO}/>
        </div>
    )
  }
  
}

export default Players