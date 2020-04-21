import React, { useState, useEffect } from "react";
import "./App.css";
import PlayerSearches from './PlayerSearches'
import WindowWidethDisplay from './useWindowWidth'

// import { response } from "express";

function App() {


  const [players, setplayers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/players")
      .then((response) => response.json())
      .then((soccarwomen) => {
        setplayers(soccarwomen);
      });
  }, []);

  return (
    <div data-testid="itisindeed" className="App">
      <WindowWidethDisplay></WindowWidethDisplay>
      <PlayerSearches></PlayerSearches>
      {players.map((players, index) => (
        <div  data-testid="red" key={index} className="playnameactual">
          <div  data-testid="itdo" style={{color:'red'}}>{players.name}</div>
        </div>
      ))}
    </div>
  );
}



export default App;
