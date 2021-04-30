import React, { useEffect, useState } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import PinButton from './PinButton.js';
import findScore from '../findScore.js'

const PinButtonList = ({ frames, setFrames, currentFrameIdx, setCurrentFrameIdx, currentRollIdx, setCurrentRollIdx }) => {
  const buttonValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const addScoresStrikesSpares = (idx, newFrames) => {
    console.log(idx);
    if (idx === -1) {
      return newFrames;
    } else if (newFrames[idx].score === ' ' || '_') {
      let nextFramePins = 0;
      newFrames[idx + 1].frame.forEach((roll, i) => {
        if (roll === 'X' || roll === '/') {
          roll = 10;
        }
        nextFramePins = parseInt(nextFramePins + roll);
      })
      newFrames[idx].score = newFrames[idx + 1].score - nextFramePins
      addScoresStrikesSpares(idx - 1, newFrames);
    }
    return newFrames;
  }

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
          //recursive function to check previous scores
          addScoresStrikesSpares(8, newFrames);
          return [...newFrames];
        })
      } else if (currentRollIdx === 3) {
        const newScore = findScore(frames);
        setFrames(frames => {
          let newFrames = frames;
          newFrames[9].score = newScore;
          //recursive function to check previous scores
          addScoresStrikesSpares(8, newFrames);
          return [...newFrames];
        })
      }
    }

    if (currentRollIdx === 2 && currentFrameIdx !== 9) {
      setCurrentFrameIdx(currentFrameIdx + 1);
      setCurrentRollIdx(0);
    }
  }, [currentRollIdx])

  //The function below will need to find values for strike and space frames
  useEffect(() => {
    if (frames[currentFrameIdx - 1]) {
      const lastFrame = frames[currentFrameIdx - 1].frame;
      if (currentFrameIdx > 0 && lastFrame[0] !== 'X' && lastFrame[1] !== '/') {

        const newScore = findScore(frames) || '-';
        setFrames(frames => {
          let newFrames = frames;
          newFrames[currentFrameIdx - 1].score = newScore;
          //recursive function to check strike and spare scores
          addScoresStrikesSpares(currentFrameIdx - 2, newFrames);
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