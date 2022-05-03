import randomColor from 'randomcolor';

export function check(userInput1, userInput2) {
  if (userInput1 === '') {
    return randomColor({
      luminosity: 'random',
      hue: 'random',
    });
  } else {
    return randomColor({
      luminosity: userInput1,
      hue: userInput2,
    });
  }
}
