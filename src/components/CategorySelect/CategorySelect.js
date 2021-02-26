import React, { useState } from 'react';

export default function CategorySelect({ filterValues }) {
  const [filter, setFilter] = useState('all');
  return (
    <select
      name="select"
      value={filter}
      onChange={e => {
        setFilter(e.target.value);
      }}
    >
      {Object.values(filterValues).map((filterItem, index) => (
        <option key={index} value={filterItem}>
          {filterItem}
        </option>
      ))}
    </select>
  );
}
