import React from 'react';
import { useState } from 'react';

export default function Form({ handleSubmit }) {
  const [field, setField] = useState('');

  function handleSubmitInner(e) {
    e.preventDefault();
    handleSubmit({ field });
    setField('');
  }

  return (
    <>
      <form data-testid="form" onSubmit={handleSubmitInner}>
        <input data-testid="input" value={field} onChange={e => setField(e.target.value)} />
        <button data-testid="button" type="submit">
          Добавить
        </button>
      </form>
    </>
  );
}
