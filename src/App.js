import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import PinButtonList from './components/PinButtonList.js';
import BowlingCard from './components/BowlingCard.js';
import testingData from './testingData.js';
import findScore from './findScore.js';
import './App.css';

const App = () => {
  const emptyFrames = [{frame:['_', ' '], score:'_'}, {frame:[' ', ' '], score:' '}, {frame:[' ', ' '], score:' '}, {frame:[' ', ' '], score:' '}, {frame:[' ', ' '], score:' '}, {frame:[' ', ' '], score:' '}, {frame:[' ', ' '], score:' '}, {frame:[' ', ' '], score:' '}, {frame:[' ', ' '], score:' '}, {frame:[' ', ' ', ' '], score:' '}];
  const [frames, setFrames] = useState(emptyFrames);
  const [currentFrameIdx, setCurrentFrameIdx] = useState(0);
  const [currentRollIdx, setCurrentRollIdx] = useState(0);

  const resetGame = () => {
    setFrames(emptyFrames);
    setCurrentFrameIdx(0);
    setCurrentRollIdx(0);
  }

  return (
    <div className="App">
      <h1>Bowling Score Card</h1>
      <PinButtonList frames={frames} setFrames={setFrames} currentFrameIdx={currentFrameIdx} setCurrentFrameIdx={setCurrentFrameIdx} currentRollIdx={currentRollIdx} setCurrentRollIdx={setCurrentRollIdx} />
      <BowlingCard frames={frames} />
      <Button onClick={resetGame}>Reset</Button>
    </div>
  );
}

export default App;
