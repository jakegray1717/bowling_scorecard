import React from 'react';
import { Button } from 'react-bootstrap';

const PinButton = ({ buttonValue }) => {

  return (
    <>
      <Button variant="secondary">{buttonValue}</Button>{' '}
    </>
  )
}

export default PinButton;