import React from 'react';
import { Table } from 'react-bootstrap';

const BowlingCard = ({ frames }) => {


  return (
    <div>
      Bowling Card
      <Table bordered hover variant="dark">
        <tbody>
          <tr>
            <th colSpan='6'>Frame 1</th>
            <th colSpan='6'>Frame 2</th>
            <th colSpan='6'>Frame 3</th>
            <th colSpan='6'>Frame 4</th>
            <th colSpan='6'>Frame 5</th>
            <th colSpan='6'>Frame 6</th>
            <th colSpan='6'>Frame 7</th>
            <th colSpan='6'>Frame 8</th>
            <th colSpan='6'>Frame 9</th>
            <th colSpan='9'>Frame 10</th>
          </tr>
          <tr>
            {frames.map((frameObj, idx) => {
              if (frameObj.frame.length === 2) {
                return (
                  <>
                    <td colSpan='3' key={idx}>{frameObj.frame[0]}</td><td colSpan='3'>{frameObj.frame[1]}</td>
                  </>
                )
              } else {
                return (
                  <>
                    <td colSpan='3' key={idx}>{frameObj.frame[0]}</td><td colSpan='3'>{frameObj.frame[1]}</td><td colSpan='3'>{frameObj.frame[2]}</td>
                  </>
                )
              }
            })}
          </tr>
          <tr>
          {frames.map((frameObj, idx) => {
              if (frameObj.frame.length === 2) {
                return (
                  <>
                    <td colSpan='6'>{frameObj.score}</td>
                  </>
                )
              } else {
                return (
                  <>
                    <td colSpan='9'>{frameObj.score}</td>
                  </>
                )
              }
            })}
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default BowlingCard;