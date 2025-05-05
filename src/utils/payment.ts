export const formatCardNumbers = (num: number | string): string => {
  const numStr = num.toString(); // Convert to string first
  return numStr.replace(/(.{4})(?=.)/g, '$1    '); // Add 4 spaces after every 4 digits
};

export const formatCurrencyUSD = (number: number) => {
  if (typeof number !== 'number' || isNaN(number)) {
    return '$0.00';
  }
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number);
};
