import select from 'select-dom';

/**
 * selector配列以下のノードを全削除する
 * @param selector select-dom
 */
export const deleteDom = (...selector: string[]) =>
  select.all(selector).forEach(d => d.parentNode?.removeChild(d));
