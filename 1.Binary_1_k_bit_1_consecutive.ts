const CONSECUTIVE_K_BIT_1 = 1;

const printBinary = (x: number[], n: number) => {
  let str = "";
  for (let i = 1; i <= n; i++) {
    str += `${x[i]} `;
  }
  console.log(str);
};

const checkValidBinaryString = (x: number[], k: number, n: number) => {
  let count = 0;

  for (let i = k; i <= n; i++) {
    if (x[i] + x[i - 1] + x[i - 2] === k) {
      count++;
    }
  }

  if (count === CONSECUTIVE_K_BIT_1) return true;
  return false;
};

const generateBinaryString = (k: number, n: number) => {
  const x: number[] = [];

  for (let i = 1; i <= n; i++) {
    x[i] = 0;
  }

  while (true) {
    if (checkValidBinaryString(x, k, n)) {
      printBinary(x, n);
    }

    let i = n;

    while (x[i] === 1) {
      x[i] = 1 - x[i];
      i--;
    }

    if (i === 0) break;
    x[i] = (1 - x[i]) as number;
  }
};

generateBinaryString(3, 5);
