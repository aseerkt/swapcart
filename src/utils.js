/**
 * @returns {string}
 * @param {number} number
 */

export function formatPrice(number) {
  return number.toLocaleString('en-IN', {
    currency: 'INR',
    style: 'currency',
    maximumFractionDigits: 0,
  });
}
