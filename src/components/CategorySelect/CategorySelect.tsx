import React, { useState } from 'react';
import { IFilterValues } from '../../store';

export interface UpdateCategoryArguments {
  name: string;
  value: string;
}

interface CategorySelectProps {
  filterValues: IFilterValues;
  updateCategory: (args: UpdateCategoryArguments) => void;
}

export const CategorySelect = ({ filterValues, updateCategory }: CategorySelectProps) => {
  const [filter, setFilter] = useState(filterValues[0]);
  return (
    <select
      data-testid="select"
      name="select"
      value={filter}
      onChange={e => {
        setFilter(e.target.value);
        updateCategory({ name: 'updateCategory', value: e.target.value });
      }}
    >
      {filterValues.map((filterItem, index) => (
        <option data-testid="category-option" key={index} value={filterItem}>
          {filterItem}
        </option>
      ))}
    </select>
  );
};
