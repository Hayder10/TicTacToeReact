//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";


//import your own components
import Square from "./component/Square.jsx";
import Board from "./component/Board.jsx";
import Players from "./component/Players.jsx"

//render your react application
ReactDOM.render(<Players />, document.querySelector("#app"));
