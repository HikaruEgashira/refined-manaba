/**
 * どのページでも共通して読み込まれる
 */
import { validation } from './validation';

import redirectFeature from './redirect';
import ellipsisFeature from './ellipsis';

const run = () => {
  redirectFeature();
  ellipsisFeature();
};

export const init = () => {
  if (validation) run();
};
