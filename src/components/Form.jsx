import React, { useState } from 'react';

export default function Form({ handleSubmit }) {
  const [value, setValue] = useState('');

  function handleSubmitInner(e) {
    e.preventDefault();
    handleSubmit(value);
    setValue('');
  }
  return (
    <form data-testid="form" onSubmit={handleSubmitInner}>
      <input data-testid="input" value={value} onChange={e => setValue(e.target.value)} />
      <button type="submit">Save</button>
    </form>
  );
}
