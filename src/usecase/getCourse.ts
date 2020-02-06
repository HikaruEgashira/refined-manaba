import select from 'select-dom';

export const getCourse = select
  .all(['td .courselist-title a'].join())
  .map(el => {
    return {
      name: el.innerText,
      href: (el as HTMLLinkElement).href
    };
  });
