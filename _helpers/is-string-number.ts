export default function isStringNumber(value: string) {
  const regex = /^-?\d+(\.\d+)?$/;
  return regex.test(value);
}
