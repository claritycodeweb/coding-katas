// https://www.codewars.com/kata/decode-the-morse-code

global.MORSE_CODE = [];

decodeMorse = function (morseCode) {
  return morseCode
    .split('   ') // split a 3 spaces
    .map((coddedWord) => {
      return coddedWord
        .split(' ') // split into individual codes
        .reduce((word, code) => {
          return word + (MORSE_CODE[code] || '');
        }, '');
    })
    .filter((m) => !!m)
    .join(' ');
};
