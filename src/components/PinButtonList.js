import React, { useEffect, useState } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import PinButton from './PinButton.js';
import findScore from '../findScore.js'

const PinButtonList = ({ frames, setFrames, currentFrameIdx, setCurrentFrameIdx, currentRollIdx, setCurrentRollIdx }) => {
  const buttonValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // const [currentFrameIdx, setCurrentFrameIdx] = useState(0);
  // const [currentRollIdx, setCurrentRollIdx] = useState(0);

  useEffect(() => {

    if (currentFrameIdx === 9 && currentRollIdx > 1) {
      const tenthFrame = frames[9].frame;
      let pins = 0;
      tenthFrame.forEach((roll, idx) => {
        if (roll === '/' || roll === 'X') {
          roll = 10;
        }
        pins = parseInt(pins + roll);
      });
      if (pins < 9) {
        setCurrentRollIdx(4);
        const newScore = findScore(frames);
        setFrames(frames => {
          let newFrames = frames;
          newFrames[9].score = newScore;
          return [...newFrames];
        })
      } else if (currentRollIdx === 3) {
        const newScore = findScore(frames);
        setFrames(frames => {
          let newFrames = frames;
          newFrames[9].score = newScore;
          return [...newFrames];
        })
      }
    }

    if (currentRollIdx === 2 && currentFrameIdx !== 9) {

      setCurrentFrameIdx(currentFrameIdx + 1);
      setCurrentRollIdx(0);
    } else if (currentRollIdx === 3 && currentFrameIdx === 9) {
      //pop up score
    }

  }, [currentRollIdx])

  //The function below will need to find values for strike and space frames
  useEffect(() => {
    //force 10th frame score here
    if (currentFrameIdx === 10) { // 11th frame) {

    }

    if (frames[currentFrameIdx - 1]) {
      const lastFrame = frames[currentFrameIdx - 1].frame;
      if (currentFrameIdx > 0 && lastFrame[0] !== 'X' && lastFrame[1] !== '/') {

        const newScore = findScore(frames) || '-';
        setFrames(frames => {
          let newFrames = frames;
          newFrames[currentFrameIdx - 1].score = newScore;
          return [...newFrames];
        })
      }
    }
  }, [currentFrameIdx])

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