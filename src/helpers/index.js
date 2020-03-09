export function FormatNumber(number) {
  try {
    return new Intl.NumberFormat("en-US").format(number);
  } catch (error) {
    return 0;
  }
}
