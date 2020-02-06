import React from 'react';
import ReactDOM from 'react-dom';
import SerchBar from '../components/SearchBox';
import { getCourse, deleteById } from '../usecase';

import { appendBefore } from '../common/dom-utils';
import { isHome } from '../common/page-detect';

export const init = () => {
  if (isHome()) run();
};

const run = () => {
  const courses = getCourse;

  deleteById('#coursememo');

  // 検索ボックス
  const react = document.createElement('div');
  appendBefore('.my-course', 'div', react);
  ReactDOM.render(<SerchBar placeholder="科目検索" items={courses} />, react);
};
