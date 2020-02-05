import select from 'select-dom';

console.log('init | content');
const usernameElements = select.all(['#screenname'].join());
console.log(usernameElements[0].innerText);

const courses = select.all(['.courselist-c'].join());
courses.forEach(el => {
  console.log(el.innerText);
  el.style.height = '3rem';
  el.style.color = '#121212';
  el.style.margin = '0';
  el.style.padding = '0';
});

const td = select.all(['.contentbody-right'].join());
td.forEach(el => {
  el.style.display = 'none';
});

// Add global for easier debugging
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(window as any).select = select;
