export const year = (date = new Date()) =>
  date.getMonth() < 4 ? date.getFullYear() - 1 : date.getFullYear();
