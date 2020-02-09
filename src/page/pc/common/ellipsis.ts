import select from 'select-dom';

export default () => {
  const td = select.all('td');
  td.forEach(e => {
    e.style.cssText = `
      max-width: 200px;
      height: 3rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: "-";
      white-space: nowrap;
    `;
  });
};
