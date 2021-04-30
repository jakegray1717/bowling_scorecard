const findScore = (data) => {
  let rollString = '';
  data.map((frameObj, idx) => {
    frameObj.frame.forEach((roll) => {
      if (roll !== ' ') {
        rollString = rollString + roll;
      }
    })
    rollString = rollString + ' ';
  })

  const removeExtraSpaces = (string) => {
    if (string[string.length -1] === ' ') {
      rollString = rollString.substring(0, rollString.length - 1);
      removeExtraSpaces(rollString);
    }
  }

  removeExtraSpaces(rollString);

  return delegateScore(rollString);
}

const delegateScore = (frames) => {
  var framesArr = frames.split(' ').map((frame) => [...frame]);
  var result = 0;

  for (var i=0; i < framesArr.length; i++) {
    var current = framesArr[i];

    if(current[0] === 'X' && i < 9) {
      result += 10 + getNextElementsScore(framesArr, i, 2);
    } else if(current.length === 2 && current[1] === '/' && i < 9) {
      result += 10 + getNextElementsScore(framesArr, i, 1);
    } else if(current.length === 3) {
      result += getThreeRollScore(current);
    } else {
      result += getElementScore(current, 0) + getElementScore(current, 1);
    }
  }
  return result;
}

const getNextElementsScore = (framesArr, index, count) => {
  var result = getElementScore(framesArr[index + 1], 0);
  var result2 = getElementScore(framesArr[index + 1], 1)

  if (framesArr[index + 1].length === 1) {
    return count === 1 ? result : result + getElementScore(framesArr[index + 2], 0);
  }
  return count === 1 ? result : (result2 === 10 && result !== 10 ? result2 : result2 + result );
}

const getElementScore = (frame, index) => {
  if (frame[index] === 'X' || frame[index] === '/') {
    return 10;
  }
  return parseInt(frame[index]);
}

const getThreeRollScore = (current) => {
  var third = getElementScore(current, 2);
  var second = getElementScore(current, 1);
  var first = getElementScore(current, 0);

  return third === 10 && second !== 10 ? third + first : (second === 10 && first !== 10 ? third + second : first + second + third);
}

export default findScore;