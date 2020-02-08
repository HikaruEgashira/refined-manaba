import { validation } from './validation';

import SearchBoxFeature from './SearchBox';
import DelUnusedComponentsFeature from './delUnusedComponents';

const run = () => {
  DelUnusedComponentsFeature();
  SearchBoxFeature();
};

export const init = () => {
  if (validation) run();
};
