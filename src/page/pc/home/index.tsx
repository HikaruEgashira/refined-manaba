import React from 'react';
import ReactDOM from 'react-dom';
import SerchBar from './SearchBox';
import { getCourse, deleteDom, isHome } from '../../../usecase';

import { appendBefore } from '../../../common/dom-utils';

const run = () => {
  const courses = getCourse;

  deleteDom('#coursememo');

  // 検索ボックス
  const react = document.createElement('div');
  appendBefore('.my-course', 'div', react);
  ReactDOM.render(<SerchBar placeholder="科目検索" items={courses} />, react);
};

const validLocation = isHome();

export const init = () => {
  if (validLocation) run();
};
