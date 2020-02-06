import select from 'select-dom';

export const getCourse = select
  .all(['td .courselist-title'].join())
  .map(el => el.innerText.trim());
