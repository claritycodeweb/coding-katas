// https://www.codewars.com/kata/binary-addition

function binaryAdd(a, b) {
  const sum = a + b;
  return toBinary(sum);
}

function toBinary(sum) {
  if (sum === 0) {
    return '0';
  }

  let binary = '';

  while (sum > 0) {
    const remainder = sum % 2;
    binary = remainder + binary;
    sum = Math.floor(sum / 2);
    console.log('sum', sum);
  }

  return binary;
}

console.log(binaryAdd(3, 2)); //// 101
