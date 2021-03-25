import React from 'react';

export default function Form({ handleSubmit }) {
  const [value, setValue] = React.useState('');
  function submitHandler(e) {
    e.preventDefault();
    handleSubmit(value);
    setValue('');
  }

  return (
    <form data-testid="form" onSubmit={submitHandler}>
      <input data-testid="input" value={value} onChange={e => setValue(e.target.value)} />
      <button type="submit">Save</button>
    </form>
  );
}
