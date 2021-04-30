import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import PinButtonList from './components/PinButtonList.js';
import BowlingCard from './components/BowlingCard.js';
import testingData from './testingData.js';
import findScore from './findScore.js';
import './App.css';

const App = () => {
  const emptyFrames = [{frame:['_', ' '], score:'_'}, {frame:[' ', ' '], score:' '}, {frame:[' ', ' '], score:' '}, {frame:[' ', ' '], score:' '}, {frame:[' ', ' '], score:' '}, {frame:[' ', ' '], score:' '}, {frame:[' ', ' '], score:' '}, {frame:[' ', ' '], score:' '}, {frame:[' ', ' '], score:' '}, {frame:[' ', ' ', ' '], score:' '}];
  const [frames, setFrames] = useState(testingData);

  const resetGame = () => {
    setFrames(emptyFrames);
  }

  return (
    <div className="App">
      <h1>Bowling Score Card</h1>
      <PinButtonList frames={frames} setFrames={setFrames} />
      <BowlingCard frames={frames} />
      <Button onClick={resetGame}>Reset</Button>
    </div>
  );
}

export default App;
