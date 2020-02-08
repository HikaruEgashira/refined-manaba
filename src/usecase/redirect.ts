export const redirect = (target: string[], to: string) => {
  if (target.includes(location.href)) location.href = to;
};
