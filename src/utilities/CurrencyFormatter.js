export function format(price) {
  return Math.round(price * 100) / 100 + " €";
}
