import randomColor from 'randomcolor';

export function check(pro, pro1) {
  if (pro === '0') {
    console.log(
      randomColor({
        luminosity: random,
        hue: random,
      }) + 'fo',
    );
    console.log('ff');
    return randomColor({
      luminosity: random,
      hue: random,
    });
  } else {
    console.log(pro, pro1);
    console.log(
      randomColor({
        luminosity: pro,
        hue: pro1,
      }),
    );
    return randomColor({
      luminosity: pro,
      hue: pro1,
    });
  }
}
