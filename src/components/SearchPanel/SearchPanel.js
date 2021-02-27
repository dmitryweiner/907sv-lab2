import React, { useState } from 'react';

export default function SearchPanel({ filter }) {
  const [search, setSearch] = useState('');
  return (
    <form
      action=""
      onSubmit={e => {
        e.preventDefault();
        filter({ name: 'updateSearch', value: search });
      }}
    >
      <input type="text" value={search} onChange={e => setSearch(e.target.value)} />
      <button type="submit">Search</button>
    </form>
  );
}
