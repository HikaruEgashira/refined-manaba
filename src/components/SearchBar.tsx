import React from 'react';
import { Autocomplete, TextInput, Pane } from 'evergreen-ui';

type Props = {
  children?: string;
  items: string[];
  placeholder: string;
};

const Searchbox: React.FC<Props> = reactProps => {
  return (
    <Pane padding={16}>
      <Autocomplete
        onChange={changedItem => console.log(changedItem)}
        items={reactProps.items}
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
