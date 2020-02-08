export const gotoCourse = (
  items: { name: string; href: string }[],
  changedItem: string
) => {
  const courseLink = items.find(({ name }) => name === changedItem)?.href;
  if (courseLink === undefined) return;

  location.href = courseLink;
};
