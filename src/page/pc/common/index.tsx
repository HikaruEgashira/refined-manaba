/**
 * どのページでも共通して読み込まれる
 */

import { redirect, year } from '../../../usecase';

const run = () => {
  const home = [
    'https://manaba.tsukuba.ac.jp/ct/home',
    'https://manaba.tsukuba.ac.jp/ct/home_?chglistformat=list'
  ];
  redirect(
    home,
    `https://manaba.tsukuba.ac.jp/ct/home___y${year}?chglistformat=list`
  );
};

const validLocation = true;

export const init = () => {
  if (validLocation) run();
};
