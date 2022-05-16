import React, { useState } from 'react';
import '../index.css';

function TextInput({ type = 'text', label, name }) {
  const [value, setValue] = useState('');

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className="input-container">
      <input type={type} value={value} name={name} onChange={handleChange} />
      <label className={value && 'filled'} htmlFor={name}>
        {label}
      </label>
    </div>
  );
}

export default TextInput;
