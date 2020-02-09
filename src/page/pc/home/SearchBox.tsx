import React from 'react';
import ReactDOM from 'react-dom';
import { Autocomplete, TextInput, Pane } from 'evergreen-ui';
import { gotoCourse, getCourse } from '../../../usecase';
import { appendBefore } from '../../../common/dom-utils';

type Props = {
  children?: string;
  placeholder: string;
};

const Searchbox: React.FC<Props> = reactProps => {
  const items = getCourse;

  return (
    <Pane paddingTop={16} paddingBottom={12}>
      <Autocomplete
        items={items.map(i => i.name)}
        onChange={(changedItem: string) => gotoCourse(items, changedItem)}
      >
        {props => {
          const { getInputProps, getRef, inputValue, openMenu } = props;
          return (
            <TextInput
              placeholder={reactProps.placeholder}
              value={inputValue}
              innerRef={getRef}
              onFocus={openMenu}
              {...getInputProps()}
            />
          );
        }}
      </Autocomplete>
    </Pane>
  );
};

export default () => {
  const react = document.createElement('div');
  appendBefore('.contentbody-left', 'div', react);
  ReactDOM.render(<Searchbox placeholder="科目検索" />, react);
};
