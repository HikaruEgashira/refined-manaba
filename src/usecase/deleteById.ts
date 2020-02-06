import select from 'select-dom';

export const deleteById = (id: string) => {
  const dom = select(id);
  if (dom) {
    dom.style.display = 'none';
  }
};
