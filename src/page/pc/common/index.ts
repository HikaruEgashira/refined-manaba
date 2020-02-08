/**
 * どのページでも共通して読み込まれる
 */
import { validation } from './validation';

import redirectFeature from './redirectFeature';

const run = () => {
  redirectFeature();
};

export const init = () => {
  if (validation) run();
};
