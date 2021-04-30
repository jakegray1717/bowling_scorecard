import React from 'react';
import { Button } from 'react-bootstrap';

const PinButton = ({ buttonValue, setCurrentRollIdx, currentRollIdx, setFrames, frames, setCurrentFrameIdx, currentFrameIdx }) => {
  const enterPins = (e) => {
    let updatedFrames = frames;
    let framesToUpdate = updatedFrames[currentFrameIdx];
    if (currentRollIdx === 0 && buttonValue === 10) {
      framesToUpdate.frame[currentRollIdx] = 'X';
      framesToUpdate.frame[1] = ''
      setCurrentFrameIdx(currentFrameIdx + 1)
    }
    framesToUpdate.frame[currentRollIdx] = buttonValue;
    setCurrentRollIdx(currentRollIdx + 1);
  }

  return (
    <>
      <Button variant="secondary" onClick={(e) => enterPins(e)}>{buttonValue}</Button>{' '}
    </>
  )
}

export default PinButton;