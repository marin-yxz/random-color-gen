import chalk from 'chalk';
import randomColor from 'randomcolor';
import { print } from './print.js';

const color_the_text2 = color_the_text1(process.argv[2], process.argv[2]);
const color_the_text = chalk.hex(color_the_text2);

function color_the_text1(pro) {
  if (pro === '0') {
    return randomColor({
      luminosity: random,
      hue: random,
    });
  } else {
    return randomColor({
      luminosity: process.argv[2],
      hue: process.argv[3],
    });
  }
}

console.log(
  randomColor({
    luminosity: process.argv[2],
    hue: process.argv[3],
  }),
);

let ArrayLength = 30;
let Height = 9;

const array = new Array(ArrayLength).fill(color_the_text('#'));
const array2 = new Array(ArrayLength).fill(color_the_text('#'));
const array3 = new Array(ArrayLength).fill(color_the_text('#'));

array3.fill(' ', 5, ArrayLength - 5);
array2.fill(' ', 5, ArrayLength - 5);
let refernceArray = ArrayLength;

let hex = color_the_text2;
const split_hex = hex.split('');

let array_number = refernceArray / 2 - 4;
for (let i = 0; i < 7; i++) {
  let hex_value = split_hex[i];
  let hex_colored = color_the_text(hex_value);
  array3[array_number] = hex_colored;
  array_number++;
}

let Height_ar = (Height - 7) / 2;

print(array, array2, array3, Height_ar);
