import React, { useState } from 'react';

export default function Form({ handleSubmit }) {
  const [field, setField] = useState('');

  function handleSubmitInner(e) {
    e.preventDefault();
    if (field === '') return;
    handleSubmit({ field });
    setField('');
  }

  return (
    <form data-testid="form" onSubmit={handleSubmitInner}>
      <input data-testid="input" value={field} onChange={e => setField(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}
