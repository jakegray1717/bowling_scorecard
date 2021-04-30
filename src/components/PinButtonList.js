import React, { useEffect, useState } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import PinButton from './PinButton.js';

const PinButtonList = ({ frames, setFrames }) => {
  const buttonValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [currentFrameIdx, setCurrentFrameIdx] = useState(0);
  const [currentRollIdx, setCurrentRollIdx] = useState(0);

  useEffect(() => {

    if (currentRollIdx === 2 && currentFrameIdx !== 9) {
      setCurrentFrameIdx(currentFrameIdx + 1);
      setCurrentRollIdx(0);
    } else if (currentRollIdx === 3 && currentFrameIdx === 9) {
      //pop up score
    }
  }, [currentRollIdx])

  // useEffect(() => {
  //   if () {

  //   }
  // }, [currentFrameIdx])

  return(
    <>
      Pins Knocked Down
      <ButtonGroup className="mr-2" aria-label="First group">
        {buttonValues.map((buttonValue, idx) => {
          return (
            <PinButton key={idx} buttonValue={buttonValue} setCurrentRollIdx={setCurrentRollIdx} currentRollIdx={currentRollIdx} currentFrameIdx={currentFrameIdx} setCurrentFrameIdx={setCurrentFrameIdx} setFrames={setFrames} frames={frames} />
          )
        })}
      </ButtonGroup>
    </>
  )
}

export default PinButtonList;