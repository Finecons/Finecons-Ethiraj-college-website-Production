/**
 * Generate a responsive clamp() font-size string
 * @param {number} minPx - minimum font size in px
 * @param {number} maxPx - maximum font size in px
 * @param {number} [scaling=1] - optional scaling factor for vw
 * @returns {string} CSS clamp() string
 */
export function CustomClampFont(minPx, maxPx, scaling = 1) {
  const minRem = minPx / 16; // convert px → rem
  const maxRem = maxPx / 16;
  const vw = scaling; // vw factor (adjust how fast it scales)
  return `clamp(${minRem}rem, ${vw}vw + ${minRem}rem, ${maxRem}rem)`;
}
