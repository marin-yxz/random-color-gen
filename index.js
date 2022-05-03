import chalk from 'chalk';
import randomColor from 'randomcolor';
import { print } from './print.js';

function ColorText1(pro) {
  if (pro === '0') {
    return randomColor({
      luminosity: 'random',
      hue: 'random',
    });
  } else {
    return randomColor({
      luminosity: process.argv[2],
      hue: process.argv[3],
    });
  }
}
const colorText = ColorText1(process.argv[2], process.argv[2]);
const ColorText = chalk.hex(colorText);
console.log(
  randomColor({
    luminosity: process.argv[2],
    hue: process.argv[3],
  }),
);

const arrayLength = 30;
const height = 9;

const array = new Array(arrayLength).fill(ColorText('#'));
const array2 = new Array(arrayLength).fill(ColorText('#'));
const array3 = new Array(arrayLength).fill(ColorText('#'));

array3.fill(' ', 5, arrayLength - 5);
array2.fill(' ', 5, arrayLength - 5);
const refernceArray = arrayLength;

const hex = colorText;
const splitHex = hex.split('');

let arrayNumber = refernceArray / 2 - 4;
for (let i = 0; i < 7; i++) {
  const hexValue = splitHex[i];
  const hexColored = ColorText(hexValue);
  array3[arrayNumber] = hexColored;
  arrayNumber++;
}

const heightAr = (height - 7) / 2;

print(array, array2, array3, heightAr);
