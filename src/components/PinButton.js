import React, { setState } from 'react';
import { Button } from 'react-bootstrap';

const PinButton = ({ buttonValue, setCurrentRollIdx, currentRollIdx, setFrames, frames, setCurrentFrameIdx, currentFrameIdx }) => {
  const enterPins = (e) => {
    let pins = buttonValue
    const rollOne = frames[currentFrameIdx].frame[0];



    if (buttonValue === 10 && currentRollIdx === 0) {
      pins = 'X';
      setFrames(frames => {
        let newFrames = frames;
        newFrames[currentFrameIdx].frame[currentRollIdx] = pins;
        return [...newFrames];
      });
      if (currentFrameIdx !== 9) {
        setCurrentFrameIdx(currentFrameIdx + 1);
      } else {
        setCurrentRollIdx(currentRollIdx + 1)
      }
    } else if (buttonValue + rollOne === 10 && currentRollIdx === 1) {
      pins = '/';
      setFrames(frames => {
        let newFrames = frames;
        newFrames[currentFrameIdx].frame[currentRollIdx] = pins;
        return [...newFrames];
      });
      setCurrentRollIdx(currentRollIdx + 1);
    } else {
      setFrames(frames => {
        let newFrames = frames;
        newFrames[currentFrameIdx].frame[currentRollIdx] = pins;
        return [...newFrames];
      });
      setCurrentRollIdx(currentRollIdx + 1);
    }
  }

  if (currentFrameIdx === 9 && currentRollIdx === 1) {
    return (
      <>
        <Button variant="secondary" onClick={(e) => enterPins(e)}>{buttonValue}</Button>{' '}
      </>
    )
  } else if (10 - frames[currentFrameIdx].frame[0] >= buttonValue || currentRollIdx === 0 || currentRollIdx === 2) {
    return (
      <>
        <Button variant="secondary" onClick={(e) => enterPins(e)}>{buttonValue}</Button>{' '}
      </>
    )
  } else {
    return (
      <>
        <Button variant="secondary" disabled>{buttonValue}</Button>{' '}
      </>
    )
  }
}

export default PinButton;