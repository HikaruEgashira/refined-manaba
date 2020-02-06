import select from 'select-dom';

import * as Home from './page/home';
import * as Common from './page/common';

Common.init();
Home.init();

// Add global for easier debugging
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(window as any).select = select;
