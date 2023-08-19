import bigInt from "big-integer";

export default function q1Calculator(input: string): string {
  const parsedInt = parseInt(input);

  if (parsedInt > Number.MAX_SAFE_INTEGER) {
    return calculateBigint(input);
  } else {
    return calculateNumber(parsedInt);
  }
}

function calculateNumber(num: number): string {
  let result: number = NaN;
  // is odd
  if (num & 1) {
    result = (num - 1) / -2 + 1;
  }
  // is even
  else {
    // num - (num / 2 - 1)+ 1
    // 2 - 0 + 1
    // 4 - 1 + 1
    // 6 - 2 + 1
    result = num - num / 2 + 2;
  }

  return String(result);
}

function calculateBigint(num: string): string {
  const bigNum = bigInt(num);

  // is odd
  if (bigNum.isOdd()) {
    return bigNum.minus(1).divmod(-2).quotient.plus(1).toString();
  }
  // is even
  else {
    return bigNum.plus(2).minus(bigNum.divmod(2).quotient).toString();
  }
}
