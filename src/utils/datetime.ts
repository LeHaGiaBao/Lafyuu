export const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// Format date as MM/DD/YYYY
export const formatDate = (date: Date | null): string => {
  if (!date) {
    return '';
  }
  return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
};

// Get month name and year
export const getMonthYearHeader = (date: Date): string => {
  return date.toLocaleString('default', {month: 'long', year: 'numeric'});
};

// Get days in month
export const getDaysInMonth = (year: number, month: number): number => {
  return new Date(year, month + 1, 0).getDate();
};

// Get day of week for first day of month (0 = Sunday, 1 = Monday, etc.)
export const getFirstDayOfMonth = (year: number, month: number): number => {
  return new Date(year, month, 1).getDay();
};
