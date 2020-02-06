import React from 'react';
import { Autocomplete, TextInput, Pane } from 'evergreen-ui';
import { gotoCourse } from '../usecase';

type Props = {
  children?: string;
  items: { name: string; href: string }[];
  placeholder: string;
};

const Searchbox: React.FC<Props> = reactProps => {
  return (
    <Pane padding={16}>
      <Autocomplete
        onChange={(changedItem: string) =>
          gotoCourse(reactProps.items, changedItem)
        }
        items={reactProps.items.map(i => i.name)}
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

export default Searchbox;
