export function print(array, array2, array3, Height_ar) {
  for (let i = 0; i < 3; i++) {
    console.log(array.join(''));
  }

  for (let i = 0; i < Height_ar; i++) {
    console.log(array2.join(''));
  }

  console.log(array3.join(''));

  for (let i = 0; i < Height_ar; i++) {
    console.log(array2.join(''));
  }

  for (let i = 0; i < 3; i++) {
    console.log(array.join(''));
  }
}
