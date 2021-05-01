import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import PinButtonList from './components/PinButtonList.js';
import BowlingCard from './components/BowlingCard.js';
import HomePage from './components/HomePage.js';
import './App.css';

const App = () => {
  const emptyFrames = [{frame:['_', ' '], score:'_'}, {frame:[' ', ' '], score:' '}, {frame:[' ', ' '], score:' '}, {frame:[' ', ' '], score:' '}, {frame:[' ', ' '], score:' '}, {frame:[' ', ' '], score:' '}, {frame:[' ', ' '], score:' '}, {frame:[' ', ' '], score:' '}, {frame:[' ', ' '], score:' '}, {frame:[' ', ' ', ' '], score:' '}];
  const [frames, setFrames] = useState(emptyFrames);
  const [currentFrameIdx, setCurrentFrameIdx] = useState(0);
  const [currentRollIdx, setCurrentRollIdx] = useState(0);
  const [enter, setEnter] = useState(false);

  const resetGame = () => {
    setFrames(emptyFrames);
    setCurrentFrameIdx(0);
    setCurrentRollIdx(0);
  }

  if (enter) {
    return (
      <div className="App">
        <img src="./ballAndPins.png" alt="" width="250" height="250"/>
        {/* <h1>Bowling Score Card</h1> */}
        <br/>
        <PinButtonList frames={frames} setFrames={setFrames} currentFrameIdx={currentFrameIdx} setCurrentFrameIdx={setCurrentFrameIdx} currentRollIdx={currentRollIdx} setCurrentRollIdx={setCurrentRollIdx} />
        <br/>
        <BowlingCard frames={frames} />
        <Button onClick={resetGame} variant="info">Reset</Button>
      </div>
    );
  } else {
    return (
      <div className="App">
        <HomePage />
        <Button onClick={() => setEnter(true)} variant="info">Enter</Button>
      </div>
    )
  }

}

export default App;
