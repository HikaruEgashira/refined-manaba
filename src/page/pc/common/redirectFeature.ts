import { redirect, year } from '../../../usecase';

const home = [
  'https://manaba.tsukuba.ac.jp/ct/home',
  'https://manaba.tsukuba.ac.jp/ct/home_?chglistformat=list'
];
const to = `https://manaba.tsukuba.ac.jp/ct/home___y${year()}?chglistformat=list`;

export default () => {
  redirect(home, to);
};
