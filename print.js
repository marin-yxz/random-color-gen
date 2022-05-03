export function print(array, array2, array3, heightAr) {
  for (let i = 0; i < 3; i++) {
    console.log(array.join(''));
  }

  for (let i = 0; i < heightAr; i++) {
    console.log(array2.join(''));
  }

  console.log(array3.join(''));

  for (let i = 0; i < heightAr; i++) {
    console.log(array2.join(''));
  }

  for (let i = 0; i < 3; i++) {
    console.log(array.join(''));
  }
}
