export default function isStringPositiveInterger(input: string): boolean {
  const parsedInt = parseInt(input, 10);
  return Number.isInteger(parsedInt) && parsedInt > 0;
}
