export const formatCardNumbers = (num: number | string): string => {
  const numStr = num.toString(); // Convert to string first
  return numStr.replace(/(.{4})(?=.)/g, '$1    '); // Add 4 spaces after every 4 digits
};
