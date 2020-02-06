/**
 * どのページでも共通して読み込まれる
 */
export const run = () => {
  if (location.href === 'https://manaba.tsukuba.ac.jp/ct/home') {
    location.href =
      'https://manaba.tsukuba.ac.jp/ct/home___y2019?chglistformat=list';
  }
};
