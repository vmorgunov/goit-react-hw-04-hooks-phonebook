import React from 'react';
import { Label, Input } from './Filter.styled';

const Filter = ({ filter, onChange }) => {
  return (
    <Label>
      Filter contacts by name{' '}
      <Input type="text" value={filter} onChange={onChange} />
    </Label>
  );
};

export default Filter;
