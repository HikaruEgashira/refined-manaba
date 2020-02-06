import select from 'select-dom';

import { isHome } from './common/page-detect';
import * as Home from './page/home';
import * as Common from './page/common';

Common.run();

if (isHome()) {
  Home.run();
}

// Add global for easier debugging
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(window as any).select = select;
