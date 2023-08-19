import isStringNumber from "../_helpers/is-string-number";
import isStringPositiveInterger from "../_helpers/is-string-positive-interger";

export default function q1Validator(input: string) {
  if (!isStringNumber(input)) return "Please enter valid number";
  if (!isStringPositiveInterger(input)) return "Number must be greate than 0";
  return "OK";
}
