export function checkLength(number1, number2) {
  number1 = parseInt(number1);
  number2 = parseInt(number2);
  if (isNaN(number1)) {
    number1 = 31;
    number1 -= 1;
    number1 = number1 / 2 - 4;
    const newArray = [number1, 9];
    return newArray;
  }
  if (number1 % 2 === 0 && number2 % 2 === 0) {
    number1 = number1 / 2;
    number1 = number1 - 4;
    const newArray = [number1, number2];
    return newArray;
  }
  if (number1 % 2 !== 0) {
    number1 -= 1;
    number1 = number1 / 2 - 4;
    const newArray = [number1, number2];
    return newArray;
  }
  if (number2 % 2 !== 0 && number1 % 2 === 0) {
    number1 = number1 / 2 - 4;
    number2 += 1;
    const newArray = [number1, number2];
    return newArray;
  }
}

export function yo(number1) {
  if (number1 === undefined) {
    return 31;
  } else {
    return parseInt(number1);
  }
}
