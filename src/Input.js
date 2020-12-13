import React from 'react';

export function Input({
  label = '',
  onChange = () => {},
  value = '',
  placeholder = '',
}) {
  return (
    <div>
      <label>{label}</label>
      <br />
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}
