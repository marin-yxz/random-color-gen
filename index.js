import chalk from 'chalk';
import { checkLength, yo } from './checkLength.js';
import { check } from './checkUserColor.js';
import { print } from './print.js';

// Get all required user inputs
const userInput = [
  process.argv[2], // hue
  process.argv[3], // lumination
  process.argv[4], // length of #
  process.argv[5], // width of #
];

// Get color from User if existing
const colorText = check(userInput[0], userInput[1]);
const ColorText = chalk.hex(colorText);

// Make array of # and change it to desired color/random color
const long = yo(userInput[2]);

// Make array of # and change it to desired color/random color
const array = new Array(long).fill(ColorText('#'));
const array2 = new Array(long).fill(ColorText('#'));
const array3 = new Array(long).fill(ColorText('#'));
array3.fill(' ', 5, long - 5);
array2.fill(' ', 5, long - 5);

// Colors hex and splits it into array
const hex = colorText;
const splitHex = hex.split('');

// Check number of width so its always symetric doesnt matter much for length
// And does the math for length array
const even = checkLength(userInput[2], userInput[3]);

// Groups array with hex code and #
let arrayNumber = even[0];
for (let i = 0; i < 7; i++) {
  const hexValue = splitHex[i];
  const hexColored = ColorText(hexValue);
  array3[arrayNumber] = hexColored;
  arrayNumber++;
}

// calculates height peremiters
const heightAr = (even[1] - 7) / 2;

// console logs the box and hexcode
print(array, array2, array3, heightAr);
