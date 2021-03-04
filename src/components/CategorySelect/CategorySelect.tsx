import React, { useState } from 'react';
import { IFilterValues } from '../../store';

export interface UpdateCategoryArguments {
  name: string;
  value: string;
}

interface CategorySelectProps {
  filterValues: typeof IFilterValues;
  updateCategory: (args: UpdateCategoryArguments) => void;
}

export const CategorySelect: React.FC<CategorySelectProps> = ({ filterValues, updateCategory }) => {
  console.log(filterValues);
  const [filter, setFilter] = useState('all');
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
      {Object.keys(filterValues).map((filterItem, index) => {
        if (isNaN(Number(filterItem))) {
          return (
            <option data-testid="category-option" key={index} value={filterItem}>
              {filterItem}
            </option>
          );
        }
        return false;
      })}
    </select>
  );
};
