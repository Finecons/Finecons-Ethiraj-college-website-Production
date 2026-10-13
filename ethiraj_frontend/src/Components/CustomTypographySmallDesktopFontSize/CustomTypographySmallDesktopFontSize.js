
// utils/scaleFont.js
export const CustomTypographySmallDesktopSize = (figmaSize, baseWidth = 1728, targetWidth = 1200) => {
  return ((figmaSize * targetWidth) / baseWidth);
};

// Example usage:
console.log(CustomTypographySmallDesktopSize(32)); // 25.36px → use 25px
console.log(CustomTypographySmallDesktopSize(24)); // 19px
