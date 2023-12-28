const CONSECUTIVE_K_BIT_1 = 1;
const BIT_1 = 1;

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
    let t = k;
    let sum = 0;

    // summ x[i] + x[i-1] + x[i-2] + .... + x[i-k +1]
    while (t > 0) {
      sum += x[i - t + 1];
      t--;
    }

    if (sum === k) {
      count++;
    }

    if (count > CONSECUTIVE_K_BIT_1) return false;
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

    while (x[i] === BIT_1) {
      x[i] = 1 - x[i];
      i--;
    }

    if (i === 0) break;
    x[i] = (1 - x[i]) as number;
  }
};

generateBinaryString(4, 7);
