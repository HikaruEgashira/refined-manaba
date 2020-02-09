import select from 'select-dom';

export default () => {
  const alertList = select('.alertlist');
  if (alertList) {
    alertList.style.cssText = `
      padding-top: 16px;
    `;
  }
};
