/**
 * どのページでも共通して読み込まれる
 */

import { redirect, year } from '../../../usecase';

const run = () => {
  const home = [
    'https://manaba.tsukuba.ac.jp/ct/home',
    'https://manaba.tsukuba.ac.jp/ct/home_?chglistformat=list'
  ];
  const to = `https://manaba.tsukuba.ac.jp/ct/home___y${year()}?chglistformat=list`;
  redirect(home, to);
};

const validLocation = true;

export const init = () => {
  if (validLocation) run();
};
