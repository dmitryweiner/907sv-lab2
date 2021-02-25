import React, { useState } from 'react';

export default function Form({ handleSubmit }) {
  const [field, setField] = useState('');
  function handleSubmitInner(e) {
    e.preventDefault();
    handleSubmit({ field });
  }
  return (
    <form data-testid="form" onSubmit={handleSubmitInner}>
      <input data-testid="input" value={field} onChange={e => setField(e.target.value)} />
      <button type="submit">Добавить</button>
    </form>
  );
}
