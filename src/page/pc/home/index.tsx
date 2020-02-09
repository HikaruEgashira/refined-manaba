import { validation } from './validation';

import SearchBoxFeature from './SearchBox';
import DelUnusedComponentsFeature from './delUnusedComponents';
import styleFeature from './style';

const run = () => {
  DelUnusedComponentsFeature();
  SearchBoxFeature();
  styleFeature();
};

export const init = () => {
  if (validation) run();
};
