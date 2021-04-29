import React, { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import PinButtonList from './components/PinButtonList.js';
import BowlingCard from './components/BowlingCard.js';
import './App.css';

const App = () => {
  const emptyFrames = [{frame:['2', '3'], score:'5'}, {frame:['2', '4'], score:'5'}, {frame:['', ''], score:''}, {frame:['', ''], score:''}, {frame:['', ''], score:''}, {frame:['', ''], score:''}, {frame:['', ''], score:''}, {frame:['', ''], score:''}, {frame:['', ''], score:''}, {frame:['', '', ''], score:''}];
  const [frames, setFrame] = useState(emptyFrames);

  return (
    <div className="App">
      <h1>Bowling Score Card</h1>
      <PinButtonList />
      <BowlingCard />
    </div>
  );
}

export default App;
