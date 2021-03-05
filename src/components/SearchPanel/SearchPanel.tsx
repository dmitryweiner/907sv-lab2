import React, { useState } from 'react';

export interface FilterArguments {
  name: string;
  value: string;
}

interface SearchPanelProps {
  filter: (action: FilterArguments) => void;
}

export const SearchPanel = ({ filter }: SearchPanelProps) => {
  const [search, setSearch] = useState('');
  return (
    <form
      action=""
      onSubmit={e => {
        e.preventDefault();
        filter({ name: 'updateSearch', value: search });
      }}
    >
      <input
        data-testid="search-input"
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <button data-testid="search-button" type="submit">
        Search
      </button>
    </form>
  );
};
