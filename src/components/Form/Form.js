import React from 'react';

function Form({ addHandler }) {
  const [inputValue, setInputValue] = React.useState('');
  function emptinessCheck() {
    console.log('emptinessCheck', inputValue);
    if (inputValue === '') {
      alert('Enter something first (￢_￢;)');
    } else {
      setInputValue('');
      return addHandler(inputValue);
    }
  }
  return (
    <div className="FormWrapper">
      <input
        type="text"
        placeholder="Enter a deed"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <button data-testid="I'm addButton" onClick={emptinessCheck}>
        Add a deed
      </button>
    </div>
  );
}

export default Form;
