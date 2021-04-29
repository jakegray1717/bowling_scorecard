import React from 'react';
import { ButtonGroup } from 'react-bootstrap';
import PinButton from './PinButton.js';

const PinButtonList = () => {
  const buttonValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return(
    <>
      PinButtonList
      <ButtonGroup className="mr-2" aria-label="First group">
        {buttonValues.map((buttonValue, idx) => {
          return (
            <PinButton key={idx} buttonValue={buttonValue} />
          )
        })}
      </ButtonGroup>
    </>
  )
}

export default PinButtonList;