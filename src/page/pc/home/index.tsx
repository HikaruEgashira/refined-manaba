import { validation } from './validation';

import SearchBoxFeature from './SearchBox';
import DelUnusedComponents from './delUnusedComponents';

const run = () => {
  DelUnusedComponents();
  SearchBoxFeature();
};

export const init = () => {
  if (validation) run();
};
