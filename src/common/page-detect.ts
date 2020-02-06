/**
 * 現在のページの情報
 */
import select from 'select-dom';

export const isSp = () =>
  /^https:\/\/manaba.tsukuba.ac.jp\/s\/?$/g.test(location.href);

export const isHome = () =>
  location.href ===
    'https://manaba.tsukuba.ac.jp/ct/home___y2019?chglistformat=list' ||
  location.href === 'https://manaba.tsukuba.ac.jp/s/home_summary';

export const is403 = (): boolean => document.title === 'Forbidden';

export const is404 = (): boolean => select('pagebody') !== null;

export const is500 = (): boolean => false;

export const hasError = (): boolean => is403() || is404() || is500(); // Static code, not the editor
